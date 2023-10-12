<script>
export default {
    name: 'Card',
    props:{
        name:String,
        archetype:String,
        image_url:String
    }
}
</script>


<template>
    <div class="card rounded-0">
        <img :src="image_url" class="card-img-top" alt="...">
        <div class="card-body text-center d-flex flex-column justify-content-between" style="height: 10rem">
            <h4 class="card-title">{{ name }}</h4>
            <h5 class="card-text">{{ archetype }}</h5>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../../scss/partials/variables' as *;

.card {
    width: calc(100% / 5 - 10px);
    margin: 5px;

    .card-body {
        background-color: $primary-color;
    }
}
</style>