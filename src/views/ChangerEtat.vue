<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->
         <div class="row">
          <div class="container-fluid ">
               <div class="row justify-content-center">
            <div class="col-lg-7 col-md-7">
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
                              <a class="dropdown-item" >Positif (confirmé)</a>
                              <a class="dropdown-item" >Négatif</a>
                               <a class="dropdown-item" >Guéri</a>
                              <a class="dropdown-item" >Décédé</a>
                           
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
               
            </div>
        </base-header>


       
         
             <!--form-->
           
           


         
      

    </div>
</template>
<script>

</script>
<style></style>
