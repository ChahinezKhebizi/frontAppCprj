<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="CriSa"
      title="CriSa"
    >
      <template slot="links">
        <sidebar-item :link="{name: 'Accueil', icon: 'ni ni-planet text-primary', path: '/accueil'}"/>
        <sidebar-item :link="{
            name: 'Inserer un cas suspect',
            icon: 'ni ni-fat-add text-green',
            path: '/inserercas' }"/>

         
         
         <sidebar-item :link="{name: 'Afficher la liste des cas', icon: 'ni ni-bullet-list-67 text-red', path: '/affichercas'}"/>
         <sidebar-item :link="{name: 'Afficher un cas ', icon: 'ni ni-single-02 text-blue', path: '/afficherinfo'}"/>

         <sidebar-item :link="{name: 'Changer Etats', icon: ' ni ni-ui-04 text-yellow ', path: '/changeretat'}"/>

         <sidebar-item :link="{name: 'Déclarer une urgence', icon: 'ni ni-bell-55 text-orange', path: '/envoienotif'}"/>

        <!--sidebar-item :link="{name: 'Icons', icon: 'ni ni-planet text-blue', path: '/icons'}"/>
        <sidebar-item :link="{name: 'Maps', icon: 'ni ni-pin-3 text-orange', path: '/maps'}"/>
        <sidebar-item :link="{name: 'User Profile', icon: 'ni ni-single-02 text-yellow', path: '/profile'}"/>
        <sidebar-item :link="{name: 'Tables', icon: 'ni ni-bullet-list-67 text-red', path: '/tables'}"/>
        <sidebar-item :link="{name: 'Login', icon: 'ni ni-key-25 text-info', path: '/login'}"/>
        <sidebar-item :link="{name: 'Register', icon: 'ni ni-circle-08 text-pink', path: '/register'}"/-->
            
      </template>

      

    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>
 

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
  import DashboardNavbar from './DashboardNavbar.vue';
  import ContentFooter from './ContentFooter.vue';
  import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      DashboardNavbar,
      ContentFooter,
      FadeTransition
    },
    data() {
      return {
        sidebarBackground: 'vue' //vue|blue|orange|green|red|primary
      };
    },
    methods: {
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      }
    }
  };
</script>
<style lang="scss">
</style>
