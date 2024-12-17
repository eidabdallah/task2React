import StarDivider from "./shared/StarDivider.jsx";
export default function About() {
  return (
    <section className="about text-white text-center mt-5 py-5">
      <div className="container d-flex align-items-center flex-column">
        <h1 className="mb-4 mt-4">ABOUT</h1>
        <StarDivider color="white" />
        <div className="informations">
          <div className="row justify-content-center text-center">
            <div className="col-lg-4">
              <div className="info fs-5 text-start">
                Freelancer is a free bootstrap theme created by Start Bootstrap.
                The download includes the complete source files including HTML,
                CSS, and JavaScript as well as optional SASS stylesheets for
                easy customization.
              </div>
            </div>
            <div className="col-lg-4">
              <div className="info fs-5 text-start">
                You can create your own custom avatar for the masthead, change
                the icon in the dividers, and add your email address to the
                contact form to make it fully functional!
              </div>
            </div>
          </div>
        </div>
        <a className="btn btn-outline-light btn-lg mt-5 mb-4 py-3 px-4 fw-bold" href="#">Free DownLoad!</a>
      </div>
    </section>
  );
}
