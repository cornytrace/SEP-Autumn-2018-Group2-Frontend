<template>
  <div class="app sidebar-hidden">
    <AppHeader fixed>
      <b-link to="/admin" class="navbar-brand">
        <h4>Admin dashboard</h4>
      </b-link>
      <b-navbar-nav>
      <router-link to="register"><b-button><i class="fa fa-plus"></i>Add user</b-button></router-link>
      <b-button @click="doLogout"><i class="fa fa-sign-out"></i>Logout</b-button>
      </b-navbar-nav>
    </AppHeader>
    <div class="app-body">
      <main class="main">
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { Header as AppHeader } from "@coreui/vue";
export default {
  name: "AdminPanel",
  components: {
    AppHeader,
  },
  methods: {
    doLogout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/pages/login");
      });
    },
  },
};
</script>

<style>
.navbar {
  padding-left: 20px;
  padding-right: 20px;
}

button {
  margin-right: 10px;
}

button i {
  margin-right: 10px;
}
</style>