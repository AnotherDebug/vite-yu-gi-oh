<script>
import { store } from '../data/store';
export default {
    name: 'SelectCard',
    data() {
        return{
            store,
        }
    }
}
</script>


<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <select  style="width: 25%;" class="form-select ms-3 my-4" aria-label="select">
                    <option selected>Choose an Archetype</option>
                    <option @click="$emit('selectedArch')" v-for="(type, index) in store.archetypeList" :key="index" :value="type">{{ type }}</option>
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