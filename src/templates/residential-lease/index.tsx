import * as React from 'react';
import { GiRoad } from 'react-icons/gi';
import { IoMdTrain } from 'react-icons/io';

function ResidentialLease(brochureProp) {
  return (
    <main className="montserrat-400">
      <section className="description">
        <div className="rdb-logo">
          <img src="https://i.ibb.co/rxwcxNR/rd-logo.png" />
        </div>
        <div className="header">
          <div className="header-text">
            <h1>
              {brochureProp.project_name}, {brochureProp.locality}
              {brochureProp.area}
              {brochureProp.city}
              <span className="golden-line" />
            </h1>
            <p>{`${brochureProp.type} for ${brochureProp.for}`}</p>
          </div>
        </div>
        <div className="content">
          <h1 className="title">Project Description</h1>
          <div className="description-container">
            <div className="description-text">
              <h2>area available</h2>
              <ul>
                <li>
                  {`${brochureProp.min_carpet}
                  ${brochureProp.carpet_parameter} - 
                  ${brochureProp.max_carpet}
                  ${brochureProp.carpet_parameter}`}
                </li>
                <li>{brochureProp.sub_type}</li>
              </ul>
            </div>
            <div className="description-text">
              <h2>project status</h2>
              <ul>
                <li>{brochureProp.constuction_status}</li>
                <li>{brochureProp.construction_date.formattedDate}</li>
              </ul>
            </div>
            <div className="description-text">
              <h2>about developer</h2>
              <p>{brochureProp.about_developer}</p>
            </div>
            <div className="description-text">
              <div className="description-box">
                <h2>price range</h2>
                <p>{brochureProp.price_range}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="rdb-logo">
          <img src="https://i.ibb.co/rxwcxNR/rd-logo.png" alt="" />
        </div>
        <h1 className="header-text">
          TOP AMENITIES
          <span className="golden-line" />
        </h1>
        <div className="content">
          <h1 className="title">Project Highlights</h1>
          <div className="aminities">
            {brochureProp?.highlights_amenities.map((element, index) => {
              return (
                <div className="aminity" key={index}>
                  <img src={element.filepath} alt="" />
                  <p>{element.name}</p>
                </div>
              );
            })}
          </div>

          <h1 className="title">roof top amenities</h1>
          <div className="aminities">
            {brochureProp?.top_amenties.map((element, index) => {
              return (
                <div className="aminity" key={index}>
                  <img src={element.filepath} alt="" />
                  <p>{element.name}</p>
                </div>
              );
            })}
          </div>

          <h1 className="title">indoor & podium level amenties</h1>

          <div className="aminities">
            {brochureProp?.indoor_amenties.map((element) => {
              return (
                <div className="aminity">
                  <img src={element.filepath} alt="" />
                  <p>{element.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="rdb-logo">
          <img src="https://i.ibb.co/rxwcxNR/rd-logo.png" alt="" />
        </div>
        <h1 className="header-text">
          TOP AMENITIES <span className="golden-line" />
        </h1>

        <div className="content">
          <h1 className="title">External Amenities</h1>

          <div className="extra-aminities">
            {brochureProp?.external_amenities.map((element, index) => {
              return (
                <div className="extra-aminity" key={index}>
                  <img src={element.filepath} alt="" />
                  <p>{element.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="rdb-logo">
          <img src="https://i.ibb.co/rxwcxNR/rd-logo.png" alt="" />
        </div>
        <h1 className="header-text">
          floor plan <span className="golden-line" />
        </h1>
        <div className="content">
          <h1 className="title">3 bhk</h1>
          <div className="floor-img">
            <p>
              Typical Floor Plan - Wing A | 3 BHK | <br />
              {brochureProp.min_carpet} {brochureProp.carpet_parameter} &{' '}
              {brochureProp.max_carpet} {brochureProp.carpet_parameter}
            </p>
            {brochureProp.floor_plan_gallery.map((element, index) => {
              return <img src={element.filepath} alt="" key={index} />;
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="rdb-logo">
          <img src="https://i.ibb.co/rxwcxNR/rd-logo.png" alt="" />
        </div>
        <h1 className="header-text">
          project location <span className="golden-line" />
        </h1>
        <div className="location-container">
          <img src={brochureProp.project_location} alt="" />
          <h1 className="header-text">
            connectivity <span className="golden-line" />
          </h1>
          <div className="connective-icon-container content">
            <div className="connective-box">
              <div className="circle-icon">
                <GiRoad className="icon-size" />
              </div>
              <span>
                Distance from highway: {brochureProp.distance.highway}
              </span>
            </div>
            <div className="connective-box">
              <div className="circle-icon">
                <IoMdTrain className="icon-size" />
              </div>

              <span>
                Distance from railway station:{' '}
                {brochureProp.distance.railway_station}
              </span>
            </div>
            <div className="connective-box">
              <div className="circle-icon">
                <GiRoad className="icon-size" />
              </div>

              <span>
                Distance from airport: {brochureProp.distance.airport}
              </span>
            </div>
            <div className="connective-box">
              <div className="circle-icon">
                <IoMdTrain className="icon-size" />
              </div>

              <span>Distance from school: {brochureProp.distance.school}</span>
            </div>
            <div className="connective-box">
              <div className="circle-icon">
                <GiRoad className="icon-size" />
              </div>
              <span>Distance from market: {brochureProp.distance.market}</span>
            </div>
            <div className="connective-box">
              <div className="circle-icon">
                <IoMdTrain className="icon-size" />
              </div>

              <span>
                Distance from metro station:{' '}
                {brochureProp.distance.metro_station}
              </span>
            </div>
          </div>
          {brochureProp.video && (
            <>
              <h1 className="header-text">
                project video <span className="golden-line" />
              </h1>
              <p className="link content">Link : {brochureProp.video}</p>
            </>
          )}
        </div>
      </section>
    </main>
  );
}

export default ResidentialLease;
