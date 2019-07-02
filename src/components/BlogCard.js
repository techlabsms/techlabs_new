import React from "react"
import { Link } from "gatsby"
import clock from "../assets/clock.svg"
import techlabs from "../assets/tl-icon-whitebg.svg"
import "../styles/_blogCard.scss"

const BlogCard = ({ article }) => {
  
  return (
    <div className="col-md-12 mt-3">
      <Link className="link" to={`/blog/${article.slug}`}>
        <div className="blog--card">
          <div className="row mt-3">
            <div className="col-sm-12 col-lg-8">
              <div className="row">
                <h3 className="text-muted mt-4 ml-4 mr-4 pl-3 pr-3 d-inline-block align-middle">
                  {article.title}
                </h3>
              </div>
              <div className="row ml-1">
                <div className="col-4">
                  <p className="ml-3">
                    <img src={clock} alt="clock" className="mr-3" />
                    {article.readTime}min read
                  </p>
                </div>
                <div className="col-8">
                  <p className="ml-3">
                    <img
                      src={techlabs}
                      alt="clock"
                      className="mr-3"
                      width="25"
                      height="25"
                    />
                    {article.authorName}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-10 ml-2">
                  <p className="ml-3">{article.abstract}...</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center d-none d-lg-block m-auto">
              {article.postImg != null ? (
                  <img
                    src={`${article.postImg.file.url}?w=200&h=204`}
                    alt="blog"
                  />
              ) : (
                <img src={techlabs} alt="blog" width="200" />
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BlogCard
