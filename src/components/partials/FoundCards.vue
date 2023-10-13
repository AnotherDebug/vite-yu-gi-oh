<script>
import { store } from '../../data/store';
export default {
    name: 'FoundCards',
    data() {
        return {
            store
        }
    },
    computed:{
            
            foundCards() {
                if(store.cardsList.length > 0){
                    return `Found ${store.cardsList.length} cards`;
                }else {
                    return "No cards found";
                }
            }
        }
}
</script>


<template>

    <div class="found">
        <h5>{{ foundCards }}</h5>
    </div>

</template>


<style lang="scss" scoped>

@use '../../scss/partials/variables' as *;
 .found {
            background-color: $black-color;
            color: $white-color;
            padding: 10px;
        }
</style>