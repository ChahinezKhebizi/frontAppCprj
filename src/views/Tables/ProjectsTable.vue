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
          <base-button type="primary" size="sm">Afficher tous</base-button>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table class="table align-items-center table-flush"
                  :class="type === 'dark' ? 'table-dark': ''"
                  :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'"
                  tbody-classes="list"
                  :data="tableData">
        <template slot="columns">
          <th>Numéro de la carte</th>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Etat</th>
          
          <th></th>
        </template>

        <template slot-scope="{row}">
          <th scope="row">
            <div class="media align-items-center">
             
              <div class="media-body">
                <span class="name mb-0 text-sm">{{row.nmr}}</span>
              </div>
            </div>
          </th>
          <td >
            {{row.nom}}
          </td>
          <td>
               {{row.prenom}}
          </td>
          <td>
            <badge class="badge-dot mr-4" :type="row.statusType">
              <i :class="`bg-${row.statusType}`"></i>
              <span class="status">{{row.status}}</span>
            </badge>
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
        tableData: [
          {
            nmr: '100551305666',
            nom: 'ALIOUA',
            prenom: 'Amine',
            statusType: 'warning',
            status:'suspect',
            
          },
          {
            nmr: '100451304892',
            nom: 'MUSTAFA',
            prenom: 'Adel',
            statusType: 'danger',
            status:'confirmé',
          
          },
          {
             nmr: '100491121789',
            nom: 'MUSTAFA',
            prenom: 'Wardia',
            statusType: 'warning',
            status:'suspect',
          },
          {
            nmr: '100851805667',
            nom: 'BELAL',
            prenom: 'Walid',
            statusType: 'success',
            status:'guéri',
          },
          {
             nmr: '100551305666',
            nom: 'MEBAREK',
            prenom: 'Aziz',
            statusType: 'info',
            status:'décédé',
          
          },
          {
            nmr: '100951805999',
            nom: 'SAADI',
            prenom: 'Yacine',
            statusType: 'success',
            status:'guéri',
          },
          {
             nmr: '100591121488',
            nom: 'BOUGESSA',
            prenom: 'Fatiha',
            statusType: 'danger',
            status:'confirmé',
          },
        ]
      }
    }
  }
</script>
<style>
</style>
