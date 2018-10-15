export default {
  //Platform settings
  platforms: [{
    name: "Coursera",
    slug: "coursera",
  },],
  course_pages: [{
    name: "Videos",
    slug: "videos",
    icon: "fa fa-video-camera",
  },
  {
    name: "Quizzes",
    slug: "quizzes",
    icon: "fa fa-check",
  },
    // {
    //   name: "Assignments",
    //   slug: "assignments",
    //   icon: "cui-calendar",
    // }, {
    //   name: "Lessons",
    //   slug: "lessons",
    //   icon: "cui-calendar",
    // },
  ],
  resources: [
    {
      name: "Coursera for Educators",
      link: "https://blog.coursera.org/for-educators/",
    },
  ],

  quizzes: [
    { name: "quiz 1", id: 1, },
  ],

  // Constants
  quiz_id: 5,
  video_id: 1,
  max_nav_level: 3,
  course_default: "course-select",
  platform_default: "platform-select",
  roles: [{
    name: "Teacher",
    id: "teacher",
  }, {
    name: "Quality and design team member",
    id: "qdt",
  }, {
    name: "Admin",
    id: "admin",
  },],
}
