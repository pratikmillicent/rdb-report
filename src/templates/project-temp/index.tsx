import * as React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { IoIosMail, IoMdTrain } from 'react-icons/io';
import { HiShoppingBag } from 'react-icons/hi';
import { PiGraduationCapFill } from 'react-icons/pi';
import { MdFlight } from 'react-icons/md';
import { BsTrainFront } from 'react-icons/bs';
import { GiRoad } from 'react-icons/gi';

function ProjectTemp() {
  return (
    <div className="montserrat-400">
      {/* home section start  */}
      <section className="home-container bordered">
        <div className="home-content">
          <img
            src="https://i.ibb.co/rxwcxNR/rd-logo.png"
            className="home-logo"
          />
          <p className="home-title">BUILT ON EXPERIENCE</p>
        </div>
      </section>
      {/* home section end  */}

      {/* about section start  */}
      <section className="about-container bordered">
        <div className="img-logo about-logo">
          <img src="https://i.ibb.co/rxwcxNR/rd-logo.png" alt="rdb logo" />
        </div>
        <div className="about-img"></div>
        <div className="header-content">
          <div className="header">
            <div className="header-text about-head-text">
              <h3 className="about-heading">ABOUT US</h3>
              <div className="about-header-border" />
            </div>
          </div>
          <div className="header-highlight"></div>
        </div>
        <div className="about-content">
          <p>
            Welcome to RD Brothers, a global leader in real estate with 20 years
            of experience and a network spanning several countries. Our real
            estate arm offers exceptional solutions across residential,
            commercial, retail, educational, healthcare, banking, hospitality
            and warehousing sectors. Combining global reach with local insights,
            RD Brothers is committed to delivering customised solutions for
            buying, selling, leasing, and/or investing, with unmatched
            professionalism and excellence.
          </p>
          <p>
            Our expertise in real estate services, includes market entry
            strategies, location advisory, property sourcing, transaction
            management and investment sales. Beyond our comprehensive real
            estate offerings, we also own and develop luxury properties, acquire
            land, and provide feasibility studies to large developments
          </p>
        </div>
      </section>
      {/* about section end  */}

      {/* description section start  */}
      <section className="description-container bordered">
        <div className="img-logo description-logo">
          <img src="https://i.ibb.co/rxwcxNR/rd-logo.png" alt="rdb logo" />
        </div>
        <div className="desc-header">
          <div className="header">
            <div className="header-text about-head-text">
              <h3 className="about-heading">72 EMPIRE, ANDHERI EAST</h3>
              <div className="about-header-border" />
              <h3 className="desc-sub-heading">RESIDENTIAL PROJECT FOR SALE</h3>
            </div>
          </div>
          <div className="description-header-highlight"></div>
        </div>
        <div>
          <div className="sub-heading-border">PROJECT DESCRIPTION</div>

          <div className="project-desc">
            <div className="project-desc-left-content">
              <h4>AREA AVAILABLE</h4>
              <p>
                <li className="projct-desc-li">300 Sqft - 500 Sqft</li>
                <li className="projct-desc-li">1 & 2 BHK Apartment </li>
              </p>
            </div>
            <div className="project-desc-left-content">
              <h4>PROJECT STATUS</h4>
              <p>
                <li className="projct-desc-li">Under construction</li>
                <li className="projct-desc-li">Completion in Dec.2024</li>
              </p>
            </div>
          </div>
          {/* second  */}
          <div className="project-desc">
            <div className="project-desc-left">
              <h4>ABOUT DEVELOPER</h4>
              <p>
                This Developers is a leading real estate company and has
                developed several landmark projects over the years. This
                Builders is synonymous with high quality materials, pioneering
                designs and architectural grandeur. The company has contributed
                towards transforming the skyline of Mumbai and its suburbs with
                its projects.
              </p>
            </div>
            <div className="project-desc-right">
              <h4>
                PRICE RANGE <br /> 1.04/1.66 CR +
              </h4>
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
            <p className="email content-flex" style={{ fontSize: '12px' }}>
              <span className="icon-center" style={{ fontSize: '15px' }}>
                <IoIosMail />
              </span>
              <span>commercial@rdbrothers.com</span>
            </p>
          </div>
          <div className="contact-info" style={{ paddingRight: '25px' }}>
            <div className="contact-info" style={{ paddingLeft: '25px' }}>
              <p>Sunny Thakkar</p>
              <p className="content-flex">
                <span className="icon-center">
                  <FaWhatsapp />
                </span>
                <span>+91 12345 87921</span>
              </p>
              <p className="email content-flex" style={{ fontSize: '12px' }}>
                <span className="icon-center" style={{ fontSize: '15px' }}>
                  <IoIosMail />
                </span>
                <span>commercial@rdbrothers.com</span>
              </p>
            </div>
          </div>
        </div>
        <div className="about-footer-descr">
          <span>Built on Experience</span>
          <span>www.rdbrothers.com</span>
          <span>Maha RERA No. A51800025192</span>
        </div>
      </section>
      {/* description section end  */}

      {/* amenities section start */}
      <section className="amenities-container bordered">
        <div className="img-logo amenities-logo">
          <img src="https://i.ibb.co/rxwcxNR/rd-logo.png" alt="rdb logo" />
        </div>
        <div className="amenities-header">
          <div className="header">
            <div className="header-text">
              <h3 className="amenities-heading">TOP AMENITIES</h3>
              <div className="about-header-border" />
            </div>
          </div>
          <div className="header-highlight"></div>
        </div>
        {/* highlight */}
        <div className="ame-project-highlight">
          <div className="amenities-heading-border">PROJECT HIGHLIGHT</div>
          <div className="amenities-container-img">
            <div className="img-container">
              <img
                src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                className="amenities-img"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="img-container">
              <img
                src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                className="amenities-img"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="img-container">
              <img
                src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                className="amenities-img"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="img-container">
              <img
                src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                className="amenities-img"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="img-container">
              <img
                src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                className="amenities-img"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="img-container">
              <img
                src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                className="amenities-img"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="img-container">
              <img
                src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                className="amenities-img"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="img-container">
              <img
                src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                className="amenities-img"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
          </div>
        </div>
        {/* roof top amenities */}
        <div className="ame-proj-highlight">
          <div className="amenities-heading-border">ROOF TOP AMENITIES</div>
          <div className="amenities-container-img">
            <div className="img-container">
              <img
                src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                className="amenities-img"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="img-container">
              <img
                src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                className="amenities-img"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="img-container">
              <img
                src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                className="amenities-img"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="img-container">
              <img
                src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                className="amenities-img"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="img-container">
              <img
                src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                className="amenities-img"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="img-container">
              <img
                src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                className="amenities-img"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="img-container">
              <img
                src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                className="amenities-img"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="img-container">
              <img
                src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                className="amenities-img"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
          </div>
        </div>
        {/* indoor & podium level amenities */}
        <div className="ame-proj-highlight">
          <div className="amenities-heading-border">
            INDOOR & PODIUM LEVEL AMENTIES
          </div>
          <div className="amenities-container-img">
            <div className="img-container">
              <img
                src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                className="amenities-img"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="img-container">
              <img
                src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                className="amenities-img"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="img-container">
              <img
                src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                className="amenities-img"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="img-container">
              <img
                src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                className="amenities-img"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="img-container">
              <img
                src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                className="amenities-img"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="img-container">
              <img
                src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                className="amenities-img"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="img-container">
              <img
                src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                className="amenities-img"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="img-container">
              <img
                src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                className="amenities-img"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
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
            <p className="email content-flex" style={{ fontSize: '12px' }}>
              <span className="icon-center" style={{ fontSize: '15px' }}>
                <IoIosMail />
              </span>
              <span>commercial@rdbrothers.com</span>
            </p>
          </div>
          <div className="contact-info" style={{ paddingRight: '25px' }}>
            <div className="contact-info" style={{ paddingLeft: '25px' }}>
              <p>Sunny Thakkar</p>
              <p className="content-flex">
                <span className="icon-center">
                  <FaWhatsapp />
                </span>
                <span>+91 12345 87921</span>
              </p>
              <p className="email content-flex" style={{ fontSize: '12px' }}>
                <span className="icon-center" style={{ fontSize: '15px' }}>
                  <IoIosMail />
                </span>
                <span>commercial@rdbrothers.com</span>
              </p>
            </div>
          </div>
        </div>
        <div className="about-footer-descr">
          <span>Built on Experience</span>
          <span>www.rdbrothers.com</span>
          <span>Maha RERA No. A51800025192</span>
        </div>
      </section>
      {/* amenities section end */}

      {/* amenities external section start */}
      <section className="amenities-container bordered">
        <div className="img-logo amenities-logo">
          <img src="https://i.ibb.co/rxwcxNR/rd-logo.png" alt="rdb logo" />
        </div>
        <div className="amenities-header">
          <div className="header">
            <div className="header-text">
              <h3 className="amenities-heading">TOP AMENITIES</h3>
              <div className="about-header-border" />
            </div>
          </div>
          <div className="header-highlight"></div>
        </div>
        {/* highlight */}
        <div className="ame-project-highlight">
          <div className="amenities-heading-border">EXTERNAL AMENITIES</div>
          <div className="amenities-container-imges">
            <div className="imges-container">
              <img
                src="https://i.ibb.co/kQn2Drv/roof-img.png"
                className="amenities-imges"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="imges-container">
              <img
                src="https://i.ibb.co/kQn2Drv/roof-img.png"
                className="amenities-imges"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="imges-container">
              <img
                src="https://i.ibb.co/kQn2Drv/roof-img.png"
                className="amenities-imges"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="imges-container">
              <img
                src="https://i.ibb.co/kQn2Drv/roof-img.png"
                className="amenities-imges"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="imges-container">
              <img
                src="https://i.ibb.co/kQn2Drv/roof-img.png"
                className="amenities-imges"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="imges-container">
              <img
                src="https://i.ibb.co/kQn2Drv/roof-img.png"
                className="amenities-imges"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="imges-container">
              <img
                src="https://i.ibb.co/kQn2Drv/roof-img.png"
                className="amenities-imges"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="imges-container">
              <img
                src="https://i.ibb.co/kQn2Drv/roof-img.png"
                className="amenities-imges"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="imges-container">
              <img
                src="https://i.ibb.co/kQn2Drv/roof-img.png"
                className="amenities-imges"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="imges-container">
              <img
                src="https://i.ibb.co/kQn2Drv/roof-img.png"
                className="amenities-imges"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="imges-container">
              <img
                src="https://i.ibb.co/kQn2Drv/roof-img.png"
                className="amenities-imges"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
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
            <p className="email content-flex" style={{ fontSize: '12px' }}>
              <span className="icon-center" style={{ fontSize: '15px' }}>
                <IoIosMail />
              </span>
              <span>commercial@rdbrothers.com</span>
            </p>
          </div>
          <div className="contact-info" style={{ paddingRight: '25px' }}>
            <div className="contact-info" style={{ paddingLeft: '25px' }}>
              <p>Sunny Thakkar</p>
              <p className="content-flex">
                <span className="icon-center">
                  <FaWhatsapp />
                </span>
                <span>+91 12345 87921</span>
              </p>
              <p className="email content-flex" style={{ fontSize: '12px' }}>
                <span className="icon-center" style={{ fontSize: '15px' }}>
                  <IoIosMail />
                </span>
                <span>commercial@rdbrothers.com</span>
              </p>
            </div>
          </div>
        </div>
        <div className="about-footer-descr">
          <span>Built on Experience</span>
          <span>www.rdbrothers.com</span>
          <span>Maha RERA No. A51800025192</span>
        </div>
      </section>
      {/* amenities external section end */}

      {/* floor plan section start */}
      <section className="amenities-container bordered">
        <div className="img-logo amenities-logo">
          <img src="https://i.ibb.co/rxwcxNR/rd-logo.png" alt="rdb logo" />
        </div>
        <div className="amenities-header">
          <div className="header">
            <div className="header-text">
              <h3 className="amenities-heading">FLOOR PLAN</h3>
              <div className="about-header-border" />
            </div>
          </div>
          <div className="header-highlight"></div>
        </div>
        <div className="floor-container">
          <div className="floor-heading-border">EXTERNAL AMENITIES</div>
          <div className="floor-subhead">
            Typical Floor Plan - Wing A | 3 BHK | <br /> 675 Sqft & 934 Sqft
          </div>
          <div className="building-stracture">
            <img
              src="https://i.ibb.co/xJ4hQfL/bui-stc-1.png"
              className="buil-stracture"
              alt=""
            />
            <img
              src="https://i.ibb.co/xJ4hQfL/bui-stc-1.png"
              className="buil-stracture"
              alt=""
            />
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
            <p className="email content-flex" style={{ fontSize: '12px' }}>
              <span className="icon-center" style={{ fontSize: '15px' }}>
                <IoIosMail />
              </span>
              <span>commercial@rdbrothers.com</span>
            </p>
          </div>
          <div className="contact-info" style={{ paddingRight: '25px' }}>
            <div className="contact-info" style={{ paddingLeft: '25px' }}>
              <p>Sunny Thakkar</p>
              <p className="content-flex">
                <span className="icon-center">
                  <FaWhatsapp />
                </span>
                <span>+91 12345 87921</span>
              </p>
              <p className="email content-flex" style={{ fontSize: '12px' }}>
                <span className="icon-center" style={{ fontSize: '15px' }}>
                  <IoIosMail />
                </span>
                <span>commercial@rdbrothers.com</span>
              </p>
            </div>
          </div>
        </div>
        <div className="about-footer-descr">
          <span>Built on Experience</span>
          <span>www.rdbrothers.com</span>
          <span>Maha RERA No. A51800025192</span>
        </div>
      </section>
      {/* floor plan section end */}

      {/* project location section start */}
      <section className="amenities-container bordered">
        <div className="img-logo amenities-logo">
          <img src="https://i.ibb.co/rxwcxNR/rd-logo.png" alt="rdb logo" />
        </div>
        <div className="amenities-header">
          <div className="header">
            <div className="header-text">
              <h3 className="amenities-heading">PROJECT LOCATION</h3>
              <div className="about-header-border" />
            </div>
          </div>
          <div className="header-highlight"></div>
        </div>
        <div className="project-container">
          <img
            src="https://i.ibb.co/1Z62hcY/newmap.png"
            className="project-map"
            alt=""
          />
          <div className="project-heading">
            <div className="heading-header">
              <div className="heading-text about-head-text">
                <h3 className="about-heading">CONNECTIVITY</h3>
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
                <li>Eastern Express Highway - 2 Min</li>
                <li>Eastern Express Highway - 1 Min</li>
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
                <li>Eastern Express Highway - 2 Min</li>
                <li>Eastern Express Highway - 1 Min</li>
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
                <li>Eastern Express Highway - 2 Min</li>
                <li>Eastern Express Highway - 1 Min</li>
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
          <div className="project-heading">
            <div className="heading-header">
              <div className="heading-text about-head-text">
                <h3 className="about-heading">PROJECT VIDEO</h3>
                <div className="heading-header-border" />
              </div>
            </div>
          </div>
          <div className="video-link-container">
            <p>Link</p>
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
            <p className="email content-flex" style={{ fontSize: '12px' }}>
              <span className="icon-center" style={{ fontSize: '15px' }}>
                <IoIosMail />
              </span>
              <span>commercial@rdbrothers.com</span>
            </p>
          </div>
          <div className="contact-info" style={{ paddingRight: '25px' }}>
            <div className="contact-info" style={{ paddingLeft: '25px' }}>
              <p>Sunny Thakkar</p>
              <p className="content-flex">
                <span className="icon-center">
                  <FaWhatsapp />
                </span>
                <span>+91 12345 87921</span>
              </p>
              <p className="email content-flex" style={{ fontSize: '12px' }}>
                <span className="icon-center" style={{ fontSize: '15px' }}>
                  <IoIosMail />
                </span>
                <span>commercial@rdbrothers.com</span>
              </p>
            </div>
          </div>
        </div>
        <div className="about-footer-descr">
          <span>Built on Experience</span>
          <span>www.rdbrothers.com</span>
          <span>Maha RERA No. A51800025192</span>
        </div>
      </section>
      {/* project location section end */}
    </div>
  );
}

export default ProjectTemp;
