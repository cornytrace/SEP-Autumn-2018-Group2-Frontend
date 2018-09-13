<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col v-for="platform in platforms" :key="platform.name" :sm="12/platforms.length" :lg="12/platforms.length">
        <b-card class="bg" no-body>
          <b-card-header>
            <router-link :to="platform.name.toLowerCase()" ><h4>{{platform.name}}</h4></router-link>
          </b-card-header>
          <b-card-body class="pb-0">
            <b-card no-body>
              <b-card-header class="bg-success">
                Platform Information
              </b-card-header>
              <b-card-body class="pb-0">
                <p>Number of courses: 2<br>Total enrolled student: 243,342<br>Course completers: 243,342<br>Payments: 243,342</p>
                <div class="chart-wrapper">
                </div>
              </b-card-body>
            </b-card>
            <b-card no-body>
              <b-card-header class="bg-primary">
                <router-link to="/course/automata-system-validation" class="link-light">Quantitative model checking</router-link>
              </b-card-header>
              <b-card-body class="pb-0">
                <p>Number of courses: 2<br>Total enrolled student: 243,342<br>New enrolled student: 243,342<br>Course completers: 243,342<br>Payments: 243,342</p>
                <div class="chart-wrapper">
                </div>
              </b-card-body>
            </b-card>
            <b-card no-body>
              <b-card-header class="bg-primary">
                <router-link to="/course/automata-system-validation" class="link-light">Automata system</router-link>
              </b-card-header>
              <b-card-body class="pb-0">
                <p>Number of courses: 2<br>Total enrolled student: 243,342<br>New enrolled student: 243,342<br>Course completers: 243,342<br>Payments: 243,342</p>
                <div class="chart-wrapper">
                </div>
              </b-card-body>
            </b-card>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import BarExample from "./charts/BarExample";
import { Callout } from "@coreui/vue";
import settings from "@/settings";

export default {
  name: "home",
  components: {
    BarExample,
    Callout,
  },
  data: function() {
    return {
      platforms: settings.platforms,
      selected: "Month",
      tableItems: [
        {
          avatar: { url: "img/avatars/1.jpg", status: "success", },
          user: {
            name: "Yiorgos Avraamu",
            new: true,
            registered: "Jan 1, 2015",
          },
          country: { name: "USA", flag: "us", },
          usage: { value: 50, period: "Jun 11, 2015 - Jul 10, 2015", },
          payment: { name: "Mastercard", icon: "fa fa-cc-mastercard", },
          activity: "10 sec ago",
        },
        {
          avatar: { url: "img/avatars/2.jpg", status: "danger", },
          user: {
            name: "Avram Tarasios",
            new: false,
            registered: "Jan 1, 2015",
          },
          country: { name: "Brazil", flag: "br", },
          usage: { value: 22, period: "Jun 11, 2015 - Jul 10, 2015", },
          payment: { name: "Visa", icon: "fa fa-cc-visa", },
          activity: "5 minutes ago",
        },
        {
          avatar: { url: "img/avatars/3.jpg", status: "warning", },
          user: { name: "Quintin Ed", new: true, registered: "Jan 1, 2015", },
          country: { name: "India", flag: "in", },
          usage: { value: 74, period: "Jun 11, 2015 - Jul 10, 2015", },
          payment: { name: "Stripe", icon: "fa fa-cc-stripe", },
          activity: "1 hour ago",
        },
        {
          avatar: { url: "img/avatars/4.jpg", status: "", },
          user: { name: "Enéas Kwadwo", new: true, registered: "Jan 1, 2015", },
          country: { name: "France", flag: "fr", },
          usage: { value: 98, period: "Jun 11, 2015 - Jul 10, 2015", },
          payment: { name: "PayPal", icon: "fa fa-paypal", },
          activity: "Last month",
        },
        {
          avatar: { url: "img/avatars/5.jpg", status: "success", },
          user: {
            name: "Agapetus Tadeáš",
            new: true,
            registered: "Jan 1, 2015",
          },
          country: { name: "Spain", flag: "es", },
          usage: { value: 22, period: "Jun 11, 2015 - Jul 10, 2015", },
          payment: { name: "Google Wallet", icon: "fa fa-google-wallet", },
          activity: "Last week",
        },
        {
          avatar: { url: "img/avatars/6.jpg", status: "danger", },
          user: {
            name: "Friderik Dávid",
            new: true,
            registered: "Jan 1, 2015",
          },
          country: { name: "Poland", flag: "pl", },
          usage: { value: 43, period: "Jun 11, 2015 - Jul 10, 2015", },
          payment: { name: "Amex", icon: "fa fa-cc-amex", },
          activity: "Last week",
        },
      ],
      tableFields: {
        avatar: {
          label: '<i class="icon-people"></i>',
          class: "text-center",
        },
        user: {
          label: "User",
        },
        country: {
          label: "Country",
          class: "text-center",
        },
        usage: {
          label: "Usage",
        },
        payment: {
          label: "Payment method",
          class: "text-center",
        },
        activity: {
          label: "Activity",
        },
      },
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
