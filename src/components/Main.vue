<script>
import Card from './partials/Card.vue';
import { store } from '../data/store';
import FoundCards from './partials/FoundCards.vue';
import SelectCard from './partials/SelectCard.vue';
export default {
    name: 'Main',
    components: {
        Card,
        FoundCards,
        SelectCard
    },
    data() {
        return {
            store
        }
    },
    mounted() {
        console.log(store.cardsList);
    }
}
</script>


<template>
    <main>
        <div class="container">

            <SelectCard />
            
            <div class="row p-5">

                <FoundCards />

                <div class="col d-flex flex-wrap">

                    <Card 
                    v-for="card in store.cardsList" 
                    :key="card.id"
                    :name="card.name"
                    :archetype="card.archetype"
                    :image_url="card.card_images[0].image_url" />

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
    }
}
</style>