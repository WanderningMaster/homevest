import React from "react";
import { ComponentStory } from "@storybook/react";

import "assets/styles/tailwind.css";
import "assets/styles/fonts.css";
import { Checkbox } from "./checkbox";

export default {
  title: "UI/Controls/Checkbox",
  component: Checkbox,
};
// as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  size: "primary",
  // label: "Checkbox",
  checkboxVar: "Checkbox",
};
export const Secondary = Template.bind({});
Secondary.args = {
  size: "secondary",
  // label: "Checkbox",
  checkboxVar: "Checkbox",
};
