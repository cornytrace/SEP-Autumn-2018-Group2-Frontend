import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views
const Home = () => import('@/views/Home')
const Courses = () => import('@/views/Courses')
const CourseDetail = () => import('@/views/CourseDetail')
const Videos = () => import('@/views/Videos')
const VideoDetail = () => import('@/views/VideoDetail')
const Quizes = () => import('@/views/Quizes')
const QuizDetail = () => import('@/views/QuizDetail')
const Contact = () => import('@/views/Contact')
const Settings = () => import('@/views/Settings')
const AdminPanel = () => import('@/views/admin/AdminPanel')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

// Users
const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')

Vue.use(VueRouter)

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
      children: [{
          path: '/home',
          component: Home,
        },
        {
          path: '/courses',
          name: 'Courses',
          component: Courses,
        },
        {
          path: '/course/:courseid',
          name: 'CourseDetail',
          component: CourseDetail,
          meta: {
            label: "Course Details",
          },
        },
        {
          path: '/videos',
          name: 'Videos',
          component: Videos,
        },
        {
          path: '/video/:videoid',
          name: 'VideoDetail',
          component: VideoDetail,
          meta: {
            label: "Video Details",
          },
        },
        {
          path: '/quizes',
          name: 'Quizes',
          component: Quizes,
        },
        {
          path: '/quiz/:quizid',
          name: 'QuizDetail',
          component: QuizDetail,
          meta: {
            label: "Quiz Details",
          },
        },
        {
          path: '/settings',
          name: 'Settings',
          component: Settings,
        },
        {
          path: '/contact',
          name: 'Contact',
          component: Contact,
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
          path: 'register',
          name: 'Register',
          component: Register,
        },
      ],
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminPanel,
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (!Vue.localStorage.get("isAuthenticated", false, Boolean) && to.path !== "/pages/login") {
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
