<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <b-link class="nav-brand logo-link" to="/">
        <!-- <h4>DASH-IT</h4> -->
        <img src="../../public/img/logo.svg" alt="Logo" class="logo-style">
      </b-link>
        <SidebarToggler class="d-md-down-none" display="lg" />
        <b-form-select class="header-select" id="platform-select" v-model="selectedPlatform" @change="platformChange" :options="platformOptions"></b-form-select>
        <b-form-select class="header-select" id="course-select" v-if="selectedPlatform !== 'platform-select'" @change="courseChange" v-model="selectedCourse" :options="courseOptions"></b-form-select>
        <b-navbar-nav class="custom-nav ml-auto">
          <DefaultHeaderDropdownAccnt />
          <!-- <NotificationToggler :notificationCount=testCount class="d-none d-lg-block" /> -->
        </b-navbar-nav>
        <!--<AsideToggler class="d-lg-none" mobile />-->
    </AppHeader>
    <div class="app-body">
      <AppSidebar fixed>
        <SidebarHeader />
        <SidebarForm />
        <BackButton v-if="level > 0" :callback=goUp></BackButton>
        <TopbarNav :navItems="top_nav[level]" :clickCallback=sideButtonClick></TopbarNav>
        <BottombarNav :navItems="bottom_nav"></BottombarNav>
        <SidebarFooter />
        <SidebarMinimizer />
      </AppSidebar>
      <main class="main">
        <b-breadcrumb :items="list" />
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <AppAside fixed>
        <!--aside-->
        <DefaultAside />
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
import strings from "@/strings";
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
      apiStatus: strings.connecting,
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
      selectedSubitem: "",
      // Mock
      courses: {
        coursera: [],
      },
    };
  },
  beforeMount() {
    for (var course of this.$store.state.user.courses) {
      this.courses.coursera.push({
        name: course.course_name,
        description: "",
        slug: course.course_slug,
      });
    }
    util
      .testAuth()
      .then(() => {
        this.apiStatus = strings.ok;
        this.isPrimary = true;
      })
      .catch(() => {
        this.apiStatus = strings.connection_error;
      });
  },
  mounted() {
    this.platformOptions = [
      { value: settings.platform_default, text: strings.select_platform, },
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
      var routes = [];
      var path = "";
      for (var subroute of this.$route.path.split("/")) {
        if (subroute !== strings.home) {
          path += subroute + "/";
          routes.push({
            text: subroute,
            to: path.substring(0, path.length - 1),
          });
        }
      }
      routes[0].text = strings.home;
      routes[0].to = "/";
      return routes;
    },
  },
  methods: {
    goUp: function() {
      this.level--;
    },
    goDown: function() {
      this.level++;
    },
    // Update the navigation menus.
    setNavigation: function(path) {
      // Get level.
      this.level = this.getLevel(path);
      var split = path.split("/");

      //Set dropdown menus to the correct value
      if (this.level >= 1) {
        this.selectedPlatform = split[1];
        this.setCourses(this.courses.coursera, this.selectedPlatform);
        this.selectedCourse = split[2];
        this.$store.commit("setSelectedPlatform", this.selectedPlatform);
        this.$store.commit("setSelectedCourse", this.selectedCourse);
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
        this.setCoursePages(path);
      } else if (this.level === 3) {
        // Set subitem
        this.selectedSubitem = split[3];
        if (this.selectedSubitem === "videos") {
          this.top_nav[3] = this.getVideos();
        } else if (this.selectedSubitem === "quizzes") {
          this.top_nav[3] = this.getQuizzes();
        }
      }
    },
    // Dropdown listeners
    platformChange(evt) {
      if (evt !== settings.platform_default) {
        this.$router.push("/" + evt);
      }
    },
    courseChange(evt) {
      if (evt !== settings.course_default) {
        this.$router.push("/" + this.selectedPlatform + "/" + evt);
      }
    },
    sideButtonClick(event) {
      this.setNavigation(event.srcElement.hash.substring(1));
    },
    // Get the level with a max of 3.
    getLevel(path) {
      if (this.level_0.indexOf(path) !== -1) {
        return 0;
      }
      var split = path.split("/");
      var level = split.length - 1;
      if (level >= settings.max_nav_level) {
        return settings.max_nav_level;
      }
      return level;
    },
    initializeCourses: function() {
      this.courseOptions = [
        {
          value: settings.course_default,
          text: strings.select_course,
        },
      ];
    },
    setPlatforms() {
      this.top_nav[0] = [];
      this.top_nav[0].push({
        name: strings.home,
        icon: "cui-home",
        url: "/home",
      });
      for (var platform of this.platforms) {
        this.top_nav[0].push({
          name: platform.name,
          url: platform.url || "/" + platform.slug,
          icon: "fa fa-line-chart",
        });
        this.platformOptions.push({
          value: platform.slug,
          text: platform.name,
        });
      }
    },
    setCourses(c) {
      this.courseOptions = [
        {
          value: settings.course_default,
          text: strings.select_course,
        },
      ];
      this.top_nav[1] = [];
      for (var course of c) {
        // Push to dropdown
        this.courseOptions.push({
          value: course.slug,
          text: course.name,
        });
        // Push to navbar
        this.top_nav[1].push({
          name: course.name,
          url: "/" + this.selectedPlatform + "/" + course.slug,
          icon: "fa fa-line-chart",
        });
      }
    },
    setCoursePages() {
      this.top_nav[2] = [];
      for (var coursepPage of settings.course_pages) {
        this.top_nav[2].push({
          name: coursepPage.name,
          icon: coursepPage.icon,
          url:
            "/" +
            this.selectedPlatform +
            "/" +
            this.selectedCourse +
            "/" +
            coursepPage.slug,
        });
      }
    },
    getVideos() {
      var videos = [];
      for (var video of settings.videos) {
        videos.push({
          name: video.name,
          url:
            "/" +
            this.selectedPlatform +
            "/" +
            this.selectedCourse +
            "/videos/" +
            video.id,
          icon: "fa fa-video-camera",
        });
      }
      return videos;
    },
    getQuizzes() {
      var quizzes = [];
      for (var quiz of settings.quizzes) {
        quizzes.push({
          name: quiz.name,
          url:
            "/" +
            this.selectedPlatform +
            "/" +
            this.selectedCourse +
            "/quizzes/" +
            quiz.id,
          icon: "fa fa-check",
        });
      }
      return quizzes;
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

#course-select {
  width: 20%;
}
</style>

