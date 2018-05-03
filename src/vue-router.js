import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import AboutOrg from './components/AboutOrg.vue'
import AboutUser from './components/AboutUser.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about/:name',
      component: About,
      children: [
        {path: '', component: AboutUser},
        {
          // AboutUser will be rendered inside About's <router-view>
          // when /about/:name/user is matched
          path: 'user',
          component: AboutUser
        },
        {
          // AboutUser will be rendered inside About's <router-view>
          // when /about/:name/organization is matched
          path: 'organization',
          component: AboutOrg
        }
      ]
    }
  ]
})