<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form>
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="text" class="form-control" v-model="username" placeholder="Email" autocomplete="username email" />
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="password" v-model="password" class="form-control" placeholder="Password" autocomplete="current-password" @keyup.native.enter="doLogin"/>
                  </b-input-group>
                  <b-alert variant="danger"
                      dismissible
                      :show="showAlert"
                      @dismissed="showAlert=false">
                    Login failed: {{errorReason}}.
                  </b-alert>
                  <b-row>
                    <b-col cols="6">
                      <b-button variant="primary" id="loginbutton" class="px-4" @click="doLogin">Login</b-button>
                    </b-col>
                    <b-col cols="6" class="text-right">
                      <b-button variant="link" class="px-0">Forgot password?</b-button>
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
export default {
  name: "Login",
  methods: {
    doLogin() {
      if (this.username == "test") {
        this.$store.commit("setToken", "INVALID_TOKEN");
        this.$store.commit("setExpire", Date.now() + 1 * 60 * 60 * 1000);
        this.$router.push("/");
      }

      if (this.username == "" || this.password == "") {
        this.errorReason = "please enter a valid username or password";
        this.showAlert = true;
        return;
      }

      this.$store
        .dispatch("login", { username: this.username, password: this.password, })
        // login successful
        .then(() => {
          // if we have a redirect query, redirect to it, else redirect to home
          if (this.$route.query.redirect !== undefined) {
            this.$router.push(this.$route.query.redirect);
          } else if (this.username == "admin") {
            this.$router.push("/admin");
          } else {
            this.$router.push("/");
          }
        })
        .catch(response => {
          // username or password is wrong
          if (response.response && response.response.status == 401) {
            this.errorReason = "check username and password";
            this.showAlert = true;
          } else {
            this.errorReason = "a server error has occurred, please try again";
            this.showAlert = true;
            console.log("login failed!");
            console.dir(response);
          }
        });
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
