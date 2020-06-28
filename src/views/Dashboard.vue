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
                            <strong>Veuillez entrer les informations du cas suspect </strong>
                        </div>
                        <form role="form">

                            <base-input class="input-group-alternative"
                                        placeholder="Numéro de carte d'identité">
                           </base-input>  

                            <base-input class="input-group-alternative mb-3"
                                        placeholder="Nom" >
                            </base-input>

                            <base-input class="input-group-alternative"
                                        placeholder="Prénom">
                           </base-input>    

                            <base-input class="input-group-alternative"
                                        placeholder="Numéro du téléphone"> 
                           </base-input>  

                            <base-input class="input-group-alternative"
                                        placeholder="Date de naissance" type="Date"> 
                           </base-input> 

                            <base-input class="input-group-alternative"
                                        placeholder="Lieu de naissance">
                           </base-input>  

                            <base-input class="input-group-alternative" placeholder="Adresse">
                           </base-input>           
         
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
