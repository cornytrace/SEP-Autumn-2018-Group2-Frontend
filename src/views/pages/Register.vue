<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6" sm="8">
          <b-card no-body class="mx-4">
            <b-card-body class="p-4">
              <b-form>
                <h1>Register</h1>
                <p class="text-muted">Create a user account</p>
              
                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text>@</b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input v-model="email" type="text" class="form-control" placeholder="Email" autocomplete="email" required/>
                </b-input-group>

                <b-input-group class="mb-3">
                  <select class="form-control" v-model="role">
                    <option v-for="role of settings.roles" :value="role.id" :key="role.id">{{role.name}}</option>
                  </select>
                </b-input-group>

                
                <b-form-select v-model="selectedCourses" id="course-selector" multiple :select-size="4" :options="courses" text-field="course_name" value-field="pk" class="mb-3">
                </b-form-select>
                <span id="info-text">Hold down CTRL to select multiple courses.</span>


                <b-alert v-bind:class="{ hidden: isHidden }" id="email-warning" show variant="danger">{{warningText}}</b-alert>

                <b-button @click="doRegister" id="registerbutton" variant="success" block>Create Account</b-button>
              </b-form>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import util from "@/util";
import settings from "@/settings";

export default {
  name: "Register",
  data: function() {
    return {
      email: "",
      settings: settings,
      role: settings.roles[0].id,
      courses: [],
      selectedCourses: [],
      warningText: "",
      isHidden: true,
    };
  },
  beforeMount: function() {
    util
      .getCourses()
      .then(response => {
        this.courses = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    doRegister() {
      if (this.validEmail(this.email)) {
        var courses = [];
        for (var course of this.selectedCourses) {
          courses.push(this.getCourse(course));
        }

        util
          .createUser({
            email: this.email,
            role: this.role,
            courses: courses,
          })
          .then(response => {
            this.$emit("update:users", response.data);
            this.$router.push("/admin");
          })
          .catch(error => {
            this.warningText = "";
            for (var err in error.response.data) {
              this.warningText += error.response.data[err][0] + "\n";
            }
            this.isHidden = false;
          });
      } else {
        this.warningText = "Please fill in a valid email address";
        this.isHidden = false;
      }
    },
    getCourse(courseId) {
      return this.courses.find(course => course.pk === courseId);
    },
    validEmail(email) {
      if (
        email === "" ||
        email.indexOf("@") === -1 ||
        email.indexOf(".") === -1
      ) {
        return false;
      }
      return true;
    },
  },
};
</script>

<style>
#course-selector {
  margin-bottom: 5px !important;
}

.hidden {
  display: none;
}
</style>

