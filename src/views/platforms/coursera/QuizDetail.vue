<template>
  <div class="animated fadeIn">
    <div class="stats-container" v-if="!isLoading">

      <b-row>
        <b-col class="title-col">
          <h1>Quiz name</h1>
        </b-col>
      </b-row>
      <b-row>
        <!-- Number statistics -->
        <b-col md="9" lg="10">
          <b-row>

            <b-col sm="12" md="6" lg="3">
              <b-card :no-body="true">
                <b-card-body class="p-0 clearfix align-data mr-3">
                  <i class="fa fa-users icon-color p-4 font-2xl mr-3 float-left"></i>
                  <div class="h5 text-color mb-0 pt-3" id="enrolled-learners">6.3</div>
                  <div class="text-muted text-uppercase font-weight-bold text-font-size">Average grade</div>
                </b-card-body>
              </b-card>
            </b-col>

            <b-col sm="12" md="6" lg="3">
              <b-card :no-body="true">
                <b-card-body class="p-0 clearfix align-data mr-3">
                  <i class="fa fa-user-times icon-color p-4 font-2xl mr-3 float-left"></i>
                  <div class="h5 text-color mb-0 pt-3" id="leaving-learners">107</div>
                  <div class="text-muted text-uppercase font-weight-bold text-font-size">Number of attempts</div>
                </b-card-body>
              </b-card>
            </b-col>

            <b-col sm="12" md="6" lg="3">
              <b-card :no-body="true">
                <b-card-body class="p-0 clearfix align-data mr-3">
                  <i class="fa fa-check icon-color p-4 font-2xl mr-3 float-left"></i>
                  <div class="h5 text-color mb-0 pt-3" id="finished-learners">437</div>
                  <div class="text-muted text-uppercase font-weight-bold text-font-size">Number of likes</div>
                </b-card-body>
              </b-card>
            </b-col>

            <b-col sm="12" md="6" lg="3">
              <b-card :no-body="true">
                <b-card-body class="p-0 clearfix align-data mr-3">
                  <i class="fa fa-video-camera icon-color p-4 font-2xl mr-3 float-left"></i>
                  <div class="h5 text-color mb-0 pt-3" id="no-videos">114</div>
                  <div class="text-muted text-uppercase font-weight-bold text-font-size">Number of comments</div>
                </b-card-body>
              </b-card>
            </b-col>

            <b-col sm="12" md="6" lg="3">
              <b-card :no-body="true">
                <b-card-body class="p-0 clearfix align-data mr-3">
                  <i class="fa fa-question icon-color p-4 font-2xl mr-3 float-left"></i>
                  <div class="h5 text-color mb-0 pt-3" id="no-quizzes">0.83</div>
                  <div class="text-muted text-uppercase font-weight-bold text-font-size">Passing ratio</div>
                </b-card-body>
              </b-card>
            </b-col>

            <b-col sm="12" md="6" lg="3" v-if="this.$store.state.user.role === 'qdt'">
              <b-card :no-body="true">
                <b-card-body class="p-0 clearfix align-data mr-3">
                  <i class="fa fa-question icon-color p-4 font-2xl mr-3 float-left"></i>
                  <div class="h5 text-color mb-0 pt-3" id="no-quizzes">0.65</div>
                  <div class="text-muted text-uppercase font-weight-bold text-font-size">Like/dislike ratio</div>
                </b-card-body>
              </b-card>
            </b-col>

            <b-col sm="12" md="6" lg="3" v-if="this.$store.state.user.role === 'qdt'">
              <b-card :no-body="true">
                <b-card-body class="p-0 clearfix align-data mr-3">
                  <i class="fa fa-question icon-color p-4 font-2xl mr-3 float-left"></i>
                  <div class="h5 text-color mb-0 pt-3" id="no-quizzes">7.4</div>
                  <div class="text-muted text-uppercase font-weight-bold text-font-size">Average score of last attempt</div>
                </b-card-body>
              </b-card>
            </b-col>

          </b-row>
        </b-col>

        <!-- Link to next vid -->
        <b-col md="3" lg="2">

          <div class="link-container">
            <router-link to="/coursera/capstone-recommender-systems/videos/2">
              <b-card class="link-card">
                <table>
                  <tr>
                    <th>
                      <span class="link-card-text">Next quiz</span>
                      <span class="link-card-subtext">Lecture 2</span>
                    </th>
                    <th class="icon-cell">
                      <i class="fa fa-2x fa-chevron-right"></i>
                    </th>
                  </tr>
                </table>
              </b-card>
            </router-link>
          </div>

          <div class="link-container">
            <router-link to="/coursera/capstone-recommender-systems/videos/2">
              <b-card class="link-card">
                <table>
                  <tr>
                    <th>
                      <span class="link-card-text">Next item</span>
                      <span class="link-card-subtext">Video 2</span>
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
        <!-- Graphs -->
        <b-col md="4">
          <b-card id="progr-fin" header="Distribution of number of attempts">
            <div class="chart-wrapper">
              <bar-graph chartId="chart-bar-01" :data=attemptDistributionData :labels=attemptDistributionLabels />
            </div>
          </b-card>
        </b-col>

        <b-col md="4">
          <b-card id="dist-eval" header="Grade distribution">
            <div class="chart-wrapper">
              <bar-graph chartId="chart-line-02" :data=gradeDistributionData :labels=gradeDistributionLabels />
            </div>
          </b-card>
        </b-col>

        <b-col md="4" v-if="this.$store.state.user.role === 'qdt'">
          <b-card id="progr-fin" header="Distribution of number of attempts">
            <div class="chart-wrapper">
              <bar-graph chartId="chart-bar-01" :data=questionRatioData :labels=questionLabels />
            </div>
          </b-card>
        </b-col>

      </b-row>
    </div>

    <!-- Loading screen -->
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

