<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
export default {
name: "App",
components: {
  Header,
  Main
}
}
</script>


<template>
  
<h1>Yu-Gi-Oh</h1>

<Header />
<Main />

</template>


<style lang="scss">

@use './scss/main.scss';

</style>