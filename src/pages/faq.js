import React, { useState } from "react";
import Accordion from "../components/Accordion/Accordion";

const faqs = [
  {
    title: "When did you start coding?",
    content:
      "  Started when I was just a wee lad, in Highschool I had a lot of time onmy plate and lacked something to study besides learning some programming concepts. I was so enthused by the thing so much, even in my free time...",
  },
  {
    title: "When are you planning on stopping this carreer",
    content: "Never have I ever dreamt of stopping learning this s**t",
  },
  {
    title: "What do you think about React in General?",
    content: "React is a Game Changer for web developers.",
  },
  {
    title: "How do you plan to succeed in this carreer",
    content:
      "By learning as much as I can and getting better everyday. This will make me a better developer and hence help me land a good paying job.",
  },
];

export default function Faq() {
  return (
    <div>
      {faqs.map((el, i) => (
        <Accordion
          key={i}
          content={el.content}
          num={i < 9 ? `0${i + 1}` : i + 1}
          title={el.title}
        />
      ))}
    </div>
  );
}
