<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form>
                  <h1>Forgot password</h1>
                  <p class="text-muted">Enter email address and you will receive a password reset link.</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend>
                      <b-input-group-text>@</b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input type="text" class="form-control" v-model="email" placeholder="Email" autocomplete="username email" />
                  </b-input-group>
                  <b-alert id="errorAlert" variant="danger" dismissible :show="showAlert" @dismissed="showAlert=false">
                    Password reset failed: {{errorReason}}.
                  </b-alert>
                  <b-row>
                    <b-col cols="6">
                      <b-button variant="primary" id="submitbutton" class="px-4" @click="doSubmit">Submit</b-button>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import util from "@/util";
import strings from "@/strings";

export default {
  name: "ForgotPassword",
  data: function() {
    return {
      email: "",
      showAlert: false,
      errorReason: "",
    };
  },
  methods: {
    doSubmit() {
      if (util.validEmail(this.email)) {
        util
          .sendPasswordReset(this.email)
          .then(() => {
            this.$router.push("/pages/login");
          })
          .catch(error => {
            if (this.isValidJSONString(error)) {
              this.errorReason = "";
              for (var err in error.response.data) {
                this.errorReason += error.response.data[err][0] + "\n";
              }
              this.showAlert = true;
            } else {
              this.errorReason = strings.error_server;
              this.showAlert = true;
            }
          });
      } else {
        this.showAlert = true;
        this.errorReason = strings.error_wrong_email;
      }
    },
    isValidJSONString(str) {
      try {
        JSON.parse(str);
      } catch (e) {
        return false;
      }
      return true;
    },
  },
};
</script>
