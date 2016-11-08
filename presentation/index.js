import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Slide,
  Spectacle,
  Text,
  S,
  Table,
  TableRow,
  TableHeaderItem,
  TableItem
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import BgSlide from "./BgSlide";
import MyListItem from "./MyListItem";
// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  lifecycle: require("../assets/lifecycle.png"),
  bg2: require("../assets/bg2.png"),
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "white",
  tertiary: "white",
  quartenary: "white"
}, {
  primary: "Open Sans Condensed",
  secondary: "Open Sans Condensed",
  tertiary: "Open Sans Condensed"

});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} textColor="white" progress="bar">
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              機器學習：基礎與應用
            </Heading>
            <Heading size={5} fix textColor="white">
              朱柏憲
            </Heading>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading size={3} lineHeight={2} textColor="white">
              大綱
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  自我介紹
                </Text>
              </ListItem>
            </List>
          </BgSlide>


        </Deck>
      </Spectacle>
    );
  }
}
