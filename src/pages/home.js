import { useState } from "react";
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";

export default function Home() {
  const [imageUrl, setImageUrl] = useState(image1);
  const [nextDis, setNextDis] = useState(false);
  const [prevDis, setPrevDis] = useState(true);
  return (
    <>
      <h1
        style={{
          fontSize: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
        }}
      >
        An essay on René Descartes: The Father of Modern Philosophy
      </h1>
      <p style={{ fontSize: "18px", padding: "16px" }}>
        René Descartes, a French philosopher, mathematician, and scientist of
        the 17th , is often hailed as the "Father of Modern Philosophy" for his
        groundbreaking contributions to the realms of philosophy, mathematics,
        and science. His ideas and methods had a profound and lasting impact on
        various disciplines, shaping the course of Western thought and laying
        the foundations for the scientific revolution. In this essay, we will
        explore Descartes' life, his philosophical and mathematical
        contributions, and his enduring legacy. Born on March 31, 1596, in La
        Haye en Touraine, France, Descartes came of age during a time of
        intellectual upheaval. The Renaissance had ushered in a period of
        increased curiosity and exploration of the natural world, challenging
        the dogmatic authority of the church and Aristotle's philosophy.
        Descartes' early education at the Jesuit College of La Flèche exposed
        him to both classical philosophy and modern scientific thought, setting
        the stage for his later inquiries. Descartes is perhaps best known for
        his method of doubt, a systematic approach to philosophy that aimed to
        establish indubitable foundations for knowledge. He famously declared,
        "Cogito, ergo sum" or "I think, therefore I am." This assertion became
        the cornerstone of his philosophy and a departure point for his
        epistemological journey. By doubting everything he could possibly doubt,
        Descartes sought to arrive at certain knowledge. While his radical
        skepticism led him to doubt the existence of the external world, he
        could not doubt the existence of himself as a thinking being. Descartes'
        method of doubt laid the groundwork for a new era of philosophy
        characterized by rationalism. He argued that reason, rather than sensory
        experience, is the primary source of knowledge. This perspective
        challenged empiricism, which emphasized the role of sense perception in
        acquiring knowledge. Descartes' rationalism influenced subsequent
        philosophers like Baruch Spinoza and Gottfried Wilhelm Leibniz, who
        built upon his ideas and contributed to the development of modern
        philosophy. In addition to his philosophical contributions, Descartes
        made significant advances in mathematics. His work "La Géométrie" (1637)
        introduced Cartesian coordinates, a groundbreaking innovation that
        provided a systematic way to represent points in space using numerical
        values. This development paved the way for analytic geometry, which
        played a crucial role in the development of calculus by Isaac Newton and
        Gottfried Wilhelm Leibniz in the late 17th century. Cartesian
        coordinates also had practical applications in fields such as physics
        and engineering. Descartes' dedication to reason and skepticism extended
        to his scientific pursuits. He sought to explain natural phenomena
        through mathematical principles and mechanical explanations. His work in
        physics and optics, as demonstrated in his "Dioptrics" (1637) and
        "Principles of Philosophy" (1644), laid the foundation for the modern
        understanding of light and vision. Descartes' influence in the
        scientific world can be seen in the works of later scientists, including
        Sir Isaac Newton. René Descartes passed away on February 11, 1650, in
        Stockholm, Sweden, where he had traveled to tutor Queen Christina of
        Sweden. Despite his relatively short life, his ideas and contributions
        continue to shape the worlds of philosophy, mathematics, and science to
        this day.
      </p>
      <div
        className="carousel "
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            width: "420px",
            height: "380px",
          }}
          src={imageUrl}
          alt="street"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "22rem",
        }}
      >
        <button
          disabled={prevDis}
          style={{
            padding: ".4rem",
            backgroundColor: "lightblue",
            border: "none",
            borderRadius: "4px",
            margin: "1rem .1rem",
          }}
          onClick={() => {
            setImageUrl(image1);
            setPrevDis(!prevDis);
            setNextDis(!nextDis);
          }}
        >
          Prev
        </button>
        <button
          disabled={nextDis}
          style={{
            padding: ".4rem",
            backgroundColor: "lightblue",
            border: "none",
            borderRadius: "4px",
            margin: "1rem .1rem",
          }}
          onClick={(e) => {
            setImageUrl(image2);
            setNextDis(!nextDis);
            setPrevDis(!prevDis);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}
