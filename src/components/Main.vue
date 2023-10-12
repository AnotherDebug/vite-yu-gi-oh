<script>
import Card from './partials/Card.vue';
export default {
    name: 'Main',
    components: {
        Card
    }
}
</script>


<template>
    <main>
        <div class="container">
            <h1>ciao</h1>
            <div class="row p-5">

                <div class="found">
                    <h5>Found</h5>
                </div>

                <div class="col d-flex flex-wrap">

                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />

                </div>
            </div>
        </div>
    </main>
</template>


<style lang="scss" scoped>

@use '../scss/partials/variables' as *;

main {
    background-color: $primary-color;

    .row {
        background-color: $white-color;

        .found {
            background-color: $black-color;
            color: $white-color;
            padding: 10px;
        }
    }
}
</style>