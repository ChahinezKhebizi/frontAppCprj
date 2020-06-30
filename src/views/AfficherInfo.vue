<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style=" background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;">
                       <!-- Mask -->
            <span class="mask bg-gradient-success opacity-4"></span>
            <!--base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8" style=" background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;"-->
            <!-- Card stats -->
          
            <!-- Header container -->
            
        </base-header>





<<<<<<< HEAD
        <div class="container-fluid mt--8" >
            <div  class="row justify-content-center" >
            <div class="row">

                <div class="col-xl-12 order-xl-1">
=======
        <div class="container-fluid mt--6" >
            <div class="row">

                <div class="col-xl-8 order-xl-1">
>>>>>>> 8f329594029da2e42833265039dc45490f9daf98
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
<<<<<<< HEAD

=======
>>>>>>> 8f329594029da2e42833265039dc45490f9daf98
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
                          
                                <base-button  @click="demoDisplay()" tag="a" type="secondary" size="lg"  class="active" role="button" aria-pressed="true"  >Changer l'état de ce cas</base-button>
                             </div>


                <div class="col-lg-12 col-md-12">
               
                   
                          <div class="card-body px-lg-12 py-lg-12">
                                        
                             <hr class="my-12" />
                             <div class="pl-lg-12">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-dropdown >
                              <base-button  style="visibility:hidden;" id="button1" slot="title" type="info" class="dropdown-toggle" block>
                                Choisir le nouvel état
                              </base-button>
                              <a class="dropdown-item" href="#">Positif (confirmé)</a>
                              <a class="dropdown-item" href="#">Négatif</a>
                               <a class="dropdown-item" href="#">Guéri</a>
                              <a class="dropdown-item" href="#">Décédé</a>
                           
                            </base-dropdown>      </div>
                            <div class="col-lg-6">
                                 <base-button style="visibility:hidden;" id="button2" outline  type="info" size="lg" >Enregistrer le nouvel état</base-button>
                  </div> </div> </div> </div> </div>
                                
                               

           
                               
                            </form>
                        </template>
                    </card>
<<<<<<< HEAD
                    </div>
=======
>>>>>>> 8f329594029da2e42833265039dc45490f9daf98
                </div>
            </div>
          
        </div>
    </div>
</template>
<script>
<<<<<<< HEAD
export default{
=======
    import axios from 'axios'
export default{
        name: 'afficherinfo',
        data() {
            return {
                model: {
                    nom : '',
                    prenom : '',
                    numTlfn:'',
                    dateNaissance :'',
                    lieuNaissance : '',
                    adresse :'',
                    carteNational:'',
                    commune:'',
                    wilaya:''
                }
            }
        }  ,
>>>>>>> 8f329594029da2e42833265039dc45490f9daf98
    methods:{
        demoDisplay() {
  document.getElementById("button1").style.visibility = "visible";
  document.getElementById("button2").style.visibility = "visible";
<<<<<<< HEAD
}
=======
},

>>>>>>> 8f329594029da2e42833265039dc45490f9daf98
    }
}


</script>
<style></style>
