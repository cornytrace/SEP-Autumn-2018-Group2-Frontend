<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form>
                  <h1>Reset Password</h1>
                  <p class="text-muted">Reset your password</p>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="password" v-model="password" class="form-control" placeholder="Password" autocomplete="current-password"/>
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="password" v-model="passwordCheck" class="form-control" placeholder="Password (repeat)" autocomplete="current-password" @keyup.native.enter="doReset"/>
                  </b-input-group>
                  <b-alert id="alertbox" variant="danger"
                  dismissible :show="showAlert" @dismissed="showAlert=false">
                    Reset failed: {{errorReason}}.
                  </b-alert>
                  <b-alert id="successbox" variant="success"
                  dismissible :show="showSuccess" @dismissed="showSuccess=false">
                    Reset success.
                  </b-alert>
                  <b-row>
                    <b-col cols="6">
                      <b-button variant="primary" id="resetbutton" class="px-4" @click="doReset">Reset</b-button>
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

export default {
  name: "ResetPassword",
  data: function() {
    return {
      password: "",
      passwordCheck: "",
      errorReason: "",
      showAlert: false,
      showSuccess: false,
    };
  },
  methods: {
    doReset: function() {
      if (this.checkPassword()) {
        util
          .resetPassword(this.$store.state.resetId, {
            password: this.password,
            token: this.$store.state.resetToken,
          })
          .then(response => {
            this.showAlert = false;
            this.showSuccess = true;
          })
          .catch(error => {
            this.errorReason = error;
            this.showAlert = true;
          });
      }
    },
    checkPassword() {
      if (this.password === this.passwordCheck) {
        return true;
      }
      if (this.$store.state.resetToken === "") {
        this.errorReason = "No valid token";
        this.showAlert = true;
        return false;
      }
      this.errorReason = "Please enter two identical passwords.";
      this.showAlert = true;
      return false;
    },
  },
};
</script>

