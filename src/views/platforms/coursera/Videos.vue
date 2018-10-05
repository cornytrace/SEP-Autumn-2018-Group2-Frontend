<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="4" lg="4" v-for="video of videos" :key="video.name">
        <b-card no-body class="bg">
          <b-card-header>
            <router-link :to="link + '/' + video.item_id">{{ video.name }}</router-link>
          </b-card-header>
          <b-card-body class="pb-0">
            <b-card no-body class="bg-primary">
              <b-card-header>
                {{ video.name }} stat
              </b-card-header>
              <b-card-body class="pb-0">
                <p>Data {{ video.name }} stat </p>
              </b-card-body>
            </b-card>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
//import settings from "@/settings";
import util from "@/util";

export default {
  name: "Videos",
  data() {
    return {
      courseId: "",
      courseSlug: "",
      videos: [],
      link: this.$route.fullPath,
    };
  },
  // Set the link variable to the path of the current page.
  beforeMount() {
    this.courseSlug = this.$route.params.courseid;
    console.log(this.$route.params.courseid);
    this.getVideos();
  },
  methods: {
    getVideos() {
      var currentCourse = this.$store.state.user.courses.find(
        x => x.course_slug === this.courseSlug
      );
      if (currentCourse) {
        this.courseId = currentCourse.course_id;
        util
          .getVideos(this.courseId)
          .then(response => {
            this.videos = response.data;
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
  },
};
</script>