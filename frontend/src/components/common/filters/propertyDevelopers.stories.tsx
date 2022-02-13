import React from "react";
import { ComponentStory } from "@storybook/react";
import PropertyDevelopers from "./propertyDevelopers";

export default {
    title: "UI/Forms/PropertyDevelopers",
    component: PropertyDevelopers
};

const property = [
    {
        "id": "0001",
        "company": "RC Rainbow"
    },
    {
        "id": "0002",
        "company": "RC Mynai"
    },
    {
        "id": "0003",
        "company": "RC River"
    },
    {
        "id": "0004",
        "company": "Drop"
    },
    {
        "id": "0005",
        "company": "RC Tree"
    },
    {
        "id": "0006",
        "company": "RC White"
    },
    {
        "id": "0007",
        "company": "RC Brown"
    }
]

const Template: ComponentStory<typeof PropertyDevelopers> = (args) => {
    return <PropertyDevelopers {...args}  returnPropertyDevelopers={(value) => console.log(value)}/>
}

export const SimpleFilters = Template.bind({});
SimpleFilters.args = {
    property,
    isVisible: true
}