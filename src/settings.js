export default {
  //Platform settings
  platforms: [{
    name: "Coursera",
  }, ],
  course_pages: [{
      name: "Videos",
      icon: "fa fa-video-camera",
    },
    {
      name: "Quizzes",
      icon: "cui-check",
    },
    {
      name: "Assignments",
      icon: "cui-calendar",
    }, {
      name: "Lessons",
      icon: "cui-calendar",
    },
  ],

  //Mock 
  courses: [{
      name: "Course 1",
      id: "C1",
    },
    {
      name: "Course 2",
      id: "C2",
    },
    {
      name: "Course 3",
      id: "C3",
    },
    {
      name: "Course 4",
      id: "C4",
    },
    {
      name: "Course 5",
      id: "C5",
    },
    {
      name: "Course 6",
      id: "C6",
    },
  ],

  // Constants
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
  }, ],
}
