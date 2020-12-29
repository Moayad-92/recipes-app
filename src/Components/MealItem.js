import React from 'react';
import { TouchableOpacity, Image, Text} from 'react-native';
import {meal_item} from '../Styles/ComponentStyles';
function MealItem({meal, onSelect}){
    return(
        <TouchableOpacity style={meal_item.container}
        onPress={onSelect}>
            <Image source={{uri: meal.strMealThumb}}
            style={meal_item.image}
            resizeMode='center'/>
            <Text style={meal_item.title}>{meal.strMeal}</Text>
        </TouchableOpacity>
    )
}

export {MealItem};