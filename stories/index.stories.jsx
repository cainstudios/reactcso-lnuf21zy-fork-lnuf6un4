import React from "react";
import MyCounter from "../src/Counter";
import Card, {CardGlassmorph} from "../src/Card";
import Image  from "../src/Image"

const imagesrc = 'https://images.unsplash.com/photo-1697377389156-5624773d1a21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
export default {
  parameters: {
    layout: "centered",
  },
};

export const storyMyounter = () => <MyCounter></MyCounter>;
export const storyCard = () => <Card></Card>;
export const storyCardGlassMorph = () => <CardGlassmorph></CardGlassmorph>;
export const storyImage = () => <Image src={imagesrc} />