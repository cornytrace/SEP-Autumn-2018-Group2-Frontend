<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="4" lg="4" v-for="video of videos" :key="video.name">
        <b-card no-body class="bg">
          <b-card-header>
            <router-link :to="link + '/' + video.id">{{ video.name }}</router-link>
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
import settings from "@/settings";

export default {
  name: "Videos",
  data() {
    return {
      link: "",
      videos: [],
    };
  },
  // Set the link variable to the path of the current page.
  beforeMount() {
    this.link = this.$route.path;

    // Mock function, should be replaced with the proper videos
    for (var video of settings.videos) {
      this.videos.push({ id: video.id, name: video.name, });
    }
  },
};
</script>