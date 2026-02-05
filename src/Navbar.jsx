import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "./routes";
import { useNavigate } from "react-router-dom";
import logo from "../img/aperture.png"

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg bg-dark position-fixed w-100 mb-5">
      <div className="container">
        <div className="d-flex align-content-center">
          <a className="navbar-brand ms-2" href="#">
            <img
              src={logo}
              alt="Logo"
              width={40}
              className="bg-main-color rounded-3 p-1"
            />
          </a>
          <div>
            <p className="mb-0 text-white fw-bold">عدسة</p>
            <p className="mb-0 text-white-50" style={{ fontSize: "12px" }}>
              عالم التصوير الفوتغرافي
            </p>
          </div>
        </div>
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
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 pill-navbar bg-black rounded-5 gap-2 px-3 py-2">
            {routes.map((route) => (
              <li className="nav-item" key={route.path}>
                <NavLink
                  to={route.path}
                  className={({ isActive }) =>
                    `nav-link px-4 py-2 ${
                      isActive ? "pill-active" : "pill-link"
                    }`
                  }
                >
                  {route.routeName}
                </NavLink>
              </li>
            ))}
          </ul>
          <form className="d-flex">
            <button
              className="bg-transparent border-0 text-white-50 ms-2 rounded-3"
              type="button"
            >
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <button
              className="rounded-5 bg-main-color text-white px-3 py-3 fw-bold border-0"
              type="button" onClick={() => navigate(`/blog`)}
            >
              ابدء القراءة
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
