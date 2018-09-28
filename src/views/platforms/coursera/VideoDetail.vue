<template>
  <div class="animated fadeIn">
    <div class="stats-container" v-if="!isLoading">

      <b-row>
        <b-col class="title-col">
          <h1>{{video_title}}</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="9" lg="10">
          <b-row>

            <!-- Number analytics -->
            <b-col lg="4" xl="3">
              <b-card :no-body="true">
                <b-card-body class="p-0 clearfix">
                  <i class="fa fa-play bg-primary p-4 font-2xl mr-3 float-left"></i>
                  <div class="h5 text-primary mb-0 pt-3">{{plays}}</div>
                  <div class="text-muted text-uppercase font-weight-bold font-xs">Total Plays</div>
                </b-card-body>
              </b-card>
            </b-col>

            <b-col lg="4" xl="3">
              <b-card :no-body="true">
                <b-card-body class="p-0 clearfix">
                  <i class="fa fa-check bg-primary p-4 font-2xl mr-3 float-left"></i>
                  <div class="h5 text-primary mb-0 pt-3">{{full_plays}}</div>
                  <div class="text-muted text-uppercase font-weight-bold font-xs">Full Plays</div>
                </b-card-body>
              </b-card>
            </b-col>

            <b-col lg="4" xl="3">
              <b-card :no-body="true">
                <b-card-body class="p-0 clearfix">
                  <i class="fa fa-thumbs-up bg-primary p-4 font-2xl mr-3 float-left"></i>
                  <div class="h5 text-primary mb-0 pt-3">{{likes}}</div>
                  <div class="text-muted text-uppercase font-weight-bold font-xs">Likes</div>
                </b-card-body>
              </b-card>
            </b-col>

            <b-col lg="4" xl="3">
              <b-card :no-body="true">
                <b-card-body class="p-0 clearfix">
                  <i class="fa fa-comment bg-primary p-4 font-2xl mr-3 float-left"></i>
                  <div class="h5 text-primary mb-0 pt-3">{{comments}}</div>
                  <div class="text-muted text-uppercase font-weight-bold font-xs">Comments</div>
                </b-card-body>
              </b-card>
            </b-col>

            <b-col v-if="qdt" lg="4" xl="3">
              <b-card :no-body="true">
                <b-card-body class="p-0 clearfix">
                  <i class="fa fa-thumbs-down bg-primary p-4 font-2xl mr-3 float-left"></i>
                  <div class="h5 text-primary mb-0 pt-3">{{dislikes}}</div>
                  <div class="text-muted text-uppercase font-weight-bold font-xs">Dislikes</div>
                </b-card-body>
              </b-card>
            </b-col>

            <b-col v-if="qdt" lg="4" xl="3">
              <b-card :no-body="true">
                <b-card-body class="p-0 clearfix">
                  <i class="fa fa-check bg-primary p-4 font-2xl mr-3 float-left"></i>
                  <div class="h5 text-primary mb-0 pt-3">{{ratio}}</div>
                  <div class="text-muted text-uppercase font-weight-bold font-xs">Like/Dislike Ratio</div>
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
                      <span class="link-card-text">Next video</span>
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
                      <span class="link-card-subtext">Quiz 2</span>
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
        <b-col md="12">
          <b-card header="Grade distribution">
            <div class="chart-wrapper">
              <line-graph class="graph" :aspectRatio=maintainAspectRatio :beginAtZero=true :data=chart_data :labels=chart_labels></line-graph>
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
import colors from "@/colors";

export default {
  name: "VideoDetail",
  data: function() {
    return {
      qdt: this.$store.state.user.role === "qdt",
      isLoading: false,
      video_title: "Lecture " + this.$route.params.videoid + " - 12/05/2018",
      likes: 64,
      dislikes: 21,
      plays: 592,
      full_plays: 263,
      ratio: 0.83,
      comments: 23,
      maintainAspectRatio: false,
      chart_data: [
        {
          label: "Video plays distribution",
          backgroundColor: colors.lightGrey,
          borderColor: colors.blue,
          data: [560, 480, 465, 423, 403, 363, 386, 362, 321, 253, 98,],
        },
      ],
      chart_labels: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50,],
    };
  },
  components: {
    LineGraph,
  },
  beforeRouteUpdate(to, from, next) {
    this.video_title = "Lecture " + to.params.videoid + " - 12/05/2018";
    next();
  },
};
</script>

<style scoped>
.graph {
  max-height: 40vh;
}
</style>
