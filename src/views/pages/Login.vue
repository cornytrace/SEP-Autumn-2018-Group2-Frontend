<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <!-- Login form -->
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form>
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend>
                      <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input type="text" class="form-control" v-model="username" placeholder="Email" autocomplete="username email" />
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend>
                      <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input type="password" v-model="password" class="form-control" placeholder="Password" autocomplete="current-password" @keyup.native.enter="doLogin" />
                  </b-input-group>
                  <b-alert id="errorAlert" variant="danger" dismissible :show="showAlert" @dismissed="showAlert=false">
                    Login failed: {{errorReason}}.
                  </b-alert>
                  <b-row>
                    <b-col cols="6">
                      <b-button variant="primary" id="loginbutton" class="px-4" @click="doLogin">Login</b-button>
                    </b-col>
                    <b-col cols="6" class="text-right">
                      <b-button @click="forgotPassword" variant="link" class="px-0">Forgot password?</b-button>
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
  name: "Login",
  methods: {
    // Login function
    doLogin() {
      // If there is no username or password show error.
      if (this.username == "" || this.password == "") {
        this.errorReason = strings.error_username_password;
        this.showAlert = true;
        return;
      }

      // Uses the store to store credentials.
      this.$store
        .dispatch("login", { username: this.username, password: this.password, })
        // login successful
        .then(() => {
          util
            .getUser()
            .then(response => {
              this.$store.commit("setUser", response.data);
              // If admin user redirect to admin home.
              if (response.data.role == "admin") {
                this.$router.push("/admin");
              }
              // If we have a redirect query, redirect to it, else redirect to home.
              else if (
                this.$route.query &&
                this.$route.query.redirect !== undefined
              ) {
                this.$router.push(this.$route.query.redirect);
              } else {
                this.$router.push("/");
              }
            })
            // If login not succesful, show error.
            .catch(() => {
              this.errorReason = strings.error_server;
              this.showAlert = true;
            });
        })
        .catch(response => {
          // username or password is wrong
          if (response.response && response.response.status == 401) {
            this.errorReason = strings.error_username_password;
            this.showAlert = true;
          } else {
            this.errorReason = strings.error_server;
            this.showAlert = true;
          }
        });
    },
    forgotPassword() {
      this.$router.push("/pages/forgotpassword");
    },
  },
  data: function() {
    return {
      username: "",
      password: "",
      showAlert: false,
      errorReason: "",
    };
  },
};
</script>
