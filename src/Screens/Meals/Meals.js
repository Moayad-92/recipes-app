import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {Loading} from '../../Components/Loading';
import {MealItem} from '../Meals/components/MealItem';
import {useFetch} from '../../hooks/useFetch';

const api_url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

export function MealsList({route, navigation}) {
  const {categoryName} = route.params;

  const {data, loading} = useFetch(api_url + categoryName);

  if (loading) {
    return <Loading />;
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
        data={data != null && data.meals}
        renderItem={renderMeal}
      />
    </SafeAreaView>
  );
}
