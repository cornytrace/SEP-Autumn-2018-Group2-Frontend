<template>
  <div class="app sidebar-hidden">
    <AppHeader fixed>
      <b-link to="/admin" class="navbar-brand">
        <h4>Admin dashboard</h4>
      </b-link>
      <router-link to="register"><b-button>Add user</b-button></router-link>
      <b-button @click="doLogout">Logout</b-button>
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
</style>