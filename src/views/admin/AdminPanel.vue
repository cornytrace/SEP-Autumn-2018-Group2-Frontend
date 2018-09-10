<template>
  <div class="app sidebar-hidden">
    <AppHeader fixed>
      <b-link to="/admin" class="navbar-brand">
        <h4>Admin dashboard</h4>
      </b-link>
      <b-form-select class="header-select" v-model="selectedUser" :options="users"></b-form-select>
      <router-link to="register"><b-button>Add user</b-button></router-link>
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
import { Header as AppHeader, } from "@coreui/vue";
export default {
  name: "full",
  components: {
    AppHeader,
  },
  data() {
    return {
      selectedUser: "user-select",
      users: [
        { value: "user-select", text: "Select user", },
        { value: "user1", text: "User 1", },
        { value: "user2", text: "User 2", },
        { value: "user3", text: "User 3", },
      ],
    };
  },
};
</script>

<style>
.navbar {
  padding-left: 20px;
  padding-right: 20px;
}
</style>