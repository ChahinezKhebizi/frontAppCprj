<template>

      
        <div class="row justify-content-center">
                              
            <div class="col-lg-5 col-md-7">
                <div class="card bg-secondary shadow border-0">
                            
                    <div class="card-body px-lg-5 py-lg-5">

                        <div class="text-center text-muted mb-4">
                            <strong>Se connecter </strong>
                        </div>

                        <form role="form">
                            <base-input class="input-group-alternative mb-3"
                                        placeholder="Nom d'utilisateur"
                                        addon-left-icon="ni ni-circle-08"
                                        v-model="user.email">
                          </base-input>

                            <base-input class="input-group-alternative"
                                        placeholder="Mot de passe"
                                        type="password"
                                        addon-left-icon="ni ni-lock-circle-open"
                                        v-model="user.password">
                           </base-input>           


                            <base-checkbox class="custom-control-alternative">
                                <span class="text-muted">Remember me</span>
                            </base-checkbox>
                            <div class="text-center">
                                <base-button type="primary" class="my-2" @click="login"
tag="a" size="lg" href="/#/accueil"  role="button" aria-pressed="true">
                            Se connecter</base-button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-6">
                        <a href="#" class="text-light"><small>Mot de passe oublié?</small></a>
                    </div>
                    
           
            </div>
        </div>
         </div>
</template>
<script>
import axios from 'axios'
    export default {
    name: 'login',
    data() {
      return {
            user: {
                email: '',
                password: ''
            }
      }
    }  ,
     methods:{
            login(){
            const option = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            axios.post('http://localhost:4000/authentificate',
                {
                    email: this.user.email,
                    password: this.user.password
                }, option).then(function (response) {
                //handle success
                // eslint-disable-next-line no-console
                console.log(response);
            }).catch(function (response) {
                    //handle error
                    // eslint-disable-next-line no-console
                    console.log(response);
                }).then(function (response) {
                    localStorage.setItem('token', JSON.stringify(response.data.token).substring(1, JSON.stringify(response.data.token).length - 1)),
                    localStorage.setItem('data', JSON.stringify(response.data).substring(1, JSON.stringify(response.data).length - 1)),
                    localStorage.setItem('msg', JSON.stringify(response.message).substring(1, JSON.stringify(response.message).length - 1))
                 })
                     // eslint-disable-next-line no-console
                     console.log(   "le token est ");




        }}}


</script>
<style>
</style>
