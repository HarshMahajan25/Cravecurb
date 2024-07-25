import React from "react";
import pizza from "./pizza.jpg";
import burger from "./burger.jpg";
// import momos from './momos.jpeg';
import pastery from "./pastery.webp";

export default function Carousel() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
      style={{ height: "450px", overflow: "hidden" }}
    >
      <div className="carousel-caption" style={{ zIndex: "10" }}>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success text-white bg-success"
            type="submit"
          >
            Search
          </button>
        </form>

        <ol className="carousel-indicators">
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
          ></li>
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
          ></li>
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
          ></li>
        </ol>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="dark-overlay"></div>
          <img className="d-block w-100" src={burger} alt="First slide" />
        </div>
        <div className="carousel-item">
          <div className="dark-overlay"></div>
          <img className="d-block w-100" src={pizza} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <div className="dark-overlay"></div>
          <img className="d-block w-100" src={pastery} alt="Third slide" />
        </div>
      </div>

      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only"></span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only"></span>
      </a>
    </div>
  );
}
