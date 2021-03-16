import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import axios from 'axios';
import {CategoryItem} from '../Categories/components/CategoryItem';
import {Loading} from '../../Components/Loading';
import wait from 'waait';
import {useFetch} from '../../hooks/useFetch';

const api_url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

export function CategoriesList({navigation}) {
  const {data, loading} = useFetch(api_url);

  if (loading) {
    return <Loading />;
  }

  const renderCategory = ({item}) => (
    <CategoryItem
      category={item}
      onSelect={() =>
        navigation.navigate('Meals', {categoryName: item.strCategory})
      }
    />
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        keyExtractor={(item) => item.idCategory}
        data={data != null && data.categories}
        renderItem={renderCategory}
        numColumns={2}
      />
    </SafeAreaView>
  );
}
