<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="6" md="6">
        <b-card :header="course">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col cols="12" sm="6" lg="3">
        <b-card :no-body="true">
          <b-card-body class="p-0 clearfix">
            <i class="fa fa-star bg-primary p-4 font-2xl mr-3 float-left"></i>
            <div class="h5 text-primary mb-0 pt-3">0.63</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Average grade</div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col cols="12" sm="6" lg="3">
        <b-card :no-body="true">
          <b-card-body class="p-0 clearfix">
            <i class="fa fa-user bg-primary p-4 font-2xl mr-3 float-left"></i>
            <div class="h5 text-primary mb-0 pt-3">107</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Unique learners</div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col cols="12" sm="6" lg="3">
        <b-card :no-body="true">
          <b-card-body class="p-0 clearfix">
            <i class="fa fa-clipboard bg-primary p-4 font-2xl mr-3 float-left"></i>
            <div class="h5 text-primary mb-0 pt-3">920</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Total responses</div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row><!--/.row-->
  </div>
</template>

<script>
export default {
  name: 'course-detail',
  data: function () {
    return {
      show: true,
      course: this.$route.params.courseid,
    }
  }
}
</script>

<style scoped>
  .fade-enter-active {
    transition: all .3s ease;
  }
  .fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fade-enter, .fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
