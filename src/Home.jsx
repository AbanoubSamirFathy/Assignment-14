import React from "react";
import { data, useParams } from "react-router-dom";
import posts from "../posts.json";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const icons = [
    <i class="fa-solid fa-gear"></i>,
    <i class="fa-solid fa-user"></i>,
    <i class="fa-solid fa-mountain-sun"></i>,
    <i class="fa-solid fa-sliders"></i>,
    <i class="fa-solid fa-gear"></i>,
    <i class="fa-solid fa-gear"></i>,
  ];
  const categoryCount = posts.posts.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <section id="home" className="bg-black pt-5">
      <div className="home-1 text-center py-5">
        <div className="bg-light-main-color text-main-color w-fit m-auto p-2 rounded-4">
          <i class="fa-solid fa-circle ms-1 text-main-color pulsate-bck"></i>
          مرحباً بك في عدسة
        </div>
        <h1
          className="text-light fw-bold m-auto my-5"
          style={{ fontSize: "80px" }}
        >
          اكتشف <span className="text-main-color">فن</span> <br />
          التصوير الفوتغرافي
        </h1>
        <p
          className="text-white-50 w-50 m-auto mb-5"
          style={{ fontSize: "27px" }}
        >
          انغمس في أسرار المحترفين ونصائح عماية لتطوير مهاراتم في التصوير.
        </p>
        <button
          className="bg-main-color text-white px-4 py-3 rounded-5 fw-bold ms-2 border-0"
          onClick={() => navigate(`/blog`)}
        >
          استكشف المقالات
          <i class="fa-solid fa-arrow-left-long me-2"></i>
        </button>
        <button
          className="bg-dark text-white px-4 py-3 rounded-5 fw-bold border-0"
          onClick={() => navigate(`/about`)}
        >
          <i class="fa-solid fa-circle-info bg-transparent ms-2"></i>
          اعرف المزيد
        </button>
        <div className="py-4 d-flex justify-content-center">
          <div className="bg-dark text-main-color px-5 py-3 rounded-4">
            <i class="fa-solid fa-newspaper fs-3"></i>
            <p className="m-0 fs-3 fw-bold">+50</p>
            <p className="m-0 text-white-50">مقالة</p>
          </div>
          <div className="bg-dark text-main-color px-5 py-3 rounded-4 me-2">
            <i class="fa-solid fa-people-group fs-3"></i>
            <p className="m-0 fs-3 fw-bold">+10ألف</p>
            <p className="m-0 text-white-50">قارئ</p>
          </div>
          <div className="bg-dark text-main-color px-5 py-3 rounded-4 me-2">
            <i class="fa-solid fa-folder-open fs-3"></i>
            <p className="m-0 fs-3 fw-bold">4</p>
            <p className="m-0 text-white-50">تصنيفات</p>
          </div>
          <div className="bg-dark text-main-color px-5 py-3 rounded-4 me-2">
            <i class="fa-solid fa-pen-nib fs-3"></i>
            <p className="m-0 fs-3 fw-bold">6</p>
            <p className="m-0 text-white-50">كاتب</p>
          </div>
        </div>
      </div>
      <div className="home-2 container py-5">
        <div className="bg-light-main-color text-main-color w-fit p-2 rounded-4 mb-2">
          <i class="fa-solid fa-circle ms-1 text-main-color pulsate-bck"></i>
          مميز
        </div>
        <h2 className="text-white fw-bold fs-1">مقالات مختارة</h2>
        <div className="d-flex justify-content-between">
          <div className="text-white-50">
            <p>محتوي منقي لبدء رحلة تعلمك</p>
          </div>
          <button
            className="bg-main-color text-white px-3 py-2 rounded-3 border-0"
            onClick={() => navigate("/blog")}
          >
            عرض الكل<i class="fa-solid fa-angle-left"></i>
          </button>
        </div>
        {posts.posts.slice(0, 3).map((p) => (
          <div
            className="d-flex my-4 cursor-pointer"
            key={p.id}
            onClick={() => navigate(`/post/${p.id}`)}
          >
            <div className="w-50 position-relative overflow-hidden">
              <img
                src={p.image}
                alt="post-img"
                className="w-100 h-100 rounded-end-5 position-absolute top-0 start-0"
              />
              <span className="badge bg-main-color text-white fw-bold position-absolute top-0 end-0 m-3 rounded-pill px-3 py-2">
                <i className="fa-solid fa-star ms-1"></i> مميز
              </span>
            </div>
            <div className="bg-dark w-50 p-4 rounded-start-5">
              <div className="d-flex align-items-baseline">
                <div className="bg-light-main-color text-main-color px-3 fw-bold rounded-5 ms-3">
                  <p className="mb-0">{p.category}</p>
                </div>
                <div className="text-white-50">
                  <i class="fa-regular fa-clock ms-1"></i>
                  {p.readTime}
                </div>
              </div>
              <h3 className="text-white my-3">{p.title}</h3>
              <p className="text-white-50 my-3">{p.excerpt}</p>
              <div className="d-flex align-items-center justify-content-between pt-5">
                {" "}
                <div className="d-flex align-items-center ">
                  {" "}
                  <div>
                    {" "}
                    <img
                      src={p.author.avatar}
                      alt="avater-img"
                      className="ms-2"
                      style={{ width: "40px", borderRadius: "50%" }}
                    />
                  </div>
                  <div>
                    {" "}
                    <p className="text-white mb-0">{p.author.name}</p>
                    <p className="text-white-50">
                      {new Intl.DateTimeFormat("ar-EG", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }).format(new Date(p.date))}
                    </p>
                  </div>
                </div>
                <div className="text-main-color">
                  اقرأ المقال
                  <i class="fa-solid fa-arrow-left-long me-2"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="home-3 container py-5">
        <div className="bg-light-main-color text-main-color w-fit p-2 rounded-4 mb-2 m-auto">
          <i class="fa-solid fa-circle ms-1 text-main-color pulsate-bck"></i>
          التصنيفات
        </div>
        <h2 className="text-white fw-bold fs-1 text-center">
          استكشف حسب الموضوع
        </h2>
        <p className="text-white-50 text-center">اعثر علي محتوي حسب اهتمامك</p>
        <div className="row">
          {posts.posts.map(
            (p, index) =>
              posts.posts.findIndex((item) => item.category === p.category) ===
                index && (
                <div className="col-md-3 g-3" key={p.id}>
                  <div
                    className="category-card d-flex justify-content-between align-items-center bg-dark p-4 rounded-4 cursor-pointer"
                    onClick={() => navigate(`/blog?category=${p.category}`)}
                  >
                    <div>
                      <div className="text-main-color bg-light-main-color w-fit px-3 py-2 rounded-3 mb-2">
                        {icons[index]}
                      </div>
                      <p className="text-white fw-bold mb-1">{p.category}</p>
                      <p className="text-white-50 mb-0">
                        {categoryCount[p.category]} مقالة
                      </p>
                    </div>
                    <div className="arrow-icon text-white bg-main-color circle-rounded p-2">
                      <i className="fa-solid fa-angle-left"></i>
                    </div>
                  </div>
                </div>
              ),
          )}
        </div>
      </div>
      <div className="home-4 container py-5">
        <div className="bg-light-main-color text-main-color w-fit p-2 rounded-4 mb-2">
          <i class="fa-solid fa-circle ms-1 text-main-color pulsate-bck"></i>
          الأحدث
        </div>
        <h2 className="text-white fw-bold fs-1">أحدث المقالات</h2>
        <div className="d-flex justify-content-between mb-2">
          <div className="text-white-50">
            <p>محتوي منقي طازج من المطبعة</p>
          </div>
          <button
            className="bg-transparent text-main-color border-0 px-3 py-2 rounded-3"
            onClick={() => navigate("/blog")}
          >
            عرض جميع المقالات<i class="fa-solid fa-angle-left"></i>
          </button>
        </div>
        <div className="row g-4">
          {posts.posts.slice(3, 6).map((p) => (
            <div
              className="col-12 col-md-6 col-lg-4 cursor-pointer"
              onClick={() => navigate(`/post/${p.id}`)}
            >
              <div className="bg-dark rounded-5 h-100 overflow-hidden">
                <img
                  src={p.image}
                  alt="post-img"
                  className="img-fluid rounded-top-5"
                />
                <div className="p-4">
                  <div className="d-flex mt-3 align-items-baseline text-white-50">
                    <div className="ms-2">
                      <i className="fa-regular fa-clock ms-1"></i>
                      {p.readTime}
                    </div>
                    <div>
                      <p>
                        <i className="fa-solid fa-circle ms-1"></i>
                        {new Intl.DateTimeFormat("ar-EG", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }).format(new Date(p.date))}
                      </p>
                    </div>
                  </div>
                  <h3 className="text-white my-2 fs-5">{p.title}</h3>
                  <p className="text-white-50 my-2">{p.excerpt}</p>
                  <hr className="text-white-50" />
                  <div className="d-flex align-items-center justify-content-between">
                    {" "}
                    <div className="d-flex align-items-center">
                      {" "}
                      <div>
                        {" "}
                        <img
                          src={p.author.avatar}
                          alt="avater-img"
                          className="ms-2"
                          style={{ width: "40px", borderRadius: "50%" }}
                        />
                      </div>
                      <div>
                        {" "}
                        <p className="text-white mb-0">{p.author.name}</p>
                        <p className="text-white-50">{p.author.role}</p>
                      </div>
                    </div>
                    <div className="text-main-color">
                      اقرأ المقال
                      <i class="fa-solid fa-arrow-left-long me-2"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="home-5 container py-5">
        <div className="text-center bg-dark w-75 p-5 rounded-3 m-auto">
          <div className="bg-main-color text-white w-fit m-auto px-3 py-2 rounded-4 mb-2 fs-2">
            <i class="fa-regular fa-envelope"></i>
          </div>
          <h2 className="text-white">
            اشترك في <span className="text-main-color">نشرتنا الإخبارية</span>
          </h2>
          <p className="text-white-50">
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
            الإلكتروني
          </p>
          <input
            type="search"
            placeholder="ادخل بريدك الإلكتروني"
            className="w-50 px-2 py-3 rounded-3 bg-black border-0 ms-1"
          />
          <button className="bg-main-color text-white px-4 py-3 rounded-3 border-0">
            اشترك الآن
          </button>
          <div className="d-flex text-white-50 justify-content-center mt-4">
            {posts.posts.slice(0, 3).map((p) => (
              <div key={p.id}>
                <img
                  src={p.author.avatar}
                  alt="author-img"
                  style={{ width: "40px", borderRadius: "50%" }}
                />
              </div>
            ))}
            <div className="mx-4">
              <p>
                انضم ل<span className="text-white fw-bold">+1000</span> مصور
              </p>
            </div>
            <div className="ms-4">
              <p>بدون إزعاج</p>
            </div>
            <div className="ms-4">
              <p>إلغاء الاشتراك في أي وقت</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
