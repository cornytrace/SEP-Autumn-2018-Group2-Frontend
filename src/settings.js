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


  // Mock 
  videos: [
    {
      name: "Video 1",
      id: "v1",
    },
    {
      name: "Video 2",
      id: "v2",
    },
  ],
  quizzes: [
    {
      name: "Quiz 1",
      id: "q1",
    },
    {
      name: "Quiz 2",
      id: "q2",
    },
    {
      name: "Final exam",
      id: "dslj",
    },
  ],


  // Constants
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
