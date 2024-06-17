import React from "react";
import "./BlogCard.scss";

export default function BlogCard({blog, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div onClick={() => openUrlInNewTab(blog.url, blog.title)} style = {{
      backgroundImage:
      `url(${blog.description})`, backgroundSize: "cover",
      backgroundRepeat: "no-repeat",  backgroundPosition: 'center',
    width: '100%',
    height: '100%',overflow: 'hidden',
   }}>
      <div className={isDark ? "blog-container " : "blog-container"}    >
        <a
          className={
            isDark ? " blog-card blog-card-shadow" : "blog-card"
          }
          href="#blog"
        >
          <h3 className={isDark ? " blog-title" : "blog-title"}>
            {blog.title}
          </h3>
          {/* <p className={isDark ? "small-dark small" : "small"}>
            {blog.description}
          </p> */}
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>
    </div>
  );
}
