<template>
  <div class="card shadow"
       :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">
            {{title}}
          </h3>
        </div>
        <div class="col text-right">
          <base-button type="primary" size="sm" @click="get_cass">See all</base-button>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table class="table align-items-center table-flush"
                  :class="type === 'dark' ? 'table-dark': ''"
                  :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'"
                  tbody-classes="list"
                  :data="cass">

        <template slot="columns">
          <tbody>
          <th>Numéro de la carte</th>
          <th>Nom</th>
          <th>Prénom</th>
          <th>numéro de Tléphone</th>
          <th>date de naissance</th>
          <th>lieu de naissance</th>
          <th>adresse</th>

          <tr v-for="cas in cass" :key="cas">
            <td>{{cas.carteNational}}</td>
            <td>{{cas.nom}}</td>
            <td>{{cas.prenom}}</td>
            <td>{{cas.numTlfn}}</td>
            <td>{{cas.dateNaissance}}</td>
            <td>{{cas.lieuNaissance}}</td>
            <td>{{cas.adresse}}</td>
          </tr>
          </tbody>




        </template>

        <template slot-scope="{row}">
          <th scope="row">
            <div class="media align-items-center">

              <div class="media-body">
                <span class="name mb-0 text-sm">{{row.title}}</span>
              </div>
            </div>
          </th>
          <td >
            {{row.budget}}
          </td>
          <td>

          </td>
          <td>
            <badge class="badge-dot mr-4" :type="row.statusType">
              <i :class="`bg-${row.statusType}`"></i>
              <span class="status">{{row.status}}</span>
            </badge>
          </td>

          <td>
            <div class="d-flex align-items-center">
              <span class="completion mr-2">{{row.completion}}%</span>
              <div>
                <base-progress :type="row.statusType"
                               :show-percentage="false"
                               class="pt-0"
                               :value="row.completion"/>
              </div>
            </div>
          </td>

          <td class="text-right">
            <base-dropdown class="dropdown"
                           position="right">
              <a slot="title" class="btn btn-sm btn-icon-only text-light" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
              </a>

              <template>
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </template>
            </base-dropdown>
          </td>

        </template>

      </base-table>
    </div>

    <div class="card-footer d-flex justify-content-end"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <base-pagination total="30"></base-pagination>
    </div>

  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'projects-table',
    props: {
      type: {
        type: String
      },
      title: String
    },
    data() {
      return {
        cass: []
      }},
    methods:{
      get_cass() {
        const option = {
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          }
        }
        axios.get('http://localhost:4000/getCasSuspects', option).then(response => (this.cass = response.data, alert(this.cass)))
      }
    }
  }
</script>
<style>
</style>
