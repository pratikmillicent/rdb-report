import * as React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { IoIosMail, IoMdTrain } from 'react-icons/io';
import { HiShoppingBag } from 'react-icons/hi';
import { PiGraduationCapFill } from 'react-icons/pi';
import { MdFlight } from 'react-icons/md';
import { BsTrainFront } from 'react-icons/bs';
import { GiRoad } from 'react-icons/gi';

function ProjectSingleTemp() {
  return (
    <div className="montserrat-400">
      {/* description section start  */}
      <section className="singlePage-description-container bordered">
        <div className="img-logo description-logo">
          <img src="https://i.ibb.co/rxwcxNR/rd-logo.png" alt="rdb logo" />
        </div>
        <div className="single-desc-header">
          <div className="header">
            <div className="desc-head-text">
              <h3 className="about-heading">
                MAHALAXMI APARTMENT, ANDHERI EAST
              </h3>
              <h3 className="description-sub-heading">
                RESIDENTIAL PROJECT FOR SALE
              </h3>
              <div className="about-header-border" />
            </div>
          </div>
          <div className="description-header-highlight"></div>
        </div>
        <div className="description-container-singlePage">
          <div className="sub-heading-border">PROJECT DESCRIPTION</div>
          <h3 className="resident-text">RESIDENTIAL TERMS</h3>
          <div className="desc-content">
            <table className="lease-table desc-content-left">
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
                  <td colSpan={5}>20</td>
                </tr>
                <tr>
                  <td>Configuration</td>
                  <td colSpan={5}>1 & 2 BHK</td>
                </tr>
                <tr>
                  <td>Car Park</td>
                  <td colSpan={5}>1</td>
                </tr>
                <tr>
                  <td>Quoted Rate - </td>
                  <td colSpan={5}>2.70 Cr to 3 Cr</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td colSpan={5}>
                    3rd, Center Point, J.B Nagar, Andheri East, Mumbai,
                  </td>
                </tr>
                <tr>
                  <td>Furnishing Details</td>
                  <td colSpan={5}>Furnished</td>
                </tr>
              </tbody>
            </table>
            <div className="desc-content-right descPage-img">
              <img src="https://i.ibb.co/cF9YfK3/d2.png" alt="" />
              <img src="https://i.ibb.co/cF9YfK3/d2.png" alt="" />
            </div>
          </div>
          <h3 className="amenities-text">AMENITIES</h3>
          <div className="singleAmenities-container-imges">
            <div className="img-container">
              <img
                src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                className="single-amenities-img"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="img-container">
              <img
                src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                className="single-amenities-img"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="img-container">
              <img
                src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                className="single-amenities-img"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="img-container">
              <img
                src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                className="single-amenities-img"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="img-container">
              <img
                src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                className="single-amenities-img"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="img-container">
              <img
                src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                className="single-amenities-img"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="img-container">
              <img
                src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                className="single-amenities-img"
                alt="Commercial floor "
              />
              <p>Commercial Floor</p>
            </div>
            <div className="img-container">
              <img
                src="https://i.ibb.co/3Y1gB4T/commericial-floor.png"
                className="single-amenities-img"
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
      {/* description section end  */}
    </div>
  );
}

export default ProjectSingleTemp;
