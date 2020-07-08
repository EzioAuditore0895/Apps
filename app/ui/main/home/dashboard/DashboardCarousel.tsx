import React from "react";
import { Image } from "react-native-elements";
import Carousel from "react-native-snap-carousel";

export default function DashboardCarousel(props: any) {
  const { arrayImages, height, width } = props;
  const renderItem = ({ item }) => {
    const {} = props;
    return <Image style={{ width, height }} source={{ uri: item }} />;
  };
  return (
    <Carousel
      layout={"default"}
      data={arrayImages}
      sliderWidth={width}
      itemWidth={300}
      renderItem={renderItem}
    ></Carousel>
  );
}
