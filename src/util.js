import store from '@/store'
import axios from 'axios'

export default {
  // Utility functions
  isAuthenticated() {
    return store.state.apiToken !== "" && store.state.apiExpire > Date.now()
  },

  /**
   * Return the root API url.
   */
  apiUrl() {
    return process.env.VUE_APP_ROOT_API;
  },

  /**
   * Sets the headers to include the API token
   * which is used for API call authentication.
   * 
   * @param {} headers headers to include besides
   * API token.
   */
  authHeader(headers = {}) {
    return Object.assign({}, headers, {
      Authorization: "Bearer " + store.state.apiToken,
    });
  },

  /**
   * Returns all query parameters stored in the 
   * store as a formatted string to be used
   * in API calls.
   */
  getQueryParams() {
    var params = "";
    if (store.state.filters.from !== null) {
      params += "from=" + store.state.filters.from
    }
    if (store.state.filters.to !== null) {
      if (params !== "") {
        params += "&";
      }
      params += "to=" + store.state.filters.to;
    }

    if (params !== "") {
      params = "?" + params;
    }
    return params;
  },

  /**
   * Utility function to check if a valid email
   * is given.
   * 
   * @param {} email the email to check.
   */
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

  // Test authentication call
  testAuth() {
    return axios
      .get(this.apiUrl() + "/testview/", {
        headers: this.authHeader(),
      })
  },

  // User API calls
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

  // Course API calls
  getCourses() {
    return axios
      .get(this.apiUrl() + "/courses/" + this.getQueryParams(), {
        headers: this.authHeader(),
      })
  },

  getDetailedCourseData(courseId) {
    return axios
      .get(this.apiUrl() + `/api/course-analytics/${courseId}/` + this.getQueryParams(), { headers: this.authHeader(), })
  },

  // Video API calls
  getVideos(courseId) {
    return axios
      .get(this.apiUrl() + `/api/video-analytics/${courseId}/` + this.getQueryParams(), {
        headers: this.authHeader(),
      })
  },

  getVideoDetails(courseId, videoId) {
    return axios
      .get(this.apiUrl() + `/api/video-analytics/${courseId}/${videoId}/` + this.getQueryParams(), { headers: this.authHeader(), })
  },
}
