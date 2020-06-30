<template>
    <div>
<<<<<<< HEAD
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style=" background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;">
                     <span class="mask bg-gradient-success opacity-7"></span>
         
        </base-header>
   
  
     <div class="container-fluid mt--6">
          <div  class="row justify-content-center" >
       <div class="col-xl-8 order-xl-1">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-10">
                                    <h3 class="mb-1">Envoyer une notification d'urgence :</h3>
                                </div>
                              </div>
                          </div>
                           <div class="card-body px-lg-5 py-lg-5">
                               <form>
                     <strong>Joindre le rapport : </strong>
                  <input  type="file"  @change="uploadFile" >
                </form>

                   <div class="text-center">
                <base-button type="danger" size="lg" class="my-4"   @click="handleSubmit">Envoyer la notification !</base-button>
                  </div>
                            </div>
                       

                             </card>
                        </div>
                         </div>
                           </div>


    



                

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

       

        <div class="row justify-content-center">
            <div class="col-lg-5 col-md-7">
                <div class="card bg-secondary shadow border-0">
                   
              <div class="card-body px-lg-5 py-lg-5">

<form @submit.prevent="handleSubmit" enctype="multipart/form-data">

                    <p> <label>Veuillez introduire le rapport que vous voulez envoyer avec la notification :</label>  </p>
                  <input  type="file" id="file" ref="file" @change="uploadFile" >
                    <base-button type="danger" size="lg" class="my-4"   >Envoyer la notification !</base-button>
</form>

                  </div></div></div></div>      

                 
 </div>
                             



</template>

<script>


    import axios from 'axios'


    export default {
    name: 'Notifier',
    data() {
        return {

                attachment: null,
                form : new FormData
            }
    }  ,
    methods:{
        uploadFile (event) {
            this.files = event.target.files
        },
        handleSubmit() {
            const formData = new FormData();
            for (const i of Object.keys(this.files)) {
                formData.append('files', this.files[i])
            }
            axios.post('http://localhost:4000/sendEmail', formData, {
            }).then((res) => {
                console.log(res)
            })
        }}

    } 

           

        
</script>

<style></style>
