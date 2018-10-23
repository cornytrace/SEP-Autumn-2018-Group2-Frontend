<template>
  <div class="animated fadeIn">
    <div class="stats-container" v-if="!isLoading">
      <b-row>
        <b-col class="title-col">
          <h1>{{ name }} </h1>
          <!-- Version selector -->
          <div class="version-select" id="version-select">
            <span class="version-title">Select version:</span>
            <b-form-select id="version-dropdown" @change=versionChanged :options=versions text-field="version" value-field="version" v-model="selectedVersion"></b-form-select>
          </div>
          <b-tooltip v-if="tooltips" target="version-select">
            {{ strings.version_text }}
          </b-tooltip>
        </b-col>
      </b-row>
      <b-row>
        <!-- Number statistics -->
        <b-col md="12">
          <b-row>

            <b-col sm="12" md="6" lg="3">
              <b-card :no-body="true">
                <b-card-body class="p-0 clearfix align-data mr-3">
                  <i class="fa fa-users icon-color p-4 font-2xl mr-3 float-left"></i>
                  <div class="h5 text-color mb-0 pt-3" id="enrolled-learners">{{ avgGrade }}</div>
                  <div class="text-muted text-uppercase font-weight-bold text-font-size">Average grade</div>
                </b-card-body>
              </b-card>
            </b-col>

            <b-col sm="12" md="6" lg="3">
              <b-card :no-body="true">
                <b-card-body class="p-0 clearfix align-data mr-3">
                  <i class="fa fa-user-times icon-color p-4 font-2xl mr-3 float-left"></i>
                  <div class="h5 text-color mb-0 pt-3" id="leaving-learners">{{ attempts }}</div>
                  <div class="text-muted text-uppercase font-weight-bold text-font-size">Number of attempts</div>
                </b-card-body>
              </b-card>
            </b-col>

            <b-col sm="12" md="6" lg="3">
              <b-card :no-body="true">
                <b-card-body class="p-0 clearfix align-data mr-3">
                  <i class="fa fa-thumbs-up icon-color p-4 font-2xl mr-3 float-left"></i>
                  <div class="h5 text-color mb-0 pt-3" id="finished-learners">{{ likes }}</div>
                  <div class="text-muted text-uppercase font-weight-bold text-font-size">Number of likes</div>
                </b-card-body>
              </b-card>
            </b-col>

            <b-col sm="12" md="6" lg="3">
              <b-card :no-body="true">
                <b-card-body class="p-0 clearfix align-data mr-3">
                  <i class="fa fa-comments icon-color p-4 font-2xl mr-3 float-left"></i>
                  <div class="h5 text-color mb-0 pt-3" id="no-videos">{{ comments }}</div>
                  <div class="text-muted text-uppercase font-weight-bold text-font-size">Number of comments</div>
                </b-card-body>
              </b-card>
            </b-col>

            <b-col sm="12" md="6" lg="3">
              <b-card :no-body="true" id="passing-ratio-card">
                <b-card-body class="p-0 clearfix align-data mr-3">
                  <i class="fa fa-check icon-color p-4 font-2xl mr-3 float-left"></i>
                  <div class="h5 text-color mb-0 pt-3" id="no-quizzes">{{ passingRatio }}</div>
                  <div class="text-muted text-uppercase font-weight-bold text-font-size">Passing ratio</div>
                </b-card-body>
              </b-card>
            </b-col>

            <b-col sm="12" md="6" lg="3" v-if="qdt">
              <b-card :no-body="true">
                <b-card-body class="p-0 clearfix align-data mr-3">
                  <i class="fa fa-thumbs-down icon-color p-4 font-2xl mr-3 float-left"></i>
                  <div class="h5 text-color mb-0 pt-3" id="no-quizzes">{{ likeDislikeRatio }}</div>
                  <div class="text-muted text-uppercase font-weight-bold text-font-size">Like/dislike ratio</div>
                </b-card-body>
              </b-card>
            </b-col>

            <b-col sm="12" md="6" lg="3" v-if="qdt">
              <b-card :no-body="true">
                <b-card-body class="p-0 clearfix align-data mr-3">
                  <i class="fa fa-question icon-color p-4 font-2xl mr-3 float-left"></i>
                  <div class="h5 text-color mb-0 pt-3" id="no-quizzes">{{ avgScoreLastAttempt }}</div>
                  <div class="text-muted text-uppercase font-weight-bold text-font-size">Average score of last attempt</div>
                </b-card-body>
              </b-card>
            </b-col>

            <b-col sm="12" md="6" lg="3">
              <b-card :no-body="true">
                <b-card-body class="p-0 clearfix align-data mr-3">
                  <i class="fa fa-bars icon-color p-4 font-2xl mr-3 float-left"></i>
                  <div class="h5 text-color mb-0 pt-3" id="no-quizzes">{{ questions }}</div>
                  <div class="text-muted text-uppercase font-weight-bold text-font-size">Number of questions</div>
                </b-card-body>
              </b-card>
            </b-col>

            <b-col sm="12" md="6" lg="3">
              <b-card :no-body="true">
                <b-card-body class="p-0 clearfix align-data mr-3">
                  <i class="fa fa-bars icon-color p-4 font-2xl mr-3 float-left"></i>
                  <div class="h5 text-color mb-0 pt-3" id="no-quizzes">{{ graded }}</div>
                  <div class="text-muted text-uppercase font-weight-bold text-font-size">Graded</div>
                </b-card-body>
              </b-card>
            </b-col>

          </b-row>
        </b-col>

      </b-row>

      <b-row>
        <!-- Graphs -->
        <b-col md="4">
          <b-card id="progr-fin" header="Distribution of number of attempts">
            <div class="chart-wrapper">
              <chart :data=attemptsDistribution :layout=attemptsDistributionLayout id="chart-1"></chart>
            </div>
          </b-card>
        </b-col>

        <b-col md="4">
          <b-card id="dist-eval" header="Grade distribution">
            <div class="chart-wrapper">
              <chart :data=gradeDistributionData :layout=gradeDistributionLayout id="chart-2"></chart>
            </div>
          </b-card>
        </b-col>

        <b-col md="4" v-if="qdt">
          <b-card id="progr-fin" header="Ratio of correct answers per question">
            <div class="chart-wrapper">
              <chart :data=questionRatioData :layout=questionRatioLayout id="chart-3"></chart>
            </div>
          </b-card>
        </b-col>

        <b-col md="4" v-if="qdt">
          <b-card id="progr-fin" header="Grade distribution of last attempts">
            <div class="chart-wrapper">
              <chart :data=lastAttemptGradeDistributionData :layout=lastAttemptGradeDistributionLayout id="chart-4"></chart>
            </div>
          </b-card>
        </b-col>

      </b-row>
    </div>

    <!-- Loading screen -->
    <div class="loading-content" v-if="isLoading">
      <h2>{{ loadingText }}</h2>
    </div>
  </div>
