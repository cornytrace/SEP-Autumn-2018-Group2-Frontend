<template>
  <div class="animated fadeIn">
    <div class="stats-container" v-if="!isLoading">

      <b-row>
        <b-col class="title-col">
          <h1>{{assignment_title}}</h1>
        </b-col>
      </b-row>
      <b-row>

        <!-- Number analytics -->
        <b-col lg="4" xl="3">
          <b-card :no-body="true">
            <b-card-body class="p-0 clearfix align-data mr-3">
              <span class="iconsquare">
                <i class="fa fa-upload bg-primary p-4 font-2xl"></i>
              </span>
              <div class="h5 text-primary mb-0 pt-3">{{submissions}}</div>
              <div class="text-muted text-uppercase font-weight-bold font-xs">Submissions</div>
            </b-card-body>
          </b-card>
        </b-col>

        <b-col lg="4" xl="3">
          <b-card :no-body="true" id="submission-ratio-card">
            <b-card-body class="p-0 clearfix align-data mr-3">
              <span class="iconsquare">
                <i class="fa fa-upload bg-primary p-4 font-2xl float-left"></i>
              </span>
              <div class="h5 text-primary mb-0 pt-3">{{submission_ratio}}</div>
              <div class="text-muted text-uppercase font-weight-bold font-xs">Submission ratio</div>
            </b-card-body>
          </b-card>

          <!-- Tooltip -->
          <b-tooltip v-if="tooltips" target="submission-ratio-card">
            {{ strings.submission_ratio_text }}
          </b-tooltip>
        </b-col>

        <b-col lg="4" xl="3">
          <b-card :no-body="true">
            <b-card-body class="p-0 clearfix align-data mr-3">
              <span class="iconsquare">
                <i class="fa fa-check bg-primary p-4 font-2xl float-left"></i>
              </span>
              <div class="h5 text-primary mb-0 pt-3">{{average}}</div>
              <div class="text-muted text-uppercase font-weight-bold font-xs">Average grade</div>
            </b-card-body>
          </b-card>
        </b-col>

      </b-row>

    </div>

    <!-- Loading screen -->
    <div class="loading-content" v-if="isLoading">
      <h2>{{loadingText}}</h2>
    </div>
  </div>
</template>

<script>
import strings from "@/strings";
import util from "@/util";
import Chart from "@/components/Chart";
import { EventBus } from "@/event-bus";
import events from "@/events";

export default {
  name: "AssignmentDetail",
  data: function() {
    return {
      // For using in html
      strings: strings,

      // Show tooltips option
      tooltips: this.$store.state.tooltips,

      courseSlug: "",
      assignmentData: {},
      assignmentId: "",
      videoName: "",
      courseId: "",

      qdt: this.$store.state.user.role === "qdt",
      isLoading: false,
      loadingText: "Loading...",
      assignment_title: "",
      submissions: 0,
      submission_ratio: 0,
      average: 0,
      nextItemUrl: "",
      nextItemType: "",
      showNextItemPassingFraction: false,
      hasNextItem: false,
      nextItemPassingFraction: 0,
    };
  },
  components: {
    Chart,
  },
  beforeMount() {
    this.courseSlug = this.$route.params.courseid;
    this.assignmentId = this.$route.params.assignmentid;
    this.getAssignmentData();
  },

  beforeRouteUpdate(to, from, next) {
    // this.video_title = "Lecture " + to.params.assignmentId + " - 12/05/2018";
    this.courseSlug = to.params.courseid;
    this.assignmentId = to.params.assignmentid;
    this.getAssignmentData();
    next();
  },
  mounted() {
    EventBus.$on(events.refresh_component, data => {
      this.getAssignmentData();
    });
  },
  beforeDestroy() {
    EventBus.$off(events.refresh_component, null);
  },
  methods: {
    getAssignmentData() {
      this.isLoading = true;
      var currentCourse = this.$store.state.user.courses.find(
        x => x.course_slug === this.courseSlug
      );
      if (currentCourse) {
        this.courseId = currentCourse.course_id;
        util
          .getAssignmentDetails(
            this.courseId,
            this.assignmentId,
            this.$store.state.filters
          )
          .then(response => {
            this.assignmentData = response.data;
            this.setAssignmentData();
          })
          .catch(err => {
            console.log(err);
            this.loadingText = strings.connection_error;
          });
      } else {
        this.loadingText = strings.connection_error;
      }
    },
    setAssignmentData() {
      // Set url to the next item
      this.assignment_title = this.assignmentData.name;
      this.average = parseFloat(this.assignmentData.average_grade).toFixed(2);
      this.submissions = this.assignmentData.submissions;
      this.submission_ratio = parseFloat(
        this.assignmentData.submission_ratio
      ).toFixed(2);

      //  let category = this.assignmentData.next_item.category;
      //   if (category === "quiz") {
      //     this.hasNextItem = true;
      //     this.nextItemType = "Quiz";
      //     this.nextItemPassingFraction = parseFloat(
      //       this.assignmentData.next_item.passing_fraction
      //     ).toFixed(2);
      //     this.showNextItemPassingFraction = true;
      //     this.nextItemUrl =
      //       "/" +
      //       this.$store.state.selectedPlatform +
      //       "/" +
      //       this.$store.state.selectedCourse +
      //       "/quizzes/" +
      //       this.assignmentData.next_item.assessment_id +
      //       "-" +
      //       this.assignmentData.next_item.assessment_version;
      //   } else if (category === "lecture") {
      //     this.showNextItemPassingFraction = false;
      //     this.hasNextItem = true;
      //     this.nextItemType = "Video";
      //     this.nextItemUrl =
      //       "/" +
      //       this.$store.state.selectedPlatform +
      //       "/" +
      //       this.$store.state.selectedCourse +
      //       "/videos/" +
      //       this.assignmentData.next_item.item_id;
      //   } else {
      //     this.hasNextItem = false;
      //   }

      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
.graph {
  max-height: 40vh;
}

.icon-container {
}
</style>
