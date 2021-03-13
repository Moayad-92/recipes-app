import React from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';
import {category_item} from './styles';

export function CategoryItem({category, onSelect}) {
  return (
    <TouchableOpacity style={category_item.container} onPress={onSelect}>
      <Text style={category_item.title}>{category.strCategory}</Text>
      <Image
        source={{uri: category.strCategoryThumb}}
        style={category_item.image}
        resizeMode="center"
      />
    </TouchableOpacity>
  );
}
