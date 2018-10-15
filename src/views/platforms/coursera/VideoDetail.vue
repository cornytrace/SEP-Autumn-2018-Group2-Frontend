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
                <b-card-body class="p-0 clearfix align-data mr-3">
                  <span class="iconsquare">
                    <i class="fa fa-play bg-primary p-4 font-2xl"></i>
                  </span>
                  <div class="h5 text-primary mb-0 pt-3">{{plays}}</div>
                  <div class="text-muted text-uppercase font-weight-bold font-xs">Total Plays</div>
                </b-card-body>
              </b-card>
            </b-col>

            <b-col lg="4" xl="3">
              <b-card :no-body="true">
                <b-card-body class="p-0 clearfix align-data mr-3">
                  <span class="iconsquare">
                    <i class="fa fa-check bg-primary p-4 font-2xl float-left"></i>
                  </span>
                  <div class="h5 text-primary mb-0 pt-3">{{full_plays}}</div>
                  <div class="text-muted text-uppercase font-weight-bold font-xs">Full Plays</div>
                </b-card-body>
              </b-card>
            </b-col>

            <b-col lg="4" xl="3">
              <b-card :no-body="true">
                <b-card-body class="p-0 clearfix align-data mr-3">
                  <span class="iconsquare">
                    <i class="fa fa-thumbs-up bg-primary p-4 font-2xl float-left"></i>
                  </span>
                  <div class="h5 text-primary mb-0 pt-3">{{likes}}</div>
                  <div class="text-muted text-uppercase font-weight-bold font-xs">Likes</div>
                </b-card-body>
              </b-card>
            </b-col>

            <b-col lg="4" xl="3">
              <b-card :no-body="true">
                <b-card-body class="p-0 clearfix align-data mr-3">
                  <span class="iconsquare">
                    <i class="fa fa-comment bg-primary p-4 font-2xl "></i>
                  </span>
                  <div class="h5 text-primary mb-0 pt-3">{{comments}}</div>
                  <div class="text-muted text-uppercase font-weight-bold font-xs">Comments</div>
                </b-card-body>
              </b-card>
            </b-col>

            <b-col v-if="qdt" lg="4" xl="3">
              <b-card :no-body="true">
                <b-card-body class="p-0 clearfix align-data mr-3">
                  <span class="iconsquare">
                    <i class="fa fa-thumbs-down bg-primary p-4 font-2xl mr-3 float-left"></i>
                  </span>
                  <div class="h5 text-primary mb-0 pt-3">{{dislikes}}</div>
                  <div class="text-muted text-uppercase font-weight-bold font-xs">Dislikes</div>
                </b-card-body>
              </b-card>
            </b-col>

            <b-col v-if="qdt" lg="4" xl="3">
              <b-card :no-body="true">
                <b-card-body class="p-0 clearfix align-data mr-3">
                  <span class="iconsquare">
                    <i class="fa fa-check bg-primary p-4 font-2xl mr-3 float-left"></i>
                  </span>
                  <div class="h5 text-primary mb-0 pt-3">{{ratio}}</div>
                  <div class="text-muted text-uppercase font-weight-bold font-xs">Like/Dislike Ratio</div>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
        </b-col>

        <!-- Link to next vid -->
        <b-col v-if="hasNextItem" md="3" lg="2">
          <!-- <div class="link-container">
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
          </div> -->
          <div class="link-container">
            <router-link :to=nextItemUrl>
              <b-card class="link-card">
                <table>
                  <tr>
                    <th>
                      <span class="link-card-text">Next item</span>
                      <span class="link-card-subtext">{{ nextItemType }}</span>
                      <span v-if="showNextItemPassingFraction && qdt" class="link-card-subtext"><b>Passing fraction:</b> {{ nextItemPassingFraction }}</span>
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
          <b-card header="Video views over time">
            <div class="chart-wrapper">
              <!-- <line-graph class="graph" :aspectRatio=maintainAspectRatio :beginAtZero=true :data=chart_data :labels=chart_labels></line-graph> -->
              <chart :data=chart_data :layout=chartLayout></chart>
            </div>
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
import colors from "@/colors";
import util from "@/util";
import Chart from "@/components/Chart";

