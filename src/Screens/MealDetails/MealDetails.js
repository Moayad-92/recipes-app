import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {useFetch} from '../../hooks/useFetch';
import {meal_details} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../Assets/colors';
import {Loading} from '../../Components/Loading';

const api_url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

export function MealDetails({route}) {
  const {mealId} = route.params;
  const {data, loading} = useFetch(api_url + mealId);
  const mealDetails = data != null && data.meals[0];

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        style={meal_details.container}
        showsVerticalScrollIndicator={false}>
        <View style={meal_details.title_container}>
          <Text style={meal_details.title}>* {mealDetails.strMeal} *</Text>
          <Icon name="heart-outline" size={40} color={colors.primary} />
        </View>
        <Image
          source={{uri: mealDetails.strMealThumb}}
          style={meal_details.image}
          defaultSource={require('../../Assets/placeholder1.png')}
        />
        <View style={meal_details.area_container}>
          <Text style={meal_details.area_text}>
            * {mealDetails.strCategory} *
          </Text>
          <Text style={meal_details.area_text}>* {mealDetails.strArea} *</Text>
        </View>
        <View style={meal_details.instructions_container}>
          <Text style={meal_details.instructions_header}>Instructions:</Text>
          <Text style={meal_details.instructions_text}>
            {mealDetails.strInstructions}
          </Text>
        </View>
        <TouchableOpacity
          style={meal_details.youtube_container}
          onPress={() => {
            Linking.openURL(mealDetails.strYoutube);
          }}>
          <Text style={meal_details.youtube_text}>Watch On Youtube</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
