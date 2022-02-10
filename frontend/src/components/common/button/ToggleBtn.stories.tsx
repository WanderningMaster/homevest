import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "assets/styles/tailwind.css";
import "assets/styles/fonts.css";
import ToggleButton from "./toggleBtn";

export default {
  title: "UI/Controls/Button",
  component: ToggleButton,
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = (args) => <ToggleButton {...args} />;

export const Toggle = Template.bind({});



