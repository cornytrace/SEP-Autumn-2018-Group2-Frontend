<template>
      <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <b-link class="navbar-brand">
        <h4>Admin dashboard</h4>
      </b-link>
      <b-form-select class="header-select" v-model="selectedUser" :options="users"></b-form-select>
    </AppHeader>
    <div class="app-body">
      <main class="main">
        <div class="container-fluid">
          <div class="admin-content"></div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { Header as AppHeader, SidebarToggler, } from "@coreui/vue";
export default {
  name: "full",
  components: {
    AppHeader,
    SidebarToggler,
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
