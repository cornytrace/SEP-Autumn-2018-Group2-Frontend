<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <b-link class="navbar-brand" to="/">
        <h4>EIT Dashboard</h4>
      </b-link>
      <SidebarToggler class="d-md-down-none" display="lg" />
      <b-form-select class="header-select" v-model="selectedPlatform" :options="platformOptions"></b-form-select>
      <b-form-select class="header-select" v-model="selectedCourse" :options="courseOptions"></b-form-select>
      <b-navbar-nav class="custom-nav ml-auto">
        <DefaultHeaderDropdownAccnt/>
        <NotificationToggler :notificationCount=testCount class="d-none d-lg-block" />
      </b-navbar-nav>
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
      selectedPlatform: "platform-select",
      platformOptions: [
        { value: "platform-select", text: "Select platform", },
        { value: "coursera", text: "Coursera", },
      ],
      selectedCourse: "course-select",
      courseOptions: [
        { value: "course-select", text: "Select course", },
        { value: "course1", text: "Course 1", },
        { value: "course2", text: "Course 2", },
      ],
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
