<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <b-link class="nav-brand" to="/">
        <h4>DASH-IT</h4>
      </b-link>
      <SidebarToggler class="d-md-down-none" display="lg" />
      <b-form-select class="header-select" v-model="selectedPlatform" @change="platformChange"  :options="platformOptions"></b-form-select>
      <b-form-select class="header-select" v-if="selectedPlatform !== 'platform-select'" v-model="selectedCourse" :options="courseOptions"></b-form-select>
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
        <TopbarNav :navItems="top_nav[level]"></TopbarNav>
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
    BackButton
  },
  data() {
    return {
      apiStatus: "Connecting...",
      isPrimary: false,
      level: 0,
      top_nav: [],
      home_nav: [
        {
          name: "Home",
          icon: "cui-home",
          url: "/home"
        }
      ],
      platforms: settings.platforms,
      bottom_nav: nav.bottom_items,
      testCount: 5,
      platformOptions: [],
      selectedPlatform: "platform-select",
      courseOptions: [],
      selectedCourse: "course-select",
      courses: {
        coursera: [{ name: "Coursera course 1" }, { name: "Coursera course 2" }]
      }
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
      { value: "platform-select", text: "Select platform" }
    ];
    this.initializeCourses();

    for (var platform of this.platforms) {
      this.home_nav.push({
        name: platform.name,
        url: platform.url || "/" + platform.name.toLowerCase(),
        icon: "cui-dashboard"
      });
      this.platformOptions.push({
        value: "/" + platform.name.toLowerCase(),
        text: platform.name
      });
    }
    this.top_nav[0] = this.home_nav;
    this.top_nav[1] = [];
    this.top_nav[2] = [
      { name: "Videos" },
      { name: "Quizzes" },
      { name: "Assignments" }
    ];
    if (this.$route.path) {
      this.setNavigation(this.$route.path);
    }

    // On every router change update
    if (this.$router) {
      this.$router.beforeEach((to, from, next) => {
        this.setNavigation(to.path);
        next();
      });
    }
  },
  computed: {
    list() {
      return this.$route.matched.filter(
        route => route.meta.label || route.name
      );
    }
  },
  methods: {
    goUp: function() {
      this.level--;
    },
    setNavigation: function(path) {
      if (path === "/home" || path === "/settings" || path === "/contact") {
        this.level = 0;
        this.selectedPlatform = "platform-select";
      } else if (path.split("/").length - 1 === 1) {
        // Course overview level
        this.selectedPlatform = "/coursera";
        this.level = path.split("/").length - 1;
        this.initializeCourses();
        this.setCourses(this.courses.coursera);
        this.top_nav[1] = [];
        for (var course of this.courses.coursera) {
          this.top_nav[1].push({
            name: course.name,
            url: path + "/" + course.name.replace(/\s+/g, "-").toLowerCase(),
            icon: "cui-dashboard"
          });
        }
      } else if (path.split("/").length - 1 === 2) {
        // Course level
        this.top_nav[2] = [
          {
            name: "Videos",
            url: path + "/videos",
            icon: "fa fa-video-camera"
          },
          { name: "Quizzes", url: path + "/quizzes", icon: "cui-check" },
          {
            name: "Assignments",
            url: path + "/assignments",
            icon: "cui-calendar"
          }
        ];
        this.level = path.split("/").length - 1;
      } else {
        this.level = path.split("/").length - 1;
      }
    },
    platformChange(evt) {
      if (evt !== "platform-select") {
        this.$router.push(evt);
        // Update course dropdown
      }
    },
    initializeCourses: function() {
      this.courseOptions = [
        {
          value: "course-select",
          text: "Select course"
        }
      ];
    },
    setCourses(c) {
      for (var course of c) {
        this.courseOptions.push({
          value: "/" + course.name.replace(" ", "-"),
          text: course.name
        });
      }
    }
  }
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

