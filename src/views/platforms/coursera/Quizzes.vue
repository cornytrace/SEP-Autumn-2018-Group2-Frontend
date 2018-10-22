<template>
  <div class="animated fadeIn">
    <div class="stats-container" v-if="!isLoading">
      <b-row>
        <b-col sm="4" lg="4" v-for="quiz of quizzes" :key="quiz.name">
          <b-card no-body class="bg quiz-card">
            <b-card-header>
              <router-link :to="link + '/' + quiz.base_id + '-' + quiz.version">{{ quiz.name }}</router-link>
            </b-card-header>
            <b-card-body class="pb-0">
              <ul>
                <li><span class="li-title">Version:</span> {{ quiz.version }}</li>
                <li><span class="li-title">Type:</span> {{ quiz.type }}</li>
                <li><span class="li-title">Passing ratio:</span> {{ quiz.passing_fraction }}</li>
              </ul>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </div>
    <div class="loading-content" v-if="isLoading">
      <h2>{{loadingText}}</h2>
    </div>
  </div>
</template>

<script>
import strings from "@/strings";
import util from "@/util";

export default {
  name: "Quizzes",
  data: function() {
    return {
      quizzes: [],
      courseId: "",
      loadingText: strings.loading,
      isLoading: false,
      courseSlug: "",
      link: this.$route.fullPath,
    };
  },
  // Set the link variable to the path of the current page.
  beforeMount() {
    this.courseSlug = this.$route.params.courseid;
    this.isLoading = true;
    this.getQuizzes();
  },
  methods: {
    getQuizzes() {
      var currentCourse = this.$store.state.user.courses.find(
        x => x.course_slug === this.courseSlug
      );
      if (currentCourse) {
        this.courseId = currentCourse.course_id;
        util
          .getQuizzes(this.courseId, this.$store.state.filters)
          .then(response => {
            if (response.data.length > 0) {
              this.quizzes = response.data;
              this.isLoading = false;
            } else {
              this.loadingText = "No quizzes";
            }
          })
          .catch(err => {
            console.log(err);
            this.loadingText = strings.connection_error;
          });
      }
    },
  },
};
</script>

<style>
.quiz-card ul {
  list-style: none;
  padding-left: 0;
}

.quiz-card ul .li-title {
  font-weight: bold;
}
</style>
