import store from '@/store'
import axios from 'axios'

export default {
  // Utility functions

  arrayColumn(arr, n) {
    return arr.map(x => x[n])
  },

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
  getQueryParams(filters) {
    var params = [];
    if (filters.from !== null && filters.from !== undefined) {
      params.push(["from_date", filters.from, ]);
    }
    if (filters.to !== null && filters.to !== undefined) {
      params.push(["to_date", filters.to, ]);
    }
    var queryString = new URLSearchParams(params).toString();
    if (queryString === "") {
      return queryString;
    }
    return "?" + queryString;
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
      .delete(this.apiUrl() + `/users/${id}/`, {
        headers: this.authHeader(),
      })
  },

  // Course API calls
  getCourses() {
    return axios
      .get(this.apiUrl() + "/courses/", {
        headers: this.authHeader(),
      })
  },

  getDetailedCourseData(courseId, filters) {
    return axios
      .get(this.apiUrl() + `/api/course-analytics/${courseId}/` + this.getQueryParams(filters), {
        headers: this.authHeader(),
      })
  },

  // Video API calls
  getVideos(courseId, filters) {
    return axios
      .get(this.apiUrl() + `/api/video-analytics/${courseId}/` + this.getQueryParams(filters), {
        headers: this.authHeader(),
      })
  },

  getVideoDetails(courseId, videoId, filters) {
    return axios
      .get(this.apiUrl() + `/api/video-analytics/${courseId}/${videoId}/` + this.getQueryParams(filters), {
        headers: this.authHeader(),
      })
  },

  getQuizzes(courseId) {
    return axios
      .get(this.apiUrl() + `/api/quiz-analytics/${courseId}/`, {
        headers: this.authHeader(),
      })
  },

  getQuizVersions(courseId, baseId) {
    return axios
      .get(this.apiUrl() + `/api/quiz-analytics/${courseId}/${baseId}/`, {
        headers: this.authHeader(),
      })
  },

  getQuizDetails(courseId, baseId, version) {
    return axios
      .get(this.apiUrl() + `/api/quiz-analytics/${courseId}/${baseId}/${version}/`, {
        headers: this.authHeader(),
      })
  },
}
