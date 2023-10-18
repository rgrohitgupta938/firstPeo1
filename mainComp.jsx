import React, { Component } from "react";
import LeftPanel from "./leftPanel";
import "./main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHand,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { Chart } from "react-google-charts";

class MainComp extends Component {
  render() {
    const data = [
      ["Months", "Quantity"],
      ["January", 10000],
      ["February", 12000],
      ["March", 15000],
      ["April", 13000],
      ["May", 16000],
      ["June", 18000],
      ["July", 14000],
      ["August", 17000],
      ["September", 19000],
      ["October", 21000],
      ["November", 20000],
      ["December", 22000],
    ];
    const options = {
      chart: {
        title: "Ovrview",
        subtitle: "Monthly Earning",
      },
    };
    const data1 = [
      ["Task", "Hours per Day"],
      ["New Customer", 25],
      ["Quantity", 65],
    ];
    const options1 = {
      title: "Customers",
      subtitle: "Customers that buy products",
      pieHole: 0.4,
      is3D: false,
    };
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-2">
            <LeftPanel />
          </div>
          <div className="col-12 col-md-10 back">
            <div className="row mt-3 ms-4">
              <div className="col-12 col-md-3 d-flex align-items-center ps-4 pt-2">
                Hello Shahrukh
                <FontAwesomeIcon icon={faHand} style={{ color: "#ecf570" }} />,
              </div>
              <div className="col-12 col-md-6"></div>
              <div className="col-12 col-md-3 d-flex align-items-center pt-2">
                <form className="w-100 d-flex search me-5" role="search">
                  <div className="input-group">
                    <span className="input-group-text bg-white">
                      <i className="fa fa-search"></i>
                    </span>
                    <input
                      className="form-control search-txt"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="row mt-5 ms-4">
              <div className="col-12 col-md-3 mb-3">
                <div
                  class="card mb-3"
                  style={{ maxWidth: "100%", width: "100%" }}
                >
                  <div class="row g-0">
                    <div class="col-md-4 col-5">
                      <span class="fa-stack fa-2x img-fluid rounded-start">
                        <i class="fa-regular fa-circle fa-stack-2x"></i>
                        <i
                          class="fa-solid fa-coins fa-stack-1x"
                          style={{ color: "green" }}
                        ></i>
                      </span>
                    </div>
                    <div class="col-md-8 col-7">
                      <div class="card-body">
                        <h5 class="card-title txt1 mb-2">
                          <small>Trending</small>
                        </h5>
                        <p
                          class="card-text mb-0 fw-bold"
                          style={{ fontSize: "big" }}
                        >
                          $198K
                          <br />
                          <span style={{ color: "#35d733" }}>
                            <FontAwesomeIcon icon={faArrowUp} size="xs" />
                            &nbsp;37.8%
                          </span>
                          <span style={{ fontSize: "small" }}>this month</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3 mb-3">
                <div
                  class="card mb-3"
                  style={{ maxWidth: "100%", width: "100%" }}
                >
                  <div class="row g-0">
                    <div class="col-md-4 col-5">
                      <span class="fa-stack fa-2x img-fluid rounded-start">
                        <i class="fa-regular fa-circle fa-stack-2x"></i>
                        <i
                          class="fa-regular fa-file-lines fa-stack-1x"
                          style={{ color: "#cd4be7" }}
                        ></i>
                      </span>
                    </div>
                    <div class="col-md-8 col-7">
                      <div class="card-body">
                        <h5 class="card-title txt1 mb-2">
                          <small>Orders</small>
                        </h5>
                        <p
                          class="card-text mb-0 fw-bold"
                          style={{ fontSize: "big" }}
                        >
                          $2.4K
                          <br />
                          <span style={{ color: "#ff0000" }}>
                            <FontAwesomeIcon icon={faArrowDown} />
                            &nbsp;37.8%
                          </span>
                          <span style={{ fontSize: "small" }}>this month</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3 mb-3">
                <div
                  class="card mb-3"
                  style={{ maxWidth: "100%", width: "100%" }}
                >
                  <div class="row g-0">
                    <div class="col-md-4 col-5">
                      <span class="fa-stack fa-2x img-fluid rounded-start">
                        <i class="fa-regular fa-circle fa-stack-2x"></i>
                        <i
                          class="fa-solid fa-wallet fa-stack-1x"
                          style={{ color: "#2080bc" }}
                        ></i>
                      </span>
                    </div>
                    <div class="col-md-8 col-7">
                      <div class="card-body">
                        <h5 class="card-title txt1 mb-2">
                          <small>Balance</small>
                        </h5>
                        <p
                          class="card-text mb-0 fw-bold"
                          style={{ fontSize: "big" }}
                        >
                          $2.4K
                          <br />
                          <span style={{ color: "#ff0000" }}>
                            <FontAwesomeIcon icon={faArrowDown} />
                            &nbsp;2%
                          </span>
                          <span style={{ fontSize: "small" }}>this month</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3 mb-3">
                <div
                  class="card mb-3"
                  style={{ maxWidth: "100%", width: "100%" }}
                >
                  <div class="row g-0">
                    <div class="col-md-4 col-5">
                      <span class="fa-stack fa-2x img-fluid rounded-start">
                        <i class="fa-regular fa-circle fa-stack-2x"></i>
                        <i
                          class="fa-solid fa-bag-shopping fa-stack-1x"
                          style={{ color: "#df68ad" }}
                        ></i>
                      </span>
                    </div>
                    <div class="col-md-8 col-7">
                      <div class="card-body">
                        <h5 class="card-title txt1 mb-2">
                          <small>Total Order</small>
                        </h5>
                        <p
                          class="card-text mb-0 fw-bold"
                          style={{ fontSize: "big" }}
                        >
                          $89K
                          <br />
                          <span style={{ color: "#35d733" }}>
                            <FontAwesomeIcon icon={faArrowUp} />
                            &nbsp;11%
                          </span>
                          <span style={{ fontSize: "small" }}>this month</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-4">
              {/* Chart */}
              <div className="col-12 col-md-8 ms-4 mb-4">
                <Chart
                  chartType="Bar"
                  width="100%" // Change the width to 100% for full-width responsiveness
                  height="300px"
                  data={data}
                  options={options}
                />
              </div>
              <div className="col-12 col-md-3">
                <Chart
                  chartType="PieChart"
                  width="100%" // Change the width to 100% for full-width responsiveness
                  height="300px"
                  data={data1}
                  options={options1}
                />
              </div>
            </div>
            <div className="container">
              <div className="row ms-4 mt-5 bg-light">
                <div className="row">
                  <div
                    className="col-12 col-md-3 fw-bolder ps-3 mb-2"
                    style={{ fontSize: "20px" }}
                  >
                    Product Sell
                  </div>
                  <div className="col-12 col-md-4"></div>
                  <div className="col-12 col-md-5">
                    <div className="row">
                      <div className="col-12 col-md-6 col-lg-6 mb-2">
                        <form className="w-100 d-flex search me-3">
                          <div className="input-group">
                            <span className="input-group-text bg-white">
                              <i className="fa fa-search"></i>
                            </span>
                            <input
                              className="form-control search-txt"
                              type="search"
                              placeholder="Search"
                              aria-label="Search"
                            />
                          </div>
                        </form>
                      </div>
                      <div className="col-12 col-md-6 col-lg-6 text-secondary">
                        <small>
                          Last 30 Days &nbsp;
                          <FontAwesomeIcon icon={faArrowDown} />
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row text-secondary p-2 p-md-3">
                  <div className="col-12 col-md-9 col-lg-9 mb-2">
                    Product Name
                  </div>
                  <div className="col-12 col-md-1 col-lg-1 mb-2">Stock</div>
                  <div className="col-12 col-md-1 col-lg-1 mb-2">Price</div>
                  <div className="col-12 col-md-1 col-lg-1 mb-2">
                    Total Sales
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-9 col-lg-9">
                    <div class="card mb-3 bor" style={{ maxWidth: "540px" }}>
                      <div class="row g-0">
                        <div class="col-4 col-md-4 col-lg-4">
                          <img
                            src="https://www.adorama.com/alc/wp-content/uploads/2020/10/abstract-photography-design-feature-1280x720.jpg"
                            class="img-fluid rounded"
                            alt="..."
                          />
                        </div>
                        <div className="col-8 col-md-8 col-lg-8">
                          <div class="card-body">
                            <h5 class="card-title">Abstract 3D</h5>
                            <p class="card-text text-secondary">
                              <small>
                                Lorem ipsum, or lipsum as it is sometimes known
                              </small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-1 col-lg-1 mb-2 col1">
                    32 in stock
                  </div>
                  <div className="col-12 col-md-1 col-lg-1 mb-2">$45.99</div>
                  <div className="col-12 col-md-1 col-lg-1 mb-2">20</div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-9 col-lg-9">
                    <div class="card mb-3 bor" style={{ maxWidth: "540px" }}>
                      <div class="row g-0">
                        <div class="col-4 col-md-4 col-lg-4">
                          <img
                            src="https://d7hftxdivxxvm.cloudfront.net/?height=630&quality=80&resize_to=fill&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2F4zKXGz8_XLjCJDAp-Cz3yg%252FMag_abstract%2Bpainting%2Bgood.jpeg&width=1200"
                            class="img-fluid rounded"
                            alt="..."
                          />
                        </div>
                        <div className="col-8 col-md-8 col-lg-8">
                          <div class="card-body">
                            <h5 class="card-title">Abstract 3D</h5>
                            <p class="card-text text-secondary">
                              <small>
                                Lorem ipsum, or lipsum as it is sometimes known
                              </small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-1 col-lg-1 mb-2">
                    32 in stock
                  </div>
                  <div className="col-12 col-md-1 col-lg-1 mb-2">$45.99</div>
                  <div className="col-12 col-md-1 col-lg-1 mb-2">20</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MainComp;
