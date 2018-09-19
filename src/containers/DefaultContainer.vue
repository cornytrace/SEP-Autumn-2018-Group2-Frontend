<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <b-link class="nav-brand logo-link" to="/">
        <!-- <h4>DASH-IT</h4> -->
        <img src="../../public/img/logo.svg" alt="Logo" class="logo-style">
      </b-link>
      <SidebarToggler class="d-md-down-none" display="lg" />
      <b-form-select class="header-select" v-model="selectedPlatform" @change="platformChange"  :options="platformOptions"></b-form-select>
      <b-form-select class="header-select" v-if="selectedPlatform !== 'platform-select'" @change="courseChange" v-model="selectedCourse" :options="courseOptions"></b-form-select>
      <b-navbar-nav class="custom-nav ml-auto">
        <DefaultHeaderDropdownAccnt/>
        <!-- <NotificationToggler :notificationCount=testCount class="d-none d-lg-block" /> -->
      </b-navbar-nav>
      <!--<AsideToggler class="d-lg-none" mobile />-->
    </AppHeader>
    <div class="app-body">
      <AppSidebar fixed>
        <SidebarHeader/>
        <SidebarForm/>
        <BackButton v-if="level > 0" :callback=goUp></BackButton>
        <TopbarNav :navItems="top_nav[level]" :clickCallback=sideButtonClick></TopbarNav>
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
      level: 0,
      top_nav: [],
      level_0: ["/home", "/settings", "/contact",],
      platforms: settings.platforms,
      bottom_nav: nav.bottom_items,
      testCount: 5,
      platformOptions: [],
      selectedPlatform: settings.platform_default,
      courseOptions: [],
      selectedCourse: settings.course_default,
      // Mock
      courses: {
        coursera: [
          { name: "Coursera course 1", description: "description course 1", },
          { name: "Coursera course 2", description: "description course 2", },
        ],
      },
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
    this.platformOptions = [
      { value: settings.platform_default, text: "Select platform", },
    ];

    this.setPlatforms();
    this.initializeCourses();

    this.setNavigation(this.$route.path);

    // On every router change update
    this.$router.beforeEach((to, from, next) => {
      this.setNavigation(to.path);
      next();
    });
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
      this.level--;
    },
    doDown: function() {
      this.level++;
    },
    // Update the navigation menus.
    setNavigation: function(path) {
      // Get level.
      this.level = this.getLevel(path);

      //Set dropdown menus to the correct value
      if (this.level >= 1) {
        this.selectedPlatform = "/" + path.split("/")[1];
        var split = path.split("/");
        this.setCourses(this.courses.coursera, this.selectedPlatform);
        this.selectedCourse = "/" + split[1] + "/" + split[2];
      }

      // Set navigation based on the level.
      if (this.level === 0) {
        // Home level
        this.selectedPlatform = settings.platform_default;
      } else if (this.level === 1) {
        // Course overview level.
        this.selectedCourse = settings.course_default;
        this.$store.commit("setCourses", this.courses.coursera);
      } else if (this.level === 2) {
        // Course level
        this.setSubPages(path);
      }
    },
    // Dropdown listeners
    platformChange(evt) {
      if (evt !== settings.platform_default) {
        this.$router.push(evt);
      }
    },
    courseChange(evt) {
      if (evt !== settings.course_default) {
        this.$router.push(evt);
      }
    },
    sideButtonClick(event) {
      this.setNavigation(event.srcElement.hash.substring(1));
    },
    // Helper functions
    getLevel(path) {
      if (this.level_0.indexOf(path) !== -1) {
        return 0;
      }
      return path.split("/").length - 1;
    },
    initializeCourses: function() {
      this.courseOptions = [
        {
          value: settings.course_default,
          text: "Select course",
        },
      ];
    },
    setPlatforms() {
      this.top_nav[0] = [];
      this.top_nav[0].push({
        name: "Home",
        icon: "cui-home",
        url: "/home",
      });
      for (var platform of this.platforms) {
        this.top_nav[0].push({
          name: platform.name,
          url: platform.url || "/" + util.toUrl(platform.name),
          icon: "cui-dashboard",
        });
        this.platformOptions.push({
          value: "/" + util.toUrl(platform.name),
          text: platform.name,
        });
      }
    },
    setCourses(c, platform) {
      this.courseOptions = [
        {
          value: settings.course_default,
          text: "Select course",
        },
      ];
      this.top_nav[1] = [];
      for (var course of c) {
        // Push to dropdown
        this.courseOptions.push({
          value: platform + "/" + util.toUrl(course.name),
          text: course.name,
        });
        // Push to navbar
        this.top_nav[1].push({
          name: course.name,
          url: platform + "/" + util.toUrl(course.name),
          icon: "cui-dashboard",
        });
      }
    },
    setSubPages(path) {
      this.top_nav[2] = [];
      for (var subpage of settings.course_pages) {
        this.top_nav[2].push({
          name: subpage.name,
          icon: subpage.icon,
          url: path + "/" + util.toUrl(subpage.name),
        });
      }
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
  margin-bottom: 20px;
}

.logo-link {
  margin-bottom: 0;
}

.logo-style {
  width: 100%;
  margin-bottom: 0;
  margin-left: 15px;
}
</style>