export default {
  name: "VideoDetail",
  data: function() {
    return {
      courseSlug: "",
      videoData: {},
      videoId: "",
      videoName: "",
      courseId: "",

      qdt: this.$store.state.user.role === "qdt",
      isLoading: false,
      loadingText: "Loading...",
      video_title: "",
      likes: 0,
      dislikes: 0,
      plays: 0,
      full_plays: 0,
      ratio: 0,
      comments: 0,
      maintainAspectRatio: false,
      chart_data: [],
      chartLayout: {},
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
    this.videoId = this.$route.params.videoid;
    this.getVideoData();
  },

  beforeRouteUpdate(to, from, next) {
    // this.video_title = "Lecture " + to.params.videoid + " - 12/05/2018";
    this.courseSlug = to.params.courseid;
    this.videoId = to.params.videoid;
    this.getVideoData();
    next();
  },

  methods: {
    getVideoData() {
      this.isLoading = true;
      var currentCourse = this.$store.state.user.courses.find(
        x => x.course_slug === this.courseSlug
      );
      if (currentCourse) {
        this.courseId = currentCourse.course_id;
        util
          .getVideoDetails(
            this.courseId,
            this.videoId,
            this.$store.state.filters
          )
          .then(response => {
            this.videoData = response.data;
            this.setVideoData();
          })
          .catch(err => {
            console.log(err);
            this.loadingText = strings.connection_error;
          });
      }
    },
    setVideoData() {
      // Set url to the next item
      let category = this.videoData.next_item.category;

      if (category === "quiz") {
        this.hasNextItem = true;
        this.nextItemType = "Quiz";
        this.nextItemPassingFraction = parseFloat(
          this.videoData.next_item.passing_fraction
        ).toFixed(2);
        this.showNextItemPassingFraction = true;
        this.nextItemUrl =
          "/" +
          this.$store.state.selectedPlatform +
          "/" +
          this.$store.state.selectedCourse +
          "/quizzes/" +
          this.videoData.next_item.assessment_id +
          "-" +
          this.videoData.next_item.assessment_version;
      } else if (category === "lecture") {
        this.showNextItemPassingFraction = false;
        this.hasNextItem = true;
        this.nextItemType = "Video";
        this.nextItemUrl =
          "/" +
          this.$store.state.selectedPlatform +
          "/" +
          this.$store.state.selectedCourse +
          "/videos/" +
          this.videoData.next_item.item_id;
      } else {
        this.hasNextItem = false;
      }

      // Set all statistics
      this.likes = this.videoData.video_likes;
      this.video_title = this.videoData.name;
      this.dislikes = this.videoData.video_dislikes;
      this.plays = this.videoData.watched_video;
      this.full_plays = this.videoData.finished_video;
      if (
        this.videoData.video_likes !== 0 ||
        this.videoData.video_dislikes !== 0
      ) {
        this.ratio =
          Math.round(
            (this.videoData.video_likes * 100) /
              (this.videoData.video_likes + this.videoData.video_dislikes)
          ) / 100;
      } else {
        this.ratio = 0;
      }

      this.chart_data[0] = {};
      this.chart_data[0].x = [];
      this.chart_data[0].y = [];
      this.chart_data[0].marker = { color: colors.blue, };
      this.chartLayout = {};
      this.chartLayout.shapes = [];
      let high = 0;
      let highx = -1;
      let low = Infinity;
      let lowx = -1;
      for (let view of this.videoData.views_over_runtime) {
        if (view[1] > high) {
          high = view[1];
          highx = view[0];
        }
        if (view[1] <= low) {
          low = view[1];
          lowx = view[0];
        }
        this.chart_data[0].x.push(view[0]);
        this.chart_data[0].y.push(view[1]);
      }
      if (highx !== -1) {
        this.chartLayout.shapes.push({
          type: "line",
          xref: "x",
          yref: "paper",
          x0: highx,
          y0: 0,
          x1: highx,
          y1: 1,
          line: {
            color: colors.green,
            width: 2,
          },
        });
      }
      if (lowx !== -1) {
        this.chartLayout.shapes.push({
          type: "line",
          xref: "x",
          yref: "paper",
          x0: lowx,
          y0: 0,
          x1: lowx,
          y1: 1,
          line: {
            color: colors.red,
            width: 2,
          },
        });
      }
      this.comments = this.videoData.video_comments;
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
