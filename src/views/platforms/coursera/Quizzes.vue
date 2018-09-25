<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="8" lg="6">
        <b-card no-body class="bg">
          <b-card-header><router-link :to="this.link + '/1'">Quiz 1</router-link></b-card-header>
          <b-card-body class="pb-0">
            <b-card no-body class="bg-primary">
              <b-card-header>
                Quiz 1 stat 
              </b-card-header>
              <b-card-body class="pb-0">
                <p>Data Quiz 1 stat</p>
              </b-card-body>
            </b-card>
          </b-card-body>
        </b-card>
        <b-card no-body class="bg">
          <b-card-header><router-link :to="this.link + '/2'">Quiz 2</router-link></b-card-header>
          <b-card-body class="pb-0">
            <b-card no-body class="bg-primary">
              <b-card-header>
                Quiz 2 stat
              </b-card-header>
              <b-card-body class="pb-0">
                <p>Data Quiz 2 stat</p>
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
  name: "Quizzes",
  data: function() {
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