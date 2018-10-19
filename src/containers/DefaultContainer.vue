<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <b-link class="nav-brand logo-link" to="/">
        <!-- <h4>DASH-IT</h4> -->
        <img src="../../public/img/logo.png" alt="Logo" class="logo-style">
      </b-link>
      <SidebarToggler class="d-md-down-none" display="lg" />
      <b-form-select class="header-select" id="platform-select" v-model="selectedPlatform" @change="platformChange" :options="platformOptions"></b-form-select>
      <b-form-select class="header-select" id="course-select" v-if="selectedPlatform !== 'platform-select'" @change="courseChange" v-model="selectedCourse" :options="courseOptions"></b-form-select>
      <b-button id="filterButton" @click="showFilterModal=true"><i class="fa fa-filter mr-1" />Filters</b-button>
      <b-button :disabled="level<2" id="actions-button" @click="showActionsModal=true"><i class="fa fa-exchange mr-1" />Changes</b-button>
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

    <!-- FILTER MODAL -->
    <b-modal v-model="showFilterModal" id="filterModal" title="Filters" @ok="handleOk">
      <h3 id="first-title">Timespan</h3>
      <div class="timespan-area">
        <b-alert v-if=showAlert variant="danger" show>{{ dangerMessage }}</b-alert>
        <datepicker v-model="fromDate"></datepicker>
        <div id="spacer"></div>
        <datepicker v-model="toDate"></datepicker>
        <!-- <b-form-select disabled value-field="id" text-field="name" v-model="selectedCohort" :options=cohorts>
        </b-form-select> -->
      </div>
      <!-- <h3>Geography filter</h3>
      <multi-select optionsTitle="" selectedTitle="" v-model="selectedCountries" :options=countries tf="name" vf="id"></multi-select>
      <h3>Payment status filter</h3>
      <b-form-select v-model="selectedFilter" :options=filterOptions text-field="text" value-field="id">
      </b-form-select> -->
      <div slot="modal-footer" class="w-100">
        <b-button @click="resetTimeFilter" class="float-left" id="filter-reset-button" variant="danger">Reset filters</b-button>
        <b-btn @click="handleOk" class="float-right" id="filter-save-button" variant="primary">
          Save
        </b-btn>
        <b-btn @click="showFilterModal=false" class="float-right" id="filter-cancel-button" variant="secondary">
          Cancel
        </b-btn>
      </div>
    </b-modal>

    <!-- ACTIONS LIST MODAL -->
    <b-modal v-model="showActionsModal" id="actionsModal" @ok="handleOk">
      <div slot="modal-title" class="w-100">
        Changes
        <b-btn @click="showActionsModal=false; showAddActionModal=true" size="sm" class="float-right ml-3" id="add-action-button" variant="secondary">
          <i class="fa fa-plus mr-1" />Add action
        </b-btn>
      </div>

      <div v-if="!loadingActions">
        <b-list-group>
          <b-list-group-item v-for="action of actions" :key="action.name">
            {{ action.title }}
            <b-button id="action-delete-button" size="sm" @click="actionToDelete = action; showDeleteActionModal=true"><i class="fa fa-trash" /></b-button>
            <span class="action-date mr-2">{{ action.date }}</span>
          </b-list-group-item>
        </b-list-group>
      </div>

      <div v-if="loadingActions">
        <p class="loading-text">{{ loadingActionsText }}</p>
      </div>
      <div slot="modal-footer" class="w-100">
        <b-btn @click="showActionsModal=false" class="float-right" id="filter-cancel-button" variant="secondary">
          Back
        </b-btn>
      </div>
    </b-modal>

    <!-- ADD ACTION MODAL -->
    <b-modal v-model="showAddActionModal" id="addActionModal" @ok="handleOk">
      <div slot="modal-title" class="w-100">
        Add change
      </div>
      <b-form>
        <b-form-input id="action-title" class="mb-2" type="text" v-model="action.title" required placeholder="Title" />
        <b-form-textarea id="action-description" :rows="3" :max-rows="3" no-resize class="mb-2" type="text" v-model="action.description" required placeholder="Description" />
        <datepicker placeholder="Date" v-model="action.date"></datepicker>
      </b-form>
      <b-alert v-if=showAddActionAlert class="mt-2" variant="danger" show>{{ addActionWarning }}</b-alert>

      <div slot="modal-footer" class="w-100">
        <b-btn @click="saveAction" class="float-right" id="filter-save-button" variant="primary">
          Save
        </b-btn>
        <b-btn @click="showAddActionModal=false" class="float-right" id="filter-cancel-button" variant="secondary">
          Cancel
        </b-btn>
      </div>
    </b-modal>

    <!-- DELETE ACITON MODAL -->
    <b-modal v-model="showDeleteActionModal" id="deleteActionModal" @ok="handleOk">
      <div slot="modal-title" class="w-100">
        Delete change
      </div>
      Are you sure you want to delete <b>{{actionToDelete.title }}</b>?
      <div slot="modal-footer" class="w-100">
        <b-btn @click="deleteAction" class="float-right" id="delete-save-button" variant="danger">
          Yes
        </b-btn>
        <b-btn @click="showDeleteActionModal=false" class="float-right" id="delete-cancel-button" variant="secondary">
          No
        </b-btn>
      </div>
    </b-modal>
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
import MultiSelect from "@/components/MultiSelect";
import Datepicker from "vuejs-datepicker";

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
    MultiSelect,
    Datepicker,
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
      showFilterModal: false,
      showActionsModal: false,
      showAddActionModal: false,
      actions: [],
      loadingActions: false,
      loadingActionsText: strings.loading,

      showAddActionAlert: false,
      addActionWarning: "",
      action: {
        date: null,
        title: "",
        description: "",
      },
      actionToDelete: {},

      showDeleteActionModal: false,

      // Filters
      filters: {},
      dangerMessage: "From date not before to date!",
      showAlert: false,
      fromDate: null,
      toDate: null,
      currentCourse: {},
      courseOptions: [],
      selectedFilter: "no_filter",
      filterOptions: [
        {
          text: "No filter",
          id: "no_filter",
        },
        {
          text: "Has paid only",
          id: "has_paid",
        },
      ],
      cohorts: [{ name: "Cohorts not yet implemented", id: "no_cohort", },],
      selectedCohort: "no_cohort",

      countries: [{ name: "Netherlands", id: 1, }, { name: "Germany", id: 2, },],
      selectedCountries: [],
      selectedCourse: settings.course_default,
      selectedSubitem: "",
      // Mock
      courses: {
        coursera: [],
      },
    };
  },
  beforeMount() {
    if (this.$store.state.filters.from) {
      this.fromDate = new Date(Date.parse(this.$store.state.filters.from));
    }
    if (this.$store.state.filters.to) {
      this.toDate = new Date(Date.parse(this.$store.state.filters.to));
    }
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
        if (subroute !== strings.home && subroute !== "compare") {
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
    saveAction() {
      if (
        this.action.title !== "" &&
        this.action.date !== null &&
        this.currentCourse
      ) {
        this.action.date = this.action.date.toISOString().substring(0, 10);
        this.action.course = this.currentCourse.course_id;
        this.loadingActions = true;
        util.saveAction(this.action).then(response => {
          util
            .getActions(
              "coursera",
              this.currentCourse.course_id,
              this.$store.state.filters
            )
            .then(response => {
              this.actions = response.data;
              this.loadingActions = false;
            })
            .catch(err => {
              console.log(err);
              this.loadingActionsText = strings.connection_error;
            });
        });
        this.action = {
          date: null,
          title: "",
          description: "",
        };
        this.showAddActionModal = false;
        this.showActionsModal = true;
      } else {
        this.showAddActionAlert = true;
        this.addActionWarning =
          "Something went wrong, date and title are required!";
      }
    },
    deleteAction() {
      this.loadingActions = true;
      util.deleteAction(this.actionToDelete.pk).then(response => {
        util
          .getActions(
            "coursera",
            this.currentCourse.course_id,
            this.$store.state.filters
          )
          .then(response => {
            this.actions = response.data;
            this.loadingActions = false;
            this.showDeleteActionModal = false;
            this.showActionsModal = true;
          });
      });
    },
    resetTimeFilter() {
      this.fromDate = null;
      this.toDate = null;
    },
    getActions() {
      if (this.currentCourse) {
        util
          .getActions(
            "coursera",
            this.currentCourse.course_id,
            this.$store.state.filters
          )
          .then(response => {
            this.actions = response.data;
            this.loadingActions = false;
          })
          .catch(err => {
            console.log(err);
            this.loadingActionsText = strings.connection_error;
          });
      } else {
        this.loadingActionsText = strings.connection_error;
      }
    },
    handleOk() {
      if (
        this.fromDate !== null &&
        this.toDate !== null &&
        this.fromDate.getTime() > this.toDate.getTime()
      ) {
        this.showAlert = true;
      } else {
        this.setFilterData();
        this.showAlert = false;
        this.showFilterModal = false;
      }
    },
    setFilterData() {
      let filters = {};
      if (this.fromDate === null) {
        filters.from = null;
      } else {
        filters.from = this.fromDate.toISOString().substring(0, 10);
      }

      if (this.toDate === null) {
        filters.to = null;
      } else {
        filters.to = this.toDate.toISOString().substring(0, 10);
      }

      this.$store.commit("setFilters", filters);
    },
    goUp: function() {
      this.level--;
    },
    goDown: function() {
      this.level++;
    },
    // Update the navigation menus.
    setNavigation: function(path) {
      // Get level.
      this.loadingActions = true;
      this.level = this.getLevel(path);
      var split = path.split("/");

      //Set dropdown menus to the correct value
      if (this.level >= 1) {
        this.selectedPlatform = split[1];
        this.setCourses(this.courses.coursera, this.selectedPlatform);
        this.selectedCourse = split[2];
        this.$store.commit("setSelectedPlatform", this.selectedPlatform);
      }
      if (this.level >= 2) {
        this.currentCourse = this.$store.state.user.courses.find(
          x => x.course_slug === this.selectedCourse
        );
        this.$store.commit("setSelectedCourse", this.selectedCourse);
        this.getActions();
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
          this.getVideos();
        } else if (this.selectedSubitem === "quizzes") {
          this.getQuizzes();
        } else {
          this.level = 1;
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
      util
        .getVideos(this.currentCourse.course_id, this.$store.state.filters)
        .then(response => {
          this.top_nav[3] = [];
          for (var video of response.data) {
            this.top_nav[3].push({
              name: video.name,
              url:
                "/" +
                this.selectedPlatform +
                "/" +
                this.selectedCourse +
                "/videos/" +
                video.item_id,
              icon: "fa fa-video-camera",
            });
            this.$forceUpdate();
          }
        })
        .catch(err => {
          this.top_nav[3] = [];
          console.log(err);
        });
    },
    getQuizzes() {
      util
        .getQuizzes(this.currentCourse.course_id)
        .then(response => {
          this.top_nav[3] = [];
          for (var quiz of response.data) {
            this.top_nav[3].push({
              name: quiz.name,
              url:
                "/" +
                this.selectedPlatform +
                "/" +
                this.selectedCourse +
                "/quizzes/" +
                quiz.base_id +
                "-" +
                quiz.version,
              icon: "fa fa-check   ",
            });
            this.$forceUpdate();
          }
        })
        .catch(err => {
          this.top_nav[3] = [];
          console.log(err);
        });
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
  margin-bottom: 0;
  margin-left: 15px;
  max-width: 100%;
  max-height: 100%;
}

#course-select {
  width: 20%;
}

.modal-body h3 {
  margin-top: 30px;
  font-size: 1.2rem;
  color: #00a9d4;
}
.modal-body #first-title {
  margin-top: 0px;
}
#filterModal .vdp-datepicker {
  width: 47.5%;
  display: inline-block;
}

.modal-body .vdp-datepicker input {
  width: 100%;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(228, 231, 234);
  border-radius: 0.25rem;
  height: calc(2.0625rem + 2px);
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  color: rgb(92, 104, 115);
}
.modal-body .timespan-area #spacer {
  width: 5%;
  display: inline-block;
}

.modal-body .timespan-area select {
  margin-top: 10px;
}

.modal-body #reset-button {
  margin-top: 20px;
}

.modal-footer #filter-cancel-button {
  margin-right: 10px;
}

#actions-button {
  margin-left: 10px;
}

.loading-text {
  color: #00a9d4;
}

.action-date {
  float: right;
  font-size: 0.7rem;
}

#action-delete-button {
  float: right;
}
</style>

