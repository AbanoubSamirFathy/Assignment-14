import React, { useState } from "react";
import posts from "../posts.json";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const postsLength = posts.posts.length;

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const postsPerPage = 6;

  const filteredPosts = posts.posts.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || p.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const lastIndex = currentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  const currentPosts = filteredPosts.slice(firstIndex, lastIndex);
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const categoryFromURL = searchParams.get("category");

  React.useEffect(() => {
    if (categoryFromURL) {
      setSelectedCategory(categoryFromURL);
      setCurrentPage(1);
    }
  }, [categoryFromURL]);

  return (
    <section id="blog" className="bg-black py-5">
      <div className="blog-1 pt-5 text-center">
        <div className="bg-light-main-color text-main-color w-fit m-auto p-2 rounded-4">
          <i className="fa-solid fa-circle ms-1 text-main-color pulsate-bck"></i>{" "}
          <i className="fa-solid fa-newspaper ms-1"></i>
          مدوتنا
        </div>
        <h1
          className="text-light fw-bold m-auto mt-5 mb-3"
          style={{ fontSize: "60px" }}
        >
          استكشف <span className="text-main-color">مقالاتنا</span>
        </h1>
        <p
          className="text-white-50 w-50 m-auto mb-5"
          style={{ fontSize: "20px" }}
        >
          اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
        </p>
      </div>
      <div className="blog-2">
        <div className="container d-flex justify-content-between gap-3">
          <div className="position-relative">
            <input
              type="search"
              placeholder="ابحث في المقالات..."
              className="bg-dark text-white-50 border-0 px-5 py-2 rounded-3 ps-5"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
          </div>

          <div className="d-flex gap-3">
            <div
              className={`p-2 rounded-3 cursor-pointer ${
                selectedCategory === "all" ? "current" : "bg-dark text-white-50"
              }`}
              onClick={() => {
                setSelectedCategory("all");
                setCurrentPage(1);
              }}
            >
              <Link
                className={
                  selectedCategory === "all" ? "text-white" : "text-white-50"
                }
              >
                جميع المقالات
              </Link>
            </div>

            {posts.posts.map(
              (p, index) =>
                posts.posts.findIndex(
                  (item) => item.category === p.category,
                ) === index && (
                  <div
                    key={p.id}
                    onClick={() => {
                      setSelectedCategory(p.category);
                      setCurrentPage(1);
                    }}
                    className={`p-2 rounded-3 cursor-pointer ${
                      selectedCategory === p.category
                        ? "current"
                        : "bg-dark text-white-50"
                    }`}
                  >
                    <Link
                      className={
                        selectedCategory === p.category
                          ? "text-white"
                          : "text-white-50"
                      }
                    >
                      {p.category}
                    </Link>
                  </div>
                ),
            )}
          </div>
        </div>
        <hr className="text-white" />
        <div className="container d-flex justify-content-between mt-5 mb-3">
          <div className="text-white-50">
            <p>
              عرض{" "}
              <span className="text-white fw-bold">{filteredPosts.length}</span>{" "}
              مقالات
            </p>
          </div>
          <div>
            <button>
              <i className="fa-solid fa-grip-lines"></i>
            </button>
          </div>
        </div>
        <div className="container">
          <div className="row g-4">
            {currentPosts.length === 0 ? (
              <p className="text-center text-white-50 fs-4">
                لا توجد مقالات مطابقة لبحثك 🔍
              </p>
            ) : (
              currentPosts.map((p) => (
                <div
                  className="col-12 col-md-6 col-lg-4 cursor-pointer"
                  key={p.id}
                  onClick={() => navigate(`/post/${p.id}`)}
                >
                  <div
                    className= "bg-dark text-white border-0 rounded-4 overflow-hidden position-relative"
                  >
                    <span className="badge bg-main-color text-white fw-bold position-absolute top-0 end-0 m-3 rounded-pill px-3 py-2 z-1">
                      {p.category}
                    </span>
                    <div>
                      <img
                        src={p.image}
                        alt="post-img"
                        className="w-100 h-100 object-fit-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="d-flex align-items-baseline text-white-50">
                        <div className="ms-2">
                          <i className="fa-regular fa-clock ms-1"></i>
                          {p.readTime}
                        </div>
                        <div>
                          <p className="mb-0">
                            <i className="fa-solid fa-circle ms-1"></i>
                            {new Intl.DateTimeFormat("ar-EG", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }).format(new Date(p.date))}
                          </p>
                        </div>
                      </div>

                      <h3 className="text-white my-3">{p.title}</h3>
                      <p className="text-white-50 my-3">{p.excerpt}</p>

                      <hr className="text-white-50" />

                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <img
                            src={p.author.avatar}
                            alt="avatar-img"
                            className="ms-2"
                            style={{ width: "40px", borderRadius: "50%" }}
                          />
                          <div>
                            <p className="text-white mb-0">{p.author.name}</p>
                            <p className="text-white-50 mb-0">
                              {new Intl.DateTimeFormat("ar-EG", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              }).format(new Date(p.date))}
                            </p>
                          </div>
                        </div>
                        <div className="bg-light-main-color text-main-color circle-rounded p-2">
                          <i className="fa-solid fa-angle-left"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="d-flex justify-content-center gap-2 mt-4">
            {Array.from(
              {
                length: Math.ceil(filteredPosts.length / postsPerPage),
              },
              (_, index) => (
                <button
                  key={index}
                  className={`btn ${
                    currentPage === index + 1
                      ? "current"
                      : "bg-dark text-white-50"
                  }`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
