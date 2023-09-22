import styles from "./card.module.css";
import img from "../../assets/images/claude.jpg";
import Skill from "./Skill";
const skills = [
  {
    text: "JavaScript",
    level: "intermediate",
    color: "lightblue",
  },
  {
    text: "HTML",
    level: "advanced",
    color: "lightgreen",
  },
  {
    text: "CSS",
    level: "intermediate",
    color: "yellow",
  },
  {
    text: "Git & Github",
    level: "beginner",
    color: "grey",
  },
  {
    text: "React.js",
    level: "beginner",
    color: "cyan",
  },
];
function ImageCard() {
  return (
    <div className={styles.container}>
      <img src={img} alt="Myimage" className={styles.img} />
      <div>
        <h1>Claude Ishimwe</h1>
        <p>
          I am a web developer and a tech enthusiast, willing to learn and solve
          any challenge that comes my way. Loves playing chess, even though, I
          am not good.{" "}
        </p>
        <p>
          Listens to music and watches a bunch of movies in my spare time and
          also plays basketball in the weekends with my friends.
        </p>
      </div>
      <div>
        {skills.map((skill) => {
          return (
            <Skill text={skill.text} bg={skill.color} level={skill.level} />
          );
        })}
      </div>
    </div>
  );
}
export default ImageCard;
