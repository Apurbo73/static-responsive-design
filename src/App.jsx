function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <h3 className="navbar-brand " href="#">
            <span className="text-dark">Design Service</span>
          </h3>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#Home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#About"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#Services"
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#Portfolio"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="image/home-1.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption text-light">
              <h2>Your Dream House Design</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia corporis consectetur ea atque delectus. Illo tempore
              </p>
              <button className="btn btn-warning">CLick For More</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src="image/home-2.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption text-light">
              <h2>Your Dream House Design</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia corporis consectetur ea atque delectus. Illo tempore
              </p>
              <button className="btn btn-warning">CLick For More</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src="image/home-3.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption text-light">
              <h2>Your Dream House Design</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia corporis consectetur ea atque delectus. Illo tempore
              </p>
              <button className="btn btn-warning">CLick For More</button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* about section: */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12">
              <div className="image mt-5">
                <img className="img-fluid" src="image/about.jpg" alt="" />
              </div>
            </div>

            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
              <h2>Lorem, ipsum dolor.</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
                atque amet sed commodi quaerat rerum, cumque, tempora quidem
                corporis enim quasi et quo delectus incidunt? Temporibus
                delectus tempora rem dicta.
              </p>
              <div className="btn btn-warning">Click for more</div>
            </div>
          </div>
        </div>
      </section>

      {/* services section: */}

      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12">
            <div className="text-center pb-5">
              <h2>Our Services.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, delectus!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*services part */}
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-4">
            <div className="card text-center text-white bg-dark pb-2 mt-3">
              <div className="card-body">
                <h3 className="cart-title">The Best Quality</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupti autem repudiandae distinctio sit? Temporibus ratione
                  totam perspiciatis minima quae veritatis.
                </p>
                <div className="btn btn-warning">Learn more..</div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-4 mt-3">
            <div className="card text-center text-white bg-dark pb-2 ">
              <div className="card-body">
                <h3 className="cart-title">Sustainability</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupti autem repudiandae distinctio sit? Temporibus ratione
                  totam perspiciatis minima quae veritatis.
                </p>
                <div className="btn btn-warning">Learn more..</div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-4 mt-3">
            <div className="card text-center text-white bg-dark pb-2">
              <div className="card-body">
                <h3 className="cart-title">Integrety</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupti autem repudiandae distinctio sit? Temporibus ratione
                  totam perspiciatis minima quae veritatis.
                </p>
                <div className="btn btn-warning">Learn more..</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