export default {
  name: "QuizDetail",
  data: function() {
    return {
      show: true,
      isLoading: false,
      course: this.$route.params.courseid,

      gradeDistributionLabels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,],

      attemptDistributionLabels: [1, 2, 3, 4,],
      attemptDistributionData: [
        {
          label: "Number of attempts",
          backgroundColor: "#f87979",
          data: [121, 41, 5, 3,],
        },
      ],

      questionLabels: ["q1", "q2", "q3", "q4",],
      questionRatioData: [
        {
          label: "Ratio of correct answers",
          backgroundColor: "#5391f4",
          data: [0.83, 0.41, 0.5, 0.3,],
        },
      ],

      gradeDistributionLastAttemptLabels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,],
      gradeDistributionLastAttemptData: [
        {
          label: "Grade distribution",
          backgroundColor: "#5391f4",
          data: [3, 4, 5, 3, 8, 3, 5, 9, 6, 4,],
        },
      ],
    };
  },
  beforeMount() {
    if (this.$store.state.user.role === "qdt") {
      this.gradeDistributionData = [
        {
          label: "Grade distribution",
          backgroundColor: "#5391f4",
          data: [3, 4, 5, 3, 8, 7, 5, 9, 3, 4,],
        },
        {
          label: "Grade distribution Last attempt",
          backgroundColor: "#134e8c",
          data: [3, 3, 5, 3, 8, 3, 5, 9, 6, 4,],
        },
      ];
    } else {
      this.gradeDistributionData = [
        {
          label: "Grade distribution",
          backgroundColor: "#5391f4",
          data: [3, 4, 5, 3, 8, 7, 5, 9, 3, 4,],
        },
      ];
    }
  },
  components: {
    LineGraph,
    ScatterGraph,
    BarGraph,
    DoughnutGraph,
    PolarAreaGraph,
    RadarGraph,
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
  color: #ffffff;
  background-color: #00a9d4;
}

.text-color {
  color: #00a9d4;
}
</style>
