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
                <div class="h5 text-primary mb-0 pt-3">482</div>
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
                <div class="h5 text-primary mb-0 pt-3">236</div>
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
                <div class="h5 text-primary mb-0 pt-3">53</div>
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
                <div class="h5 text-primary mb-0 pt-3">12</div>
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
                <div class="h5 text-primary mb-0 pt-3">482</div>
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
                <div class="h5 text-primary mb-0 pt-3">236</div>
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
    
      <!-- Page bottom half -->
    </b-row>
    <b-row>
      <b-col sm="6">
        <b-card title="Graph 1">
        </b-card>
      </b-col>

      <b-col sm="6">
        <b-card title="Graph 2">

          
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "VideoDetail",
  data: function() {
    return {
      qdt: true,
      video_title: "Video Title",
      input_text: "",
    };
  },
};
</script>

<style scoped>
</style>
