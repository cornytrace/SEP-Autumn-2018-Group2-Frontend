<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="4" lg="4">
        <b-card no-body class="bg">
          <b-card-header>
            <router-link :to="this.link + '/1'">Video 1</router-link>
          </b-card-header>
          <b-card-body class="pb-0">
            <b-card no-body class="bg-primary">
              <b-card-header>
                Video stat 1
              </b-card-header>
              <b-card-body class="pb-0">
                <p>Data Video stat 1</p>
              </b-card-body>
            </b-card>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col sm="4" lg="4">
        <b-card no-body class="bg">
          <b-card-header>
            <router-link :to="this.link + '/2'">Video 2</router-link>
          </b-card-header>
          <b-card-body class="pb-0">
            <b-card no-body class="bg-primary">
              <b-card-header>
                Video stat 2
              </b-card-header>
              <b-card-body class="pb-0">
                <p>Data Video stat 2</p>
              </b-card-body>
            </b-card>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Videos",
  data() {
    return {
      link: "",
    };
  },
  // Set the link variable to the path of the current page.
  beforeMount() {
    this.link = this.$route.path;
  },
};
</script>