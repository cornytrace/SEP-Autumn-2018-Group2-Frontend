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
              <b-card :no-body="true" id="watchers-card">
                <b-card-body class="p-0 clearfix align-data mr-3">
                  <span class="iconsquare">
                    <i class="fa fa-play bg-primary p-4 font-2xl"></i>
                  </span>
                  <div class="h5 text-primary mb-0 pt-3">{{plays}}</div>
                  <div class="text-muted text-uppercase font-weight-bold font-xs">Watchers</div>
                </b-card-body>
              </b-card>

              <!-- Tooltip -->
              <b-tooltip v-if="tooltips" target="watchers-card">
                {{ strings.watchers_text }}
              </b-tooltip>
            </b-col>

            <b-col lg="4" xl="3">
              <b-card :no-body="true" id="completers-card">
                <b-card-body class="p-0 clearfix align-data mr-3">
                  <span class="iconsquare">
                    <i class="fa fa-check bg-primary p-4 font-2xl float-left"></i>
                  </span>
                  <div class="h5 text-primary mb-0 pt-3">{{full_plays}}</div>
                  <div class="text-muted text-uppercase font-weight-bold font-xs">Completed</div>
                </b-card-body>
              </b-card>

              <!-- Tooltip -->
              <b-tooltip v-if="tooltips" target="completers-card">
                {{ strings.completers_text }}
              </b-tooltip>
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
                  <div class="h5 text-primary mb-0 pt-3">{{ratio * 100}}%</div>
                  <div class="text-muted text-uppercase font-weight-bold font-xs">Like/Dislike Ratio</div>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
        </b-col>

        <!-- Link to next vid -->
        <b-col md="3" lg="2">
          <div v-if="hasNextItem" class="link-container">
            <router-link :to=nextItemUrl>
              <b-card class="link-card">
                <table>
                  <tr>
                    <th>
                      <span class="link-card-text">Next item</span>
                      <span class="link-card-subtext">{{ nextItemType }}</span>
                      <span v-if="showNextItemPassingFraction && qdt" class="link-card-subtext"><b>Passing fraction:</b> {{ nextItemPassingFraction * 100 }}%</span>
                    </th>
                    <th class="icon-cell">
                      <i class="fa fa-2x fa-chevron-right"></i>
                    </th>
                  </tr>
                </table>
              </b-card>
            </router-link>
          </div>
          <div v-if="hasNextVideo" class="link-container">
            <router-link :to=nextVideoUrl>
              <b-card class="link-card">
                <table>
                  <tr>
                    <th>
                      <span class="link-card-text">Next video</span>
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
          <b-card header="Video views over video runtime" id="views-over-time-card">
            <div class="chart-wrapper">
              <!-- <line-graph class="graph" :aspectRatio=maintainAspectRatio :beginAtZero=true :data=chartData :labels=chart_labels></line-graph> -->
              <chart :data=chartData :layout=chartLayout></chart>
            </div>
          </b-card>

          <!-- Tooltip -->
          <b-tooltip v-if="tooltips" target="views-over-time-card">
            {{ strings.views_over_time_text }}
          </b-tooltip>
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
import { EventBus } from "@/event-bus";
import events from "@/events";

export default {
  name: "VideoDetail",
  data: function() {
    return {
      // For using in html
      strings: strings,

      // Show tooltips option
      tooltips: this.$store.state.tooltips,

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
      chartData: [],
      chartLayout: {},

      // Next item
      nextItemUrl: "",
      nextItemType: "",
      showNextItemPassingFraction: false,
      hasNextItem: false,
      nextItemPassingFraction: 0,
      // Next video
      nextVideoUrl: "",
      hasNextVideo: false,
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
  mounted() {
    EventBus.$on(events.refresh_component, data => {
      this.getVideoData();
    });
  },
  beforeDestroy() {
    EventBus.$off(events.refresh_component, null);
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

      if (
        this.videoData.next_video &&
        this.videoData.next_video.item_id != ""
      ) {
        this.hasNextVideo = true;
        this.nextVideoUrl =
          "/" +
          this.$store.state.selectedPlatform +
          "/" +
          this.$store.state.selectedCourse +
          "/videos/" +
          this.videoData.next_video.item_id;
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

      this.chartData[0] = {};
      this.chartData[1] = {
        x: [],
        y: [],
        text: [],
        name: "Highs",
        marker: {
          color: colors.green,
          size: 12,
        },
      };
      this.chartData[2] = {
        x: [],
        y: [],
        text: [],
        name: "Lows",
        marker: {
          color: colors.red,
          size: 12,
        },
      };
      this.chartData[0].x = [];
      this.chartData[0].y = [];
      this.chartData[0].name = "Video views over video runtime";
      this.chartData[0].marker = { color: colors.blue, };
      this.chartLayout = {
        xaxis: {
          title: "Number of seconds",
        },
        yaxis: {
          title: "Number of views",
        },
      };
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
        this.chartData[0].x.push(view[0]);
        this.chartData[0].y.push(view[1]);
      }
      // Add high point to highs trace
      if (highx !== -1) {
        this.chartData[1].x.push(highx);
        this.chartData[1].y.push(high);
        this.chartData[1].text.push("High");
      }
      // Add low point to lows trace
      if (lowx !== -1) {
        this.chartData[2].x.push(lowx);
        this.chartData[2].y.push(low);
        this.chartData[2].text.push("Low");
      }
      this.chartLayout.showlegend = false;
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
