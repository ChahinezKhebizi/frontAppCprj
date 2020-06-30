<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->
            <div class="row">
                <div class="col-xl-3 col-lg-6">
<<<<<<< HEAD
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
=======
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
>>>>>>> 8f329594029da2e42833265039dc45490f9daf98
                                type="gradient-orange"
                                sub-title="2,356"
                                icon="ni ni-chart-pie-35"
                                class="mb-4 mb-xl-0"
                    >
<<<<<<< HEAD
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

=======

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
>>>>>>> 8f329594029da2e42833265039dc45490f9daf98
                    </stats-card>

                </div>
                <div class="col-xl-3 col-lg-6">
<<<<<<< HEAD
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


                       
=======
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
>>>>>>> 8f329594029da2e42833265039dc45490f9daf98
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
<<<<<<< HEAD
                                
                                <h5 class="h3 text-white mb-0">Statistiques :</h5>
=======
                                <h6 class="text-light text-uppercase ls-1 mb-1">Overview</h6>
                                <h5 class="h3 text-white mb-0">Sales value</h5>
>>>>>>> 8f329594029da2e42833265039dc45490f9daf98
                            </div>
                            <div class="col">
                                <ul class="nav nav-pills justify-content-end">
                                    <li class="nav-item mr-2 mr-md-0">
                                        <a class="nav-link py-2 px-3"
                                           href="#"
                                           :class="{active: bigLineChart.activeIndex === 0}"
                                           @click.prevent="initBigChart(0)">
<<<<<<< HEAD
                                            <span class="d-none d-md-block">Par mois</span>
=======
                                            <span class="d-none d-md-block">Month</span>
>>>>>>> 8f329594029da2e42833265039dc45490f9daf98
                                            <span class="d-md-none">M</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link py-2 px-3"
                                           href="#"
                                           :class="{active: bigLineChart.activeIndex === 1}"
                                           @click.prevent="initBigChart(1)">
<<<<<<< HEAD
                                            <span class="d-none d-md-block">Par semaine</span>
=======
                                            <span class="d-none d-md-block">Week</span>
>>>>>>> 8f329594029da2e42833265039dc45490f9daf98
                                            <span class="d-md-none">W</span>
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
                                <h6 class="text-uppercase text-muted ls-1 mb-1">Performance</h6>
                                <h5 class="h3 mb-0">Total orders</h5>
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

<<<<<<< HEAD
=======
            <!--Tables-->
            <div class="row mt-5">
                <div class="col-xl-8 mb-5 mb-xl-0">
                    <page-visits-table></page-visits-table>
                </div>
                <div class="col-xl-4">
                    <social-traffic-table></social-traffic-table>
                </div>
            </div>
            <!--End tables-->
>>>>>>> 8f329594029da2e42833265039dc45490f9daf98
        </div>

    </div>
</template>
<script>
  // Charts
  import * as chartConfigs from '@/components/Charts/config';
  import LineChart from '@/components/Charts/LineChart';
  import BarChart from '@/components/Charts/BarChart';

  // Tables
<<<<<<< HEAD
  
=======
  import SocialTrafficTable from './Dashboard/SocialTrafficTable';
  import PageVisitsTable from './Dashboard/PageVisitsTable';
>>>>>>> 8f329594029da2e42833265039dc45490f9daf98

  export default {
    components: {
      LineChart,
      BarChart,
<<<<<<< HEAD
   
    
=======
      PageVisitsTable,
      SocialTrafficTable,
>>>>>>> 8f329594029da2e42833265039dc45490f9daf98
    },
    data() {
      return {
        bigLineChart: {
          allData: [
            [0, 20, 10, 30, 15, 40, 20, 60, 60],
            [0, 20, 5, 25, 10, 30, 15, 40, 40]
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
            labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
              label: 'Sales',
              data: [25, 20, 30, 22, 17, 29]
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
              label: 'Performance',
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
