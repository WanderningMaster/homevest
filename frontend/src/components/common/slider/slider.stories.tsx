import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Sliders from "./slider";

export default {
    title: 'UI/Form/Slider',
    component: Sliders
} as ComponentMeta<typeof Sliders>;

const Template: ComponentStory<typeof Sliders> = (args) => <Sliders {...args} />

export const Empty = Template.bind({});

export const Images = Template.bind({});
Images.args = {
    images: ["https://wallpaperaccess.com/full/1859246.jpg", "https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607"]
}

