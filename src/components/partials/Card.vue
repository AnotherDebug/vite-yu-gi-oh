<script>
export default {
    name: 'Card'
}
</script>


<template>
    <div class="card rounded-0">
        <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" class="card-img-top" alt="...">
        <div class="card-body text-center d-flex flex-column justify-content-between" style="height: 10rem">
            <h4 class="card-title">"A Cell Breeding Device"</h4>
            <h5 class="card-text">Alien</h5>
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