<template>
  <div class="animated fadeIn">
    <!--First row-->
    <div class="course-stats" v-if="!isLoading">
      <b-row>
        <b-col class="title-col">
          <h1>{{ this.courseName }}</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="12" md="6" lg="3">
          <b-card :no-body="true">
            <b-card-body class="p-0 clearfix align-data mr-3">
              <span class="iconsquare">
                <i class="fa fa-users icon-color p-4 font-2xl mr-3"></i>
              </span>
              <div class="h5 text-color mb-0 pt-3" id="enrolled-learners">{{ enrolledStudents }}</div>
              <div class="text-muted text-uppercase font-weight-bold text-font-size">Enrolled learners</div>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col sm="12" md="6" lg="3">
          <b-card :no-body="true">
            <b-card-body class="p-0 clearfix align-data mr-3">
              <span class="iconsquare">
                <i class="fa fa-user-times icon-color p-4 font-2xl mr-3 float-left"></i>
              </span>
              <div class="h5 text-color mb-0 pt-3" id="leaving-learners">{{ leavingLearners }}</div>
              <div class="text-muted text-uppercase font-weight-bold text-font-size">Leaving learners</div>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col sm="12" md="6" lg="3">
          <b-card :no-body="true">
            <b-card-body class="p-0 clearfix align-data mr-3">
              <span class="iconsquare">
                <i class="fa fa-check icon-color p-4 font-2xl mr-3 float-left"></i>
              </span>
              <div class="h5 text-color mb-0 pt-3" id="finished-learners">{{ finishedLearners }}</div>
              <div class="text-muted text-uppercase font-weight-bold text-font-size">Finished learners</div>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col sm="12" md="6" lg="3">
          <b-card :no-body="true">
            <b-card-body class="p-0 clearfix align-data mr-3">
              <span class="iconsquare">
                <i class="fa fa-video-camera icon-color p-4 font-2xl mr-3 float-left"></i>
              </span>
              <div class="h5 text-color mb-0 pt-3" id="no-videos">{{ numberOfVideos }}</div>
              <div class="text-muted text-uppercase font-weight-bold text-font-size">Videos</div>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col sm="12" md="6" lg="3">
          <b-card :no-body="true">
            <b-card-body class="p-0 clearfix align-data mr-3">
              <span class="iconsquare">
                <i class="fa fa-question icon-color p-4 font-2xl mr-3 float-left"></i>
              </span>
              <div class="h5 text-color mb-0 pt-3" id="no-quizzes">{{ numberOfQuizzes }}</div>
              <div class="text-muted text-uppercase font-weight-bold text-font-size">Quizzes</div>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col sm="12" md="6" lg="3">
          <b-card :no-body="true">
            <b-card-body class="p-0 clearfix align-data mr-3">
              <span class="iconsquare">
                <i class="fa fa-pencil icon-color p-4 font-2xl mr-0 float-left"></i>
              </span>
              <div class="h5 text-color mb-0 pt-3" id="no-assignments">{{ numberOfAssignments }}</div>
              <div class="text-muted text-uppercase font-weight-bold text-font-size">Assignments</div>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col sm="12" md="6" lg="3">
          <b-card :no-body="true">
            <b-card-body class="p-0 clearfix align-data mr-3">
              <span class="iconsquare">
                <i class="fa fa-th-list icon-color p-4 font-2xl mr-3 float-left"></i>
              </span>
              <div class="h5 text-color mb-0 pt-3" id="no-modules">{{ numberOfModules }}</div>
              <div class="text-muted text-uppercase font-weight-bold text-font-size">Modules</div>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col sm="12" md="6" lg="3">
          <b-card :no-body="true">
            <b-card-body class="p-0 clearfix align-data mr-3">
              <span class="iconsquare">
                <i class="fa fa-calendar icon-color p-4 font-2xl mr-3 float-left"></i>
              </span>
              <div class="h5 text-color mb-0 pt-3" id="no-cohorts">{{ numberOfCohorts }}</div>
              <div class="text-muted text-uppercase font-weight-bold text-font-size">Cohorts</div>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
      <!--Second row-->
      <b-row>
        <b-col lg="6" xl="4">
          <b-card id="dist-eval" header="Distribution of evaluation rating">
            <div class="chart-wrapper">
              <bar-graph chartId="chart-line-02" :data=distEvalRateData :labels=distEvalRateLabels />
            </div>
          </b-card>
        </b-col>
        <b-col lg="6" xl="4">
          <b-card id="progr-fin" header="Progression of finished learners">
            <div class="chart-wrapper">
              <line-graph chartId="chart-bar-01" :data=progFinLearData :labels=progFinLearLabels />
            </div>
          </b-card>
        </b-col>
        <b-col lg="6" xl="4">
          <b-card id="leav-per-mod" header="Leaving learners per module">
            <div class="chart-wrapper">
              <bar-graph chartId="chart-polar-01" :data=leavLearModData :labels=leavLearModLabels />
            </div>
          </b-card>
        </b-col>

        <!-- Not real data yet -->

        <!-- <b-col lg="6" xl="4">
          <b-card id="avg-time-in-course" header="Average time spend in course by learners">
            <div class="chart-wrapper">
              <bar-graph chartId="chart-scatter-01" :data=avgTimeCourData :labels=avgTimeCourLabels />
            </div>
          </b-card>
        </b-col>
        <b-col lg="6" xl="4">
          <b-card id="avg-time-in-mod" header="Average time spend per module by learners">
            <div class="chart-wrapper">
              <bar-graph chartId="chart-polar-01" :data=avgTimeModData :labels=AvgTimeModLabels />
            </div>
          </b-card>
        </b-col>
        <b-col lg="6" xl="4" v-if="qdt">
          <b-card id="avg-time-in-mod" header="Order in which the course is followed most">
            <div class="chart-wrapper">
              <bar-graph chartId="chart-polar-01" :data=tendFolCourData :labels=tendFolCourLabels />
            </div>
          </b-card>
        </b-col> -->
      </b-row>
    </div>
    <div class="loading-content" v-if="isLoading">
      <h2>Loading....</h2>
    </div>
  </div>
