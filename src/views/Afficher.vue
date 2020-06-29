<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style=" background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;">
                       <!-- Mask -->
            <span class="mask bg-gradient-success opacity-7"></span>
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

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col">
                    <projects-table type ="dark" title="Table des cas"></projects-table>
                </div>
            </div>
            
        </div>

    </div>
</template>
<script>
  import ProjectsTable from './Tables/ProjectsTable'
  export default {
    name: 'tables',
    components: {
      ProjectsTable
    }
  };
</script>
<style></style>
