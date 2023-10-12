<script>
export default {
  name: 'Header'
}
</script>


<template>
  <header>

    <img src="../../public/yugioh_logo__2016__by_alanmac95_d92o1t0-375w-2x.png" alt="">

  <h1>Yu-Gi-Oh Api</h1>

  </header>
</template>


<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  height: 80px;
  margin-left: 20px;
  img {
    height: 25%;
  }
  h1 {
    margin-left: 10px;
  }
}
</style>