</template>

<script>
import util from "@/util";
import colors from "@/colors";
import strings from "@/strings";
import Chart from "@/components/Chart";
import { EventBus } from "@/event-bus";
import events from "@/events";

export default {
  name: "QuizDetail",
  data: function() {
    return {
      // For using in html
      strings: strings,

      // Show tooltips option
      tooltips: this.$store.state.tooltips,

      // Stats
      name: "",
      avgGrade: 0,
      attempts: 0,
      likes: 0,
      comments: 0,
      passingRatio: 0,
      likeDislikeRatio: 0,
      avgScoreLastAttempt: 0,
      version: 0,
      questions: 0,
      graded: "-",

      // Graphs
      attemptsDistribution: [],
      attemptsDistributionLayout: {},

      gradeDistributionData: [],
      gradeDistributionLayout: {},

      questionRatioLayout: {},
      questionRatioData: [],

      show: true,
      qdt: this.$store.state.user.role === "qdt",
      isLoading: false,
      loadingText: strings.loading,
      course: this.$route.params.courseid,
      courseSlug: "",
      quizBaseId: "",
      quizVersion: "",
      quizData: {},
      versions: [],
      selectedVersion: "",

      gradeDistributionLastAttemptLayout: {},
      gradeDistributionLastAttemptData: [],

      lastAttemptGradeDistributionData: [],
      lastAttemptGradeDistributionLayout: {}
    };
  },
  beforeRouteUpdate(to, from, next) {
    var urlParam = to.params.quizid;
    this.quizVersion = urlParam.substring(
      urlParam.lastIndexOf("-") + 1,
      urlParam.length
    );
    this.quizBaseId = urlParam.substring(0, urlParam.lastIndexOf("-"));
    this.courseSlug = to.params.courseid;

    this.getData();
    next();
  },
  beforeMount() {
    var urlParam = this.$route.params.quizid;
    this.quizVersion = urlParam.substring(
      urlParam.lastIndexOf("-") + 1,
      urlParam.length
    );
    this.quizBaseId = urlParam.substring(0, urlParam.lastIndexOf("-"));
    this.courseSlug = this.$route.params.courseid;
    this.getData();
  },
  mounted() {
    EventBus.$on(events.refresh_component, data => {
      this.getData();
    });
  },
  beforeDestroy() {
    EventBus.$off(events.refresh_component, null);
  },
  methods: {
    // Handler for changing the version dropdown.
    versionChanged(evt) {
      this.$router.push(
        "/" +
          this.$store.state.selectedPlatform +
          "/" +
          this.$store.state.selectedCourse +
          "/quizzes/" +
          this.quizBaseId +
          "-" +
          evt
      );
    },
    // Fetches the data from the API.
    getData() {
      this.isLoading = true;
      var currentCourse = this.$store.state.user.courses.find(
        x => x.course_slug === this.courseSlug
      );
      if (currentCourse) {
        util
          .getQuizDetails(
            currentCourse.course_id,
            this.quizBaseId,
            this.quizVersion,
            this.$store.state.filters
          )
          .then(response => {
            this.quizData = response.data;
            this.setData();
          })
          .catch(err => {
            console.log(err);
            this.loadingText = strings.connection_error;
          });
        util
          .getQuizVersions(currentCourse.course_id, this.quizBaseId)
          .then(response => {
            this.versions = response.data;
            this.selectedVersion = this.quizVersion;
          })
          .catch(err => console.log(err));
      }
    },
    // Set all the data in the component.
    setData() {
      this.name = this.quizData.name;

      if (this.quizData.graded) {
        this.graded = "Yes";
      } else {
        this.graded = "No";
      }

      if (this.quizData.passing_fraction) {
        this.passingRatio = this.quizData.passing_fraction;
      } else {
        this.passingRatio = "-";
      }
      this.version = this.quizData.version;
      this.attempts = this.quizData.average_attempts;
      if (this.quizData.average_grade) {
        this.avgGrade = this.quizData.average_grade;
        this.avgGrade = parseFloat(this.avgGrade).toFixed(2);
      } else {
        this.avgGrade = "-";
      }
      this.attempts = parseFloat(this.attempts).toFixed(2);
      this.likes = this.quizData.quiz_likes;
      this.comments = this.quizData.quiz_comments;
      this.likeDislikeRatio = parseFloat(
        this.quizData.quiz_likes /
          (this.quizData.quiz_likes + this.quizData.quiz_dislikes)
      ).toFixed(2);
      if (this.quizData.last_attempt_average_grade) {
        this.avgScoreLastAttempt = this.quizData.last_attempt_average_grade;
        this.avgScoreLastAttempt = parseFloat(this.avgScoreLastAttempt).toFixed(
          2
        );
      } else {
        this.avgScoreLastAttempt = "-";
      }

      this.attemptsDistribution[0] = {};
      this.attemptsDistribution[0].x = [];
      this.attemptsDistribution[0].y = [];
      this.attemptsDistribution[0].type = "bar";
      this.attemptsDistribution[0].marker = { color: colors.blue };
      for (let view of this.quizData.number_of_attempts) {
        this.attemptsDistribution[0].x.push(view[0]);
        this.attemptsDistribution[0].y.push(view[1]);
      }

      this.attemptsDistributionLayout.yaxis = {
        title: "Number of learners"
      };
      this.attemptsDistributionLayout.xaxis = {
        title: "Number of attempts",
        dtick: 1
      };

      this.gradeDistributionData[0] = {};
      this.gradeDistributionData[0].x = [];
      this.gradeDistributionData[0].y = [];
      this.gradeDistributionData[0].marker = { color: colors.blue };
      this.gradeDistributionData[0].type = "bar";
      for (let rating of this.quizData.grade_distribution) {
        this.gradeDistributionData[0].x.push(rating[0]);
        this.gradeDistributionData[0].y.push(rating[1]);
      }
      this.gradeDistributionLayout.xaxis = {
        dtick: 1 / (this.quizData.grade_distribution.length - 1),
        title: "Grade"
      };
      this.gradeDistributionLayout.yaxis = {
        title: "Number of learners"
      };

      this.questionRatioData[0] = {};
      this.questionRatioData[0].x = [];
      this.questionRatioData[0].y = [];
      this.questionRatioData[0].marker = { color: colors.blue };
      this.questionRatioData[0].type = "bar";
      for (
        let x = 0;
        x < this.quizData.correct_ratio_per_question.length;
        x++
      ) {
        this.questionRatioData[0].x.push("Q" + (x + 1));
        this.questionRatioData[0].y.push(
          this.quizData.correct_ratio_per_question[x][1]
        );
      }

      this.questions = this.quizData.correct_ratio_per_question.length;

      this.questionRatioLayout = {};
      this.questionRatioLayout.yaxis = {};
      this.questionRatioLayout.yaxis.dtick = 0.1;
      this.questionRatioLayout.yaxis.range = [0, 1];
      this.questionRatioLayout.yaxis.title = "Correct answer ratio";
      this.questionRatioLayout.xaxis = {
        title: "Question"
      };

      this.lastAttemptGradeDistributionData[0] = {};
      this.lastAttemptGradeDistributionData[0].x = [];
      this.lastAttemptGradeDistributionData[0].y = [];
      this.lastAttemptGradeDistributionData[0].marker = { color: colors.blue };
      this.lastAttemptGradeDistributionData[0].type = "bar";
      for (
        let x = 0;
        x < this.quizData.last_attempt_grade_distribution.length;
        x++
      ) {
        this.lastAttemptGradeDistributionData[0].x.push(
          this.quizData.last_attempt_grade_distribution[x][0]
        );
        this.lastAttemptGradeDistributionData[0].y.push(
          this.quizData.last_attempt_grade_distribution[x][1]
        );
      }

      this.lastAttemptGradeDistributionLayout = {};
      this.lastAttemptGradeDistributionLayout.yaxis = {};
      this.lastAttemptGradeDistributionLayout.yaxis.title =
        "Number of learners";
      this.lastAttemptGradeDistributionLayout.xaxis = {
        title: "Grade"
      };

      this.isLoading = false;
    }
  },
  components: {
    Chart
  }
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
  color: #ffffff;
  background-color: #00a9d4;
}

.text-color {
  color: #00a9d4;
}

.title-col h1,
.title-col select {
  display: inline-block;
}

.title-col .version-select {
  float: right;
}

.title-col .version-title {
  line-height: calc(2.0625rem + 14px);
  display: inline;
  font-weight: normal;
  color: #080808;
  margin-right: 5px;
}

.title-col select {
  width: 60px;
}
</style>
