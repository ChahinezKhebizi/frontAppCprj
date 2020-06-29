import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/accueil',
      redirect: 'accueil',
      component: DashboardLayout,
      children: [

        
         {
          path: '/accueil',
          name: 'accueil',
          component: () => import(/* webpackChunkName: "demo" */ './views/Accueil.vue')
        },
        {
          path: '/inserercas',
          name: 'inserer un cas suspect',
        
          component: () => import(/* webpackChunkName: "demo" */ './views/InsererCas.vue')
        },
       
        {
          path: '/changeretat',
          name: 'changer état d un cas',
          component: () => import(/* webpackChunkName: "demo" */ './views/ChangerEtat.vue')
        },
        {
          path: '/envoienotif',
          name: 'déclarer une urgence !',
          component: () => import(/* webpackChunkName: "demo" */ './views/Notifier.vue')
        },
         {
          path: '/affichercas',
          name: 'afficher la liste des cas',
          component: () => import(/* webpackChunkName: "demo" */ './views/Afficher.vue')
        },
        {
          path: '/afficherinfo',
          name: 'afficher les informations d"un cas',
          component: () => import(/* webpackChunkName: "demo" */ './views/afficherInfo1.vue')
        },
        {
          path: '/afficherinformation',
          name: 'afficher les informations d"un cas',
          component: () => import(/* webpackChunkName: "demo" */ './views/AfficherInfo.vue')
        },
        
         
      ]
    },
    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: '/',
          name: 'login',
          component: () => import(/* webpackChunkName: "demo" */ './views/Login.vue')
        },
        
      ]
    }
  ]
})
