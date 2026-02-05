import React from "react";
import posts from "../posts.json";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function PostDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const post = posts.posts.find(p => p.id === Number(id));
  const p = post;
  return (
    <section id="details" className="bg-black pt-5">
      {post && (
        <div className="details-1 container pt-5" key={p.id}>
          <div className="d-flex align-items-baseline bg-dark text-white-50 pt-1 pb-2 px-3 w-fit rounded-5 mb-4">
            <i class="fa-solid fa-house"></i>
            <i class="fa-solid fa-angle-left"></i>
            المدونة
            <i class="fa-solid fa-angle-left"></i>
            <p className="mb-0 text-main-color">{p.category}</p>
          </div>
          <div className="d-flex align-items-baseline gap-3 mt-4">
            <div className="current rounded-5 px-2 py-1">
              <p className="mb-0">{p.category}</p>
            </div>
            <div className="text-white-50">
              <p>
                <i class="fa-solid fa-calendar ms-1"></i>
                {new Intl.DateTimeFormat("ar-EG", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }).format(new Date(p.date))}
              </p>
            </div>
            <div className="ms-2 text-white-50">
              <i className="fa-regular fa-clock ms-1"></i>
              {p.readTime}
            </div>
          </div>
          <h1 className="text-white mb-4">{p.title}</h1>
          <div className="d-flex align-items-center gap-2 p-3 rounded-4 bg-dark w-fit">
            <div>
              <img
                src={p.author.avatar}
                alt="avater-img"
                style={{
                  width: "50px",
                  borderRadius: "50%",
                  border: "2px solid red",
                }}
              />
            </div>
            <div>
              <p className="text-white mb-0">{p.author.name}</p>
              <p className="text-white-50 m-0">{p.author.role}</p>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-md-9">
              <div className="bg-main-color text-white p-3 rounded-4 my-4">
                {p.excerpt}
              </div>
              <p className="text-white-50 my-4">
                {p.content.split("\n\n##")[0]}
              </p>
              {p.content
                .split("\n\n##")
                .slice(1)
                .map((section, index) => {
                  const [title, description] = section.split("\n\n");
                  return (
                    <div key={index}>
                      <div className="d-flex mt-4 mb-2 gap-2">
                        <div className="bg-light-main-color text-main-color rounded-3 pt-1 px-1">
                          <i className="fa-solid fa-camera fs-1"></i>
                        </div>

                        <div className="text-white">
                          <h2 className="fw-bold">{title}</h2>
                        </div>
                      </div>

                      <p className="text-white-50 pb-4">{description}</p>
                    </div>
                  );
                })}
              <div className="bg-dark mt-5 rounded-3 p-4">
                <div className="d-flex align-items-baseline gap-2 mb-3">
                  <div className="bg-light-main-color text-main-color p-2 rounded-3">
                    <i class="fa-solid fa-tags"></i>
                  </div>
                  <div className="text-white">
                    <p className="mb-0 fw-bold">الوسوم</p>
                  </div>
                </div>
                <div className="d-flex gap-3">
                  {p.tags.map((tag) => (
                    <p
                      key={tag}
                      className="bg-black text-white-50 p-2 rounded-3"
                    >
                      #{tag}
                    </p>
                  ))}
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-baseline bg-dark mt-4 rounded-3 p-4">
                <div className="d-flex">
                  <div className="d-flex align-items-baseline gap-2 mb-3">
                    <div className="bg-light-main-color text-main-color p-2 rounded-3">
                      <i class="fa-solid fa-tags"></i>
                    </div>
                    <div className="text-white">
                      <p className="mb-0 fw-bold">شارك المقال</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <div className="bg-black text-white-50 rounded-3 p-2">
                    <Link to={"https://x.com/"} target="_blank">
                      <i class="fa-brands fa-x-twitter"></i>
                    </Link>
                  </div>
                  <div className="bg-black text-white-50 rounded-3 p-2">
                    <Link to={"https://www.linkedin.com/"} target="_blank">
                      <i class="fa-brands fa-linkedin"></i>
                    </Link>
                  </div>
                  <div className="bg-black text-white-50 rounded-3 p-2">
                    <Link to={"https://web.whatsapp.com/"} target="_blank">
                      <i class="fa-brands fa-whatsapp"></i>
                    </Link>
                  </div>
                  <div className="bg-black text-white-50 rounded-3 p-2">
                    <Link to={"#"} target="_blank">
                      <i class="fa-solid fa-link"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3 bg-dark mt-4 mb-5 rounded-3 p-4">
                <div>
                  <img
                    src={p.author.avatar}
                    alt="avater-img"
                    className="rounded-3"
                    style={{ width: "70px", border: "3px solid red" }}
                  />
                </div>
                <div>
                  <p
                    className="text-main-color mb-0 fw-bold"
                    style={{ fontSize: "14px" }}
                  >
                    كاتب المقال
                  </p>
                  <p
                    className="text-white fw-bold mb-0"
                    style={{ fontSize: "22px" }}
                  >
                    {p.author.name}
                  </p>
                  <p
                    className="text-white-50 mb-0"
                    style={{ fontSize: "14px" }}
                  >
                    {p.author.role}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 position-sticky top-0 align-self-baseline">
              <div className="bg-dark rounded-3 p-4 mb-3">
                <div className="d-flex align-items-baseline gap-2">
                  <div className="bg-light-main-color text-main-color p-2 rounded-3">
                    <i class="fa-solid fa-list"></i>
                  </div>
                  <div className="text-white fw-bold">
                    <p className="mb-0">محتويات المقال</p>
                  </div>
                </div>
                {p.content
                  .split("\n\n##")
                  .slice(1)
                  .map((section, index) => {
                    const [title, description] = section.split("\n\n");
                    return (
                      <div key={index}>
                        <div className="d-flex align-items-baseline mt-4 mb-2 gap-2">
                          <div className="bg-black text-white-50 rounded-3 p-2">
                            <p className="mb-0">{index + 1}</p>
                          </div>
                          <div className="text-white-50">
                            <p className="mb-0">{title}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="bg-dark rounded-3 p-4 text-center mb-3">
                <div className="d-flex justify-content-center gap-5">
                  <div>
                    <i class="fa-regular fa-clock text-main-color fs-4"></i>
                    <p className="text-white fw-bold mb-0 w-75 m-auto">
                      {p.readTime}
                    </p>
                    <p
                      className="text-white-50 mb-0"
                      style={{ fontSize: "12px" }}
                    >
                      وقت القراءة
                    </p>
                  </div>
                  <div>
                    <i class="fa-regular fa-calendar text-main-color fs-4"></i>
                    <p className="text-white fw-bold mb-0">
                      {new Intl.DateTimeFormat("ar-EG", {
                        day: "numeric",
                        month: "long",
                      }).format(new Date(p.date))}
                    </p>
                    <p
                      className="text-white-50 mb-0"
                      style={{ fontSize: "12px" }}
                    >
                      تاريخ النشر
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-light-main-color rounded-3 p-4 text-center mb-3">
                <div className="bg-main-color text-light-main-color rounded-3 w-fit m-auto p-2 mb-2">
                  <i class="fa-solid fa-envelope"></i>
                </div>
                <p className="mb-2 text-white fw-bold">لا تفوت جديدنا</p>
                <p className="mb-3 text-white-50">
                  اشترك للحصول علي أحدث المقالات
                </p>
                <button
                  className="bg-main-color text-white rounded-3 pt-2 pb-3 border-0 w-100"
                  onClick={() => navigate("/blog")}
                >
                  تصفح المزيد
                </button>
              </div>
            </div>
          </div>
          <hr className="text-white-50" />
          <div>
            <div className="d-flex justify-content-between align-items-baseline">
              <div className="d-flex align-items-center gap-2">
                <div className="bg-light-main-color text-main-color border-main-color p-2 rounded-3">
                  <i class="fa-solid fa-images"></i>
                </div>
                <div>
                  <h4 className="text-white fw-bold mb-0">مقالات قد تعجبك</h4>
                  <p
                    className="text-white-50 mb-0"
                    style={{ fontSize: "14px" }}
                  >
                    استكشف المزيد من المحتوي المميز
                  </p>
                </div>
              </div>
              <button
                className="bg-transparent text-main-color border-0 px-3 py-2 rounded-3"
                onClick={() => navigate("/blog")}
              >
                عرض الكل<i class="fa-solid fa-angle-left"></i>
              </button>
            </div>
            <div className="row mt-3">
              {posts.posts.slice(1, 4).map((p) => (
                <div className="col-md-4 mb-5">
                  <div
                    className="card text-white border-0 rounded-4 overflow-hidden position-relative"
                    style={{ height: "350px" }}
                  >
                    <span className="badge bg-main-color text-white fw-bold position-absolute top-0 end-0 m-3 rounded-pill px-3 py-2">
                      {p.category}
                    </span>
                    <div
                      className="w-100 h-100 position-absolute top-0 start-0"
                      style={{
                        backgroundImage: `url(${p.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
                    <div className="card-body d-flex flex-column justify-content-end position-relative">
                      <h5 className="fw-bold mb-3">{p.title}</h5>

                      <div className="d-flex justify-content-between text-white-50 small">
                        <div className="d-flex align-items-baseline gap-2">
                          <div>
                            <img
                              src={p.author.avatar}
                              alt="avatar-img"
                              style={{ width: "20px", borderRadius: "50%" }}
                            />
                          </div>
                          <div className="text-white-50">
                            <p style={{ fontSize: "12px" }}>{p.author.name}</p>
                          </div>
                        </div>
                        <div>{p.readTime}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
