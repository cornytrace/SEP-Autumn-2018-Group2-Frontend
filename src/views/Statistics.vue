<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="8" lg="4">
        <b-card no-body class="bg-primary">
          <b-card-body class="pb-0">
            <b-dropdown class="float-right" variant="transparent p-0" right>
              <template slot="button-content">
                <i class="icon-settings"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
            <h4 class="mb-0">35246</h4>
            <p>Total number of enrollers</p>
          </b-card-body>
          <card-line1-chart-example chartId="card-chart-01" class="chart-wrapper px-3" style="height:70px;" :height="70"/>
        </b-card>
      </b-col>
      <b-col sm="8" lg="4">
        <b-card no-body class="bg-info">
          <b-card-body class="pb-0">
            <b-dropdown class="float-right" variant="transparent p-0" right no-caret>
              <template slot="button-content">
                <i class="icon-location-pin"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
            <h4 class="mb-0">482</h4>
            <p>Students who have completed a course</p>
          </b-card-body>
          <card-line2-chart-example chartId="card-chart-02" class="chart-wrapper px-3" style="height:70px;" :height="70"/>
        </b-card>
      </b-col>
      <b-col sm="8" lg="4">
        <b-card no-body class="bg-warning">
          <b-card-body class="pb-0">
            <b-dropdown class="float-right" variant="transparent p-0" right>
              <template slot="button-content">
                <i class="icon-settings"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
            <h4 class="mb-0">326</h4>
            <p>Total number of payments</p>
          </b-card-body>
          <card-line3-chart-example chartId="card-chart-03" class="chart-wrapper" style="height:70px;" height="70"/>
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col sm="8" lg="6">
        <b-card header="Conversion rate - Payments">
            <div class="chart-wrapper">
              <bar-example chartId="chart-bar-01"/>
            </div>
        </b-card>
      </b-col>
      <b-col sm="8" lg="6">
        <b-card header="Graduation percentage">
            <div class="chart-wrapper">
              <bar-example chartId="chart-bar-01"/>
            </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import BarExample from "./charts/BarExample";
import { Callout, } from "@coreui/vue";

export default {
  name: "Statistics",
  components: {
    BarExample,
    Callout,
  },
  data: function() {
    return {
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
  methods: {
    // Example code
    // variant(value) {
    //   let $variant;
    //   if (value <= 25) {
    //     $variant = "info";
    //   } else if (value > 25 && value <= 50) {
    //     $variant = "success";
    //   } else if (value > 50 && value <= 75) {
    //     $variant = "warning";
    //   } else if (value > 75 && value <= 100) {
    //     $variant = "danger";
    //   }
    //   return $variant;
    // },
    // flag(value) {
    //   return "flag-icon flag-icon-" + value;
    // },
  },
};
</script>

<style>
/* IE fix */
#card-chart-01,
#card-chart-02 {
  width: 100% !important;
}
</style>
