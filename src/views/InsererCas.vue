<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style=" background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;">
            <!--base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8" style=" background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;"-->
            <!-- Card stats -->
            <!-- Mask -->
            <span class="mask bg-gradient-success opacity-4"></span>
            <!-- Header container -->
            
        </base-header>

        <div class="container-fluid mt--6" >
            <div class="row">

                <div class="col-xl-8 order-xl-1">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">Insertion d'un cas suspect</h3>
                                </div>
                              
                            </div>
                        </div>
                        <template>
                            <form >
                                
                                <div class="pl-lg-12">
                                   
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Nom"
                                                        placeholder="nom"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.nom"
                                                        
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Prénom"
                                                        placeholder="prénom"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.prenom"


                                            />
                                        </div>
                                    </div>
                                     <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Numero de Téléphone"
                                                        
                                                        input-classes="form-control-alternative"
                                                        v-model="model.numTlfn"

                                            />
                                        </div>
                                  
                                        <div class="col-lg-12">
                                            <base-input alternative=""
                                                        label="Numéro de la pièce d'identité"
                                                        placeholder="insérer le numéro ici"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.carteNational"


                                            />
                                        </div>
                                      
                                    </div>
                                </div>
                                <hr class="my-4" />
                                
                                <div class="pl-lg-12">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Date de naissance"
                                                        type="Date"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.dateNaissance"


                                            />
                                        </div>
                                          <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Lieux de naissance"
                                                        placeholder="Lieux"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.lieuNaissance"


                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Wilaya actuelle"
                                                        
                                                        input-classes="form-control-alternative"
                                                        v-model="model.wilaya"


                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Commune actuelle"
                                                        
                                                        input-classes="form-control-alternative"
                                                        v-model="model.commune"


                                            />
                                        </div>
                                        
                                    <div class="col-lg-12">
                                            <base-input alternative=""
                                                        label="Adresse exacte"
                                                        placeholder="adresse"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.address"


                                            />
                                        </div>
                                          </div>
                                </div>
                                 <div class="text-center">
                                <base-button type="success" class="my-4" block @click="crerCas">Enregistrer</base-button>
                            </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
          
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
    name: 'inserercas',
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
    methods:{
        crerCas(){
            const option = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            axios.post('http://localhost:4000/createCasSuspect',
                {
                    nom : this.nom,
                    prenom : this.prenom,
                    numTlfn:this.prenom,
                    dateNaissance :this.dateNaissance,
                    lieuNaissance : this.lieuNaissance,
                    adresse :this.adresse,
                    carteNational:this.carteNational,
                    commune:this.commune,
                    wilaya:this.wilaya
                }, option).then(function (response) {
                //handle success
                // eslint-disable-next-line no-console
                console.log(response);
            })



        }}}
  
</script>
<style></style>
