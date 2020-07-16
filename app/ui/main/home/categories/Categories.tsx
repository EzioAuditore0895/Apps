import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { size } from "lodash";
import { useNavigation } from "@react-navigation/native";
import { CategoryService } from "../../../../services/categories/category.service";
import { Category } from "../../../../models/categories/category.model";
import Styles from "./Categories.style";
import CategoryItem from "./CategoryItem";

export default function Categories() {
  const TAG = "Categories";
  const categoryService = new CategoryService();
  const [categories, setCategories] = useState<Category[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    categoryService
      .getAll()
      .then((results) => {
        console.log(`${TAG} > categoryService > getAll > results`, results);
        setCategories(results);
        console.log(
          `${TAG} > categoryService > getAll > categories`,
          categories
        );
      })
      .catch(() => {
        console.error(`${TAG} > categoryService > getAll > error`);
      });
  }, []);

  return (
    <View>
      {size(categories) > 0 ? (
        <FlatList
          data={categories}
          renderItem={(category) => (
            <CategoryItem category={category} navigation={navigation} />
          )}
          keyExtractor={(item, index) => index.toString()}
          style={Styles.listStyle}
          contentContainerStyle={Styles.listContainerStyle}
        />
      ) : (
        <View style={Styles.loading}>
          <ActivityIndicator size="large" />
          <Text>Cargando categorías...</Text>
        </View>
      )}
    </View>
  );
}
