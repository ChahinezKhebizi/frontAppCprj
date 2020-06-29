<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->
            <div class="row">
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Total traffic"
                                type="gradient-red"
                                sub-title="350,897"
                                icon="ni ni-active-40"
                                class="mb-4 mb-xl-0"
                    >

                        <template slot="footer">
                            <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
                            <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Total traffic"
                                type="gradient-orange"
                                sub-title="2,356"
                                icon="ni ni-chart-pie-35"
                                class="mb-4 mb-xl-0"
                    >

                        <template slot="footer">
                            <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 12.18%</span>
                            <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Sales"
                                type="gradient-green"
                                sub-title="924"
                                icon="ni ni-money-coins"
                                class="mb-4 mb-xl-0"
                    >

                        <template slot="footer">
                            <span class="text-danger mr-2"><i class="fa fa-arrow-down"></i> 5.72%</span>
                            <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>

                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Performance"
                                type="gradient-info"
                                sub-title="49,65%"
                                icon="ni ni-chart-bar-32"
                                class="mb-4 mb-xl-0"
                    >

                        <template slot="footer">
                            <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 54.8%</span>
                            <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>
                </div>
            </div>
        </base-header>


       
         
             <!--form-->
               <div class="row justify-content-center">
            <div class="col-lg-5 col-md-7">
                <div class="card bg-secondary shadow border-0">
                   
              <div class="card-body px-lg-5 py-lg-5">
                        <div class="text-center text-muted mb-4">
                            <strong>Veuillez entrer les informations du cas que vous voulez changer son état </strong>
                        </div>
                        <form role="form">

                            <base-input label ="Numéro de carte d'identité" class="input-group-alternative"
                                        placeholder="insérer le numéro"
                                        v-model="user. carteNational">
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
             <base-button type="primary" size="lg" class="my-4" block >Enregister</base-button>
                            </div>
                        </form>
                    </div>
               </div>
           </div>
     </div>
           


         
      

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
