import * as actionTypes from './actionTypes';
import axios from "../../axios-orders";

export const addIngredient = (ingredient) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: ingredient
    }
}
export const removeIngredient = (ingredient) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: ingredient
    }
}

export const setIngredients = (ingredients) => {
    return {
      type: actionTypes.SET_INGREDIENTS,
      ingredients: ingredients
    };
}

export const initIngredients = () => {
    return dispatch => {
        axios.get('https://my-burger-e2613.firebaseio.com/ingredients.json')
            .then(response => {
                dispatch(setIngredients(response.data));
            })
            .catch(error => {
                dispatch(fetchIngredientsFailed());
            });
    }
}

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
}