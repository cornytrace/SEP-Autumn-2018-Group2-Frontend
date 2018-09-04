<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="6" md="4">
        <b-card header="Course 1">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          <div slot="footer"><router-link :to="{ name: 'CourseDetail', params: { courseid: 'automata-system-validation'} }">Details...</router-link></div>
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card header="Course 2">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          <div slot="footer"><router-link :to="{ name: 'CourseDetail', params: { courseid: 'automata-system-validation'} }">Details...</router-link></div>
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card header="Course 3">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          <div slot="footer"><router-link :to="{ name: 'CourseDetail', params: { courseid: 'automata-system-validation'} }">Details...</router-link></div>
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card header="Course 4">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          <div slot="footer"><router-link :to="{ name: 'CourseDetail', params: { courseid: 'automata-system-validation'} }">Details...</router-link></div>
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card header="Course 5">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          <div slot="footer"><router-link :to="{ name: 'CourseDetail', params: { courseid: 'automata-system-validation'} }">Details...</router-link></div>
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card header="Course 6">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          <div slot="footer"><router-link :to="{ name: 'CourseDetail', params: { courseid: 'automata-system-validation'} }">Details...</router-link></div>
        </b-card>
      </b-col>
    </b-row><!--/.row-->
  </div>
</template>

<script>
export default {
  name: "course-overview",
  data: function() {
    return {
      show: true
    };
  }
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
