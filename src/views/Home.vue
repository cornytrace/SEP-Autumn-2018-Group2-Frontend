<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col v-for="platform in platforms" :key="platform.name" :sm="8/platforms.length" :lg="8/platforms.length">
        <b-card class="bg" no-body>
          <b-card-header>
            <router-link :to="platform.name.toLowerCase()" ><h4>{{platform.name}}</h4></router-link>
          </b-card-header>
          <b-card-body class="pb-0">
            <b-row>
              <b-col v-for="statistic in statisticsCoursera" :key="statistic.name" :sm="3">
                <b-card :no-body="true">
                  <b-card-body class="p-0 clearfix">
                    <i :class="statistic.icon" class="bg-success p-2 font-2xl mr-2 float-left"></i>
                    <div class="h3 mb-0 text-success float-left mt-1">{{statistic.number}}</div>
                    <div class="h6 mb-0 text-center float-left pl-2 mt-3 text-muted">{{statistic.name}}</div>
                  </b-card-body>
                </b-card>
              </b-col>
            </b-row>
            <b-row>
              <b-col v-for="course in coursesCoursera" :key="course.name" :sm="4">
                <b-card no-body>
                  <b-card-header class="bg-primary">
                    <router-link to="/course/automata-system-validation" class="link-light font-weight-bold">{{course.name}}</router-link>
                  </b-card-header>
                  <b-card-body no-body class="pb-0 pt-0 pl-3 pr-3">
                    <b-row>
                      <b-col class=" pt-3 pb-3 border borderdark border-top-0 border-left-0 text-center">
                        <h2 class="text-primary">{{course.learnersEnrolled}}</h2>
                        <h5 class="text-muted">enrolled</h5>
                      </b-col>
                      <b-col class=" pt-3 pb-3 border borderdark border-top-0 border-right-0 text-center">
                        <h2 class="text-primary">{{course.learnersPaying}}</h2>
                        <h5 class="text-muted">paying</h5>
                      </b-col>
                      <div class="w-100"></div>
                      <b-col class=" pt-3 pb-3 border borderdark border-bottom-0 border-left-0 text-center">
                        <h2 class="text-primary">{{course.learnersEnrolled}}</h2>
                        <h5 class="text-muted">enrolled</h5>
                      </b-col>
                      <b-col class=" pt-3 pb-3 border borderdark border-bottom-0 border-right-0 text-center">
                        <h2 class="text-primary">{{course.learnersPaying}}</h2>
                        <h5 class="text-muted">paying</h5>
                      </b-col>
                    </b-row>
                  </b-card-body>
                </b-card>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col :sm="4" >
        <b-card class="bg" no-body>
          <b-card-header>
            <h4>Links</h4>
          </b-card-header>
          <b-card-body>
            <b-list-group v-for="resource in resources" :key="resource.name">
              <b-list-group-item :href="resource.link">{{resource.name}}</b-list-group-item>
            </b-list-group>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import settings from "@/settings";

export default {
  name: "home",
  data: function() {
    return {
      platforms: settings.platforms,
      resources: [
        {
          name: "Coursera for Educators",
          link: "https://blog.coursera.org/for-educators/",
        },
        {
          name: "Resource 2",
          link: "#",
        },
        {
          name: "Resource 3",
          link: "#",
        },
        {
          name: "Resource 4",
          link: "#",
        },
      ],
      statisticsCoursera: [
        {
          name: "courses",
          number: "3",
          icon: "fa fa-book",
        },
        {
          name: "learners",
          number: "18",
          icon: "fa fa-user",
        },
        {
          name: "completers",
          number: "6",
          icon: "fa fa-check",
        },
        {
          name: "paid users",
          number: "12",
          icon: "fa fa-money",
        },
      ],
      coursesCoursera: [
        {
          name: "Python for Everybody",
          learnersEnrolled: "15",
          learnersPaying: "8",
        },
        {
          name: "Data Science",
          learnersEnrolled: "34",
          learnersPaying: "5",
        },
        {
          name: "Algorithms",
          learnersEnrolled: "23",
          learnersPaying: "18",
        },
        {
          name: "Sequence Models",
          learnersEnrolled: "86",
          learnersPaying: "12",
        },
        {
          name: "R Programming",
          learnersEnrolled: "7",
          learnersPaying: "0",
        },
        {
          name: "Machine Learning",
          learnersEnrolled: "65",
          learnersPaying: "46",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style>
/* IE fix */
#card-chart-01,
#card-chart-02 {
  width: 100% !important;
}
</style>
