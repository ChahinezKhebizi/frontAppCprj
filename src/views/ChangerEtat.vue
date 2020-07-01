<template>
    <div>
           <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style=" background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;">
                     <span class="mask bg-gradient-success opacity-6"></span>
            <!-- Card stats -->
         <div class="row">


              
            </div>
        </base-header>





          <div class="container-fluid mt--8">
               <div class="row justify-content-center">
            <div class="col-lg-7 col-md-7">
                <div class="card bg-secondary shadow border-0">
              
              <div class="card-body px-lg-5 py-lg-5">
                        <div class="text-center text-muted mb-4">
                            <strong>Veuillez entrer les informations du cas que vous voulez changer son état </strong>
                        </div>
                        <form role="form">

                            <base-input label ="Numéro de carte d'identité" class="input-group-alternative"
                                        placeholder="insérer le numéro" v-model="user. carteNational">
                           </base-input>  
                            
                           <base-dropdown >
                              <base-button slot="title" type="secondary" class="dropdown-toggle" block>
                                Choisir le nouvel état
                              </base-button>
                                 <a class="dropdown-item"  @click=" changerEtatToconfirme">Positif (confirmé)</a>
                              <a class="dropdown-item"  @click=" changerEtatToNegtive">Négatif</a>
                               <a class="dropdown-item" @click="changerEtatToGuéri">Guéri</a>
                              <a class="dropdown-item"   @click="changerEtatToDecede">Décédé</a>
                           
                            </base-dropdown>
      
         
                            <div class="text-center">
             <base-button type="danger" size="lg" class="my-4" @click="demoVisibility" block >Enregister</base-button>
                            </div>
                        </form>
                    </div>
   
               </div>
           </div>
     </div>
     </div>


        <base-alert style=" visibility:hidden" id="alert" type="success">
                    <strong>Le nouvel état est enregistré avec succes!</strong> 
                </base-alert>
         
             <!--form-->
           
           


         
      

    </div>
</template>
<script>

 import axios from 'axios'
    export default {
        name: 'login',
        data() {
            return {
                user: {
                    carteNational:''
                }
            }
        }  ,
        methods:{
            changerEtatToconfirme(){
                const option = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                axios.post('http://localhost:4000/changerEtatToConfirme',{carteNational:this.user.carteNational},option)
            }
        ,
        changerEtatToNegtive(){
            const option = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            axios.post('http://localhost:4000/changerEtatToNegtive',{carteNational:this.user.carteNational},option)
        }
    ,  changerEtatToGuéri(){
            const option = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            axios.post('http://localhost:4000/changerEtatToGueri',{carteNational:this.user.carteNational},option)
        },changerEtatToDecede(){
                const option = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                axios.post('http://localhost:4000/changerEtatToDecede',{carteNational:this.user.carteNational},option)
            },
      demoVisibility() {
  

   document.getElementById("alert").style.visibility = "visible";

},
    }}

</script>
<style></style>
