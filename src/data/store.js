import { reactive } from "vue";

export const store = reactive ({
   apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=200&offset=0',
   cardsList: [],
   archetypeList: [],
   selectedArchetype: '',
   isLoaded: false
})