<template>
    <div>
        
          <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style=" background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;">
                     <span class="mask bg-gradient-success opacity-8"></span>
            <!-- Card stats -->
            <div class="row">



          <div class="container-fluid " >
            <div class="row justify-content-center">
            <div class="col-lg-5 col-md-7">
                <div class="card bg-secondary shadow border-0">
                   
              <div class="card-body px-lg-5 py-lg-4">
                       
                        <form role="form">

                            <base-input label ="Numéro de carte d'identité" class="input-group-alternative"
                                        placeholder="insérer le numéro">
                           </base-input>  
                            
                         
      
         
                            <div class="text-center">
                                 <base-button   type="success" size="lg" @click="chercher_numcarte()"  >Afficher les informations</base-button>
            
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
   

        <div class="container-fluid mt--7" id="contain" style="visibility:hidden;">
            <div  class="row justify-content-center" >
            <div class="row">

                <div class="col-xl-12 order-xl-1">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">Les informations relatives à ce cas :</h3>
                                </div>
                              
                            </div>
                        </div>
                        <template>
                            <form >
                                
                                <div class="pl-lg-12">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Etat"
                                                        input-classes="form-control-alternative" disabled
                                                        
                                         >

                                        </base-input>
                                        </div>
                                   </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Nom"
                                                   
                                                        input-classes="form-control-alternative" disabled
                                                       
                                           >
                                        </base-input>

                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Prénom"
                                                      
                                                        input-classes="form-control-alternative"
                                                        disabled
                                                    
                                             >
                                        </base-input>
                                        </div>
                                    </div>
                                     <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Numéro de la pièce d'identité"
                                                        placeholder="insérer le numéro ici"
                                                        input-classes="form-control-alternative"
                                                   disabled


                                             >
                                        </base-input>
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Numero de Téléphone"
                                                        
                                                        input-classes="form-control-alternative"
                                                        disabled
                                            

                                             >
                                        </base-input>
                                        </div>
                                  
                                        
                                      
                                    </div>
                                </div>
                                <hr class="my-4" />
                                
                                <div class="pl-lg-12">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Date de naissance"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                         disabled
                                                        


                                             >
                                        </base-input>
                                        </div>
                                          <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Lieux de naissance"
                                                        placeholder="Lieux"
                                                        input-classes="form-control-alternative"
                                                         disabled
                                                     

                                           >
                                        </base-input>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Wilaya actuelle"
                                                        
                                                        input-classes="form-control-alternative"
                                                         disabled
                                                       
                                           >
                                        </base-input>
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Commune actuelle"
                                                        
                                                        input-classes="form-control-alternative"
                                                         disabled
                                                       


                                             >
                                        </base-input>
                                        </div>
                                        
                                    <div class="col-lg-12">
                                            <base-input alternative=""
                                                        label="Adresse exacte"
                                                        placeholder="adresse"
                                                        input-classes="form-control-alternative"
                                                       disabled


                                           >
                                        </base-input>
                                        </div>
                                          </div>
                                </div>
                                 <div class="text-center">
                          
                                <base-button  @click="demoVisibility()"  type="danger" size="lg" >Changer l'état de ce cas</base-button>
                             </div>


              
                               

           
                               
                            </form>
                        </template>
                    </card>
                    </div>
                </div>
            </div>
             </div>

     <div class="container-fluid " id="change" style="visibility:hidden;">
            <div  class="row justify-content-center" >
            <div class="row">
              <div class="col-lg-12 col-md-12" >
               
                   <card shadow type="secondary">
                          <div class="card-body px-lg-12 py-lg-12">
                                        
                             <div class="pl-lg-12">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-dropdown >
                              <base-button   id="button1" slot="title" type="info" class="dropdown-toggle" block>
                                Choisir le nouvel état
                              </base-button>
                              <a class="dropdown-item" >Positif (confirmé)</a>
                              <a class="dropdown-item" >Négatif</a>
                               <a class="dropdown-item" >Guéri</a>
                              <a class="dropdown-item" >Décédé</a>
                           
                            </base-dropdown>      </div>
                            <div class="col-lg-6">
                                 <base-button   outline  type="info" size="lg" >Enregistrer le nouvel état</base-button>
                  </div> </div> </div> </div> </card> </div>

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


demoVisibility() {


   document.getElementById("change").style.visibility = "visible";

},
    chercher_numcarte(){


        const option = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        axios.get('http://localhost:4000/getCasSuspect',{carteNational:this.user.carteNational},option).then(function (response){
            document.getElementById("etat").value = response.etat;
            document.getElementById("nom").value = response.nom;
            document.getElementById("prenom").value = response.prenom;
            document.getElementById("CIN").value = response.carteNational;
            document.getElementById("numTel").value = response.numTlfn;
            document.getElementById("dateNaiss").value = response.dateNaissance;
            document.getElementById("lieuNaiss").value = response.lieuNaissance;
            document.getElementById("adr").value = response.adresse;
            document.getElementById("commune").value = response.commune;
        })

        document.getElementById("contain").style.visibility = "visible";

    }
    }
    }

    

</script>
<style></style>
