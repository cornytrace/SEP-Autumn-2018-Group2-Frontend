<template>
  <div class="animated fadeIn">
    <div class="stats-container" v-if="!isLoading">
      <b-row>
        <b-col sm="6" md="4" v-for="course in courses" :key="course.name">
          <b-card class="course-card" no-body :header="course.name">
            <b-card-body class="pb-0">
              <ul>
                <li><span class="li-title">Enrolled learners:</span> {{ course.enrolled_learners }}</li>
                <li><span class="li-title">Finished learners:</span> {{ course.finished_learners }}</li>
                <li><span class="li-title">Leaving learners:</span> {{ course.leaving_learners }}</li>
              </ul>
            </b-card-body>
            <div slot="footer">
              <router-link :to="{ name: 'CourseDetail', params: { courseid: course.slug } }">Details...</router-link>
            </div>
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
import util from "@/util";
import strings from "@/strings";

export default {
  name: "Courses",
  data: function() {
    return {
      show: true,
      courses: [],
      util: util,
      isLoading: false,
      loadingText: strings.loading,
    };
  },
  mounted: function() {
    this.isLoading = true;
    util
      .getDetailedCourseData("", this.$store.state.filters)
      .then(response => {
        this.isLoading = false;
        this.courses = response.data;
      })
      .catch(err => {
        this.loadingText = strings.connection_error;
      });
  },
};
</script>

<style scoped>
.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter .fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
.course-card ul {
  list-style: none;
  padding-left: 0;
}

.course-card ul .li-title {
  font-weight: bold;
}
</style>-
