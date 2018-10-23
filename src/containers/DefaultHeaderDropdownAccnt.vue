<!--
 This contains the dropdown menu which is opened when you click on the user icon in the top right.
-->
<template>
  <AppHeaderDropdown right no-caret>
    <template slot="header">
      <i class="icon-user"></i>
    </template>
    <template slot="dropdown">
      <b-dropdown-header tag="div" class="text-center">
        <strong>Account</strong>
      </b-dropdown-header>
      <b-dropdown-item :disabled=true>{{ email }}</b-dropdown-item>
      <b-dropdown-item @click="doSettings">
        <i class="fa fa-wrench" /> Settings</b-dropdown-item>
      <!-- Example divider -->
      <!-- <b-dropdown-divider /> -->
      <b-dropdown-item @click="doLogout">
        <i class="fa fa-lock" /> Logout</b-dropdown-item>
    </template>
  </AppHeaderDropdown>
</template>

<script>
import { HeaderDropdown as AppHeaderDropdown } from "@coreui/vue";
export default {
  name: "DefaultHeaderDropdownAccnt",
  components: {
    AppHeaderDropdown,
  },
  data: () => {
    return {
      itemsCount: 42,
      email: "",
    };
  },
  beforeMount() {
    this.email = this.$store.state.user.email;
  },
  methods: {
    doLogout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/pages/login");
      });
    },
    doSettings() {
      this.$router.push("/settings");
    },
  },
};
</script>
