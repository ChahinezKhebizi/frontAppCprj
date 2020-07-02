<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style=" background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;">
            <!-- Mask -->
            <span class="mask bg-gradient-success opacity-7"></span>
            <!--base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8" style=" background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;"-->
            <!-- Card stats -->

            <!-- Header container -->

        </base-header>

        <div class="container-fluid mt--8" >
            <div  class="row justify-content-center" >
                <div class="row">

                    <div class="col-xl-14 order-xl-1">
                        <card shadow type="secondary">
                            <div slot="header" class="bg-white border-0">
                                <div class="row align-items-center">
                                    <div class="col-8">
                                        <h3 class="mb-0">Insertion d'un cas suspect :</h3>
                                    </div>

                                </div>
                            </div>
                            <template>
                                <form id="frm">

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
                                                            label="Numéro de la pièce d'identité"
                                                            placeholder="insérer le numéro ici"
                                                            input-classes="form-control-alternative"
                                                            v-model="model.carteNational"


                                                />
                                            </div>
                                            <div class="col-lg-6">
                                                <base-input alternative=""
                                                            label="Numero de Téléphone"
                                                            placeholder="insérer le numéro sans espaces"
                                                            input-classes="form-control-alternative"
                                                            v-model="model.numTlfn"

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
                                                            label="Adresse actuelle exacte"
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

   <base-alert style=" visibility:hidden" id="alert" type="success">
              <strong>Insertion avec succés!</strong> 
             </base-alert>


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
                document.getElementById("frm").reset();
                document.getElementById("alert").style.visibility = "visible";
                const option = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                axios.post('http://localhost:4000/createCasSuspect',
                    {
                        nom : this.model.nom,
                        prenom : this.model.prenom,
                        numTlfn:this.model.numTlfn,
                        dateNaissance :this.model.dateNaissance,
                        lieuNaissance : this.model.lieuNaissance,
                        adresse :this.model.adresse,
                        carteNational:this.model.carteNational,
                        commune:this.model.commune,
                        wilaya:this.model.wilaya
                    }, option).then(function (response) {
                    //handle success
                    // eslint-disable-next-line no-console
                    console.log(response);
                    
                })
            }}}


</script>
<style></style>
