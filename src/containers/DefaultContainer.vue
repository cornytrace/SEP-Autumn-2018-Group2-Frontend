<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <b-link class="navbar-brand" to="/">
        <h4>EIT Dashboard</h4>
      </b-link>
      <SidebarToggler class="d-md-down-none" display="lg" />
      <b-dropdown id="ddown1" text="Coursera" class="m-md-2">
        <b-dropdown-item>Coursera</b-dropdown-item>
        <b-dropdown-item>Other Platform</b-dropdown-item>
      </b-dropdown>
      <b-dropdown id="ddown1" text="course-1" class="m-md-2">
        <b-dropdown-item>course-1</b-dropdown-item>
        <b-dropdown-item>course-2</b-dropdown-item>
      </b-dropdown>
      <b-navbar-nav class="ml-auto">
        <DefaultHeaderDropdownAccnt/>
      </b-navbar-nav>
      <NotificationToggler :notificationCount=testCount class="d-none d-lg-block" />
      <!--<AsideToggler class="d-lg-none" mobile />-->
    </AppHeader>
    <div class="app-body">
      <AppSidebar fixed>
        <SidebarHeader/>
        <SidebarForm/>
        <SidebarNav :navItems="nav"></SidebarNav>
        <SidebarFooter/>
        <SidebarMinimizer/>
      </AppSidebar>
      <main class="main">
        <Breadcrumb :list="list" />
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <AppAside fixed>
        <!--aside-->
        <DefaultAside/>
      </AppAside>
    </div>
    <!-- <TheFooter>
          
        </TheFooter> -->
  </div>
</template>

<script>
import nav from "@/_nav";
import {
  Header as AppHeader,
  SidebarToggler,
  Sidebar as AppSidebar,
  SidebarFooter,
  SidebarForm,
  SidebarHeader,
  SidebarMinimizer,
  SidebarNav,
  Aside as AppAside,
  AsideToggler,
  Footer as TheFooter,
  Breadcrumb,
} from "@coreui/vue";
import DefaultAside from "./DefaultAside";
import DefaultHeaderDropdownAccnt from "./DefaultHeaderDropdownAccnt";
import NotificationToggler from "../views/buttons/NotificationToggler";

export default {
  name: "full",
  components: {
    AsideToggler,
    AppHeader,
    AppSidebar,
    AppAside,
    TheFooter,
    Breadcrumb,
    DefaultAside,
    DefaultHeaderDropdownAccnt,
    SidebarForm,
    SidebarFooter,
    SidebarToggler,
    SidebarHeader,
    SidebarNav,
    SidebarMinimizer,
    NotificationToggler,
  },
  data() {
    return {
      nav: nav.items,
      testCount: 5,
    };
  },
  beforeMount() {
    this.testCount = 2;
  },
  computed: {
    name() {
      return this.$route.name;
    },
    list() {
      return this.$route.matched.filter(
        route => route.meta.label || route.name
      );
    },
  },
};
</script>
