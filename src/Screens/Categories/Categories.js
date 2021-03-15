import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import axios from 'axios';
import {CategoryItem} from '../Categories/components/CategoryItem';
import { Loading } from '../../Components/Loading';
import wait from 'waait';

const api_url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

export function CategoriesList({navigation}) {
  const [categories, setCategories] = useState([]);
  const [loading,setLoading]=useState(false);

  async function getCategories() {
    setLoading(true);
    await wait(1000);
    const {data} = await axios.get(api_url);
    setCategories(data.categories);
    setLoading(false);
  }

  useEffect(() => {
    getCategories();
  }, []);

  if (loading) {
    return <Loading/>
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
    <SafeAreaView style={{flex:1}}>
      <FlatList
        keyExtractor={(item) => item.idCategory}
        data={categories}
        renderItem={renderCategory}
        numColumns={2}
      />
    </SafeAreaView>
  );
}
