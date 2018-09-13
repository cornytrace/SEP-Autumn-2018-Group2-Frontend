<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <b-link class="nav-brand" to="/">
        <h4>DASH-IT</h4>
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
        <BackButton :callback=goUp></BackButton>
        <TopbarNav :navItems="home_nav"></TopbarNav>
        <BottombarNav :navItems="bottom_nav"></BottombarNav>
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
    <TheFooter v-bind:class="{ 'bg-success' : isPrimary, 'bg-danger' : !isPrimary }">
           API Status: {{apiStatus}}
    </TheFooter>
  </div>
</template>

<script>
import nav from "@/nav";
import settings from "@/settings";
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
  Breadcrumb
} from "@coreui/vue";
import DefaultAside from "./DefaultAside";
import DefaultHeaderDropdownAccnt from "./DefaultHeaderDropdownAccnt";
import NotificationToggler from "../views/buttons/NotificationToggler";
import BottombarNav from "../views/sidebars/BottombarNav";
import TopbarNav from "../views/sidebars/TopbarNav";
import BackButton from "../views/sidebars/sidebaritems/BackButton";

import util from "@/util";

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
    BottombarNav,
    TopbarNav,
    BackButton,
  },
  data() {
    return {
      apiStatus: "Connecting...",
      isPrimary: false,
      home_nav: [
        {
          name: "Home",
          icon: "cui-home",
          url: "/home",
        },
      ],
      platforms: settings.platforms,
      bottom_nav: nav.bottom_items,
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
    util
      .testAuth()
      .then(() => {
        console.log("ok");
        this.apiStatus = "OK";
        this.isPrimary = true;
      })
      .catch(() => {
        this.apiStatus = "Connection Error";
      });
  },
  mounted() {
    for (var platform of this.platforms) {
      this.home_nav.push({
        name: platform.name,
        url: platform.url || "/" + platform.name.toLowerCase(),
        icon: "cui-dashboard",
      });
    }
  },
  computed: {
    list() {
      return this.$route.matched.filter(
        route => route.meta.label || route.name
      );
    },
  },
  methods: {
    goUp: function() {
      console.log("backbutton clicked");
    },
  },
};
</script>

<style>
.bottom-nav {
  flex-direction: column;
  justify-content: flex-end;
}
.nav-brand {
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 155px;
  height: 55px;
  padding: 0;
  margin-right: 0;
}
</style>

