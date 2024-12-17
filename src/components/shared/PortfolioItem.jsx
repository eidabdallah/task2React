export default function PortfolioItem({ img }) {
  return (
    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
      <div className="portfolio-item rounded-4" style={{ overflow: 'hidden' }}>
        <img src={img} className="img-fluid" width='100%'/>
      </div>
    </div>
  );
}
