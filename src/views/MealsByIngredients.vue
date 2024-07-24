<template>
  <div class="p-8">
     <input type="text" @change="searchMealsByIngredient" v-model="keyIngredient" class="rounded border-2 border-gray-200 h-full w-full" placeholder="search for meals by the first Ingredient">
    
   </div>
   <div v-if="!meals" class="text-center">there are no meals</div>
   <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
     <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal"></MealItem>
   </div>
 
 </template>
 
 <script >
 import MealItem from '../components/MealItem.vue'
  
 export default{
  name : 'mealsByingredients',
  data(){
    return{
      keyIngredient: ''
    }
  },
  components:{
    MealItem
  },
  methods:{
    searchMealsByIngredient(){
      console.log(this.keyIngredient)
      this.$store.dispatch('searchMealsByIngredient', this.keyIngredient)
    }
  },
  computed:{
    meals(){
      return this.$store.state.searchedMeals
    }
  },
  onMounted(){
    this.searchMealsByIngredient
  }
 }

 </script>
 
 <style>
 
 </style>