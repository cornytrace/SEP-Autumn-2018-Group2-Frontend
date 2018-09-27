<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="6" md="4">
        <b-card header="Lesson 1">
          This is a discription of the first lesson
          <div slot="footer">
            <router-link to="">Details...</router-link>
          </div>
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card header="Lesson 2">
          This is a discription of the second lesson
          <div slot="footer">
            <router-link to="">Details...</router-link>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <!--/.row-->
  </div>
</template>

<script>
import util from "@/util";

export default {
  name: "Lessons",
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
.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
