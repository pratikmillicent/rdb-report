import * as React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { IoIosMail, IoMdTrain } from 'react-icons/io';
import { HiShoppingBag } from 'react-icons/hi';
import { PiGraduationCapFill } from 'react-icons/pi';
import { MdFlight } from 'react-icons/md';
import { BsTrainFront } from 'react-icons/bs';
import { GiRoad } from 'react-icons/gi';

function PreLeaseTemp() {
  return (
    <div className="montserrat-400">
      {/* home section start  */}
      <section className="bordered home-container">
        <div className="home-content">
          <img
            src="https://i.ibb.co/rxwcxNR/rd-logo.png"
            alt=""
            className="home-logo"
          />
          <p className="home-title">BUILT ON EXPERIENCE</p>
        </div>
      </section>
      {/* home section end  */}

      {/* about section start  */}
      <section className="bordered">
        <div className="body-container">
          <div className="about-banner">
            <div className="rd-logo">
              <img
                src="https://i.ibb.co/rxwcxNR/rd-logo.png"
                className="about-logo"
              />
            </div>
          </div>
          <div className="home-header-container">
            <div className="header-content">
              <div className="header">
                <div className="header-text">
                  <h3 className="about-heading">ABOUT US</h3>
                  <div className="about-header-border" />
                </div>
              </div>
              <div className="header-highlight"></div>
            </div>
          </div>
          <div className="about-content">
            <p>
              Welcome to RD Brothers, a global leader in real estate with 20
              years of experience and a network spanning several countries. Our
              real estate arm offers exceptional solutions across residential,
              commercial, retail, educational, healthcare, banking, hospitality
              and warehousing sectors. Combining global reach with local
              insights, RD Brothers is committed to delivering customised
              solutions for buying, selling, leasing, and/or investing, with
              unmatched professionalism and excellence.
            </p>
            <p>
              Our expertise in real estate services, includes market entry
              strategies, location advisory, property sourcing, transaction
              management and investment sales. Beyond our comprehensive real
              estate offerings, we also own and develop luxury properties,
              acquire land, and provide feasibility studies to large
              developments
            </p>
          </div>
        </div>

        <div className="footer-description pagebreak">
          <span>Built on Experience</span>
          <span>www.rdbrothers.com</span>
          <span>Maha RERA No. A51800025192</span>
        </div>
      </section>
      {/* about section end  */}

      {/* Description section start  */}
      <section className="description-container bordered">
        <div className="img-logo description-logo rd-logo">
          <img src="https://i.ibb.co/rxwcxNR/rd-logo.png" alt="rdb logo" />
        </div>
        <div className="desc-header">
          <div className="header">
            <div className="header-text">
              <h3 className="about-heading">TIMERS SQUARE, ANDHERI EAST</h3>
              <h3 className="desc-sub-heading">PRE-EASE PROPERTY FOR</h3>
              <div className="about-header-border" />
            </div>
          </div>
          <div className="description-header-highlight"></div>
        </div>
        <div className="sub-heading-border">PROPERTY DESCRIPTION</div>
        <div className="desc-content">
          <div className="desc-content-left">
            <h3>TERMS</h3>
            <table className="lease-table">
              <tbody>
                <tr>
                  <td>Carpet Area (sqft)</td>
                  <td colSpan={5}>1400</td>
                </tr>
                <tr>
                  <td>Built Up Area (sqft)</td>
                  <td colSpan={5}>2160</td>
                </tr>
                <tr>
                  <td>Proposed Floors (Sqft)</td>
                  <td colSpan={5}>3rd</td>
                </tr>
                <tr>
                  <td>Total Floor</td>
                  <td colSpan={5}></td>
                </tr>
                <tr>
                  <td>Car Park</td>
                  <td colSpan={5}>1</td>
                </tr>
                <tr>
                  <td>Quoted Rate-</td>
                  <td colSpan={5}>2.70 CR (Negotiable)</td>
                </tr>
                <tr className="">
                  <td>Location</td>
                  <td colSpan={5}>
                    3rd, Center Point, J.B Nagar, Andheri East, Mumbai,
                  </td>
                </tr>
                <tr>
                  <td>Property Address</td>
                  <td colSpan={5}>
                    302/303, 3rd Floor, 72 Empire, WEH Metro Station, Gate No.
                    8, Near Western Express Highway, Andheri East.Mumbai - 400
                    099.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="desc-content-right">
            <div className="desc-r-content">
              <div className="">
                <h3>PROPERTY STATUS</h3>
                <li>Ready to move in</li>
              </div>
              <div className="">
                <h3>AREA AVAILABLE</h3>
                <li>G + 2 Retail Space</li>
                <li>1000 Sqft - 2000 Sqft</li>
              </div>
              <div className="">
                <h3>PRICE RANGE</h3>
                <p>1.04 / 1.66 CR +</p>
              </div>
              <div className="">ROI - 6.42%</div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="contact-info">
            <p>Praveen Thatipamula</p>
            <p className="content-flex">
              <span className="icon-center">
                <FaWhatsapp />
              </span>
              <span>+91 12345 87921</span>
            </p>
            <p className="email content-flex">
              <span className="icon-center">
                <IoIosMail />
              </span>
              <span>commercial@rdbrothers.com</span>
            </p>
          </div>
          <div className="contact-info">
            <div className="contact-info">
              <p>Sunny Thakkar</p>
              <p className="content-flex">
                <span className="icon-center">
                  <FaWhatsapp />
                </span>
                <span>+91 12345 87921</span>
              </p>
              <p className="email content-flex">
                <span className="icon-center">
                  <IoIosMail />
                </span>
                <span>commercial@rdbrothers.com</span>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-description pagebreak">
          <span>Built on Experience</span>
          <span>www.rdbrothers.com</span>
          <span>Maha RERA No. A51800025192</span>
        </div>
      </section>
      {/* Description section end  */}

      {/* Highlights section start  */}
      <section className="top-header-container bordered">
        <div className="top-img-logo top-header-logo rd-logo">
          <img
            src="https://i.ibb.co/rxwcxNR/rd-logo.png"
            alt="rdb logo"
            className="rdb-logo"
          />
        </div>
        <div className="top-header">
          <div className="header">
            <div className="header-text">
              <h3 className="property-heading">PROPERTY HIGHLIGHTS</h3>
              <div className="about-header-border" />
            </div>
          </div>
          <div className="top-highlight"></div>
        </div>

        <div className="highlight-table">
          <div>
            <table className="lease-table">
              <thead>
                <tr>
                  <th colSpan={6}>PRE-LEASED DETAILS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tenant Name</td>
                  <td colSpan={5}>MNS Listed Co</td>
                </tr>
                <tr>
                  <td>Occupant Details</td>
                  <td colSpan={5}>Business</td>
                </tr>
                <tr>
                  <td>Lease Total Area (Sqft)</td>
                  <td colSpan={5}>4500</td>
                </tr>
                <tr>
                  <td>Leave & License Start Date</td>
                  <td colSpan={5}>01-09-2022</td>
                </tr>
                <tr>
                  <td>Leave & License End Date</td>
                  <td colSpan={5}>31-08-2027</td>
                </tr>
                <tr>
                  <td>Rent Start Date</td>
                  <td colSpan={5}>01-09-2022</td>
                </tr>
                <tr>
                  <td>Lock-in Period</td>
                  <td colSpan={5}>5 Years</td>
                </tr>
                <tr>
                  <td>Gross Monthly (INR Per Month)</td>
                  <td colSpan={5}>593133</td>
                </tr>
                <tr>
                  <td>Car Park</td>
                  <td colSpan={5}>3</td>
                </tr>
                <tr>
                  <td>Rent Escalation Every Year</td>
                  <td colSpan={5}>5%</td>
                </tr>
                <tr>
                  <td>Interest-Free Security Deposit (INR)</td>
                  <td colSpan={5}>2500000</td>
                </tr>
                <tr>
                  <td>CAM Charges</td>
                  <td colSpan={5}>25000</td>
                </tr>
                <tr>
                  <td
                    style={{
                      width: '20%',
                    }}
                  >
                    Terms Sep 2022
                  </td>
                  <td className="term-td-size">YEAR 1</td>
                  <td className="term-td-size">YEAR 2</td>
                  <td className="term-td-size">YEAR 3</td>
                  <td className="term-td-size">YEAR 4</td>
                  <td className="term-td-size">YEAR 5</td>
                </tr>
                <tr>
                  <td>Carpet Area (sq.ft)</td>
                  <td>4500</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Tenure (Months)</td>
                  <td>60</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Notice Period</td>
                  <td>24</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Per Month Rent</td>
                  <td>559133</td>
                  <td>587090</td>
                  <td>616444</td>
                  <td>647266</td>
                  <td>679630</td>
                </tr>
                <tr className="pagebreak">
                  <td>Security Deposit</td>
                  <td>2500000</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan={6}>INFLOW</td>
                </tr>
                <tr>
                  <td>Rent: Per Annum(Rs.)</td>
                  <td>6709596</td>
                  <td>7045076</td>
                  <td>7397330</td>
                  <td>7767196</td>
                  <td>8155556</td>
                </tr>
                <tr>
                  <td>Rent: Per Annum CAM</td>
                  <td>300000</td>
                  <td>300000</td>
                  <td>300000</td>
                  <td>300000</td>
                  <td>300000</td>
                </tr>
                <tr>
                  <td>Less: Per Annum Property Tax</td>
                  <td>300000</td>
                  <td>300000</td>
                  <td>300000</td>
                  <td>300000</td>
                  <td>300000</td>
                </tr>
                <tr>
                  <td>Total Inflow Per Annum (Rental Income) Rs.</td>
                  <td>6109596</td>
                  <td>6445076</td>
                  <td>6797330</td>
                  <td>7167196</td>
                  <td>75555556</td>
                </tr>
              </tbody>
            </table>
            <table className="lease-table acquisition-table">
              <thead>
                <tr>
                  <th colSpan={6}>ACQUISITION COST</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tdw-20">Total Accquisition Cost</td>
                  <td className="tdw-16">102500000</td>
                  <td className="tdw-16">102500000</td>
                  <td className="tdw-16">102500000</td>
                  <td className="tdw-16">102500000</td>
                  <td className="tdw-16">102500000</td>
                </tr>
                <tr>
                  <td>Add: Stamp Duty & Registration</td>
                  <td>6180000</td>
                  <td>6180000</td>
                  <td>6180000</td>
                  <td>6180000</td>
                  <td>6180000</td>
                </tr>
                <tr>
                  <td>Less: Security Deposit</td>
                  <td>6180000</td>
                  <td>6180000</td>
                  <td>6180000</td>
                  <td>6180000</td>
                  <td>6180000</td>
                </tr>
                <tr>
                  <td>Total OutFlow (Rs.)</td>
                  <td>6180000</td>
                  <td>6180000</td>
                  <td>6180000</td>
                  <td>6180000</td>
                  <td>6180000</td>
                </tr>
                <tr>
                  <td>ROI (%)</td>
                  <td>5.75</td>
                  <td>6.0</td>
                  <td>6.4</td>
                  <td>6.75</td>
                  <td>7.12</td>
                </tr>
                <tr>
                  <td></td>
                  <td>5.75</td>
                  <td>6.0</td>
                  <td>6.4</td>
                  <td>6.75</td>
                  <td>7.12</td>
                </tr>
                <tr className="pagebreak">
                  <td>Weighted Average Yield Over Tenure</td>
                  <td>6.42</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="footer">
          <div className="contact-info">
            <p>Praveen Thatipamula</p>
            <p className="content-flex">
              <span className="icon-center">
                <FaWhatsapp />
              </span>
              <span>+91 12345 87921</span>
            </p>
            <p className="email content-flex">
              <span className="icon-center">
                <IoIosMail />
              </span>
              <span>commercial@rdbrothers.com</span>
            </p>
          </div>
          <div className="contact-info">
            <div className="contact-info">
              <p>Sunny Thakkar</p>
              <p className="content-flex">
                <span className="icon-center">
                  <FaWhatsapp />
                </span>
                <span>+91 12345 87921</span>
              </p>
              <p className="email content-flex">
                <span className="icon-center">
                  <IoIosMail />
                </span>
                <span>commercial@rdbrothers.com</span>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-description pagebreak">
          <span>Built on Experience</span>
          <span>www.rdbrothers.com</span>
          <span>Maha RERA No. A51800025192</span>
        </div>
      </section>
      {/* Highlights section end  */}

      {/* Images section start  */}
      <section className="top-header-container bordered pagebreak">
        <div className="top-img-logo top-header-logo rd-logo">
          <img
            src="https://i.ibb.co/rxwcxNR/rd-logo.png"
            alt="rdb logo"
            className="rdb-logo"
          />
        </div>
        <div className="top-header">
          <div className="header">
            <div className="header-text">
              <h3 className="property-heading">EXTERNAL IMAGES</h3>
              <div className="about-header-border" />
            </div>
          </div>
          <div className="top-highlight"></div>
        </div>

        {/* content */}
        <div className="external-container">
          <div className="external-img">
            <img src="https://i.ibb.co/z2qxHgn/external.png" alt="" />
            <p>Elevation</p>
          </div>
          <div className="external-img">
            <img src="https://i.ibb.co/z2qxHgn/external.png" alt="" />
            <p>Outside Images</p>
          </div>
          <div className="external-img">
            <img src="https://i.ibb.co/z2qxHgn/external.png" alt="" />
            <p>Outside Images</p>
          </div>
        </div>

        <div className="internal-header-container">
          <div className="internal-header-content">
            <div className="header">
              <div className="header-text">
                <h3 className="property-heading">INTERNAL IMAGES</h3>
                <div className="about-header-border" />
              </div>
            </div>
            <div className="top-highlight"></div>
          </div>
        </div>

        <div className="internal-container">
          <div className="external-img">
            <img src="https://i.ibb.co/z2qxHgn/external.png" alt="" />
            <p>Elevation</p>
          </div>
          <div className="external-img">
            <img src="https://i.ibb.co/z2qxHgn/external.png" alt="" />
            <p>Outside Images</p>
          </div>
          <div className="external-img">
            <img src="https://i.ibb.co/z2qxHgn/external.png" alt="" />
            <p>Outside Images</p>
          </div>
          <div className="external-img">
            <img src="https://i.ibb.co/z2qxHgn/external.png" alt="" />
            <p>Outside Images</p>
          </div>
          <div className="external-img">
            <img src="https://i.ibb.co/z2qxHgn/external.png" alt="" />
            <p>Outside Images</p>
          </div>
          <div className="external-img">
            <img src="https://i.ibb.co/z2qxHgn/external.png" alt="" />
            <p>Outside Images</p>
          </div>
          <div className="external-img">
            <img src="https://i.ibb.co/z2qxHgn/external.png" alt="" />
            <p>Outside Images</p>
          </div>
        </div>

        <div className="footer">
          <div className="contact-info">
            <p>Praveen Thatipamula</p>
            <p className="content-flex">
              <span className="icon-center">
                <FaWhatsapp />
              </span>
              <span>+91 12345 87921</span>
            </p>
            <p className="email content-flex">
              <span className="icon-center">
                <IoIosMail />
              </span>
              <span>commercial@rdbrothers.com</span>
            </p>
          </div>
          <div className="contact-info">
            <div className="contact-info">
              <p>Sunny Thakkar</p>
              <p className="content-flex">
                <span className="icon-center">
                  <FaWhatsapp />
                </span>
                <span>+91 12345 87921</span>
              </p>
              <p className="email content-flex">
                <span className="icon-center">
                  <IoIosMail />
                </span>
                <span>commercial@rdbrothers.com</span>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-description">
          <span>Built on Experience</span>
          <span>www.rdbrothers.com</span>
          <span>Maha RERA No. A51800025192</span>
        </div>
      </section>
      {/* Images section end */}

      {/* Floorplan section start  */}
      <section className="top-header-container bordered">
        <div className="top-img-logo top-header-logo rd-logo">
          <img
            src="https://i.ibb.co/rxwcxNR/rd-logo.png"
            alt="rdb logo"
            className="rdb-logo"
          />
        </div>
        <div className="top-header">
          <div className="header">
            <div className="header-text">
              <h3 className="property-heading">FLOOR PLAN</h3>
              <div className="about-header-border" />
            </div>
          </div>
          <div className="top-highlight"></div>
        </div>
        <div className="floor-container">
          <div className="sub-heading-border ">OFFICE</div>
          <p className="floor-text">Typical Floor Plan - 675 Sqft & 934 Sqft</p>
          <div className="floor-img">
            <img src="https://i.ibb.co/9hJyyV2/floormap1.png" alt="" />
            <img src="https://i.ibb.co/9hJyyV2/floormap1.png" alt="" />
          </div>
        </div>
        <div className="footer">
          <div className="contact-info">
            <p>Praveen Thatipamula</p>
            <p className="content-flex">
              <span className="icon-center">
                <FaWhatsapp />
              </span>
              <span>+91 12345 87921</span>
            </p>
            <p className="email content-flex">
              <span className="icon-center">
                <IoIosMail />
              </span>
              <span>commercial@rdbrothers.com</span>
            </p>
          </div>
          <div className="contact-info">
            <div className="contact-info">
              <p>Sunny Thakkar</p>
              <p className="content-flex">
                <span className="icon-center">
                  <FaWhatsapp />
                </span>
                <span>+91 12345 87921</span>
              </p>
              <p className="email content-flex">
                <span className="icon-center">
                  <IoIosMail />
                </span>
                <span>commercial@rdbrothers.com</span>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-description pagebreak">
          <span>Built on Experience</span>
          <span>www.rdbrothers.com</span>
          <span>Maha RERA No. A51800025192</span>
        </div>
      </section>
      {/* Floorplan section end */}

      {/* BrandVicinity section start  */}
      <section className="top-header-container bordered">
        <div className="top-img-logo top-header-logo rd-logo">
          <img
            src="https://i.ibb.co/rxwcxNR/rd-logo.png"
            alt="rdb logo"
            className="rdb-logo"
          />
        </div>
        <div className="vicinity-header">
          <div className="header">
            <div className="header-text">
              <h3 className="property-heading">OTHER BRAND IN VICINITY</h3>
              <div className="about-header-border" />
            </div>
          </div>
          <div className="top-highlight"></div>
        </div>
        <div className="vicinity-container">
          <div className="vicinity-map">
            <img src="https://i.ibb.co/m6WpNMS/map.png" alt="" />
          </div>

          <div className="project-heading">
            <div className="heading-header">
              <div className="heading-text about-head-text">
                <h3 className="p-heading">CONNECTIVITY</h3>
                <div className="heading-header-border" />
              </div>
            </div>
          </div>

          <div className="connective-icon-container">
            <div className="connective-box">
              <div className="circle-icon">
                <GiRoad className="icon-size" />
              </div>
              <span>
                <li>Borivali - 2 Min</li>
                <li>Andheri East - 2 Min</li>
              </span>
            </div>
            <div className="connective-box">
              <div className="circle-icon">
                <IoMdTrain className="icon-size" />
              </div>
              <span>
                <li>Andheri - 0.5 Min</li>
                <li>Vile Parle - 1.5 Min</li>
              </span>
            </div>
            <div className="connective-box">
              <div className="circle-icon">
                <GiRoad className="icon-size" />
              </div>
              <span>
                <li>Borivali - 2 Min</li>
                <li>Andheri East - 2 Min</li>
              </span>
            </div>
            <div className="connective-box">
              <div className="circle-icon">
                <IoMdTrain className="icon-size" />
              </div>
              <span>
                <li>Andheri - 0.5 Min</li>
                <li>Vile Parle - 1.5 Min</li>
              </span>
            </div>
            <div className="connective-box">
              <div className="circle-icon">
                <GiRoad className="icon-size" />
              </div>
              <span>
                <li>Borivali - 2 Min</li>
                <li>Andheri East - 2 Min</li>
              </span>
            </div>
            <div className="connective-box">
              <div className="circle-icon">
                <IoMdTrain className="icon-size" />
              </div>
              <span>
                <li>Andheri - 0.5 Min</li>
                <li>Vile Parle - 1.5 Min</li>
              </span>
            </div>
          </div>

          <div className="video-link-heading">
            <div className="heading-header">
              <div className="heading-text about-head-text">
                <h3 className="p-heading">PROPERTY LINK</h3>
                <div className="heading-header-border" />
              </div>
            </div>
          </div>
          <p className="property-text">Link</p>
        </div>
        <div className="footer">
          <div className="contact-info">
            <p>Praveen Thatipamula</p>
            <p className="content-flex">
              <span className="icon-center">
                <FaWhatsapp />
              </span>
              <span>+91 12345 87921</span>
            </p>
            <p className="email content-flex">
              <span className="icon-center">
                <IoIosMail />
              </span>
              <span>commercial@rdbrothers.com</span>
            </p>
          </div>
          <div className="contact-info">
            <div className="contact-info">
              <p>Sunny Thakkar</p>
              <p className="content-flex">
                <span className="icon-center">
                  <FaWhatsapp />
                </span>
                <span>+91 12345 87921</span>
              </p>
              <p className="email content-flex">
                <span className="icon-center">
                  <IoIosMail />
                </span>
                <span>commercial@rdbrothers.com</span>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-description pagebreak">
          <span>Built on Experience</span>
          <span>www.rdbrothers.com</span>
          <span>Maha RERA No. A51800025192</span>
        </div>
      </section>
      {/* BrandVicinity section end */}

      {/* Location section start  */}
      <section className="top-header-container bordered">
        <div className="top-img-logo top-header-logo rd-logo">
          <img
            src="https://i.ibb.co/rxwcxNR/rd-logo.png"
            alt="rdb logo"
            className="rdb-logo"
          />
        </div>
        <div className="top-header">
          <div className="header">
            <div className="header-text">
              <h3 className="property-heading">FLOOR PLAN</h3>
              <div className="about-header-border" />
            </div>
          </div>
          <div className="top-highlight"></div>
        </div>
        <div className="map-container">
          <div className="map-img">
            <img src="https://i.ibb.co/ckFxZbW/location.png" alt="" />
          </div>
          <div className="thank">
            <h4>Thank you!!</h4>
            <p>visit us</p>
          </div>
        </div>
        <div className="footer">
          <div className="contact-info">
            <p>Praveen Thatipamula</p>
            <p className="content-flex">
              <span className="icon-center">
                <FaWhatsapp />
              </span>
              <span>+91 12345 87921</span>
            </p>
            <p className="email content-flex">
              <span className="icon-center">
                <IoIosMail />
              </span>
              <span>commercial@rdbrothers.com</span>
            </p>
          </div>
          <div className="contact-info">
            <div className="contact-info">
              <p>Sunny Thakkar</p>
              <p className="content-flex">
                <span className="icon-center">
                  <FaWhatsapp />
                </span>
                <span>+91 12345 87921</span>
              </p>
              <p className="email content-flex">
                <span className="icon-center">
                  <IoIosMail />
                </span>
                <span>commercial@rdbrothers.com</span>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-description pagebreak">
          <span>Built on Experience</span>
          <span>www.rdbrothers.com</span>
          <span>Maha RERA No. A51800025192</span>
        </div>
      </section>
      {/* Location section end */}
    </div>
  );
}

export default PreLeaseTemp;
