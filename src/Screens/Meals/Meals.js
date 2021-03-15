import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import axios from 'axios';
import { Loading } from '../../Components/Loading';
import wait from 'waait';
import {MealItem} from '../Meals/components/MealItem';

const api_url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

export function MealsList({route, navigation}) {
  const {categoryName} = route.params;
  const [meals, setMeals] = useState([]);
  const [loading,setLoading]=useState(false);

  async function getMeals() {
    setLoading(true);
    await wait(1000);
    const {data} = await axios.get(api_url + categoryName);
    setMeals(data.meals);
    setLoading(false);
  }

  useEffect(() => {
    getMeals();
  }, []);

  if (loading) {
    return <Loading/>
  }

  const renderMeal = ({item}) => (
    <MealItem
      meal={item}
      onSelect={() =>
        navigation.navigate('Meal Details', {mealId: item.idMeal})
      }
    />
  );
  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={(item) => item.idMeal}
        data={meals}
        renderItem={renderMeal}
      />
    </SafeAreaView>
  );
}
