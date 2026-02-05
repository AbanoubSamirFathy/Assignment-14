import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "./routes";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <section className="bg-dark py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="d-flex align-items-baseline text-white fw-bold">
              <div className="bg-main-color w- rounded-3 pt-2 px-4">
                <p>ع</p>
              </div>
              <div className="me-2">
                <p>عدسة</p>
              </div>
            </div>
            <p className="text-white-50 pt-3 pb-2">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم.
            </p>
            <div className="d-flex text-white-50">
              <div className="bg-black p-3 rounded-3 ms-2">
                <i class="fa-brands fa-x-twitter"></i>
              </div>
              <div className="bg-black p-3 rounded-3 ms-2">
                <i class="fa-brands fa-github"></i>
              </div>
              <div className="bg-black p-3 rounded-3 ms-2">
                <i class="fa-brands fa-linkedin"></i>
              </div>
              <div className="bg-black p-3 rounded-3">
                <i class="fa-brands fa-youtube"></i>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex">
              <div className="line ms-2"></div>
              <div>
                <p className="text-white fw-bold">استكشف</p>
              </div>
            </div>
            {routes.map((route) => {
              return (
                <li className="nav-item mb-3">
                  <NavLink
                    className="nav-link text-white-50"
                    aria-current="page"
                    to={route.path}
                  >
                    {route.routeName}
                  </NavLink>
                </li>
              );
            })}
          </div>
          <div className="col-md-3">
            <div className="d-flex">
              <div className="line ms-2"></div>
              <div>
                <p className="text-white fw-bold">التصنيفات</p>
              </div>
            </div>
            {routes.map((route) => {
              return (
                <li className="nav-item mb-3">
                  <NavLink
                    className="nav-link text-white-50"
                    aria-current="page"
                    to={route.path}
                  >
                    {route.routeName}
                  </NavLink>
                </li>
              );
            })}
          </div>
          <div className="col-md-3">
            <div className="d-flex">
              <div className="line ms-2"></div>
              <div>
                <p className="text-white fw-bold">ابقي علي اطلاع</p>
              </div>
            </div>
            <p className="text-white-50">اشترك للحصول علي أحدث المقالات والتحديثات</p>
            <input type="search" placeholder="ادخل بريدك الإلكتروني" className="w-100 mb-2 p-2 bg-black border-0 rounded-3"/>
            <button className="bg-main-color text-white rounded-5 w-100 p-2" onClick={() => navigate("/")}>اشترك</button>
          </div>
          <hr className="text-white-50 my-4"/>
          <div className="d-flex justify-content-between text-white-50">
            <div>
              <i class="fa-solid fa-copyright"></i> عدسة. صنع بكل <i class="fa-solid fa-heart text-main-color"></i> جميع الحقوق المحفوظة
            </div>
            <div>
              <Link to="#" className="ms-3">سياسة الخصوصية</Link>
              <Link to="#">شروط الخدمة</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
