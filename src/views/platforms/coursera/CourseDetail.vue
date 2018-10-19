<template>
  <div class="animated fadeIn">
    <div class="stats-container" v-if="!isLoading">
      <b-row>
        <b-col class="title-col">
          <h1>{{ this.courseName }}</h1>
        </b-col>

        <b-col v-if="showCompare" sm="12" md="6" lg="2">
          <div class="link-container">
            <router-link :to=compareUrl>
              <b-card class="link-card">
                <table>
                  <tr>
                    <th>
                      <span class="link-card-text">Compare to other course</span>
                    </th>
                    <th class="icon-cell">
                      <i class="fa fa-2x fa-chevron-right"></i>
                    </th>
                  </tr>
                </table>
              </b-card>
            </router-link>
          </div>
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

        <b-col sm="12" md="6" lg="3">
          <b-card :no-body="true">
            <b-card-body class="p-0 clearfix align-data mr-3">
              <span class="iconsquare">
                <i class="fa fa-calendar icon-color p-4 font-2xl mr-3 float-left"></i>
              </span>
              <div class="h5 text-color mb-0 pt-3" id="no-cohorts">{{ avgTime }}</div>
              <div class="text-muted text-uppercase font-weight-bold text-font-size">Average active timespan (in days)</div>
            </b-card-body>
          </b-card>
        </b-col>

      </b-row>

      <b-row>
        <!-- Graphs -->
        <b-col lg="6" xl="4">
          <b-card id="dist-eval" header="Distribution of evaluation rating">
            <div class="chart-wrapper">
              <chart :data=distEvalRateData :layout=distEvalLayout id="graph-1"></chart>
            </div>
          </b-card>
        </b-col>

        <b-col lg="12" xl="8">
          <b-card id="geo-data" header="Geographical location of learners">
            <div class="chart-wrapper">
              <chart :data=geoData :layout=geoLayout id="graph-5"></chart>
            </div>
          </b-card>
        </b-col>

        <b-col lg="6" xl="4">
          <b-card id="progr-fin" header="Progression of finished learners">
            <div class="chart-wrapper">
              <chart :data=progFinLearData :layout=progFinLearLayout id="graph-2"></chart>
            </div>
          </b-card>
        </b-col>

        <b-col lg="6" xl="4">
          <b-card id="leav-per-mod" header="Leaving learners per module">
            <div class="chart-wrapper">
              <chart :data=leavLearModData :layout=leavLearLayout id="graph-3"></chart>
            </div>
          </b-card>
        </b-col>

        <b-col lg="6" xl="4">
          <b-card id="avg-time-in-mod" header="Average time spend per module by learners (days)">
            <div class="chart-wrapper">
              <chart :data=avgTimeModData :layout=avgTimeLayout id="graph-4"></chart>
            </div>
          </b-card>
        </b-col>

        <!-- SHOULD HAVE -->

        <!-- <b-col lg="6" xl="4" v-if="qdt">
          <b-card id="avg-time-in-mod" header="Order in which the course is followed most">
            <div class="chart-wrapper">
              <bar-graph chartId="chart-polar-01" :data=tendFolCourData :labels=tendFolCourLabels />
            </div>
          </b-card>
        </b-col> -->

      </b-row>
    </div>

    <!-- Loading screen -->
    <div class="loading-content" v-if="isLoading">
      <h2>{{ loadingText }}</h2>
    </div>
  </div>
</template>

<script>
import Chart from "@/components/Chart";
import util from "@/util";
import strings from "@/strings";
import colors from "@/colors";

