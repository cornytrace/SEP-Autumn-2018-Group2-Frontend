import Vue from 'vue'
import VueRouter from 'vue-router'

import util from '@/util'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views
const Home = () => import('@/views/Home')
const Contact = () => import('@/views/Contact')
const Settings = () => import('@/views/Settings')
const AdminPanel = () => import('@/views/admin/AdminPanel')
const AdminHome = () => import('@/views/admin/AdminHome')
const Platform = () => import('@/views/platforms/Platform')

// Mockup pages
const Statistics = () => import('@/views/Statistics')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')
const ResetReferrer = () => import('@/views/pages/ResetReferrer')
const ResetPassword = () => import('@/views/pages/ResetPassword')

// Users
const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')

import * as coursera from '@/views/platforms/coursera'

Vue.use(VueRouter)

var level = 0;

const router = new VueRouter({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({
    y: 0,
  }),
  routes: [{
      path: '/',
      name: 'Home',
      redirect: '/home',
      component: DefaultContainer,
      props: {
        level: level,
      },
      children: [{
          path: '/home',
          component: Home,
        },
        {
          path: '/coursera',
          redirect: '/coursera',
          name: 'Coursera',
          component: Platform,
          children: [{
              path: '/coursera',
              name: '',
              component: coursera.Courses,
            }, {
              path: '/coursera/:courseid',
              name: 'CourseDetail',
              component: coursera.CourseDetail,
              meta: {
                label: "Course Details",
              },
            },
            {
              path: '/coursera/:courseid/videos',
              name: 'Videos',
              component: coursera.Videos,
            },
            {
              path: '/coursera/:courseid/videos/:videoid',
              name: 'VideoDetail',
              component: coursera.VideoDetail,
              meta: {
                label: "Video Details",
              },
            },
            {
              path: '/coursera/:courseid/quizzes',
              name: 'Quizzes',
              component: coursera.Quizzes,
            },
            {
              path: '/quiz/:quizid',
              name: 'QuizDetail',
              component: coursera.QuizDetail,
              meta: {
                label: "Quiz Details",
              },
            },
            {
              path: '/coursera/:courseid/assignments',
              name: 'Assignments',
              component: coursera.Assignments,
            },
            {
              path: '/coursera/:courseid/lessons',
              name: 'Lessons',
              component: coursera.Lessons,
            },
          ],
        }, {
          path: '/settings',
          name: 'Settings',
          component: Settings,
        },
        {
          path: '/contact',
          name: 'Contact',
          component: Contact,
        },
        {
          path: '/mockup',
          name: "mockup graphs",
          component: Statistics,
        },
      ],
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render(c) {
          return c('router-view')
        },
      },
      children: [{
          path: '404',
          name: 'Page404',
          component: Page404,
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500,
        },
        {
          path: 'login',
          name: 'Login',
          component: Login,
        },
        {
          path: 'resetpassword/:token/:id',
          name: 'ResetPasswordReferrer',
          component: ResetReferrer,
        },
        {
          path: 'resetpassword',
          name: 'ResetPassword',
          component: ResetPassword,
        },
      ],
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminPanel,
      redirect: 'admin/home',
      children: [{
          path: 'home',
          name: 'AdminHome',
          component: AdminHome,
        },
        {
          path: 'register',
          name: 'Register',
          component: Register,
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (!util.isAuthenticated() && to.path !== "/pages/login") {
    next({
      path: "/pages/login",
      query: {
        redirect: to.fullPath,
      },
    });
  } else {
    next()
  }
});

export default router
