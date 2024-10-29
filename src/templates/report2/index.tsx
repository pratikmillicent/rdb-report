import * as React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

function Temp2() {
  return (
    <section className="top-header-container bordered montserrat-400 lease-container">
      <div className="top-img-logo top-header-logo rd-logo">
        <img
          src="https://i.ibb.co/rxwcxNR/rd-logo.png"
          alt="rdb logo"
          className="rdb-logo"
        />
      </div>
      <div className="lease-header">
        <div className="header">
          <div className="header-text">
            <h3 className="lease-heading">MAHALAXMI APARTMENT, ANDHERI EAST</h3>
            <h3 className="desc-sub-heading">RESIDENTIAL PROPERTY FOR LEASE</h3>
            <div className="about-header-border" />
          </div>
        </div>
        <div className="description-header-highlight"></div>
      </div>

      <div className="lease-table-section">
        <div className="lease-table-center">
          <div className="buil-img"></div>

          <table className="lease-table">
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
            </tbody>
          </table>
        </div>
        <table className="lease-table table-space">
          <tbody>
            <tr>
              <td className="w-20">Terms Sep 2022</td>
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
            <tr>
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
              <td
                style={{
                  width: '20%',
                }}
              >
                Total Accquisition Cost
              </td>
              <td
                style={{
                  width: '16%',
                }}
              >
                102500000
              </td>
              <td
                style={{
                  width: '16%',
                }}
              >
                102500000
              </td>
              <td
                style={{
                  width: '16%',
                }}
              >
                102500000
              </td>
              <td
                style={{
                  width: '16%',
                }}
              >
                102500000
              </td>
              <td
                style={{
                  width: '16%',
                }}
              >
                102500000
              </td>
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
            <tr>
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
      <div className="footer footer-space">
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
  );
}

export default Temp2;