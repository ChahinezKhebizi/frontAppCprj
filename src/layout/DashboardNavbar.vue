<template>
    <base-nav class="navbar-top navbar-dark"
              id="navbar-main"
              :show-toggle-button="false"
              expand>
        <form class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <div class="form-group mb-0">
                <base-input placeholder="Rechercher .."
                            class="input-group-alternative"
                            alternative=""
                            addon-right-icon="fas fa-search">
                </base-input>
            </div>
        </form>
        <ul class="navbar-nav align-items-center d-none d-md-flex">
            <li class="nav-item dropdown">
                <base-dropdown class="nav-link pr-0">
                    <div class="media align-items-center" slot="title">
                <span class="avatar avatar-sm rounded-circle">
                  <img alt="Image placeholder" src="img/theme/team-4-800x800.jpg">
                </span>
                        <div class="media-body ml-2 d-none d-lg-block">
                            <span class="mb-0 text-sm  font-weight-bold">Hopital Mustafa Bacha - Alger</span>
                        </div>
                    </div>

                    <template>
                        <div class=" dropdown-header noti-title">
                            <h6 class="text-overflow m-0">Bienvenu!</h6>
                        </div>

                      
                        <router-link to="/accueil" class="dropdown-item">
                            <i class="ni ni-settings-gear-65"></i>
                            <span>Paramètres</span>
                        </router-link>

                        <router-link  to="/accueil" class="dropdown-item">
                            <i class="ni ni-calendar-grid-58"></i>
                            <span>Activités</span>
                        </router-link>
                        

                        
                       
                        <router-link to="/accueil" class="dropdown-item">

                            <i class="ni ni-support-16"></i>
                            <span>Support</span>
                        </router-link>
                 

                        <router-link to="/" class="dropdown-item">

                            <i class="ni ni-user-run"></i>
                            <span>Se déconnecter</span>
                        </router-link>
                    </template>
                </base-dropdown>
            </li>
        </ul>
    </base-nav>
</template>
<script>
  export default {
    data() {
      return {
        activeNotifications: false,
        showMenu: false,
        searchQuery: ''
      };
    },
    methods: {
      toggleSidebar() {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
      },
      hideSidebar() {
        this.$sidebar.displaySidebar(false);
      },
      toggleMenu() {
        this.showMenu = !this.showMenu;
      }
    }
  };
</script>
