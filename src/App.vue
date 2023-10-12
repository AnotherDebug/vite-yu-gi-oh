<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import { store } from './data/store';
import axios from 'axios';
export default {
name: "App",
components: {
  Header,
  Main
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
      store.cardsList = res.data;
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
<Main />

</template>


<style lang="scss">

@use './scss/main.scss';

</style>