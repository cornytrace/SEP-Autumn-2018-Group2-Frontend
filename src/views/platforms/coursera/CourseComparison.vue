<template>
  <div class="animated fadeIn">
    <b-row>

      <b-col sm="12" md="6">
        <b-card :no-body="true">
          <b-card-header class="custom-header">
            {{ this.course1.courseName }} </b-card-header>
          <b-card-body class="p-0 clearfix mr-3 ml-3 mt-3">
            <div v-if="!loadingC1">
              <b-row>
                <b-col sm="12" md="6" lg="6">
                  <b-card :no-body="true">
                    <b-card-body class="p-0 clearfix align-data mr-3">
                      <span class="iconsquare">
                        <i class="fa fa-users icon-color p-4 font-2xl mr-3 float-left"></i>
                      </span>
                      <div class="h5 text-color mb-0 pt-3" id="no-cohorts">{{ this.course1.courseData.enrolled_learners }}</div>
                      <div class="text-muted text-uppercase font-weight-bold text-font-size">Enrolled learners</div>
                    </b-card-body>
                  </b-card>
                </b-col>
                <b-col sm="12" md="6" lg="6">
                  <b-card :no-body="true">
                    <b-card-body class="p-0 clearfix align-data mr-3">
                      <span class="iconsquare">
                        <i class="fa fa-user-times icon-color p-4 font-2xl mr-3 float-left"></i>
                      </span>
                      <div class="h5 text-color mb-0 pt-3" id="no-cohorts">{{ this.course1.courseData.leaving_learners }}</div>
                      <div class="text-muted text-uppercase font-weight-bold text-font-size">Leaving learners</div>
                    </b-card-body>
                  </b-card>
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="12" xl="12">
                  <b-card id="dist-eval" header="Distribution of evaluation rating">
                    <div class="chart-wrapper">
                      <chart :data=course1.distEvalRateData :layout=course1.distEvalLayout id="graph-1"></chart>
                    </div>
                  </b-card>
                </b-col>

                <b-col lg="12" xl="12">
                  <b-card id="progr-fin" header="Progression of finished learners">
                    <div class="chart-wrapper">
                      <chart :data=course1.progFinLearData :layout=course1.progFinLearLayout id="graph-2"></chart>
                    </div>
                  </b-card>
                </b-col>
              </b-row>

            </div>
            <div class="loading-content comparison-loading" v-if="loadingC1">
              <h2>{{ loadingC1Text }}</h2>
            </div>
          </b-card-body>
        </b-card>
      </b-col>

      <b-col sm="12" md="6">
        <b-card :no-body="true">
          <b-card-header>
            <b-form-select id="course-selector" @change=changeCourse v-model=selectedCourse :options=courses value-field="course_slug" text-field="course_name"></b-form-select>
          </b-card-header>
          <b-card-body class="p-0 clearfix ml-3 mt-3 mr-3">
            <div v-if="!loadingC2">
              <b-row>
                <b-col sm="12" md="6" lg="6">
                  <b-card :no-body="true">
                    <b-card-body class="p-0 clearfix align-data mr-3">
                      <span class="iconsquare">
                        <i class="fa fa-users icon-color p-4 font-2xl mr-3 float-left"></i>
                      </span>
                      <div class="h5 text-color mb-0 pt-3" id="no-cohorts">{{ this.course2.courseData.enrolled_learners }}</div>
                      <div class="text-muted text-uppercase font-weight-bold text-font-size">Enrolled learners</div>
                    </b-card-body>
                  </b-card>
                </b-col>
                <b-col sm="12" md="6" lg="6">
                  <b-card :no-body="true">
                    <b-card-body class="p-0 clearfix align-data mr-3">
                      <span class="iconsquare">
                        <i class="fa fa-user-times icon-color p-4 font-2xl mr-3 float-left"></i>
                      </span>
                      <div class="h5 text-color mb-0 pt-3" id="no-cohorts">{{ this.course2.courseData.leaving_learners }}</div>
                      <div class="text-muted text-uppercase font-weight-bold text-font-size">Leaving learners</div>
                    </b-card-body>
                  </b-card>
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="12" xl="12">
                  <b-card id="dist-eval-2" header="Distribution of evaluation rating">
                    <div class="chart-wrapper">
                      <chart :data=course2.distEvalRateData :layout=course2.distEvalLayout id="graph-3"></chart>
                    </div>
                  </b-card>
                </b-col>

                <b-col lg="12" xl="12">
                  <b-card id="progr-fin" header="Progression of finished learners">
                    <div class="chart-wrapper">
                      <chart :data=course2.progFinLearData :layout=course2.progFinLearLayout id="graph-4"></chart>
                    </div>
                  </b-card>
                </b-col>

              </b-row>

            </div>
            <div class="loading-content comparison-loading" v-if="loadingC2">
              <h2>{{ loadingC2Text }}</h2>
            </div>
          </b-card-body>
        </b-card>
      </b-col>

    </b-row>
  </div>
</template>

<script>
import Chart from "@/components/Chart";
import util from "@/util";
import strings from "@/strings";
import colors from "@/colors";

