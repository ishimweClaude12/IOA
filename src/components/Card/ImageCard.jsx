import styles from "./card.module.css";
import img from "../../assets/images/claude.jpg";
function ImageCard() {
  return (
    <div className={styles.container}>
      <img src={img} alt="Myimage" className={styles.img} />
      <h1>Name: Claude Ishimwe</h1>
      <h4>Age: 21</h4>
      <h4>Work: Web Developer</h4>
    </div>
  );
}
export default ImageCard;
