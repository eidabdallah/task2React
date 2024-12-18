import PortfolioItem from "./shared/PortfolioItem.jsx";
import StarDivider from "./shared/StarDivider.jsx";
import image1 from "../assets/image/1.png"
import image2 from "../assets/image/2.png"
import image3 from "../assets/image/3.png"
import image4 from "../assets/image/4.png"
import image5 from "../assets/image/5.png"
import image6 from "../assets/image/6.png"

export default function Portfolio() {
  return (
    <section className="portfolio text-center p-5" id="portfolio">
      <div className="container">
        <h2 className="title fw-bold mb-3 mt-5">PORTFOLIO</h2>
        <StarDivider color="rgb(44, 62, 80)" />
        <div className="portfolio-items mt-4">
          <div className="row g-5">
            <PortfolioItem img={image1} />
            <PortfolioItem img={image2} />
            <PortfolioItem img={image3} />
            <PortfolioItem img={image4} />
            <PortfolioItem img={image5} />
            <PortfolioItem img={image6} />
          </div>
        </div>
      </div>
    </section>
  );
}
