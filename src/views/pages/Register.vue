<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6" sm="8">
          <b-card no-body class="mx-4">
            <b-card-body class="p-4">
              <b-form>
                <h1>Register</h1>
                <p class="text-muted">Create a user account</p>
              
                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text>@</b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input v-model="email" type="text" class="form-control" placeholder="Email" autocomplete="email" />
                </b-input-group>

                <b-button @click="doRegister" id="registerbutton" variant="success" block>Create Account</b-button>
              </b-form>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data: function() {
    return {
      username: "",
      email: "",
    };
  },
  methods: {
    doRegister() {
      console.log("register" + this.email);
      this.$router.push("/admin");
    },
  },
};
</script>