</template>

<script>
import LineGraph from "@/views/charts/LineGraph";
import ScatterGraph from "@/views/charts/ScatterGraph";
import BarGraph from "@/views/charts/BarGraph";
import DoughnutGraph from "@/views/charts/DoughnutGraph";
import PolarAreaGraph from "@/views/charts/PolarAreaGraph";
import RadarGraph from "@/views/charts/RadarGraph";
import colors from "@/colors";
import util from "@/util";

export default {
  name: "CourseDetail",
  data: function() {
    return {
      isLoading: false,
      qdt: this.$store.state.user.role === "qdt",
      show: true,
      courseSlug: "",
      courseId: "",
      courseData: {},
      courseName: "",

      /*
       * Teacher analytics 
       */
      // number data
      enrolledStudents: 0,
      leavingLearners: 0,
      finishedLearners: 0,
      numberOfVideos: 0,
      numberOfQuizzes: 0,
      numberOfAssignments: 0,
      numberOfModules: 0,
      numberOfCohorts: 0,

      // data distribution of evaluation rating
      distEvalRateData: [
        {
          label: "Distribution of evaluation rating",
          backgroundColor: colors.blue,
          data: [],
        },
      ],

      distEvalRateLabels: [],

      // data progression of finished learners
      progFinLearData: [
        {
          label: "Progression of finished learners",
          backgroundColor: colors.lightGrey,
          borderColor: colors.blue,
          data: [],
        },
      ],
      progFinLearLabels: [],

      // data leaving learners per module
      leavLearModData: [
        {
          label: "Leaving learners per module",
          backgroundColor: colors.blue,
          data: [80, 120, 30, 60,],
        },
      ],
      leavLearModLabels: ["Module A", " Module B", "Module C", "Module D",],

      // data average time spend in a course by learners
      avgTimeCourData: [
        {
          label: "Average time spend in course by learners",
          backgroundColor: colors.blue,
          data: [38, 6, 5, 56, 44, 25,],
        },
      ],
      avgTimeCourLabels: [1, 4, 5, 7, 13, 25,],

      // data average time spend per module by learners
      avgTimeModData: [
        {
          label: "Average timr spend per module by learners",
          backgroundColor: colors.blue,
          data: [28, 11, 30, 56,],
        },
      ],
      AvgTimeModLabels: [1, 2, 3, 4,],

      /*
       * QDT member analytics 
       * not yet implemented 
       */
      //
      tendFolCourData: [
        {
          label: "Yes we know this is the wrong graph type",
          backgroundColor: "#f81919",
          data: [28, 11, 30, 44,],
        },
      ],
      tendFolCourLabels: [1, 2, 3, 4,],
    };
  },
  components: {
    LineGraph,
    ScatterGraph,
    BarGraph,
    DoughnutGraph,
    PolarAreaGraph,
    RadarGraph,
  },
  beforeMount() {
    this.courseSlug = this.$route.params.courseid;
    this.getCourseData();
  },
  beforeRouteUpdate(to, from, next) {
    this.courseSlug = to.params.courseid;
    this.getCourseData();
    next();
  },
  methods: {
    getCourseData() {
      this.isLoading = true;
      var currentCourse = this.$store.state.user.courses.find(
        x => x.course_slug === this.courseSlug
      );
      if (currentCourse) {
        this.courseId = currentCourse.course_id;
        util
          .getDetailedCourseData(this.courseId)
          .then(response => {
            this.courseData = response.data;
            this.setCourseData(response.data);
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    setCourseData(data) {
      this.courseName = data.name;
      console.log(data);
      this.enrolledStudents = data.enrolled_learners;
      this.leavingLearners = data.leaving_learners;
      this.finishedLearners = data.finished_learners;
      this.numberOfVideos = data.videos;
      this.numberOfQuizzes = data.quizzes;
      this.numberOfAssignments = data.assignments;
      this.numberOfModules = data.modules;
      this.numberOfCohorts = data.cohorts;

      this.distEvalRateData[0].data = [];
      this.distEvalRateLabels = [];
      for (let rating of data.ratings) {
        this.distEvalRateLabels.push(rating[0]);
        this.distEvalRateData[0].data.push(rating[1]);
      }

      this.progFinLearData[0].data = [];
      this.progFinLearLabels = [];
      for (let finished of data.finished_learners_over_time) {
        this.progFinLearLabels.push(finished[0]);
        this.progFinLearData[0].data.push(finished[1]);
      }

      this.leavLearModData[0].data = [];
      this.leavLearModLabels = [];
      for (let x = 0; x < data.leaving_learners_per_module.length; x++) {
        this.leavLearModLabels.push(x + 1);
        this.leavLearModData[0].data.push(
          data.leaving_learners_per_module[x][1]
        );
      }

      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.align-data {
  text-align: right;
}

.text-font-size {
  font-size: 10px;
}

.icon-color {
  width: 100%;
  color: #ffffff;
}

.text-color {
  color: #00a9d4;
}

.iconsquare {
  float: left;
  background-color: #00a9d4;
  height: 100%;
  width: 75px;
  text-align: center;
}

.title-col {
  margin-bottom: 10px;
}

.title-col h1 {
  color: #00a9d4;
}

.loading-content {
  margin-top: 20vh;
  text-align: center;
}

.loading-content h2 {
  color: #00a9d4;
}
</style>
