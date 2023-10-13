<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import SelectCard from './components/SelectCard.vue';
import { store } from './data/store';
import axios from 'axios';
export default {
name: "App",
components: {
  Header,
  Main,
  SelectCard
},
data() {
  return{
    store
  }
},
methods:{
  getApi() {
    axios.get(store.apiUrl)
    .then(res => {
      store.cardsList = res.data.data;
      console.log(store.cardsList);
    })
    .catch(e => {
      console.log(e);
    })
  }
},
mounted() {
  this.getApi();
}
}
</script>


<template>

<Header />
<SelectCard />
<Main />

</template>


<style lang="scss">

@use './scss/main.scss';

</style>