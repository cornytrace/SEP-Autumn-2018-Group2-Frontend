<template>
  <div class="animated fadeIn">
    <b-row>
      <b-column>
        <h2>{{video_title}}</h2>
      </b-column>
    </b-row>
    <b-row>
    
      <!-- Basic analytics -->
      <b-col sm="3">
       <b-row>
        <b-col>
          <b-card :no-body="true">
              <b-card-body class="p-0 clearfix">
                <i class="fa fa-play bg-primary p-4 font-2xl mr-3 float-left"></i>
                <div class="h5 text-primary mb-0 pt-3">{{plays}}</div>
                <div class="text-muted text-uppercase font-weight-bold font-xs">Total Plays</div>
              </b-card-body>
            </b-card>
        </b-col>
       </b-row>
      

       <b-row>
         <b-col>
           <b-card :no-body="true">
              <b-card-body class="p-0 clearfix">
                <i class="fa fa-check bg-primary p-4 font-2xl mr-3 float-left"></i>
                <div class="h5 text-primary mb-0 pt-3">{{full_plays}}</div>
                <div class="text-muted text-uppercase font-weight-bold font-xs">Complete Plays</div>
              </b-card-body>
            </b-card>
         </b-col>
       </b-row>
      </b-col>

       <b-col sm="3">
       <b-row>
        <b-col>
          <b-card :no-body="true">
              <b-card-body class="p-0 clearfix">
                <i class="fa fa-thumbs-up bg-primary p-4 font-2xl mr-3 float-left"></i>
                <div class="h5 text-primary mb-0 pt-3">{{likes}}</div>
                <div class="text-muted text-uppercase font-weight-bold font-xs">Likes</div>
              </b-card-body>
            </b-card>
        </b-col>
       </b-row>
      

       <b-row>
         <b-col>
           <b-card :no-body="true">
              <b-card-body class="p-0 clearfix">
                <i class="fa fa-comment bg-primary p-4 font-2xl mr-3 float-left"></i>
                <div class="h5 text-primary mb-0 pt-3">{{comments}}</div>
                <div class="text-muted text-uppercase font-weight-bold font-xs">Comments</div>
              </b-card-body>
            </b-card>
         </b-col>
       </b-row>
      </b-col>
       <!-- Extra QDT stats -->
       <b-col v-if="qdt" sm="3">
       <b-row>
        <b-col>
          <b-card :no-body="true">
              <b-card-body class="p-0 clearfix">
                <i class="fa fa-thumbs-down bg-primary p-4 font-2xl mr-3 float-left"></i>
                <div class="h5 text-primary mb-0 pt-3">{{dislikes}}</div>
                <div class="text-muted text-uppercase font-weight-bold font-xs">Dislikes</div>
              </b-card-body>
            </b-card>
        </b-col>
       </b-row>
      

       <b-row>
         <b-col>
           <b-card :no-body="true">
              <b-card-body class="p-0 clearfix">
                <i class="fa fa-check bg-primary p-4 font-2xl mr-3 float-left"></i>
                <div class="h5 text-primary mb-0 pt-3">{{ratio}}</div>
                <div class="text-muted text-uppercase font-weight-bold font-xs">Like/Dislike Ratio</div>
              </b-card-body>
            </b-card>
         </b-col>
       </b-row>
      </b-col>

      <b-col>
      </b-col>
      <!-- Link to next vid -->
        <b-col sm="2">
        <b-card title="Next Up:">
          <p class="card-text">Title of next video</p>
          <a href="#" class="card-link">Go to video</a>
        </b-card>
      </b-col>
    </b-row>
      <!-- Page bottom half -->
    
    <b-row class="graph" >
      <b-col>
        <b-card title="Graph 1" >
        </b-card>
     <b-row>
    <b-col md="12">
        <b-card header="Grade distribution">
          <div class="chart-wrapper">
            <line-example :data= chart_data :maintainAspectRatio=false :labels= chart_labels></line-example>
          </div>
        </b-card>
      </b-col>
      </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import LineExample from "@/views/charts/LineExample";

export default {
  name: "VideoDetail",
  data: function() {
    return {
      qdt: true,
      video_title: "Video Title",
      likes: 64,
      dislikes: 21,
      plays: 592,
      full_plays: 263,
      ratio: 3,
      comments: 23,

      nextvid: "#",

      chart_data: [0.3, 0.8, 0.3, 0.5, 0.1, 2, 1, 1, 1, 1, 1, 0.2,],
      chart_labels: [0.9, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1,],
    };
  },

  extends: LineExample,
  mounted: function() {},

  components: {
    LineExample,
  },
};
</script>

<style scoped>
</style>
