import myImage from "../assets/image/startPhoto.svg";
import StarDivider from "./shared/StarDivider.jsx";
export default function Start() {
  return (
    <section className="start text-white text-center mt-5">
      <div className="container d-flex align-items-center flex-column">
        <img src={myImage} />
        <h1>START BOOTSTRAP</h1>
         <StarDivider color= 'white' />
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </section>
  );
}
