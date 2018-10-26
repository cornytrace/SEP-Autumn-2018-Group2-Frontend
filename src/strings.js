// This file contains commonly used strings.
// They are here for consistency, possible ease of translation, 
// and checking the messages are displayed in unit tests.
export default {
  // General
  ok: "OK",
  connection_error: "Connection Error",
  connecting: "Connecting...",
  loading: "Loading...",
  select_platform: "Select platform",
  select_course: "Select course",
  home: "Home",

  // Tooltips
  // Course
  timespan_text: "Shows the average time between the first and last activity of the learners.",
  cohort_text: "Shows the number of cohorts in a course, a cohort is a session with a start & end date during which a course is given and learners work through the course together.",
  leaving_learners_text: "Number of learners inactive for 6 weeks or more.",

  // Quiz
  version_text: "This is the selected quiz version.",

  // Video
  watchers_text: "Number of unique learners who have watched the video.",
  completers_text: "Number of learners who have completed watching the video.",
  views_over_time_text: "This graph shows the number of watchers for every five seconds of the video.",

  // Assignment
  submission_ratio_text: "Ratio of learners who have submitted the assignment.",

  // Error messages
  error_wrong_email: "Please enter a valid email address.",
  error_no_organization: "Please enter a organizationname.",
  error_username_password: "Please check your username and password.",
  error_server: "Server error, please try again",
  error_course_id: "Course not found!",
  error_passwords_identical: "Please enter two identical passwords.",

  no_assignments: "No assignments found!",
  no_courses: "No courses found!",
  no_quizzes: "No quizzes found!",
  no_videos: "No videos found!",
}
