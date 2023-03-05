/* eslint-disable react-native/no-inline-styles */
import React from "react";
import styled from "styled-components";
import { Text, Image, View } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import { Favourite } from "../../../components/favourites/favourite.component";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

const RestaurantCard = styled(Card)`
  background-color: white;
  margin-bottom: 10px;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 15px;
  background-color: white;
`;

const Title = styled(Text)`
  color: black;
`;

const Address = styled(Text)`
  color: black;
`;
const Info = styled.View`
  padding: 16px;
`;
const Rating = styled.View`
  flex-direction: row;
  padding-top: 5px;
  padding-bottom: 5px;
`;
const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photo = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <View>
        <Favourite restaurant={restaurant} />
        <RestaurantCardCover key={name} source={{ uri: photo[0] }} />
      </View>
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSE TEMPORARILY
              </Text>
            )}
            <View style={{ paddingLeft: 16 }} />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <View style={{ paddingLeft: 16 }} />
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
