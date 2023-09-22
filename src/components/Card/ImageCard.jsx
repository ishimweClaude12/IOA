import styles from "./card.module.css";
import img from "../../assets/images/claude.jpg";
import Skill from "./Skill";
const skills = [
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "lightblue",
  },
  {
    skill: "HTML",
    level: "advanced",
    color: "lightgreen",
  },
  {
    skill: "CSS",
    level: "intermediate",
    color: "lightyellow",
  },
  {
    skill: "Git & Github",
    level: "beginner",
    color: "lightblack",
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
        <Skill text="HTML" bg="blue" icon="🤳" />
        {skills.map((skill) => {
          if ((skill.level = "beginner")) {
            return <Skill text={skill.skill} bg={skill.color} icon="🤦‍♀️" />;
          } else if ((skill.level = "intermediate")) {
            return <Skill text={skill.skill} bg={skill.color} icon="👍" />;
          } else {
            return <Skill text={skill.skill} bg={skill.color} icon="✔" />;
          }
        })}
      </div>
    </div>
  );
}
export default ImageCard;
