<template>
  <div class="animated fadeIn">
    <div class="stats-container" v-if="!isLoading">
      <b-row>
        <b-col sm="4" lg="4" v-for="assignment of assignments" :key="assignment.item_id">
          <b-card no-body class="bg assignment-card">
            <b-card-header>
              <router-link :to="link + '/' + assignment.item_id">{{ assignment.name }}</router-link>
            </b-card-header>
            <b-card-body class="pb-0">
              <ul>
                <li v-if="assignment.optional"><span class="li-title">Optional:</span> yes</li>
                <li v-if="!assignment.optional"><span class="li-title">Optional:</span> no</li>
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
  name: "Assignments",
  data() {
    return {
      courseId: "",
      loadingText: strings.loading,
      isLoading: false,
      courseSlug: "",
      assignments: [],
      link: this.$route.fullPath,
    };
  },
  // Set the link variable to the path of the current page.
  beforeMount() {
    this.courseSlug = this.$route.params.courseid;
    this.isLoading = true;
    this.getAssignments();
  },
  methods: {
    getAssignments() {
      var currentCourse = this.$store.state.user.courses.find(
        x => x.course_slug === this.courseSlug
      );
      if (currentCourse) {
        this.courseId = currentCourse.course_id;
        util
          .getAssignments(this.courseId, this.$store.state.filters)
          .then(response => {
            if (response.data.length) {
              this.isLoading = false;
              this.assignments = response.data;
            } else {
              this.loadingText = strings.no_assignments;
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
.assignment-card ul {
  list-style: none;
  padding-left: 0;
}

.assignment-card ul .li-title {
  font-weight: bold;
}
</style>
