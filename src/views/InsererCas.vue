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
                                                        
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Prénom"
                                                        placeholder="prénom"
                                                        input-classes="form-control-alternative"
                                                      
                                            />
                                        </div>
                                    </div>
                                     <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Numero de Téléphone"
                                                        
                                                        input-classes="form-control-alternative"
                                                        
                                            />
                                        </div>
                                  
                                        <div class="col-lg-12">
                                            <base-input alternative=""
                                                        label="Numéro de la pièce d'identité"
                                                        placeholder="insérer le numéro ici"
                                                        input-classes="form-control-alternative"
                                                       
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
                                                       
                                            />
                                        </div>
                                          <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Lieux de naissance"
                                                        placeholder="Lieux"
                                                        input-classes="form-control-alternative"
                                                        
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Wilaya actuelle"
                                                        
                                                        input-classes="form-control-alternative"
                                                        
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Commune actuelle"
                                                        
                                                        input-classes="form-control-alternative"
                                                        
                                            />
                                        </div>
                                        
                                    <div class="col-lg-12">
                                            <base-input alternative=""
                                                        label="Adresse exacte"
                                                        placeholder="adresse"
                                                        input-classes="form-control-alternative"
                                                        
                                            />
                                        </div>
                                          </div>
                                </div>
                                 <div class="text-center">
                                <base-button type="success" class="my-4" block>Enregistrer</base-button>
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
  
</script>
<style></style>
