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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../Assets/colors';

const api_url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

export function MealDetails({navigation, route}) {
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
      <ScrollView
        style={meal_details.container}
        showsVerticalScrollIndicator={false}>
        <View style={meal_details.title_container}>
          <Text style={meal_details.title}>* {mealDetails.strMeal} *</Text>
          <Icon name="heart-outline" size={35} color={colors.primary} />
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
