import * as React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { IoIosMail, IoMdTrain } from 'react-icons/io';
import { HiShoppingBag } from 'react-icons/hi';
import { PiGraduationCapFill } from 'react-icons/pi';
import { MdFlight } from 'react-icons/md';
import { BsTrainFront } from 'react-icons/bs';
import { GiRoad } from 'react-icons/gi';

function ProjectTempA4() {
  return (
    <div style={{ width: '100dvw', overflow: 'hidden' }}>
      {/* home section start  */}
      <div>
        <div className="home-img">
          <div className="grey" style={{ padding: '20px' }}>
            <div className="container">
              <div className="body-container">
                <div>
                  <img
                    src="https://i.ibb.co/rxwcxNR/rd-logo.png"
                    className="home-logo"
                  />
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: '22px',
                    }}
                  >
                    BUILT ON EXPERIENCE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* home section end  */}

      {/* about section start  */}
      <div
        style={{
          width: 'calc(100%-20px)',
          padding: '20px',
        }}
      >
        <div>
          <div>
            <div className="about-container">
              <div className="body-container">
                <div style={{ width: '100%' }}>
                  <div className="about-banner">
                    <div className="rd-logo about-logo">
                      <img src="https://i.ibb.co/rxwcxNR/rd-logo.png" />
                    </div>
                  </div>
                </div>
                <div className="header-container">
                  <div className="header-content">
                    <div className="header">
                      <div className="header-text about-head-text">
                        <h3 className="about-heading">ABOUT US</h3>
                        <div className="about-header-border" />
                      </div>
                    </div>
                    <div className="header-highlight"></div>
                  </div>
                </div>
                <div className="about-content">
                  <div className="about-text">
                    <span className="inner-border"></span>
                    <p>
                      Welcome to RD Brothers, a global leader in real estate
                      with 20 years of experience and a network spanning several
                      countries. Our real estate arm offers exceptional
                      solutions across residential, commercial, retail,
                      educational, healthcare, banking, hospitality and
                      warehousing sectors. Combining global reach with local
                      insights, RD Brothers is committed to delivering
                      customised solutions for buying, selling, leasing, and/or
                      investing, with unmatched professionalism and excellence.
                    </p>
                    <p style={{ paddingTop: '20px' }}>
                      Our expertise in real estate services, includes market
                      entry strategies, location advisory, property sourcing,
                      transaction management and investment sales. Beyond our
                      comprehensive real estate offerings, we also own and
                      develop luxury properties, acquire land, and provide
                      feasibility studies to large developments
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-footer-descr pagebreak">
              <span>Built on Experience</span>
              <span>www.rdbrothers.com</span>
              <span>Maha RERA No. A51800025192</span>
            </div>
          </div>
        </div>
      </div>
      {/* about section end  */}
      {/* Description section start  */}
      <div style={{ width: '100%' }}>
        <div
          className="description-banner"
          style={{ padding: '20px 20px 0px 20px' }}
        >
          <div
            style={{
              border: '3px solid #eaa636',
              borderBottom: '0',
              height: '100%',
              position: 'relative',
            }}
          >
            <div className="rd-logo desc-logo" style={{ width: 'auto' }}>
              <img src="https://i.ibb.co/rxwcxNR/rd-logo.png" />
            </div>
          </div>
          <div
            className="header-container"
            style={{
              transform: 'translate(-25px, -90px)',
            }}
          >
            <div className="header-content">
              <div className="header">
                <div className="header-text" style={{ paddingLeft: '60px' }}>
                  <h3
                    style={{
                      fontSize: '40px',
                      paddingTop: '10px',
                      fontWeight: 600,
                    }}
                  >
                    72 EMPIRE, ANDHERI EAST
                  </h3>
                  <div
                    className="header-border"
                    style={{
                      width: '50%',
                      marginTop: '6px',
                      marginLeft: '120px',
                    }}
                  />
                  <h3 style={{ fontSize: '30px' }}>
                    RESIDENTIAL PROJECT FOR SALE
                  </h3>
                </div>
              </div>
              <div className="header-highlight"></div>
            </div>
          </div>
        </div>
        <div
          style={{
            border: '3px solid #eaa636',
            borderTop: '0',
            maxWidth: '100%',
            height: '60vh',
            margin: ' 0 20px 0px',
            overflow: 'hidden',
          }}
        >
          {/* first  */}
          <div style={{ marginTop: '90px' }}>
            <div
              className="header-text"
              style={{ margin: '0 auto', marginBottom: '20px' }}
            >
              <h2 style={{ fontSize: '30px', color: 'var(--navy)' }}>
                PROJECT DESCRIPTION
              </h2>
              <div
                className="header-border"
                style={{
                  width: '65%',
                  marginTop: '6px',
                  marginLeft: '35px',
                }}
              />
            </div>
            <div
              className="flex"
              style={{ padding: '0 40px', color: 'var(--navy)' }}
            >
              <div>
                <h4 style={{ fontSize: '30px' }}>AVAILABLE AREA</h4>
                <p className="desc-text">
                  <li>300 Sqft - 500 Sqft</li>
                  <li>1 & 2 BHK Apartment </li>
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: '30px' }}>PROJECT STATUS</h4>
                <p className="desc-text">
                  <li>Under construction</li>
                  <li>Completion in Dec.2024</li>
                </p>
              </div>
            </div>
          </div>
          {/* second  */}
          <div
            className="flex"
            style={{
              margin: '30px 0px 100px',
              color: 'var(--navy)',
            }}
          >
            <div style={{ width: '50%', paddingLeft: '20px' }}>
              <h4 style={{ fontSize: '30px', paddingBottom: '10px' }}>
                ABOUT DEVELOPER
              </h4>
              <p
                style={{
                  textAlign: 'justify',
                  fontSize: '18px',
                  fontWeight: 600,
                }}
              >
                This Developers is a leading real estate company and has
                developed several landmark projects over the years. This
                Builders is synonymous with high quality materials, pioneering
                designs and architectural grandeur. The company has contributed
                towards transforming the skyline of Mumbai and its suburbs with
                its projects.
              </p>
            </div>
            <div style={{ marginRight: '10px', width: '35%' }}>
              <h4
                className="price-range"
                style={{ fontSize: '20px', width: 'fit-content' }}
              >
                PRICE RANGE <br /> 1.04/1.66 CR +
              </h4>
            </div>
          </div>

          <div className="footer" style={{ width: '100%' }}>
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
        </div>
        <div className="about-footer-descr" style={{ padding: '0 20px' }}>
          <span>Built on Experience</span>
          <span>www.rdbrothers.com</span>
          <span>Maha RERA No. A51800025192</span>
        </div>
      </div>
      {/* Description section end  */}
      {/* Highlights section start  */}
      <div style={{ width: '100%' }}>
        <div>
          <div
            className="head-cont"
            style={{
              padding: '20px 20px 0',
              overflow: 'hidden',
            }}
          >
            <div
              className="body-container container"
              style={{ borderTop: '0' }}
            >
              <div className="header-container head-container">
                <div className="header-content head-content">
                  <div className="header" style={{ paddingTop: '29px' }}>
                    <div
                      className="header-text"
                      style={{
                        borderTop: 'solid var(--golden)',
                        borderLeft: 'solid var(--golden)',
                        width: '100%',
                        marginLeft: '20px',
                      }}
                    >
                      <h2
                        style={{
                          margin: '2px',
                          fontSize: '40px',
                          padding: '30px 0px 0px 28px',
                        }}
                      >
                        TOP AMENITIES
                      </h2>

                      <div
                        className="header-border"
                        style={{
                          width: '30%',
                          marginLeft: '25px',
                          marginBottom: '15px',
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="header-highlight"
                    style={{
                      bottom: '-13px',
                      right: '-13px',
                      height: '142px',
                    }}
                  ></div>
                </div>
                <div className="rd-logo">
                  <img
                    src="https://i.ibb.co/rxwcxNR/rd-logo.png"
                    className="logo-image"
                    style={{
                      position: 'absolute',
                      top: ' 5px',
                      right: ' -10px',
                      background: 'white',
                    }}
                  />
                </div>
              </div>
              {/* content  */}
              <div
                style={{
                  marginTop: '100px',
                  width: '100%',
                }}
              >
                <div style={{ width: '100%', marginTop: '100px' }}>
                  <div className="header-text" style={{ margin: '0 auto' }}>
                    <h2 style={{ fontSize: '30px', color: 'var(--navy)' }}>
                      PROJECT HIGHLIGHTS
                    </h2>
                    <div
                      className="header-border"
                      style={{
                        width: '65%',
                        marginTop: '6px',
                        marginLeft: '60px',
                      }}
                    />
                  </div>
                  <div
                    className="flex"
                    style={{
                      width: '95%',
                      padding: '20px',
                      color: '#2d435b',
                    }}
                  >
                    <div style={{ width: '22%' }}>
                      {' '}
                      <img
                        src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                        alt=""
                        className="highlight-icon"
                      />{' '}
                      <p>G + 2 Commerical Floors</p>{' '}
                    </div>
                    <div style={{ width: '22%' }}>
                      {' '}
                      <img
                        src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                        alt=""
                        className="highlight-icon"
                      />{' '}
                      <p>19 Habitable Floors</p>{' '}
                    </div>
                    <div style={{ width: '22%' }}>
                      {' '}
                      <img
                        src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                        alt=""
                        className="highlight-icon"
                      />{' '}
                      <p>16 + Usable Amenities</p>{' '}
                    </div>
                    <div style={{ width: '22%' }}>
                      {' '}
                      <img
                        src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                        alt=""
                        className="highlight-icon"
                      />{' '}
                      <p>Centrally Located</p>{' '}
                    </div>
                  </div>
                  <div
                    className="flex"
                    style={{
                      width: '95%',
                      padding: '20px',
                      color: '#2d435b',
                      marginTop: '30px',
                    }}
                  >
                    <div style={{ width: '22%' }}>
                      {' '}
                      <img
                        src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                        alt=""
                        className="highlight-icon"
                      />{' '}
                      <p>Grand Entrance Lobby</p>{' '}
                    </div>
                    <div style={{ width: '22%' }}>
                      {' '}
                      <img
                        src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                        alt=""
                        className="highlight-icon"
                      />{' '}
                      <p>Ample Car Parking</p>{' '}
                    </div>
                    <div style={{ width: '22%' }}>
                      {' '}
                      <img
                        src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                        alt=""
                        className="highlight-icon"
                      />{' '}
                      <p>High Speed Elevators</p>{' '}
                    </div>
                    <div style={{ width: '22%' }}>
                      {' '}
                      <img
                        src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                        alt=""
                        className="highlight-icon"
                      />{' '}
                      <p>24X7 Security Surveillance</p>{' '}
                    </div>
                  </div>
                </div>
                <div style={{ width: '100%', marginTop: '100px' }}>
                  <div className="header-text" style={{ margin: '0 auto' }}>
                    <h2 style={{ fontSize: '30px', color: 'var(--navy)' }}>
                      ROOF TOP AMENITIES
                    </h2>
                    <div
                      className="header-border"
                      style={{
                        width: '65%',
                        marginTop: '6px',
                        marginLeft: '60px',
                      }}
                    />
                  </div>
                  <div
                    className="flex"
                    style={{
                      width: '95%',
                      padding: '20px',
                      color: '#2d435b',
                    }}
                  >
                    <div style={{ width: '22%' }}>
                      {' '}
                      <img
                        src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                        alt=""
                        className="highlight-icon"
                      />{' '}
                      <p>ROOFTOP LAWN</p>{' '}
                    </div>
                    <div style={{ width: '22%' }}>
                      {' '}
                      <img
                        src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                        alt=""
                        className="highlight-icon"
                      />{' '}
                      <p>PARTY DECK</p>{' '}
                    </div>
                    <div style={{ width: '22%' }}>
                      {' '}
                      <img
                        src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                        alt=""
                        className="highlight-icon"
                      />{' '}
                      <p>SKY LOUNGE</p>{' '}
                    </div>
                    <div style={{ width: '22%' }}>
                      {' '}
                      <img
                        src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                        alt=""
                        className="highlight-icon"
                      />{' '}
                      <p>SKY YOGA</p>{' '}
                    </div>
                  </div>
                  <div
                    className="flex"
                    style={{
                      width: '95%',
                      padding: '20px',
                      color: '#2d435b',
                      marginTop: '30px',
                    }}
                  >
                    <div style={{ width: '22%' }}>
                      {' '}
                      <img
                        src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                        alt=""
                        className="highlight-icon"
                      />{' '}
                      <p>OPEN TO SKY MOVIE PLAZA</p>{' '}
                    </div>
                    <div style={{ width: '22%' }}>
                      {' '}
                      <img
                        src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                        alt=""
                        className="highlight-icon"
                      />{' '}
                      <p>PAVED WALKWAY</p>{' '}
                    </div>
                    <div style={{ width: '22%' }}>
                      {' '}
                      <img
                        src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                        alt=""
                        className="highlight-icon"
                      />{' '}
                      <p>STAR GAZING PLAZA</p>{' '}
                    </div>
                    <div style={{ width: '22%' }}>
                      {' '}
                      {/* <img
                      src=""
                      alt=""
                      className="highlight-icon"
                    />  */}
                      <p></p>{' '}
                    </div>
                  </div>
                </div>
                <div className="" style={{ width: '100%', marginTop: '30px' }}>
                  <div className="header-text" style={{ margin: '20px auto' }}>
                    <h2 style={{ fontSize: '30px', color: 'var(--navy)' }}>
                      INDOOR & PODIUM LEVEL AMENITIES
                    </h2>
                    <div
                      className="header-border"
                      style={{
                        width: '50%',
                        marginTop: '6px',
                        marginLeft: '120px',
                      }}
                    />
                  </div>
                  <div
                    className="flex"
                    style={{
                      width: '95%',
                      padding: '20px',
                      color: '#2d435b',
                    }}
                  >
                    <div style={{ width: '22%' }}>
                      {' '}
                      <img
                        src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                        alt=""
                        className="highlight-icon"
                      />{' '}
                      <p>KIDS PLAY AREA</p>{' '}
                    </div>
                    <div style={{ width: '22%' }}>
                      {' '}
                      <img
                        src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                        alt=""
                        className="highlight-icon"
                      />{' '}
                      <p>POOL DECK</p>{' '}
                    </div>
                    <div style={{ width: '22%' }}>
                      {' '}
                      <img
                        src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                        alt=""
                        className="highlight-icon"
                      />{' '}
                      <p>PARTY PLAZA</p>{' '}
                    </div>
                    <div style={{ width: '22%' }}>
                      {' '}
                      <img
                        src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                        alt=""
                        className="highlight-icon"
                      />{' '}
                      <p>BBQ AREA</p>{' '}
                    </div>
                  </div>
                  <div
                    className="flex"
                    style={{
                      width: '98%',
                      padding: '20px',
                      color: '#2d435b',
                      marginTop: '30px',
                    }}
                  >
                    <div style={{ width: '22%' }}>
                      {' '}
                      <img
                        src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                        alt=""
                        className="highlight-icon"
                      />{' '}
                      <p>SENIOR CITIZEN</p>{' '}
                    </div>
                    <div style={{ width: '22%' }}>
                      {' '}
                      <img
                        src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                        alt=""
                        className="highlight-icon"
                      />{' '}
                      <p>GYM</p>{' '}
                    </div>
                    <div style={{ width: '22%' }}>
                      {' '}
                      <img
                        src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                        alt=""
                        className="highlight-icon"
                      />{' '}
                      <p>GAME ZONE</p>{' '}
                    </div>
                    <div style={{ width: '22%' }}> </div>
                  </div>
                </div>
              </div>
              <div
                className="footer"
                style={{ width: '100%', border: 'solid' }}
              >
                <div className="contact-info" style={{ paddingLeft: '25px' }}>
                  <p>Praveen Thatipamula</p>

                  <p className="content-flex">
                    <span className="icon-center">
                      <FaWhatsapp />
                    </span>
                    <span>+91 12345 87921</span>
                  </p>
                  <p
                    className="email content-flex"
                    style={{ fontSize: '12px' }}
                  >
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
                    <p
                      className="email content-flex"
                      style={{ fontSize: '12px' }}
                    >
                      <span
                        className="icon-center"
                        style={{ fontSize: '15px' }}
                      >
                        <IoIosMail />
                      </span>
                      <span>commercial@rdbrothers.com</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-footer-descr pagebreak">
            <span>Built on Experience</span>
            <span>www.rdbrothers.com</span>
            <span>Maha RERA No. A51800025192</span>
          </div>
        </div>
      </div>
      {/* Highlights section end  */}
      {/* Images section start  */}
      <div style={{ width: '100%' }}>
        <div style={{ width: '', margin: '0 auto' }}>
          <div
            className="head-cont"
            style={{ padding: '20px 20px 0', overflow: 'hidden' }}
          >
            <div className="body-container container">
              <div className="header-container head-container">
                <div className="header-content head-content">
                  <div className="header" style={{ paddingTop: '29px' }}>
                    <div
                      className="header-text"
                      style={{
                        borderTop: 'solid var(--golden)',
                        borderLeft: 'solid var(--golden)',
                        width: '100%',
                        marginLeft: '20px',
                      }}
                    >
                      <h2
                        style={{
                          margin: '2px',
                          fontSize: '40px',
                          padding: '30px 0px 0px 28px',
                        }}
                      >
                        TOP AMENITIES
                      </h2>

                      <div
                        className="header-border"
                        style={{
                          width: '30%',
                          marginLeft: '25px',
                          marginBottom: '15px',
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="header-highlight"
                    style={{
                      bottom: '-13px',
                      right: '-13px',
                      height: '140px',
                    }}
                  ></div>
                </div>
                <div className="rd-logo">
                  <img
                    src="https://i.ibb.co/rxwcxNR/rd-logo.png"
                    className="logo-image"
                    style={{
                      position: 'absolute',
                      top: ' 15px',
                      right: ' -10px',
                      background: 'white',
                    }}
                  />
                </div>
              </div>
              {/* content  */}
              <div style={{ marginTop: '180px', width: '100%' }}>
                <div style={{ width: '100%' }}>
                  <div className="header-text" style={{ margin: '0 auto' }}>
                    <h2 style={{ fontSize: '30px', color: 'var(--navy)' }}>
                      EXTERNAL AMENITIES
                    </h2>
                    <div
                      className="header-border"
                      style={{
                        width: '65%',
                        marginTop: '6px',
                        marginLeft: '60px',
                      }}
                    />
                  </div>
                  <div
                    className="flex"
                    style={{
                      width: '95%',
                      padding: '20px',
                      color: '#2d435b',
                    }}
                  >
                    <div style={{ width: '29%' }}>
                      {' '}
                      <img
                        src="https://i.ibb.co/kQn2Drv/roof-img.png"
                        alt=""
                        className="highlight-img"
                      />{' '}
                      <p className="img-text">STAR GAZING PLAZA</p>{' '}
                    </div>
                    <div style={{ width: '29%' }}>
                      {' '}
                      <img
                        src="https://i.ibb.co/kQn2Drv/roof-img.png"
                        alt=""
                        className="highlight-img"
                      />{' '}
                      <p className="img-text">PAVED WALKWAY</p>{' '}
                    </div>
                    <div style={{ width: '29%' }}>
                      {' '}
                      <img
                        src="https://i.ibb.co/kQn2Drv/roof-img.png"
                        alt=""
                        className="highlight-img"
                      />{' '}
                      <p className="img-text">SKY YOGA</p>{' '}
                    </div>
                  </div>
                  <div
                    className="flex"
                    style={{
                      width: '95%',
                      padding: '20px',
                      color: '#2d435b',
                    }}
                  >
                    <div style={{ width: '29%' }}>
                      {' '}
                      <img
                        src="https://i.ibb.co/kQn2Drv/roof-img.png"
                        alt=""
                        className="highlight-img"
                      />{' '}
                      <p className="img-text">SKY LOUNGE</p>{' '}
                    </div>
                    <div style={{ width: '29%' }}>
                      {' '}
                      <img
                        src="https://i.ibb.co/kQn2Drv/roof-img.png"
                        alt=""
                        className="highlight-img"
                      />{' '}
                      <p className="img-text">PARTY DECK</p>{' '}
                    </div>
                    <div style={{ width: '29%' }}>
                      {' '}
                      <img
                        src="https://i.ibb.co/kQn2Drv/roof-img.png"
                        alt=""
                        className="highlight-img"
                      />{' '}
                      <p className="img-text">ROOF TOP GARDEN</p>{' '}
                    </div>
                  </div>
                  <div
                    className="flex"
                    style={{
                      width: '95%',
                      padding: '20px',
                      color: '#2d435b',
                    }}
                  >
                    <div style={{ width: '29%' }}>
                      {' '}
                      <img
                        src="https://i.ibb.co/kQn2Drv/roof-img.png"
                        alt=""
                        className="highlight-img"
                      />{' '}
                      <p className="img-text">KIDS PLAY AREA</p>{' '}
                    </div>
                    <div style={{ width: '29%' }}>
                      {' '}
                      <img
                        src="https://i.ibb.co/kQn2Drv/roof-img.png"
                        alt=""
                        className="highlight-img"
                      />{' '}
                      <p className="img-text">POOL DECK</p>{' '}
                    </div>
                    <div style={{ width: '29%' }}>
                      {' '}
                      <img
                        src="https://i.ibb.co/kQn2Drv/roof-img.png"
                        alt=""
                        className="highlight-img"
                      />{' '}
                      <p className="img-text">GYM</p>{' '}
                    </div>
                  </div>
                  <div
                    className="flex"
                    style={{
                      width: '95%',
                      padding: '20px',
                      color: '#2d435b',
                      justifyContent: 'space-evenly',
                    }}
                  >
                    <div>
                      {' '}
                      <img
                        src="https://i.ibb.co/kQn2Drv/roof-img.png"
                        alt=""
                        className="highlight-img"
                      />{' '}
                      <p className="img-text">BBQ AREA</p>{' '}
                    </div>
                    <div>
                      {' '}
                      <img
                        src="https://i.ibb.co/kQn2Drv/roof-img.png"
                        alt=""
                        className="highlight-img"
                      />{' '}
                      <p className="img-text">GAME ZONE</p>{' '}
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer" style={{ width: '100%' }}>
                <div className="contact-info" style={{ paddingLeft: '25px' }}>
                  <p>Praveen Thatipamula</p>

                  <p className="content-flex">
                    <span className="icon-center">
                      <FaWhatsapp />
                    </span>
                    <span>+91 12345 87921</span>
                  </p>
                  <p
                    className="email content-flex"
                    style={{ fontSize: '12px' }}
                  >
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
                    <p
                      className="email content-flex"
                      style={{ fontSize: '12px' }}
                    >
                      <span
                        className="icon-center"
                        style={{ fontSize: '15px' }}
                      >
                        <IoIosMail />
                      </span>
                      <span>commercial@rdbrothers.com</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-footer-descr pagebreak">
            <span>Built on Experience</span>
            <span>www.rdbrothers.com</span>
            <span>Maha RERA No. A51800025192</span>
          </div>
        </div>
      </div>
      {/* Images section end */}
      {/* Floorplan section start  */}
      <div style={{ width: '100%' }}>
        <div style={{ width: '', margin: '0 auto' }}>
          <div
            className="head-cont"
            style={{ padding: '20px 20px 0', overflow: 'hidden' }}
          >
            <div className="body-container container">
              <div className="header-container head-container">
                <div className="header-content head-content">
                  <div className="header" style={{ paddingTop: '29px' }}>
                    <div
                      className="header-text"
                      style={{
                        borderTop: 'solid var(--golden)',
                        borderLeft: 'solid var(--golden)',
                        width: '100%',
                        marginLeft: '20px',
                      }}
                    >
                      <h2
                        style={{
                          margin: '2px',
                          fontSize: '40px',
                          padding: '30px 0px 0px 28px',
                        }}
                      >
                        FLOOR PLAN
                      </h2>

                      <div
                        className="header-border"
                        style={{
                          width: '30%',
                          marginLeft: '25px',
                          marginBottom: '15px',
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="header-highlight"
                    style={{
                      bottom: '-13px',
                      right: '-13px',
                      height: '140px',
                    }}
                  ></div>
                </div>
                <div className="rd-logo">
                  <img
                    src="https://i.ibb.co/rxwcxNR/rd-logo.png"
                    className="logo-image"
                    style={{
                      position: 'absolute',
                      top: ' 15px',
                      right: ' -10px',
                      background: 'white',
                    }}
                  />
                </div>
              </div>
              {/* content  */}
              <div style={{ marginTop: '180px', width: '100%' }}>
                <div style={{ width: '100%' }}>
                  <div className="header-text" style={{ margin: '0 auto' }}>
                    <h2 style={{ fontSize: '30px', color: 'var(--navy)' }}>
                      3 BHK
                    </h2>
                    <div
                      className="header-border"
                      style={{
                        width: '150%',
                        marginTop: '6px',
                        marginLeft: '-19px',
                      }}
                    />
                  </div>
                  <div className="floor-ext">
                    Typical Floor Plan - Wing A | 3 BHK | <br /> 675 Sqft & 934
                    Sqft
                  </div>
                  <div style={{ width: '100%', marginTop: '50px' }}>
                    <div className="map-strc">
                      <img
                        src="https://i.ibb.co/xJ4hQfL/bui-stc-1.png"
                        alt=""
                      />
                    </div>
                    <div className="map-strc">
                      <img
                        src="https://i.ibb.co/xJ4hQfL/bui-stc-1.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer" style={{ width: '100%' }}>
                <div className="contact-info" style={{ paddingLeft: '25px' }}>
                  <p>Praveen Thatipamula</p>

                  <p className="content-flex">
                    <span className="icon-center">
                      <FaWhatsapp />
                    </span>
                    <span>+91 12345 87921</span>
                  </p>
                  <p
                    className="email content-flex"
                    style={{ fontSize: '12px' }}
                  >
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
                    <p
                      className="email content-flex"
                      style={{ fontSize: '12px' }}
                    >
                      <span
                        className="icon-center"
                        style={{ fontSize: '15px' }}
                      >
                        <IoIosMail />
                      </span>
                      <span>commercial@rdbrothers.com</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-footer-descr pagebreak">
            <span>Built on Experience</span>
            <span>www.rdbrothers.com</span>
            <span>Maha RERA No. A51800025192</span>
          </div>
        </div>
      </div>
      {/* Floorplan section end */}
      {/* BrandVicinity section start  */}
      <div style={{ width: '100%' }}>
        <div style={{ width: '', margin: '0 auto' }}>
          <div
            className="head-cont"
            style={{ padding: '20px 20px 0', overflow: 'hidden' }}
          >
            <div className="body-container container">
              <div className="header-container head-container">
                <div className="header-content head-content">
                  <div className="header" style={{ paddingTop: '29px' }}>
                    <div
                      className="header-text"
                      style={{
                        borderTop: 'solid var(--golden)',
                        borderLeft: 'solid var(--golden)',
                        width: '100%',
                        marginLeft: '20px',
                      }}
                    >
                      <h2
                        style={{
                          margin: '2px',
                          fontSize: '40px',
                          padding: '30px 0px 0px 28px',
                        }}
                      >
                        PROJECT LOCATION
                      </h2>

                      <div
                        className="header-border"
                        style={{
                          width: '30%',
                          marginLeft: '90px',
                          marginBottom: '15px',
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="header-highlight"
                    style={{
                      bottom: '-13px',
                      right: '-13px',
                      height: '140px',
                    }}
                  ></div>
                </div>
                <div className="rd-logo">
                  <img
                    // src={RdLogo}
                    className="logo-image"
                    style={{
                      position: 'absolute',
                      top: ' 15px',
                      right: ' -10px',
                      background: 'white',
                    }}
                  />
                </div>
              </div>
              {/* content  */}
              <div style={{ marginTop: '150px', width: '100%' }}>
                <div style={{ width: '100%' }}>
                  {/* start  */}
                  <div className="pro-location">
                    <img src="https://i.ibb.co/1Z62hcY/newmap.png" alt="" />
                  </div>
                  {/* connective  */}
                  <div>
                    <div
                      className="header-container"
                      style={{
                        marginLeft: '-5px',
                        width: '50%',
                        marginTop: '40px',
                      }}
                    >
                      <div className="header-content">
                        <div className="header" style={{ padding: '4px 0px' }}>
                          <div
                            className="header-text"
                            style={{ paddingBottom: '7px' }}
                          >
                            <h2
                              style={{
                                textTransform: 'uppercase',
                                fontSize: '20px',
                              }}
                            >
                              connectivity
                            </h2>

                            <div
                              className="header-border"
                              style={{ width: '90%', marginLeft: '15px' }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="connectivity"
                      style={{ margin: '0px 0px 0px 80px' }}
                    >
                      {/* first */}
                      <div style={{ marginTop: '20px' }}>
                        <div className="row">
                          <div>
                            <div
                              className="connective-circle"
                              style={{
                                textAlign: 'center',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                            >
                              <GiRoad style={{ fontSize: '20px' }} />
                            </div>
                            <div
                              className="connective-text"
                              style={{
                                display: 'block',
                                textAlign: 'start',
                              }}
                            >
                              <li>Eastern Express Highway - 2 Min</li>
                              <li>Eastern Express Highway - 1 Min</li>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div>
                            <div
                              className="connective-circle"
                              style={{
                                textAlign: 'center',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                            >
                              <IoMdTrain style={{ fontSize: '20px' }} />
                            </div>
                            <div
                              className="connective-text"
                              style={{
                                display: 'block',
                                textAlign: 'start',
                              }}
                            >
                              <li>Andheri - 0.5 Min</li>
                              <li>Vile Parle - 1.5 Min</li>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* second */}
                      <div style={{ marginTop: '40px' }}>
                        <div className="row">
                          <div>
                            <div
                              className="connective-circle"
                              style={{
                                textAlign: 'center',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                            >
                              <BsTrainFront style={{ fontSize: '20px' }} />
                            </div>
                            <div
                              className="connective-text"
                              style={{
                                display: 'block',
                                textAlign: 'start',
                              }}
                            >
                              <li>Metro Line 3 - 2 Min</li>
                              <li>Metro Ghatkopar - 5 Min</li>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div>
                            <div
                              className="connective-circle"
                              style={{
                                textAlign: 'center',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                            >
                              <MdFlight style={{ fontSize: '20px' }} />
                            </div>
                            <div
                              className="connective-text"
                              style={{
                                display: 'block',
                                textAlign: 'start',
                              }}
                            >
                              <li>
                                Chhatrapati Shivaji <br /> International - 20
                                Min
                              </li>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* third */}
                      <div style={{ margin: '40px 0px' }}>
                        <div className="row">
                          <div>
                            <div
                              className="connective-circle"
                              style={{
                                textAlign: 'center',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                            >
                              <PiGraduationCapFill
                                style={{ fontSize: '20px' }}
                              />
                            </div>
                            <div
                              className="connective-text"
                              style={{
                                display: 'block',
                                textAlign: 'start',
                              }}
                            >
                              <li>Gorodia International School - 1.5 Min</li>
                              <li>Gurunanak High School - 2.5 Min</li>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div>
                            <div
                              className="connective-circle"
                              style={{
                                textAlign: 'center',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                            >
                              <HiShoppingBag style={{ fontSize: '20px' }} />
                            </div>
                            <div
                              className="connective-text"
                              style={{
                                display: 'block',
                                textAlign: 'start',
                              }}
                            >
                              <li>Infinity Mall - 10 Min</li>
                              <li>Inorbit Mall - 5 Min</li>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* link  */}
                  <div>
                    <div
                      className="header-container"
                      style={{
                        marginLeft: '-5px',
                        width: '30%',
                        marginTop: '40px',
                      }}
                    >
                      <div className="header-content">
                        <div className="header" style={{ padding: '4px 0px' }}>
                          <div
                            className="header-text"
                            style={{ paddingBottom: '7px' }}
                          >
                            <h2
                              style={{
                                textTransform: 'uppercase',
                                fontSize: '20px',
                              }}
                            >
                              project video
                            </h2>

                            <div
                              className="header-border"
                              style={{ width: '90%', marginLeft: '15px' }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="link-text">
                      <p>Link</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer" style={{ width: '100%' }}>
                <div className="contact-info" style={{ paddingLeft: '25px' }}>
                  <p>Praveen Thatipamula</p>

                  <p className="content-flex">
                    <span className="icon-center">
                      <FaWhatsapp />
                    </span>
                    <span>+91 12345 87921</span>
                  </p>
                  <p
                    className="email content-flex"
                    style={{ fontSize: '12px' }}
                  >
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
                    <p
                      className="email content-flex"
                      style={{ fontSize: '12px' }}
                    >
                      <span
                        className="icon-center"
                        style={{ fontSize: '15px' }}
                      >
                        <IoIosMail />
                      </span>
                      <span>commercial@rdbrothers.com</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-footer-descr">
            <span>Built on Experience</span>
            <span>www.rdbrothers.com</span>
            <span>Maha RERA No. A51800025192</span>
          </div>
        </div>
      </div>
      {/* BrandVicinity section end */}
    </div>
  );
}

export default ProjectTempA4;
