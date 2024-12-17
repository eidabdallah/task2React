export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-section">
            <h4 className="fs-3 mb-4">LOCATION</h4>
            <p className="fs-5 fw-bold">2215 John Daniel Drive<br />Clark, MO 65243</p>
          </div>

          <div className="col-md-4 footer-section">
            <h4 className="fs-3 mb-4">AROUND THE WEB</h4>
            <div className="social-icons">
              <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="social-link"><i className="fab fa-dribbble"></i></a>
            </div>
          </div>

          <div className="col-md-4 footer-section">
            <h4 className="fs-3 mb-4">ABOUT FREELANCER</h4>
            <p className="fs-6 fw-bold">
              Freelance is a free to use, MIT licensed<br />
              Bootstrap theme created by <a href="https://startbootstrap.com/" className="footer-link">Start Bootstrap</a>.
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom bg-dark p-3">
        <p>Copyright © Your Website 2023</p>
      </div>
    </footer>
  );
}
