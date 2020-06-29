<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->
         <div class="row">
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Total des cas confirmé"
                                type="gradient-red"
                                sub-title="350,897"
                                icon="ni ni-chart-bar-32"
                                class="mb-4 mb-xl-0"

                    >
                     <template slot="footer">
                            <span class="text-danger mr-2"><i class="ni ni-fat-add"></i> 300  cas</span>
                            <span class="text-nowrap">Aujourd'hui</span>
                        </template>

                        
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Total des cas suspects"
                                type="gradient-orange"
                                sub-title="2,356"
                                icon="ni ni-chart-pie-35"
                                class="mb-4 mb-xl-0"
                    >
                     <template slot="footer">
                            <span class="text-danger mr-2"><i class="ni ni-fat-add"></i> 700  cas</span>
                            <span class="text-nowrap">Aujourd'hui</span>
                        </template>


                
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Total des cas morts"
                                type="default"

                                sub-title="600"
                                icon="ni ni-sound-wave"
                                class="mb-4 mb-xl-0"
                    >
                      <template slot="footer">
                            <span class="text-default mr-2"><i class="ni ni-fat-add"></i> 10  cas</span>
                            <span class="text-nowrap">Aujourd'hui</span>
                        </template>

                    </stats-card>

                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Total des cas guéris"
                                type="gradient-green"
                                sub-title="15,000"
                                icon="ni ni-favourite-28"
                                class="mb-4 mb-xl-0"
                    >
                     <template slot="footer">
                            <span class="text-success mr-2"><i class="ni ni-fat-add"></i> 600  cas</span>
                            <span class="text-nowrap">Aujourd'hui</span>
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
                                        placeholder="insérer le numéro">
                           </base-input>  
                            
                           <base-dropdown >
                              <base-button slot="title" type="secondary" class="dropdown-toggle" block>
                                Choisir le nouvel état
                              </base-button>
                              <a class="dropdown-item" href="#">Positif (confirmé)</a>
                              <a class="dropdown-item" href="#">Négatif</a>
                               <a class="dropdown-item" href="#">Guéri</a>
                              <a class="dropdown-item" href="#">Décédé</a>
                           
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
</template>
<script>

</script>
<style></style>
