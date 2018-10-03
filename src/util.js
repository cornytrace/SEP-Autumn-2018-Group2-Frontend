import store from '@/store'
import axios from 'axios'

export default {
  isAuthenticated() {
    return store.state.apiToken !== "" && store.state.apiExpire > Date.now()
  },

  apiUrl() {
    return process.env.VUE_APP_ROOT_API;
  },

  authHeader(headers = {}) {
    return Object.assign({}, headers, {
      Authorization: "Bearer " + store.state.apiToken,
    });
  },

  testAuth() {
    return axios
      .get(this.apiUrl() + "/testview/", {
        headers: this.authHeader(),
      })
  },

  getUsers() {
    return axios
      .get(this.apiUrl() + "/users/", {
        headers: this.authHeader(),
      })
  },

  createUser(data) {
    return axios
      .post(this.apiUrl() + "/users/", data, {
        headers: this.authHeader(),
      })
  },

  resetPassword(id, data) {
    return axios
      .put(this.apiUrl() + `/users/${id}/password_reset/`, data, {
        headers: this.authHeader(),
      })
  },

  getCourses() {
    return axios
      .get(this.apiUrl() + "/courses/", {
        headers: this.authHeader(),
      })
  },

  updateUser(user) {
    return axios
      .put(this.apiUrl() + `/users/${user.pk}/`, user, {
        headers: this.authHeader(),
      })
  },

  sendPasswordReset(email) {
    return axios
      .post(this.apiUrl() + `/users/forgot_password/`, {
        email: email,
      }, {
          headers: this.authHeader(),
        })
  },

  getUser() {
    return axios
      .get(this.apiUrl() + `/users/me/`, {
        headers: this.authHeader(),
      })
  },

  deleteUser(id) {
    return axios
      .delete(this.apiUrl() + `/users/${id}/`, { headers: this.authHeader(), })
  },

  getDetailedCourseData(courseId) {
    return axios
      .get(this.apiUrl() + `/api/course-analytics/${courseId}/`, { headers: this.authHeader(), })
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
}
