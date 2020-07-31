import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import List from "../components/List";
import { Button, Welcome } from "@storybook/react/demo";
import Loading from "../components/styled-components/loading";
import { CustomButton } from "../components/styled-components/button";
import Card from "../components/styled-components/card";
import ControlledCarousel from "../components/react-bootstrap/controlledcarousel";
import NavBar from "../components/react-bootstrap/navbar";
import Search from "../components/react-bootstrap/search";
import BootCard from "../components/react-bootstrap/card";
import "../scss/custom.scss";
import { UseCarousel } from "../components/react-bootstrap/usecarousel";
import HookForm from "../components/react-bootstrap/form";


storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf("List", module).add("Simple dnd List", () => <List />);

storiesOf("Loading", module).add("Loading", () => <Loading />);

storiesOf("CustomButton", module)
  .add("custom button", () => <CustomButton>Price</CustomButton>)
  .add("custom with color prop", () => (
    <CustomButton
      borderColor={"border-color: rgb(0, 106, 255)"}
      onClick={action("clicked")}
    >
      For Sale
    </CustomButton>
  ))
  .add("customButton hover prop", () => (
    <CustomButton
      hoverColor={"border-color: rgb(0, 106, 255)"}
      onClick={action("clicked")}
    >
      More
    </CustomButton>
  ));

storiesOf("Card", module).add("grid card", () => <Card />);
storiesOf("Bootstrap", module)
  .add("Controlled Carousel", () => <ControlledCarousel />)
  .add("Navbar", () => <NavBar />)
  .add("Search", () => <Search />)
  .add("Card", () => <BootCard />)
  .add("useCarousel", () => <UseCarousel />)
  .add("Hook Form", () =><HookForm/> );
