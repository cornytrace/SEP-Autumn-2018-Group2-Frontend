import store from '@/store'
import axios from 'axios'

export default {
  // Utility functions

  arrayColumn(arr, n) {
    return arr.map(x => x[n])
  },

  arrayWeightedAverage(arr) {
    let value = this.arrayColumn(arr, 0)
    let weight = this.arrayColumn(arr, 1)
    if (weight.length != value.length)
      return null;
    let result = 0;
    for (let i = 0; i < weight.length; i++) {
      result += weight[i] * value[i];
    }
    result = result / weight.reduce((a, b) => a + b, 0)
    return result
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
      params.push(["from_date", filters.from,]);
    }
    if (filters.to !== null && filters.to !== undefined) {
      params.push(["to_date", filters.to,]);
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
  // Get a list of all users.
  getUsers() {
    return axios
      .get(this.apiUrl() + "/users/", {
        headers: this.authHeader(),
      })
  },

  // Create user.
  createUser(data) {
    return axios
      .post(this.apiUrl() + "/users/", data, {
        headers: this.authHeader(),
      })
  },

  // Reset password for user with id.
  resetPassword(id, data) {
    return axios
      .put(this.apiUrl() + `/users/${id}/password_reset/`, data, {
        headers: this.authHeader(),
      })
  },

  // Update single user.
  updateUser(user) {
    return axios
      .put(this.apiUrl() + `/users/${user.pk}/`, user, {
        headers: this.authHeader(),
      })
  },

  // Send password reset mail to email.
  sendPasswordReset(email) {
    return axios
      .post(this.apiUrl() + `/users/forgot_password/`, {
        email: email,
      }, {
          headers: this.authHeader(),
        })
  },

  // Get current user.
  getUser() {
    return axios
      .get(this.apiUrl() + `/users/me/`, {
        headers: this.authHeader(),
      })
  },

  // Delete user with id.
  deleteUser(id) {
    return axios
      .delete(this.apiUrl() + `/users/${id}/`, {
        headers: this.authHeader(),
      })
  },

  // Course API calls
  // Get all courses user has access to.
  getCourses() {
    return axios
      .get(this.apiUrl() + "/courses/", {
        headers: this.authHeader(),
      })
  },

  // Get data for courses.
  getCoursesData(filters) {
    return axios
      .get(this.apiUrl() + `/api/course-analytics/` + this.getQueryParams(filters), {
        headers: this.authHeader(),
      })
  },

  // Get data for single course.
  getDetailedCourseData(courseId, filters) {
    return axios
      .get(this.apiUrl() + `/api/course-analytics/${courseId}/` + this.getQueryParams(filters), {
        headers: this.authHeader(),
      })
  },

  // Video API calls
  // Get a list of videos for a course.
  getVideos(courseId, filters) {
    return axios
      .get(this.apiUrl() + `/api/video-analytics/${courseId}/` + this.getQueryParams(filters), {
        headers: this.authHeader(),
      })
  },

  // Get details for a single video.
  getVideoDetails(courseId, videoId, filters) {
    return axios
      .get(this.apiUrl() + `/api/video-analytics/${courseId}/${videoId}/` + this.getQueryParams(filters), {
        headers: this.authHeader(),
      })
  },

  // Quiz API calls
  // Get list of quizzes.
  getQuizzes(courseId, filters) {
    return axios
      .get(this.apiUrl() + `/api/quiz-analytics/${courseId}/` + this.getQueryParams(filters), {
        headers: this.authHeader(),
      })
  },

  // Get all versions for a single quiz.
  getQuizVersions(courseId, baseId) {
    return axios
      .get(this.apiUrl() + `/api/quiz-analytics/${courseId}/${baseId}/`, {
        headers: this.authHeader(),
      })
  },

  // Get details for a single quiz.
  getQuizDetails(courseId, baseId, version, filters) {
    return axios
      .get(this.apiUrl() + `/api/quiz-analytics/${courseId}/${baseId}/${version}/` + this.getQueryParams(filters), {
        headers: this.authHeader(),
      })
  },

  // Assignment API calls
  // Get a list of assignments.
  getAssignments(courseId, filters) {
    return axios
      .get(this.apiUrl() + `/api/assignment-analytics/${courseId}/` + this.getQueryParams(filters), {
        headers: this.authHeader(),
      })
  },

  // Get details for a single assignment.
  getAssignmentDetails(courseId, itemId, filters) {
    return axios
      .get(this.apiUrl() + `/api/assignment-analytics/${courseId}/${itemId}/` + this.getQueryParams(filters), {
        headers: this.authHeader(),
      })
  },

  // Actions API calls
  // Get all actions for a course.
  getActions(platformId, courseId, filters) {
    return axios
      .get(this.apiUrl() + `/actions/${platformId}/${courseId}/` + this.getQueryParams(filters), {
        headers: this.authHeader(),
      })
  },

  // Save single action.
  saveAction(action) {
    return axios
      .post(this.apiUrl() + `/actions/`, action, {
        headers: this.authHeader(),
      })
  },

  // Delete single action.
  deleteAction(pk) {
    return axios
      .delete(this.apiUrl() + `/actions/${pk}` + '/', {
        headers: this.authHeader(),
      })
  },
}
