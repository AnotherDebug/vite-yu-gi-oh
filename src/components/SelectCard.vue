<script>
import { store } from '../data/store';
export default {
    name: 'SelectCard',
    data() {
        return{
            store,
        }
    },
    mounted() {
        console.log(store.cardsList);
    }
}
</script>


<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <select style="width: 25%;" class="form-select ms-3 my-4">
                    <option selected>Choose an Archetype</option>
                    <option ></option>
                </select>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

@use '../scss/partials/variables' as *;
.container-fluid {
    background-color: $primary-color;
}

</style>