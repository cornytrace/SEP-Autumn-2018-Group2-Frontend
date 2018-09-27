<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="4" lg="4" v-for="quiz of quizzes" :key="quiz.name">
        <b-card no-body class="bg">
          <b-card-header>
            <router-link :to="link + '/' + quiz.id">{{ quiz.name }}</router-link>
          </b-card-header>
          <b-card-body class="pb-0">
            <b-card no-body class="bg-primary">
              <b-card-header>
                {{ quiz.name }} stat
              </b-card-header>
              <b-card-body class="pb-0">
                <p>Data {{ quiz.name }} stat</p>
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
  name: "Quizzes",
  data: function() {
    return {
      link: "",
      quizzes: [],
    };
  },
  // Set the link variable to the path of the current page.
  beforeMount() {
    this.link = this.$route.path;
    for (var quiz of settings.quizzes) {
      this.quizzes.push({ id: quiz.id, name: quiz.name, });
    }
  },
};
</script>