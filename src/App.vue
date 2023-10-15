<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import SelectCard from './components/SelectCard.vue';
import { store } from './data/store';
import axios from 'axios';
import Loader from './components/partials/Loader.vue';
export default {
  name: "App",
  components: {
    Header,
    Main,
    SelectCard,
    Loader
  },
  data() {
    return {
      store,
    }
  },

  methods: {
    getApi() {
      store.isLoaded = true;
      // Se store.selectedArchetype è vuoto
      if (!store.selectedArchetype) {
        // Faccio la chiamata API senza il parametro "archetype"
        axios.get(store.apiUrl)
          .then(res => {
            store.cardsList = res.data.data;
            console.log(store.cardsList);
            //store.isLoaded = false;
          })
          .catch(e => {
            console.log(e);
          });
      } else {
        // Quando un archetipo è selezionato parte la chiamata con params
        axios.get(store.apiUrl, {
          params: {
            archetype: store.selectedArchetype
          }
        })
          .then(res => {
            store.cardsList = res.data.data;
            console.log(store.cardsList);
            //store.isLoaded = false;
          })
          .catch(e => {
            console.log(e);
          });
      }
    }

  },
  watch: {
    'store.selectedArchetype': 'getApi'
  },
  mounted() {
    //1. Faccio una chiamata iniziale per ottenere l'elenco degli archetipi e le carte
    axios.get(store.apiUrl)
      .then(res => {
        store.cardsList = res.data.data;
        console.log(store.cardsList);
        store.cardsList.forEach(type => {
          console.log(type.archetype);
          if (!store.archetypeList.includes(type.archetype)) {
            //se archetypeList non include i valori di arch. me li pusha!
            store.archetypeList.push(type.archetype);
            console.log(store.archetypeList);
          }
        });
        // Faccio la chiamata API iniziale con il valore predefinito di selectedArchetype
        this.getApi();
      })
      .catch(e => {
        console.log(e);
      });
  }

}
</script>


<template>
  <Header />
  <SelectCard @selectedArch="getApi" />
  <Loader v-if="store.isLoaded"/>
  <Main v-else/>
</template>


<style lang="scss">
@use './scss/main.scss';
</style>