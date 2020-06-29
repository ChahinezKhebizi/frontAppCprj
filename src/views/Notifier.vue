<template>
    <div>
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


    



                
                 
 </div>
                             



</template>

<script>
    /*import axios from 'axios'

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

    } */
</script>

<style></style>
