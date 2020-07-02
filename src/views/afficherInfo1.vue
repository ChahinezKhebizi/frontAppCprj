<template>
    <div>
         <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style=" background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;">
            <!-- Mask -->
            <span class="mask bg-gradient-success opacity-7"></span>
            <!-- Card stats -->
            <div class="row">



                <div class="container-fluid " >
                    <div class="row justify-content-center">
                        <div class="col-lg-5 col-md-7">
                            <div class="card bg-secondary shadow border-0">

                                <div class="card-body px-lg-5 py-lg-4">

                                    <form id="frm" role="form">

                                        <base-input ref="NC" label ="Numéro de carte d'identité" class="input-group-alternative"
                                                    placeholder="insérer le numéro"
                                                    v-model="user.numID">
                                        </base-input>




                                        <div class="text-center">
                                            <base-button   type="success" size="lg" @click="chercher_numcarte"  >Afficher les informations</base-button>

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
                                                            id="etat"
                                                            input-classes="form-control-alternative" disabled
                                                            v-model="user.etat"
                                                >

                                                </base-input>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <base-input alternative=""
                                                            label="Nom"
                                                            id="nom"
                                                            input-classes="form-control-alternative" disabled
                                                            v-model="user.nom"

                                                >

                                                </base-input>

                                            </div>
                                            <div class="col-lg-6">
                                                <base-input alternative=""
                                                            label="Prénom"
                                                            id="prenom"
                                                            input-classes="form-control-alternative"
                                                            disabled
                                                            v-model="user.prenom"

                                                >
                                                </base-input>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <base-input alternative=""
                                                            label="Numéro de la pièce d'identité"
                                                            id="CIN"
                                                           
                                                            input-classes="form-control-alternative"
                                                            v-model="user.carteNational"



                                                disabled>
                                                </base-input>
                                            </div>
                                            <div class="col-lg-6">
                                                <base-input alternative=""
                                                            label="Numero de Téléphone"
                                                            id="numTel"
                                                            input-classes="form-control-alternative"
                                                            disabled
                                                            v-model="user.numTlfn"

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
                                                            id="dateNaiss"
                                                          
                                                            input-classes="form-control-alternative"
                                                            disabled
                                                            v-model="user.dateNaissance"



                                                >
                                                </base-input>
                                            </div>
                                            <div class="col-lg-6">
                                                <base-input alternative=""
                                                            label="Lieux de naissance"
                                                            id="lieuNaiss"
                                                            
                                                            input-classes="form-control-alternative"
                                                            disabled
                                                            v-model="user.lieuNaissance"


                                                >
                                                </base-input>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <base-input alternative=""
                                                            label="Wilaya actuelle"
                                                            id="wilaya"
                                                            input-classes="form-control-alternative"
                                                            disabled
                                                            v-model="user.wilaya"

                                                >
                                                </base-input>
                                            </div>
                                            <div class="col-lg-6">
                                                <base-input alternative=""
                                                            label="Commune actuelle"
                                                            id="Commune actuelle"

                                                            input-classes="form-control-alternative"
                                                            disabled
                                                            v-model="user.commune"



                                                >
                                                </base-input>{{user.commune}}
                                            </div>

                                            <div class="col-lg-12">
                                                <base-input alternative=""
                                                            label="Adresse exacte"
                                                            id="adr"
                                                          
                                                            input-classes="form-control-alternative"
                                                            disabled
                                                            v-model="user.adresse"




                                                >
                                                </base-input> {{user.adresse}}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-center">

                                        <base-button  @click="demoVisibility" tag="a" type="secondary" size="lg"  class="active" role="button" aria-pressed="true"  >Changer l'état de ce cas</base-button>
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
                                                <a class="dropdown-item"  @click="changerEtatToconfirme">Positif (confirmé)</a>
                                                <a class="dropdown-item"  @click="changerEtatToNegtive">Négatif</a>
                                                <a class="dropdown-item"  @click="changerEtatToGuéri">Guéri</a>
                                                <a class="dropdown-item"   @click="changerEtatToDecede">Décédé</a>

                                            </base-dropdown>
                                        </div>
                                        <div class="col-lg-6">
                                            <base-button  id="button2" outline  type="info" size="lg" @click="demoVisibility2" >Enregistrer le nouvel état</base-button>
                                        </div> </div> </div> </div> </card> </div>

                </div>
            </div>
            <base-alert style=" visibility:hidden" id="alert" type="success">
              <strong>Le nouvel Etat est enregistré avec succés!</strong> 
             </base-alert>
        </div>
   
                           









    </div>
</template>
<script>

    import axios from 'axios'
    export default {
        name: 'envoienotif',
        data() {
            return {
                user: {etat:'',
                    numID:'',
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


            demoVisibility() {


                document.getElementById("change").style.visibility = "visible";

            },
            demoVisibility2() {


                document.getElementById("alert").style.visibility = "visible";

            },
            chercher_numcarte(){
                 document.getElementById("frm").reset();

                const option = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                axios.post('http://localhost:4000/getCasSuspect',{carteNational:this.user.numID},option).then(response => (
        document.getElementById("adr").value = response.data.adresse,
        document.getElementById("etat").value = response.data.etat,
        document.getElementById("wilaya").value = response.data.wilaya,
        document.getElementById("Commune actuelle").value = response.data.commune,
        document.getElementById("dateNaiss").value = response.data.dateNaissance,
        document.getElementById("lieuNaiss").value = response.data.lieuNaissance,
        document.getElementById("CIN").value = response.data.carteNational,
        document.getElementById("numTel").value = response.data.numTlfn,
        document.getElementById("nom").value = response.data.nom,
        document.getElementById("prenom").value = response.data.prenom



                ))

                document.getElementById("contain").style.visibility = "visible";

            }
        },
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
        },
        changerEtatToDecede(){
            const option = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            axios.post('http://localhost:4000/changerEtatToDecede',{carteNational:this.user.carteNational},option)
        }



    }


</script>
<style></style>
