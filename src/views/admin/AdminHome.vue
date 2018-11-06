<template>
  <div class="content">
    <b-row>
      <!-- Admin home container -->
      <b-col sm="7">
        <!-- Users list -->
        <b-list-group>
          <b-list-group-item class="first-row" id="userelement">
            <table>
              <tr>
                <th id="pk-cell"><b>ID</b></th>
                <th id="email-cell">Email</th>
                <th id="name-cell">Organization</th>
                <th id="role-cell">Role</th>
                <th>Courses</th>
              </tr>
            </table>
          </b-list-group-item>
          <b-list-group-item>
            <table id="user-table">
              <tr id="userelement" @click="click(user.pk)" v-for="user in users" :key="user.pk">
                <th id="pk-cell"><b>{{ user.pk }}</b></th>
                <th id="email-cell">{{ user.email }}</th>
                <th id="name-cell">{{ user.organization }}</th>
                <th id="role-cell">{{ user.role }}</th>
                <th id="course-cell">
                  <ul>
                    <li v-for="course in user.courses" :key="course.course_name"><span id="course">{{ course.course_name }}</span></li>
                  </ul>
                </th>
                <th id="button-cell">
                  <b-button v-b-modal="'deleteModal'"><i class="cui-trash" /></b-button>
                </th>
              </tr>
            </table>
          </b-list-group-item>
        </b-list-group>
      </b-col>
      <!-- Edit user form on right side -->
      <b-col sm="5">
        <b-card class="bg" no-body>
          <b-card-header>
            <b>Selected user:</b> {{selectedUser}}
          </b-card-header>
          <b-card-body class="pb-0">
            <b-form>
              <p class="text-muted">Edit user account</p>
              <b-input-group class="mb-3">
                <b-input-group-prepend>
                  <b-input-group-text>@</b-input-group-text>
                </b-input-group-prepend>
                <b-form-input v-model="selectedEmail" type="text" class="form-control" placeholder="Email" autocomplete="email" />
              </b-input-group>

              <b-input-group class="mb-3">
                <b-form-input v-model="organization" type="text" class="form-control" placeholder="Organization name" />
              </b-input-group>
              <b-input-group class="mb-3">
                <select class="form-control" v-model="selectedRole">
                  <option v-for="role of settings.roles" :value="role.id" :key="role.id">{{role.name}}</option>
                </select>
              </b-input-group>
              <multi-select v-model="selectedCourses" id="course-selector" multiple :select-size="4" :options="courses" tf="course_name" vf="pk" class="mb-3">
              </multi-select>
              <p class="text-muted">Hold down CTRL to select multiple courses.</p>
              <b-alert id="alertbox" variant="danger" dismissible :show="showAlert" @dismissed="showAlert=false">
                Update failed: {{errorReason}}.
              </b-alert>
              <b-alert id="successbox" variant="success" dismissible :show="showSuccess" @dismissed="showSuccess=false">
                Update success.
              </b-alert>
              <b-button @click="save" id="savebutton" variant="success">Save</b-button>
            </b-form>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
    <!-- Delete confirmation modal -->
    <b-modal id="deleteModal" title="Are you sure?" @ok="handleOk">
      <p class="my-4">Are you sure you want to delete this user? <br> {{ selectedEmail}}</p>
    </b-modal>
  </div>
</template>

<script>
import util from "@/util";
import settings from "@/settings";
import MultiSelect from "@/components/MultiSelect";

export default {
  name: "AdminHome",
  components: {
    MultiSelect
  },
  data: function() {
    return {
      // Setting to use in html.
      settings: settings,

      courses: [],
      users: [],

      // Selected user variables.
      selectedCourses: [],
      selectedEmail: "",
      selectedUser: "No user selected",
      selectedRole: settings.roles[0].id,

      // Message variables
      showSuccess: false,
      showAlert: false,
      errorReason: ""
    };
  },
  methods: {
    // Click on user function.
    click: function(id) {
      this.showSuccess = false;
      this.showAlert = false;
      var user = this.getUser(id);
      this.selectedCourses = user.courses;
      this.selectedEmail = user.email;
      this.selectedUser = user.pk;
      this.selectedRole = user.role;
      this.organization = user.organization;
    },
    // Helper function to delete user.
    deleteUser(id) {
      util.deleteUser(id).then(response => {
        this.getUsers();
      });
    },
    // Handles the ok of the delete user pop-up confimation.
    handleOk() {
      this.deleteUser(this.selectedUser);
    },
    save: function() {
      if (this.selectedUser !== "No user selected") {
        // Use util function to update the user.
        util
          .updateUser({
            courses: this.selectedCourses,
            email: this.selectedEmail,
            pk: this.selectedUser,
            role: this.selectedRole,
            organization: this.organization
          })
          // Succes, update users..
          .then(() => {
            this.showAlert = false;
            this.showSuccess = true;
            this.getUsers();
          })
          // Not succes, show error.
          .catch(error => {
            this.errorReason = "";
            for (var err in error.response.data) {
              this.errorReason +=
                err + ": " + error.response.data[err][0] + "\n";
            }
            this.showAlert = true;
            this.showSuccess = false;
          });
      }
      // No user selected.
      else {
        this.showAlert = true;
        this.errorReason = "No user selected";
      }
    },
    // Helper function to get all users.
    getUsers() {
      util
        .getUsers()
        .then(response => {
          this.users = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    // Helper function to all courses.
    getCourses() {
      util
        .getCourses()
        .then(response => {
          this.courses = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    // Helper function to get user based on the id.
    getUser: function(id) {
      return this.users.find(x => x.pk === id);
    },
    // Helper function to get course based on the id.
    getCourse(id) {
      return this.courses.find(x => x.pk === id);
    }
  },
  // Before mound get all users and courses.
  beforeMount: function() {
    this.getUsers();
    this.getCourses();
  }
};
</script>

<style>
.content {
  padding-top: 20px;
  padding-bottom: 20px;
}
form {
  margin-bottom: 20px;
}
#info-text {
  display: block;
  padding-bottom: 20px !important;
  color: #888;
}
#userelement:hover {
  cursor: pointer;
  background-color: #ccc;
}
table #pk-cell {
  width: 20px;
}
table #email-cell {
  width: 200px;
  max-width: 200px;
  overflow: hidden;
  padding-left: 5px;
}
table #name-cell {
  width: 120px;
}
table #role-cell {
  width: 80px;
}
table #course {
  display: block;
}
table #course-cell ul {
  padding-left: 10px;
  margin-bottom: 0px;
  list-style-type: square;
}
table th {
  font-weight: normal;
}
.first-row {
  background-color: #f0f3f5;
}
.first-row th {
  font-weight: bold;
}
th #course {
  margin-right: 10px;
}

table {
  border-collapse: separate;
  border-spacing: 0 1em;
}
</style>