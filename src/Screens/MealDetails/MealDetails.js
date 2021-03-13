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
import axios from 'axios';
import {meal_details} from './styles';

const api_url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

function MealDetails({route}) {
  const {mealId} = route.params;
  const [mealDetails, setMealDetails] = useState([]);

  async function getMealDetails() {
    const {data} = await axios.get(api_url + mealId);
    setMealDetails(data.meals[0]);
  }

  useEffect(() => {
    getMealDetails();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={meal_details.container}>
        <Text style={meal_details.title}>* {mealDetails.strMeal} *</Text>
        <Image
          source={{uri: mealDetails.strMealThumb}}
          style={meal_details.image}
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

export {MealDetails};
