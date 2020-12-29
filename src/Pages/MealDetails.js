import React, {useState, useEffect} from 'react';
import { SafeAreaView, Text } from 'react-native';
import axios from 'axios';

const api_url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

function MealDetails({route}){
    const {mealId}= route.params;
    const [mealDetails,setMealDetails]=useState([]);

    async function getMealDetails(){
        const {data} = await axios.get(api_url + mealId);
        setMealDetails(data.meals[0]);
    }

    useEffect( () => {
        getMealDetails();
    },[])

    return(
        <SafeAreaView>
            <Text>{mealDetails.strMeal}</Text>
        </SafeAreaView>
    )
}

export {MealDetails};