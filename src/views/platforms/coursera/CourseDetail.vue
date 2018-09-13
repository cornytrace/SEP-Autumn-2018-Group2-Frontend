<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="6" md="8">
        <b-card header="Automata System Validation">
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
          <b-form-group
            label="Select a quiz:"
            label-for="select-quiz"
            :label-cols="3"
            :horizontal="true">
            <b-form-select id="select-quiz"
              :plain="true"
              :options="['Automata to model behaviour','Basic behavioural equivalences', 'More behavioural equivalences']"
              value="More behavioural equivalences">
            </b-form-select>
          </b-form-group>
          <b-form-group
            label="Select a quiz version:"
            label-for="select-quiz-version"
            :label-cols="3"
            :horizontal="true">
            <b-form-select id="select-quiz-version"
              :plain="true"
              :options="['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13']"
              value="13">
            </b-form-select>
          </b-form-group>
        </b-card>
      </b-col>
      <b-col cols="12" sm="6" lg="3">
        <b-row>
          <b-col sm="6" md="12">
            <b-card :no-body="true">
              <b-card-body class="p-0 clearfix">
                <i class="fa fa-star bg-primary p-4 font-2xl mr-3 float-left"></i>
                <div class="h5 text-primary mb-0 pt-3">0.63</div>
                <div class="text-muted text-uppercase font-weight-bold font-xs">Average grade</div>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col cols="12" sm="6" lg="12">
            <b-card :no-body="true">
              <b-card-body class="p-0 clearfix">
                <i class="fa fa-user bg-primary p-4 font-2xl mr-3 float-left"></i>
                <div class="h5 text-primary mb-0 pt-3">107</div>
                <div class="text-muted text-uppercase font-weight-bold font-xs">Unique learners</div>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col cols="12" sm="6" lg="12">
            <b-card :no-body="true">
              <b-card-body class="p-0 clearfix">
                <i class="fa fa-clipboard bg-primary p-4 font-2xl mr-3 float-left"></i>
                <div class="h5 text-primary mb-0 pt-3">920</div>
                <div class="text-muted text-uppercase font-weight-bold font-xs">Total responses</div>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row><!--/.row-->
    <b-row>
      <b-col md="6">
        <b-card header="Grade distribution">
          <div class="chart-wrapper">
            <line-example chartId="chart-line-01"/>
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card header="P-value v. RIT-score">
          <div class="chart-wrapper">
            <scatter-example chartId="chart-scatter-01"/>
          </div>
        </b-card>
      </b-col>
    </b-row><!--/.row-->
  </div>
</template>

<script>
import LineExample from "@/views/charts/LineExample";
import ScatterExample from "@/views/charts/ScatterExample";

export default {
  name: "course-detail",
  data: function() {
    return {
      show: true,
      course: this.$route.params.courseid,
    };
  },
  components: {
    LineExample,
    ScatterExample,
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
