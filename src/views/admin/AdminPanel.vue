<!--
 This is the main container for the administration panel.
 It contains the top bar and a router view containing the administration home page.
-->

<template>
  <div class="app sidebar-hidden">
    <AppHeader fixed>
      <b-link to="/admin" class="navbar-brand">
        <h4>Admin dashboard</h4>
      </b-link>
      <b-navbar-nav>
        <router-link to="register">
          <b-button><i class="fa fa-plus"></i>Add user</b-button>
        </router-link>
        <b-button @click="doLogout" id="logout-button"><i class="fa fa-sign-out"></i>Logout</b-button>
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

header button {
  margin-right: 10px;
}

button i {
  margin-right: 10px;
}
</style>