export default {
  name: "CourseDetail",
  data: function() {
    return {
      isLoading: false,
      loadingText: strings.loading,
      qdt: this.$store.state.user.role === "qdt",
      show: true,
      courseSlug: "",
      courseId: "",
      courseData: {},
      courseName: "",
      compareUrl: "",
      showCompare: true,

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
      avgTime: 0,

      // data distribution of evaluation rating
      distEvalRateData: [],
      distEvalLayout: {},

      // data progression of finished learners
      progFinLearData: [],
      progFinLearLayout: {},

      // data leaving learners per module
      leavLearModData: [],
      leavLearLayout: {},

      // data average time spend per module by learners
      avgTimeModData: [],
      avgTimeLayout: {},

      geoData: [],
      geoLayout: {},

      /*
       * QDT member analytics 
       * not yet implemented 
       */
      //
      tendFolCourData: [],
    };
  },
  components: {
    Chart,
  },
  beforeMount() {
    var otherCourses = this.$store.state.user.courses.filter(
      el => el.course_slug !== this.$route.params.courseid
    );
    if (otherCourses[0]) {
      this.compareUrl =
        this.$route.path + "/compare/" + otherCourses[0].course_slug;
    } else {
      this.showCompare = false;
    }
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
      this.loadingText = strings.loading;
      var currentCourse = this.$store.state.user.courses.find(
        x => x.course_slug === this.courseSlug
      );
      if (currentCourse) {
        this.courseId = currentCourse.course_id;
        Promise.all([
          util.getActions("coursera", this.courseId, this.$store.state.filters),
          util.getDetailedCourseData(this.courseId, this.$store.state.filters),
        ])
          .then(response => {
            this.courseData = response[1].data;
            this.setCourseData(response[1].data, response[0].data);
          })
          .catch(err => {
            this.loadingText = strings.connection_error;
            console.log(err);
          });
      }
    },
    // Set all fields with corresponding data.
    setCourseData(data, actions) {
      this.courseName = data.name;

      this.enrolledStudents = data.enrolled_learners;
      this.leavingLearners = data.leaving_learners;
      this.finishedLearners = data.finished_learners;
      this.numberOfVideos = data.videos;
      this.numberOfQuizzes = data.quizzes;
      this.numberOfAssignments = data.assignments;
      this.numberOfModules = data.modules;
      this.numberOfCohorts = data.cohorts;

      // Distribution of evaluation rating.
      // Set data
      this.distEvalRateData[0] = {};
      this.distEvalRateData[0].x = [];
      this.distEvalRateData[0].y = [];
      this.distEvalRateData[0].marker = { color: colors.blue, };
      this.distEvalRateData[0].type = "bar";
      for (let rating of data.ratings) {
        this.distEvalRateData[0].x.push(rating[0]);
        this.distEvalRateData[0].y.push(rating[1]);
      }
      // Set layout
      this.distEvalLayout = {};
      this.distEvalLayout.xaxis = {};
      this.distEvalLayout.xaxis.nticks = this.distEvalRateData[0].x.length * 2;
      this.distEvalLayout.xaxis.title = "Rating";
      this.distEvalLayout.yaxis = { title: "Amount", };

      // Progression of finished learners.
      this.progFinLearData[0] = {};
      this.progFinLearData[0].x = [];
      this.progFinLearData[0].y = [];
      this.progFinLearData[0].fill = "tonexty";
      this.progFinLearData[0].name = "Progression of finished learners";
      this.progFinLearData[0].fillcolor = colors.lightGrey;
      this.progFinLearData[0].marker = { color: colors.blue, };
      this.progFinLearData[0].type = "scatter";
      for (let finished of data.finished_learners_over_time) {
        this.progFinLearData[0].x.push(finished[0]);
        this.progFinLearData[0].y.push(finished[1]);
      }

      let minDate = new Date(Date.parse(this.progFinLearData[0].x[0]));
      let maxDate = new Date(
        Date.parse(
          this.progFinLearData[0].x[this.progFinLearData[0].x.length - 1]
        )
      );

      this.progFinLearLayout = {
        xaxis: {
          title: "Time",
        },
        yaxis: {
          title: "Number of learners",
        },
        shapes: [],
        showlegend: false,
      };
      this.progFinLearData[1] = {
        x: [],
        y: [],
        text: [],
        mode: "markers+text",
        type: "scatter",
        name: "Changes",
        textposition: "bottom",
        marker: {
          color: colors.purple,
          size: 12,
        },
      };
      for (let action of actions) {
        let actionDate = new Date(action.date);
        if (minDate < actionDate && actionDate < maxDate) {
          this.progFinLearData[1].x.push(action.date);
          this.progFinLearData[1].y.push(
            this.interpolateY(
              this.progFinLearData[0].x,
              this.progFinLearData[0].y,
              action.date
            )
          );
          this.progFinLearData[1].text.push(action.title);
        }
      }

      // Leaving leareners per module.
      // Set data
      this.leavLearModData[0] = {};
      this.leavLearModData[0].x = [];
      this.leavLearModData[0].y = [];
      this.leavLearModData[0].marker = { color: colors.blue, };
      this.leavLearModData[0].type = "bar";
      for (let x = 0; x < data.leaving_learners_per_module.length; x++) {
        this.leavLearModData[0].x.push(x + 1);
        this.leavLearModData[0].y.push(data.leaving_learners_per_module[x][1]);
      }
      // Set layout
      this.leavLearLayout = {};
      this.leavLearLayout.xaxis = {};
      this.leavLearLayout.xaxis.nticks = this.leavLearModData[0].x.length * 2;
      this.leavLearLayout.xaxis.title = "Module";
      this.leavLearLayout.yaxis = {
        title: "Leaving learners",
      };

      // Average time per module.
      // Set data
      this.avgTimeModData[0] = {};
      this.avgTimeModData[0].x = [];
      this.avgTimeModData[0].y = [];
      this.avgTimeModData[0].marker = { color: colors.blue, };
      this.avgTimeModData[0].type = "bar";
      for (let x = 0; x < data.average_time_per_module.length; x++) {
        this.avgTimeModData[0].x.push(x + 1);
        this.avgTimeModData[0].y.push(
          parseFloat(data.average_time_per_module[x][1]) / (3600 * 24)
        );
      }
      // Set layout
      this.avgTimeLayout = {};
      this.avgTimeLayout.xaxis = {
        nticks: this.avgTimeModData[0].x.length * 2,
        title: "Module",
      };
      this.avgTimeLayout.yaxis = {
        title: "Average time",
      };

      this.avgTime = (parseFloat(data.average_time) / (3600 * 24)).toFixed(1);

      this.geoData[0] = {
        type: "choropleth",
        locations: util.arrayColumn(data.geo_data, 0),
        text: util.arrayColumn(data.geo_data, 1),
        z: util.arrayColumn(data.geo_data, 2),
        colorscale: [
          [0, "rgba(0, 169, 212, 0)",],
          [0.35, "rgba(0, 169, 212, 50)",],
          [0.5, "rgba(0, 169, 212, 100)",],
          [0.6, "rgba(0, 169, 212,150)",],
          [0.7, "rgba(0, 169, 212, 200)",],
          [1, "rgba(0, 169, 212, 255)",],
        ],
      };

      this.geoLayout = {
        geo: {
          projection: {
            type: "robinson",
          },
        },
      };

      this.isLoading = false;
    },
    interpolateY(dateArray, yArray, date) {
      date = new Date(Date.parse(date));
      for (var i = 0; i < dateArray.length; i++) {
        var dateTop = new Date(Date.parse(dateArray[i]));
        if (date.getTime() <= dateTop.getTime()) {
          var dateBottom = new Date(Date.parse(dateArray[i - 1]));
          var ratio =
            (date.getTime() - dateBottom.getTime()) /
            (dateTop.getTime() - dateBottom.getTime());
          return parseInt(yArray[i - 1] + (yArray[i] - yArray[i - 1]) * ratio);
        }
      }
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
</style>
