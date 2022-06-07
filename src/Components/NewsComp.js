import React, { Component } from "react";
import "../index.css";
export class NewsComp extends Component {
  render() {
    let { title, description, imgUrl, Url, time, author, source } = this.props;
    return (
      <div>
        <div className="card my-2 newscard" style={{ height: "34rem" }}>
          <span class="badge bg-secondary text-end" style={{ height: "22px" }}>
            {source}
          </span>
          <img
            src={imgUrl}
            style={{ height: "10rem" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5
              className="card-title title"
              style={{ height: "90px", margin: "18px 0" }}
            >
              {title}
            </h5>

            <p
              class="d-flex justify-content-between"
              style={{ margin: "25px 0" }}
            >
              ~ by {author}
            </p>
            <p
              className="card-text"
              style={{ height: "70px", marginBottom: "28px" }}
            >
              {description}
            </p>
            <p class="card-text">
              <small class="text-muted">
                published on {new Date(time).toGMTString()}
              </small>
            </p>
            <a href={Url} className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsComp;
