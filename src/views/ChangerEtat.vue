<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->
         <div class="row">
          <div class="container-fluid ">
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
                                 <a class="dropdown-item" href="#" @click=" changerEtatToconfirme">Positif (confirmé)</a>
                              <a class="dropdown-item" href="#" @click=" changerEtatToNegtive">Négatif</a>
                               <a class="dropdown-item" href="#" @click="changerEtatToGuéri">Guéri</a>
                              <a class="dropdown-item" href="#"  @click="changerEtatToDecede">Décédé</a>
                           
                            </base-dropdown>
      
         
                            <div class="text-center">
             <base-button type="primary" size="lg" class="my-4" block>Enregister</base-button>
                            </div>
                        </form>
                    </div>
               </div>
           </div>
     </div>
     </div>
               
            </div>
        </base-header>


       
         
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
            }
    }}

</script>
<style></style>
