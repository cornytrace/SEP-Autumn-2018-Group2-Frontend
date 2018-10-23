<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="8" lg="6">
        <b-card header="<h3>General settings</h3>" class="bg">
          <table>
            <tbody>
              <tr>
                <td>
                  <label for="switchid" id="hoverdesc">Enable tooltips: </label>
                </td>
                <td>
                  <label class="switch switch-pill switch-primary" id="switchid">
                    <input type="checkbox" class="switch-input" v-model="hoverEnable" checked>
                    <span class="switch-slider"></span>
                  </label>
                </td>
              </tr>
              <!-- <tr>
                <td>
                  <label>Default platform: </label>
                </td>
                <td>
                  <b-form-select class="clickable" v-model="selectedPlatform" :options=platforms />
                </td>
              </tr>
              <tr>
                <td>
                  Course sorting mode:
                </td>
                <td>
                  <b-form-radio-group v-model="sortMode" :options="sortOptions" stacked></b-form-radio-group>
                </td>
              </tr> -->

            </tbody>
          </table>
          <b-alert variant="success" :show="showAlertGeneral" dismissible @dismissed="showAlertGeneral=false">Changes saved!</b-alert>
          <b-btn class="submit" @click="save" variant="success">Save changes</b-btn>
        </b-card>
      </b-col>
      <b-col md="8" lg="6">
        <b-card header="<h3>Profile settings</h3>">
          <b-row>
            <b-col lg="6">

              <b-card class="accordion" no-body>
                <b-card-header class="clickable" v-b-toggle.collapse1 header-bg-variant="primary">Edit display name</b-card-header>
                <b-collapse class="accordion" id="collapse1" accordion="accordion1">
                  <b-card-body class="accordion">
                    <b-form-input class="profilefield" v-model="newProfile.displayName" type="text" placeholder="New display name"></b-form-input>
                    <b-alert variant="success" :show="showAlertName" dismissible @dismissed="showAlertName=false">Changes saved!</b-alert>
                    <b-btn class="submit" @click="showAlertName=true">Submit</b-btn>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card class="accordion" no-body>
                <b-card-header class="clickable" v-b-toggle.collapse2 header-bg-variant="primary">Edit email</b-card-header>
                <b-collapse class="accordion" id="collapse2" accordion="accordion1">
                  <b-card-body class="accordion">
                    <b-form-input class="profilefield" v-model="newProfile.email" type="text" placeholder="New email"></b-form-input>
                    <b-alert variant="success" :show="showAlertEmail" dismissible @dismissed="showAlertEmail=false">Confirmation email sent!</b-alert>
                    <b-btn class="submit" @click="showAlertEmail=true">Submit</b-btn>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card class="accordion" no-body>
                <b-card-header class="clickable" v-b-toggle.collapse3 header-bg-variant="primary">Edit password</b-card-header>
                <b-collapse class="accordion" id="collapse3" accordion="accordion1">
                  <b-card-body class="accordion">
                    <b-form-input class="profilefield" type="text" placeholder="Old password"></b-form-input>
                    <b-form-input class="profilefield" type="text" placeholder="New password"></b-form-input>
                    <b-form-input class="profilefield" type="text" placeholder="Repeat new password"></b-form-input>
                    <b-alert variant="success" :show="showAlertPassword" dismissible @dismissed="showAlertPassword=false">Changes saved!</b-alert>
                    <b-btn class="submit" @click="showAlertPassword=true">Submit</b-btn>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </b-col>
            <b-col lg="6">
              <b-card class="profilecard" header="Profile preview:">
                <p v-if="newProfile.displayName">
                  {{ newProfile.displayName }}
                </p>
                <p v-else>
                  {{ currentProfile.displayName }}
                </p>

                <p v-if="newProfile.email">
                  {{ newProfile.email }}
                </p>
                <p v-else>
                  {{ currentProfile.email }}
                </p>

              </b-card>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Settings",
  data() {
    return {
      platforms: [
        {
          value: 1,
          text: "platform1",
        },
        {
          value: 2,
          text: "platform2",
        },
      ],

      newProfile: {
        displayName: "",
        email: "",
      },

      currentProfile: {
        displayName: "Some Profile",
        email: "very.real@email.com",
      },
      sortOptions: [
        { text: "Favorites first", value: "favorite", },
        { text: "Most recently visited first", value: "recent", },
      ],

      selectedPlatform: "1",
      hoverEnable: this.$store.state.tooltips,
      sortMode: "favorite",

      showAlertGeneral: false,
      showAlertName: false,
      showAlertEmail: false,
      showAlertPassword: false,
    };
  },
  methods: {
    save() {
      this.$store.commit("setTooltips", this.hoverEnable);
      this.showAlertGeneral = true;
    },
  },
};
</script>

<style>
td {
  vertical-align: top;
  padding: 5pt;
}

label {
  text-align: right;
}

table {
  width: 100%;
}

.profilefield {
  margin-top: 3pt;
  margin-bottom: 3pt;
}

.accordion {
  margin-top: 0pt;
  margin-bottom: 0pt;
}

.clickable {
  cursor: pointer;
}

.submit {
  margin-top: 5pt;
  margin-bottom: 5pt;
  float: right;
}

.profilecard {
  margin-top: 0pt;
}

.profilecard {
  margin-top: 0pt;
}

@media (max-width: 992px) {
  .profilecard {
    margin-top: 5pt;
  }
}
</style>

