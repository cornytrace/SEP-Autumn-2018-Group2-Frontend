<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="6" md="4" v-for="course in courses" :key="course.name">
        <b-card :header="course.name">
          {{course.description}}
          <div slot="footer"><router-link :to="{ name: 'CourseDetail', params: { courseid: util.toUrl(course.name)} }">Details...</router-link></div>
        </b-card>
      </b-col>
    </b-row><!--/.row-->
  </div>
</template>

<script>
import util from "@/util";

export default {
  name: "Courses",
  data: function() {
    return {
      show: true,
      courses: [],
      util: util,
    };
  },
  mounted: function() {
    this.courses = this.$store.state.courses;
  },
};
</script>

<style scoped>
.fade-en-ive {
  transi-ll 0.3s ease;
}
.fade-le-ive {
  transi-ll 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-en-
.fade-le-{
  transf-anslateX(10px);
  opacit-
}
</style>-
