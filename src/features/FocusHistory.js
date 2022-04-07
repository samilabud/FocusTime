import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import colors from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

const flatRender = ({item}) => <Text style={styles.item}>- {item}</Text>;

export const FocusHistory = ({history}) => {
  if(!history || !history.length) return <Text style={styles.item}>We haven't not focused on anything yet!</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focus on:</Text>
      <FlatList
       data={history}
       renderItem={flatRender}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding: spacing.md,
    flex: 1,
  },
  title:{
    fontSize: fontSizes.md,
    color: colors.white,
    fontWeight: 'bold',
  },
  item:{
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm,
    paddingLeft: spacing.sm,
  }
})