export default {
  name: "CourseComparison",
  data: function() {
    return {
      loadingC1: true,
      loadingC1Text: strings.loading,
      loadingC2: true,
      loadingC2Text: strings.loading,
      qdt: this.$store.state.user.role === "qdt",
      show: true,
      course1: {
        courseSlug: "",
        courseId: "",
        courseData: {},
        courseName: "Course 1",
      },
      course2: {
        courseSlug: "",
        courseId: "",
        courseData: {},
        courseName: "Course 2",
      },
      courses: [],
      selectedCourse: "",
    };
  },
  components: {
    Chart,
  },
  beforeMount() {
    this.course1.courseSlug = this.$route.params.courseid;
    this.course2.courseSlug = this.$route.params.course2id;
    this.getCourseData();
  },
  beforeRouteUpdate(to, from, next) {
    this.course1.courseSlug = to.params.courseid;
    this.course2.courseSlug = to.params.course2id;
    this.getCourseData();
    next();
  },
  methods: {
    changeCourse(evt) {
      this.$router.push(
        "/" +
          this.$store.state.selectedPlatform +
          "/" +
          this.course1.courseSlug +
          "/compare/" +
          evt
      );
    },
    getCourseData() {
      this.loadingC1 = true;
      this.loadingC2 = true;
      this.loadingText = strings.loading;
      var currentCourse1 = this.$store.state.user.courses.find(
        x => x.course_slug === this.course1.courseSlug
      );
      var currentCourse2 = this.$store.state.user.courses.find(
        x => x.course_slug === this.course2.courseSlug
      );
      if (currentCourse1) {
        this.course1.courseId = currentCourse1.course_id;
        this.courses = this.$store.state.user.courses.filter(el => {
          return el.course_slug !== this.course1.courseSlug;
        });
        util
          .getDetailedCourseData(
            this.course1.courseId,
            this.$store.state.filters
          )
          .then(response => {
            this.course1.courseData = response.data;
            this.setCourse1Data();
          })
          .catch(err => {
            this.loadingC1Text = strings.connection_error;
            console.log(err);
          });
      }
      if (currentCourse2) {
        this.course2.courseId = currentCourse2.course_id;
        this.selectedCourse = this.course2.courseSlug;
        util
          .getDetailedCourseData(
            this.course2.courseId,
            this.$store.state.filters
          )
          .then(response => {
            this.course2.courseData = response.data;
            this.setCourse2Data();
          })
          .catch(err => {
            this.loadingC2Text = strings.connection_error;
            console.log(err);
          });
      }
    },
    // Set all fields with corresponding data.
    setCourse1Data() {
      this.course1.courseName = this.course1.courseData.name;

      // // Distribution of evaluation rating.
      // // Set data
      this.course1.distEvalRateData = [
        { x: [], y: [], marker: { color: colors.blue, }, type: "bar", },
      ];
      for (let rating of this.course1.courseData.ratings) {
        this.course1.distEvalRateData[0].x.push(rating[0]);
        this.course1.distEvalRateData[0].y.push(rating[1]);
      }
      // Set layout
      this.course1.distEvalLayout = {
        xaxis: {
          nticks: this.course1.distEvalRateData[0].x.length * 2,
          title: "Rating",
        },
        yaxis: {
          title: "Amount",
        },
      };

      // // Progression of finished learners.
      this.course1.progFinLearData = [
        {
          x: [],
          y: [],
          fill: "tonexty",
          fillcolor: colors.lightGrey,
          marker: { color: colors.blue, },
          type: "scatter",
        },
      ];
      for (let finished of this.course1.courseData
        .finished_learners_over_time) {
        this.course1.progFinLearData[0].x.push(finished[0]);
        this.course1.progFinLearData[0].y.push(finished[1]);
      }

      this.progFinLearLayout = {
        xaxis: {
          title: "Time",
        },
        yaxis: {
          title: "Number of learners",
        },
      };

      this.loadingC1 = false;
    },
    setCourse2Data() {
      this.course2.courseName = this.course2.courseData.name;

      // // Distribution of evaluation rating.
      // // Set data
      this.course2.distEvalRateData = [
        { x: [], y: [], marker: { color: colors.blue, }, type: "bar", },
      ];
      for (let rating of this.course2.courseData.ratings) {
        this.course2.distEvalRateData[0].x.push(rating[0]);
        this.course2.distEvalRateData[0].y.push(rating[1]);
      }
      // Set layout
      this.course2.distEvalLayout = {
        xaxis: {
          nticks: this.course2.distEvalRateData[0].x.length * 2,
          title: "Rating",
        },
        yaxis: {
          title: "Amount",
        },
      };

      // // Progression of finished learners.
      this.course2.progFinLearData = [
        {
          x: [],
          y: [],
          fill: "tonexty",
          fillcolor: colors.lightGrey,
          marker: { color: colors.blue, },
          type: "scatter",
        },
      ];
      for (let finished of this.course2.courseData
        .finished_learners_over_time) {
        this.course2.progFinLearData[0].x.push(finished[0]);
        this.course2.progFinLearData[0].y.push(finished[1]);
      }

      this.progFinLearLayout = {
        xaxis: {
          title: "Time",
        },
        yaxis: {
          title: "Number of learners",
        },
      };

      this.loadingC2 = false;
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

.custom-header {
  height: calc(2.0625rem + 27px);
}

.comparison-loading {
  margin-bottom: 200px;
}
</style>