import React from "react"
import { Link } from "gatsby"
import "../styles/_blogCard.scss"

const BlogCard = ({ article }) => {
  return (
    <div className="col-md-12 mt-3">
      <Link>
        <div className="blog--card">
          <div className="row mt-3">
            <div className="col-8 ">
              <div className="col-12">
                <div className="row">
                  <h3 className="text-muted mt-4 ml-4 pl-3 pr-3 d-inline-block align-middle">
                    {article.title}
                  </h3>
                  <p className="ml-3">{article.readTime}</p>
                  <p className="ml-3">{article.authorName}</p>
                  <p className="ml-3">{article.slug}</p>
                </div>
              </div>
            </div>
            <div className="col-4 text-right" />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BlogCard
