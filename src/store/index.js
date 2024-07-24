import { createStore } from 'vuex'
import axiosClient from '../axiosClient'



const store = createStore({
    state: {
        searchedMeals: []
    },
    mutations:{
        SearchMeals(state, meals){
            state.searchedMeals = meals
        },
        LetterSearch(state, meals){
            state.searchedMeals = meals
        },
        searchMealsByIngredient(state, meals){
            state.searchedMeals = meals
        }        
    },
    actions:{
        LetterSearch({commit}, keyLetter){
            axiosClient.get(`search.php?f=${keyLetter}`)
            .then (data => {
            
                commit('LetterSearch', data.data.meals)
            })
        },
        searchMealsByIngredient({commit}, keyIngredient){
            axiosClient.get(`filter.php?i=${keyIngredient}`)
            .then (data => {
                commit('searchMealsByIngredient', data.data.meals)
            })
        },
        searchMeals({ commit }, keyword){
            axiosClient.get(`search.php?s=${keyword}`)
            .then (data => {
                
                commit('SearchMeals', data.data.meals)
            })
        }
        
    },
})


export default store