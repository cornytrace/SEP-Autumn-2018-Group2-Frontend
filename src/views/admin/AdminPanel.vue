<template>
  <div class="app sidebar-hidden">
    <AppHeader fixed>
      <b-link to="/admin" class="navbar-brand">
        <h4>Admin dashboard</h4>
      </b-link>
      <b-form-select class="header-select" v-model="selectedUser" text-field="email" value-field="pk" :options="users">
        <option :value="null">Select user</option>
      </b-form-select>
      <router-link to="register"><b-button>Add user</b-button></router-link>
    </AppHeader>
    <div class="app-body">
      <main class="main">
        <div class="container-fluid">
          <router-view v-bind:users="users" v-on:update:users="onUpdateUsers"></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { Header as AppHeader, } from "@coreui/vue";
import util from "@/util";
export default {
  name: "AdminPanel",
  components: {
    AppHeader,
  },
  data() {
    return {
      selectedUser: null,
      users: [],
    };
  },
  beforeMount() {
    util
      .getUsers()
      .then((response) => {
        this.users = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    onUpdateUsers: function (value) {
      this.users.push(value)
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