import React from "react";
import MyCounter from "../src/counter";
import Card from "../src/card";

export default {
  parameters: {
    layout: "centered",
  },
};

export const story1 = () => <MyCounter></MyCounter>;
export const story2 = () => <Card></Card>;