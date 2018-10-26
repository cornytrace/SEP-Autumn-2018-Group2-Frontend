<template>
  <div class="animated fadeIn">
    <div class="stats-container" v-if="!isLoading">
      <b-row>
        <b-col sm="6" md="4" v-for="course in courses" :key="course.name">
          <b-card class="course-card" no-body>
            <b-card-header>
              <router-link :to="{ name: 'CourseDetail', params: { courseid: course.slug } }">{{course.name}}</router-link>
              <div :style="{ backgroundColor: course.specialization_color}" class="specialization-indicator">{{ course.specialization }}</div>
            </b-card-header>
            <b-card-body class="pb-3">

              <table>
                <tr>
                  <td>Level:</td>
                  <td>{{ course.level }}</td>
                </tr>
                <tr>
                  <td>Enrolled:</td>
                  <td>{{ course.enrolled_learners }}</td>
                </tr>
                <tr>
                  <td>Finished:</td>
                  <td>{{ course.finished_learners }}</td>
                </tr>
                <tr v-if="qdt">
                  <td>Paying:</td>
                  <td>{{ course.paying_learners }}</td>
                </tr>
                <tr id="last-row">
                  <td>Leaving:</td>
                  <td>{{ course.leaving_learners }}</td>
                </tr>
              </table>
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
      colors: ["#00a9d444", "#29BF1244", "#F21B3F44", "#FF991444",],
      lastSpecialization: "",
      lastIndex: 0,
      qdt: this.$store.state.user.role === "qdt",
    };
  },
  mounted: function() {
    this.isLoading = true;
    util
      .getCoursesData(this.$store.state.filters)
      .then(response => {
        // Check if the data returned has at least one course
        if (response.data.length > 0) {
          for (let course of response.data) {
            if (!course.level) {
              course.level = "-";
            }
            course.specialization_color = this.getColor(course.specialization);
          }
          this.isLoading = false;
          this.courses = response.data;
        } else {
          // When we recieve no courses, show message
          this.loadingText = strings.no_courses;
        }
      })
      .catch(err => {
        this.loadingText = strings.connection_error;
      });
  },
  methods: {
    // Function for applying matching colors to courses with the same specialisation
    getColor(specialization) {
      if (specialization !== this.lastSpecialization) {
        this.lastIndex = (this.lastIndex + 1) % this.colors.length;
        this.lastSpecialization = specialization;
      }
      return this.colors[this.lastIndex];
    },
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

.course-card .specialization-indicator {
  width: 100%;
  margin-top: 5px;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 3px;
  padding-bottom: 3px;
  font-size: 0.7rem;
  margin-left: 0;
  margin-right: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 3px;
}

.course-card .card-header {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.course-card .card-header a {
  color: #23282c;
}

.course-card .card-header a:hover {
  color: #20a8d8;
}

.course-card table td {
  max-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>-
