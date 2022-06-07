import React, { Component } from "react";
import NewsComp from "./NewsComp";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
export class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 20,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.props.category}-NewsWebsite`;
  }

  handleNextBtn = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fc20214e128140339c80aef86bcf9058&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    <Spinner />;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  handlePreviousBtn = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fc20214e128140339c80aef86bcf9058&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fc20214e128140339c80aef86bcf9058&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalresult: parsedData.totalResults,
      loading: false,
    });
  }
  render() {
    console.log("rndr");
    return (
      <>
        {this.state.loading && <Spinner />}
        <div className="container  Content">
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((ele) => {
                return (
                  <div className="col-md-4 columnchng" key={ele.url}>
                    <NewsComp
                      title={ele.title}
                      description={
                        ele.description
                          ? ele.description?.slice(0, 88)
                          : ele.title
                      }
                      imgUrl={
                        !ele.urlToImage
                          ? "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/03/0/0/iStock-1284227289.jpg?ve=1&tl=1"
                          : ele.urlToImage
                      }
                      Url={ele.url}
                      time={ele.publishedAt}
                      author={ele.author ? ele.author : "Unknown"}
                      source={ele.source.name ? ele.source.name : "NDTV"}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="container d-flex justify-content-between my-2">
          <button
            type="button"
            className="btn btn-dark"
            disabled={this.state.page <= 1}
            onClick={this.handlePreviousBtn}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalresult / this.props.pagesize)
            }
            className="btn btn-dark"
            onClick={this.handleNextBtn}
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}

export default News;
