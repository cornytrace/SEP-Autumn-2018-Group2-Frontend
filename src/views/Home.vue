<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col v-for="platform in platforms" :key="platform.name" :sm="8/platforms.length" :lg="8/platforms.length">
        <b-card class="bg" no-body>
          <b-card-header>
            <router-link :to="platform.name.toLowerCase()">
              <h4>{{platform.name}}</h4>
            </router-link>
          </b-card-header>
          <b-card-body class="pb-0">
            <b-row>
              <b-col v-for="statistic in statisticsCoursera" :key="statistic.name" :lg="6" :xl="4">
                <b-card :no-body="true">
                  <b-card-body class="p-0 clearfix stats-card">
                    <i :class="statistic.icon" class="bg-success p-2 font-2xl mr-2 float-left icon-container"></i>
                    <div class="table-container">
                      <table>
                        <tr>
                          <th>
                            <div class="h3 mb-0 text-success float-left mt-1">{{statistic.value}}</div>
                          </th>
                          <th>
                            <div class="h6 mb-0 text-center float-left pl-1 mt-3 text-muted">{{statistic.text}}</div>
                          </th>
                        </tr>
                      </table>
                    </div>

                  </b-card-body>
                </b-card>
              </b-col>
            </b-row>
            <div class="divider">
            </div>
            <b-row>
              <b-col v-for="course in coursesCoursera" :key="course.name" :md="12" :lg="6" :xl="6">
                <b-card no-body>
                  <b-card-header class="bg-primary">
                    <router-link :to="'/coursera/'+course.slug" class="link-light font-weight-bold">{{ course.name }}</router-link>
                  </b-card-header>
                  <b-card-body no-body class="pb-0 pt-0 pl-3 pr-3">
                    <b-row>
                      <b-col class=" pt-3 pb-3 border borderdark border-top-0 border-left-0 text-center">
                        <h2 class="text-primary">{{course.enrolled_learners}}</h2>
                        <h5 class="text-muted">enrolled</h5>
                      </b-col>
                      <b-col class=" pt-3 pb-3 border borderdark border-top-0 border-right-0 text-center">
                        <h2 class="text-primary">{{course.leaving_learners}}</h2>
                        <h5 class="text-muted">leavers</h5>
                      </b-col>
                      <div class="w-100"></div>
                      <b-col class=" pt-3 pb-3 border borderdark border-bottom-0 border-left-0 text-center">
                        <h2 class="text-primary">{{course.finished_learners}}</h2>
                        <h5 class="text-muted">finished</h5>
                      </b-col>
                      <b-col class=" pt-3 pb-3 border borderdark border-bottom-0 border-right-0 text-center">
                        <h2 class="text-primary">{{Math.round(arrayWeightedAverage(course.ratings) * 100) / 100}}</h2>
                        <h5 class="text-muted">rating</h5>
                      </b-col>
                    </b-row>
                  </b-card-body>
                </b-card>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col :sm="4">
        <b-card class="bg useful-link" no-body>
          <b-card-header>
            <h4>Useful links</h4>
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
import util from "@/util";

export default {
  name: "home",
  data: function() {
    return {
      platforms: settings.platforms,
      courses: 0,
      learners: 0,
      completers: 0,
      paidUsers: 0,
      coursesCoursera: [],
      resources: settings.resources,
    };
  },
  computed: {
    statisticsCoursera() {
      return {
        courses: {
          text: "courses",
          value: this.coursesCoursera.length,
          icon: "fa fa-book",
        },
        learners: {
          text: "learners",
          value: this.coursesCoursera.reduce(
            (a, b) => a + b.enrolled_learners,
            0
          ),
          icon: "fa fa-user",
        },
        completers: {
          text: "completers",
          value: this.coursesCoursera.reduce(
            (a, b) => a + b.finished_learners,
            0
          ),
          icon: "fa fa-check",
        },
        // paidUsers: {
        //   text: "paid users",
        //   value: 0,
        //   icon: "fa fa-money",
        // },
      };
    },
  },
  methods: {
    arrayWeightedAverage: util.arrayWeightedAverage,
    arrayColumn: util.arrayColumn,
  },
  beforeMount() {
    //this.statisticsCoursera.courses.value = this.$store.state.user.courses.length;
    util.getDetailedCourseData("", this.$store.state.filters).then(response => {
      this.coursesCoursera = response.data;
    });
  },
};
</script>

<style>
/* IE fix */
#card-chart-01,
#card-chart-02 {
  width: 100% !important;
}

.stats-card .table-container {
  min-height: 100%;
}

.stats-card table {
  height: 40px;
  padding-left: 10px;
  width: auto;
}

.stats-card table tr,
.stats-card table th {
  height: 100%;
}

.stats-card .h3,
.stats-card .h6 {
  margin: 0 !important;
}

.icon-container {
  text-align: center;
  width: 42px;
}

.divider {
  width: 100%;
  height: 2px;
  border-radius: 1px;
  background-color: rgba(240, 240, 240, 0.8);
  margin-bottom: 20px;
}

.useful-link a {
  color: #20a8d8;
}

.card-header {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
