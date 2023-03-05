import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components";
import { SafeArea } from "../../../components/utility/safe-area.component";

const SearchContainer = styled.View`
  padding: 16px;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantList
      data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
      renderItem={() => <RestaurantInfoCard />}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
);
