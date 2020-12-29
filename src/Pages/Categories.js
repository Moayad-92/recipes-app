import React, {useState, useEffect} from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import axios from 'axios';
import {CategoryItem} from '../Components';

const api_url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

function CategoriesList({navigation}){
    const [categories,setCategories]=useState([]);

    async function getCategories(){
        const {data} = await axios.get(api_url);
        setCategories(data.categories);
    }

    useEffect( () => {
        getCategories();
    },[])

    const renderCategory = ({item}) => <CategoryItem category={item}
                                        onSelect={() => navigation.navigate('Meals', {categoryName: item.strCategory})}/>
    return(
        <SafeAreaView>
            <FlatList
            keyExtractor={(item) => item.idCategory}
            data={categories}
            renderItem={renderCategory}
            numColumns={2}
            />
        </SafeAreaView>
    )
}

export {CategoriesList};