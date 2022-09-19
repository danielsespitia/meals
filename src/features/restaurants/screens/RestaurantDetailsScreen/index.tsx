// Packages
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';

// Components
import { SafeAreaContainer } from '../../../../components/Spacer';
import { RestaurantInfoCard } from '../../components';

// Type route prop (React Navigator library)
export const RestaurantDetailsScreen = ({ route }) => {
  const { restaurant } = route.params;

  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const ACCORDION_OPTIONS = [
    {
      title: 'Breakfast',
      icon: 'bread-slice',
      expanded: breakfastExpanded,
      onPress: () => setBreakfastExpanded((prevState) => !prevState),
      menuOptions: ['Eggs', 'Rib Soup', 'Mushroom Soup'],
    },
    {
      title: 'Lunch',
      icon: 'hamburger',
      expanded: lunchExpanded,
      onPress: () => setLunchExpanded((prevState) => !prevState),
      menuOptions: ['Sudadeiton', 'Beans', 'Sushi'],
    },
    {
      title: 'Dinner',
      icon: 'food-variant',
      expanded: dinnerExpanded,
      onPress: () => setDinnerExpanded((prevState) => !prevState),
      menuOptions: ['Burger w/ Fries', 'Steak Sandwich', 'Mushroom Soup'],
    },
    {
      title: 'Drinks',
      icon: 'cup',
      expanded: drinksExpanded,
      onPress: () => setDrinksExpanded((prevState) => !prevState),
      menuOptions: ['Wine', 'Beer', 'Soda'],
    },
  ];

  return (
    <SafeAreaContainer>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        {!!ACCORDION_OPTIONS &&
          ACCORDION_OPTIONS.map(
            ({ title, icon, expanded, onPress, menuOptions }, i) => (
              <List.Accordion
                key={i}
                title={title}
                left={(props) => <List.Icon {...props} icon={icon} />}
                expanded={expanded}
                onPress={onPress}
              >
                {!!menuOptions &&
                  menuOptions.map((option, i) => (
                    <List.Item key={i} title={option} />
                  ))}
              </List.Accordion>
            )
          )}
      </ScrollView>
    </SafeAreaContainer>
  );
};
