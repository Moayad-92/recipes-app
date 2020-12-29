import React, {useState, useEffect} from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import axios from 'axios';
import {MealItem} from '../Components';

const api_url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

function MealsList({route, navigation}){
    const {categoryName}= route.params;
    const [meals,setMeals]=useState([]);

    async function getMeals(){
        const {data} = await axios.get(api_url + categoryName);
        setMeals(data.meals);
    }

    useEffect( () => {
        getMeals();
    },[])

    const renderMeal = ({item}) => <MealItem meal={item}
                                             onSelect={() => navigation.navigate('Meal Details', {mealId: item.idMeal})}/>
    return(
        <SafeAreaView>
            <FlatList
            keyExtractor={(item) => item.idMeal}
            data={meals}
            renderItem={renderMeal}
            />
        </SafeAreaView>
    )
}

export {MealsList};