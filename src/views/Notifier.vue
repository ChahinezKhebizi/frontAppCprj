<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style=" background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;">
                     <span class="mask bg-gradient-success opacity-6"></span>
         
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
                               <form id="frm">
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
                          <base-alert style=" visibility:hidden" id="alert" type="success">
              <strong>Notification envoyée avec succés!</strong> 
             </base-alert>
                           </div>


    



                
                 
 </div>
                             



</template>

<script>
  import axios from 'axios'

    export default {
    name: 'Notifier',
    data() {
        return {
                file:""
            }
    }  ,
        methods:{
         
            uploadFile () {
                this.file = this.$refs.file.files[0];
            },
            async handleSubmit() {
              document.getElementById("frm").reset();
                 document.getElementById("alert").style.visibility = "visible";

                const formData = new FormData();
                formData.append('file', this.file);

                    await axios.post('http://localhost:4000/sendEmail', formData)
            },
           }
    }
</script>

<style></style>
