<template>
    <div>
          <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style=" background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;">
                     <span class="mask bg-gradient-success opacity-7"></span>
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

        <!--Charts-->
        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col-xl-8 mb-5 mb-xl-0">
                    <card type="default" header-classes="bg-transparent">
                        <div slot="header" class="row align-items-center">
                            <div class="col">
                                
                                <h5 class="h3 text-white mb-0">Statistiques :</h5>
                            </div>
                            <div class="col">
                                <ul class="nav nav-pills justify-content-end">
                                    <li class="nav-item mr-2 mr-md-0">
                                        <a class="nav-link py-2 px-3"
                                           href="#"
                                           :class="{active: bigLineChart.activeIndex === 0}"
                                           @click.prevent="initBigChart(0)">
                                            <span class="d-none d-md-block">Par mois</span>
                                            <span class="d-md-none">M</span>
                                        </a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        <line-chart
                                :height="350"
                                ref="bigChart"
                                :chart-data="bigLineChart.chartData"
                                :extra-options="bigLineChart.extraOptions"
                        >
                        </line-chart>

                    </card>
                </div>

                <div class="col-xl-4">
                    <card header-classes="bg-transparent">
                        <div slot="header" class="row align-items-center">
                            <div class="col">
                                <h6 class="h3 mb-0">Pourcentages des Catégories des cas décédés</h6>
                               
                            </div>
                        </div>

                        <bar-chart
                                :height="350"
                                ref="barChart"
                                :chart-data="redBarChart.chartData"
                        >
                        </bar-chart>
                    </card>
                </div>
            </div>
            <!-- End charts-->

        </div>

    </div>
</template>
<script>
  // Charts
  import * as chartConfigs from '@/components/Charts/config';
  import LineChart from '@/components/Charts/LineChart';
  import BarChart from '@/components/Charts/PieChart';

  // Tables
  

  export default {
    components: {
      LineChart,
      BarChart,
   
    
    },
    data() {
      return {
        bigLineChart: {
          allData: [
            [10, 30, 15, 40, 55, 60, 40, 70, 90],
           
          ],
          activeIndex: 0,
          chartData: {
            datasets: [],
            labels: [],
          },
          extraOptions: chartConfigs.blueChartOptions,
        },
        redBarChart: {
          chartData: {
            labels: ['plus de 50 ans', 'entre 20 ans et 50 ans ', 'moins de 20 ans'],
            datasets: [{
            
              data: [80, 15, 5]
            }]
          }
        }
      };
    },
    methods: {
      initBigChart(index) {
        let chartData = {
          datasets: [
            {
              label: 'Catégories des malades',
              data: this.bigLineChart.allData[index]
            }
          ],
          labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        };
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      }
    },
    mounted() {
      this.initBigChart(0);
    }
  };
</script>
<style></style>
