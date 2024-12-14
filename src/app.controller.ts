import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import * as fs from 'fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { AppService } from './app.service';
import { generateFooter } from './generateFooter';
import generatePDF from './generatePDF';
import Temp1 from './templates';
import commercialRent from './templates/commercial-rent';
import CommericalSale from './templates/commerical-sale';
import PreLeaseTemp from './templates/Prelease/Index';
import ProjectSingleTemp from './templates/project-single-temp';
import ProjectTempA4 from './templates/project-tempA4';
import Temp2 from './templates/report2';
import ResidentialLease from './templates/residential-lease';
import ResidentialSale from './templates/residential-sale';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('report1')
  async preLeaseReport(@Res() response: Response) {
    try {
      const markup = renderToStaticMarkup(createElement(Temp1, { test: "test" }))
      const style = fs.readFileSync(process.cwd() + '/src/templates/style.css').toString()

      const html = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Report 1</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Sen:wght@400..800&display=swap" rel="stylesheet">
            <style>
              ${style}
            </style>
          </head>
          <body>
              ${markup}
          </body>
        </html>
      `;
      const footer = generateFooter("");
      const pdfBuffer = await generatePDF(html, footer);
      response.header('Content-Disposition', `filename="Report.pdf"`)
      response.status(200).type("application/pdf").send(pdfBuffer);
    } catch (error) {
      console.error('Error generating PDF:', error);
      response.status(500).send('Error generating PDF');
    }
  }

  @Get('report2')
  async preLeaseReport2(@Res() response: Response) {
    try {
      const markup = renderToStaticMarkup(createElement(Temp2, { test: "test" }))
      const style = fs.readFileSync(process.cwd() + '/src/templates/Prelease/style.css').toString()

      const html = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Report 2</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Sen:wght@400..800&display=swap" rel="stylesheet">
            <style>
              ${style}
            </style>
          </head>
          <body>
              ${markup}
          </body>
        </html>
      `;
      const footer = generateFooter("");
      const pdfBuffer = await generatePDF(html, footer);
      response.header('Content-Disposition', `filename="Report.pdf"`)
      response.status(200).type("application/pdf").send(pdfBuffer);
    } catch (error) {
      console.error('Error generating PDF:', error);
      response.status(500).send('Error generating PDF');
    }
  }

  @Get('commercial-sale')
  async commericalSale(@Res() response: Response) {
    try {
      const brochureProp = {
        project_name: 'Cressenta',
        road_no: '',
        locality: '',
        area: 'Andheri East',
        city: '',
        type: 'commercial',
        for: 'Sell',
        min_carpet: 210,
        max_carpet: 210,
        carpet_parameter: "sqft",
        constuction_status: 'Upcoming',
        construction_date: { formattedDate: 'Completion in Dec.2014' },
        price_range: '1.04 / 1.66 CR +',
        about_developer: "This Developers is a leading real estate.",
        sub_type: "office/shop",
        managed_by: {
          name: 'praveen',
          contact: '+ 91 12345 87921',
          email: 'commercial@rdbrothers.com',
        },
        managed_by_second: {
          name: 'sunny',
          contact: '+ 91 12345 87921',
          email: 'commercial@rdbrothers.com',
        },
        highlights_amenities: [{
          id: 1,
          name: 'Cafe',
          filepath: 'images/cafe_icon.png',
        },
        {
          id: 2,
          name: 'CCTV Cameras',
          filepath: 'images/cctv_icon.png',
        },
        {
          id: 3,
          name: 'CCTV/Intercom',
          filepath: 'images/intercom_icon.png',
        },
        {
          id: 4,
          name: 'CCTV/Intercom',
          filepath: 'images/intercom_icon.png',
        },
        ],
        top_amenties: [{
          id: 1,
          name: 'Swimming Pool',
          filepath: 'gallery/swimming_pool.jpg',
        },
        {
          id: 2,
          name: 'Clubhouse',
          filepath: 'gallery/clubhouse.jpg',
        },
        {
          id: 3,
          name: 'Gymnasium',
          filepath: 'gallery/gymnasium.jpg',
        },
        {
          id: 4,
          name: 'Gymnasium',
          filepath: 'gallery/gymnasium.jpg',
        },
        ],
        floor_plan_gallery: [
          {
            id: 1,
            name: '3 BHK Floor Plan',
            filepath: 'https://i.ibb.co/M6LzgrV/area.png',
          },
          {
            id: 2,
            name: '2 BHK Floor Plan',
            filepath: 'https://i.ibb.co/M6LzgrV/area.png',
          },
        ],
        "external_amenities": [
          {
            "id": 1,
            "name": "Garden",
            filepath: 'https://i.ibb.co/P508D6M/amenities.jpg',
          },
          {
            "id": 2,
            "name": "Parking Area",
            filepath: 'https://i.ibb.co/P508D6M/amenities.jpg',
          },
          {
            "id": 3,
            "name": "Jogging Track",
            filepath: 'https://i.ibb.co/P508D6M/amenities.jpg',
          },
          {
            "id": 4,
            "name": "Sports Court",
            filepath: 'https://i.ibb.co/P508D6M/amenities.jpg',
          }
        ],
        distance: {
          highway: "5 km",
          railway_station: "5 km",
          airport: "15 km",
          school: "2 km",
          market: "3 km",
          metro_station: "8 km"
        },
        project_location: "https://i.ibb.co/vP1ThLj/map.png",
        video: 'url',
        rera_no: 'A51800025192'
      }

      const markup = renderToStaticMarkup(createElement(CommericalSale, brochureProp))
      const style = fs.readFileSync(process.cwd() + '/src/templates/commerical-sale/style.css').toString()

      const html = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Report 2</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Sen:wght@400..800&display=swap" rel="stylesheet">
            <style>
              ${style}
            </style>
          </head>
          <body>
              ${markup}

            <script type="text/javascript">
              window.addEventListener('load', function() {
                document.querySelectorAll("section").forEach(el => {
                  el.style = "height: " + Math.ceil(el.clientHeight / window.innerHeight) + "00vh";
                })
              })
            </script>
          </body>
        </html>
      `;
      const footer = generateFooter(brochureProp);
      const pdfBuffer = await generatePDF(html, footer);
      response.header('Content-Disposition', `filename="Report.pdf"`)
      response.status(200).type("application/pdf").send(pdfBuffer);

      // response.status(200).type("text/html").send(html)
    } catch (error) {
      console.error('Error generating PDF:', error);
      response.status(500).send('Error generating PDF');
    }
  }

  @Get('commercial-rent')
  async commercialRent(@Res() response: Response) {
    try {
      const brochureProp = {
        project_name: 'Cressenta',
        road_no: '',
        locality: '',
        area: 'Andheri East',
        city: '',
        type: 'commercial project',
        for: 'lease',
        min_carpet: 210,
        max_carpet: 210,
        carpet_parameter: "sqft",
        constuction_status: 'Upcoming',
        construction_date: { formattedDate: 'Completion in Dec.2014' },
        price_range: '1.04 / 1.66 CR +',
        about_developer: "This Developers is a leading real estate.",
        sub_type: "office/shop/showroom",
        managed_by: {
          name: 'praveen',
          contact: '+ 91 12345 87921',
          email: 'commercial@rdbrothers.com',
        },
        managed_by_second: {
          name: 'sunny',
          contact: '+ 91 12345 87921',
          email: 'commercial@rdbrothers.com',
        },
        highlights_amenities: [{
          id: 1,
          name: 'Cafe',
          filepath: 'images/cafe_icon.png',
        },
        {
          id: 2,
          name: 'CCTV Cameras',
          filepath: 'images/cctv_icon.png',
        },
        {
          id: 3,
          name: 'CCTV/Intercom',
          filepath: 'images/intercom_icon.png',
        },
        {
          id: 4,
          name: 'CCTV/Intercom',
          filepath: 'images/intercom_icon.png',
        },
        ],
        top_amenties: [{
          id: 1,
          name: 'Swimming Pool',
          filepath: 'gallery/swimming_pool.jpg',
        },
        {
          id: 2,
          name: 'Clubhouse',
          filepath: 'gallery/clubhouse.jpg',
        },
        {
          id: 3,
          name: 'Gymnasium',
          filepath: 'gallery/gymnasium.jpg',
        },
        {
          id: 4,
          name: 'Gymnasium',
          filepath: 'gallery/gymnasium.jpg',
        },
        ],
        floor_plan_gallery: [
          {
            id: 1,
            name: '3 BHK Floor Plan',
            filepath: 'https://i.ibb.co/M6LzgrV/area.png',
          },
          {
            id: 2,
            name: '2 BHK Floor Plan',
            filepath: 'https://i.ibb.co/M6LzgrV/area.png',
          },
        ],
        "external_amenities": [
          {
            "id": 1,
            "name": "Garden",
            filepath: 'https://i.ibb.co/P508D6M/amenities.jpg',
          },
          {
            "id": 2,
            "name": "Parking Area",
            filepath: 'https://i.ibb.co/P508D6M/amenities.jpg',
          },
          {
            "id": 3,
            "name": "Jogging Track",
            filepath: 'https://i.ibb.co/P508D6M/amenities.jpg',
          },
          {
            "id": 4,
            "name": "Sports Court",
            filepath: 'https://i.ibb.co/P508D6M/amenities.jpg',
          }
        ],
        distance: {
          highway: "5 km",
          railway_station: "5 km",
          airport: "15 km",
          school: "2 km",
          market: "3 km",
          metro_station: "8 km"
        },
        project_location: "https://i.ibb.co/vP1ThLj/map.png",
        video: 'url',
        rera_no: 'A51800025192'
      }

      const markup = renderToStaticMarkup(createElement(commercialRent, brochureProp))
      const style = fs.readFileSync(process.cwd() + '/src/templates/commercial-rent/style.css').toString()

      const html = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Report 2</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Sen:wght@400..800&display=swap" rel="stylesheet">
            <style>
              ${style}
            </style>
          </head>
          <body>
              ${markup}
                <script type="text/javascript">
              window.addEventListener('load', function() {
                document.querySelectorAll("section").forEach(el => {
                  el.style = "height: " + Math.ceil(el.clientHeight / window.innerHeight) + "00vh";
                })
              })
            </script>
          </body>
        </html>
      `;
      const footer = generateFooter(brochureProp);
      const pdfBuffer = await generatePDF(html, footer);
      response.header('Content-Disposition', `filename="Report.pdf"`)
      response.status(200).type("application/pdf").send(pdfBuffer);

      // response.status(200).type("text/html").send(html)
    } catch (error) {
      console.error('Error generating PDF:', error);
      response.status(500).send('Error generating PDF');
    }
  }

  @Get('residential-lease')
  async ResidentialLease(@Res() response: Response) {
    try {
      const brochureProp = {
        project_name: 'Cressenta',
        road_no: '',
        locality: '',
        area: 'Andheri East',
        city: '',
        type: 'Residential project',
        for: 'lease',
        min_carpet: 210,
        max_carpet: 210,
        carpet_parameter: "sqft",
        constuction_status: 'Upcoming',
        construction_date: { formattedDate: 'Completion in Dec.2014' },
        price_range: '1.04 / 1.66 CR +',
        about_developer: "This Developers is a leading real estate.",
        sub_type: "office/shop/showroom",
        managed_by: {
          name: 'praveen',
          contact: '+ 91 12345 87921',
          email: 'commercial@rdbrothers.com',
        },
        managed_by_second: {
          name: 'sunny',
          contact: '+ 91 12345 87921',
          email: 'commercial@rdbrothers.com',
        },
        highlights_amenities: [{
          id: 1,
          name: 'Cafe',
          filepath: 'images/cafe_icon.png',
        },
        {
          id: 2,
          name: 'CCTV Cameras',
          filepath: 'images/cctv_icon.png',
        },
        {
          id: 3,
          name: 'CCTV/Intercom',
          filepath: 'images/intercom_icon.png',
        },
        {
          id: 4,
          name: 'CCTV/Intercom',
          filepath: 'images/intercom_icon.png',
        },
        ],
        top_amenties: [{
          id: 1,
          name: 'Swimming Pool',
          filepath: 'gallery/swimming_pool.jpg',
        },
        {
          id: 2,
          name: 'Clubhouse',
          filepath: 'gallery/clubhouse.jpg',
        },
        {
          id: 3,
          name: 'Gymnasium',
          filepath: 'gallery/gymnasium.jpg',
        },
        {
          id: 4,
          name: 'Gymnasium',
          filepath: 'gallery/gymnasium.jpg',
        },
        ],
        indoor_amenties: [{
          id: 1,
          name: 'Swimming Pool',
          filepath: 'gallery/swimming_pool.jpg',
        },
        {
          id: 2,
          name: 'Clubhouse',
          filepath: 'gallery/clubhouse.jpg',
        },
        {
          id: 3,
          name: 'Gymnasium',
          filepath: 'gallery/gymnasium.jpg',
        },
        {
          id: 4,
          name: 'Gymnasium',
          filepath: 'gallery/gymnasium.jpg',
        },
        ],
        floor_plan_gallery: [
          {
            id: 1,
            name: '3 BHK Floor Plan',
            filepath: 'https://i.ibb.co/M6LzgrV/area.png',
          },
          {
            id: 2,
            name: '2 BHK Floor Plan',
            filepath: 'https://i.ibb.co/M6LzgrV/area.png',
          },
        ],
        "external_amenities": [
          {
            "id": 1,
            "name": "Garden",
            filepath: 'https://i.ibb.co/P508D6M/amenities.jpg',
          },
          {
            "id": 2,
            "name": "Parking Area",
            filepath: 'https://i.ibb.co/P508D6M/amenities.jpg',
          },
          {
            "id": 3,
            "name": "Jogging Track",
            filepath: 'https://i.ibb.co/P508D6M/amenities.jpg',
          },
          {
            "id": 4,
            "name": "Sports Court",
            filepath: 'https://i.ibb.co/P508D6M/amenities.jpg',
          }
        ],
        distance: {
          highway: "5 km",
          railway_station: "5 km",
          airport: "15 km",
          school: "2 km",
          market: "3 km",
          metro_station: "8 km"
        },
        project_location: "https://i.ibb.co/vP1ThLj/map.png",
        video: 'url',
        rera_no: 'A51800025192'
      }
      const markup = renderToStaticMarkup(createElement(ResidentialLease, brochureProp))
      const style = fs.readFileSync(process.cwd() + '/src/templates/residential-lease/style.css').toString()

      const html = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Report 2</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Sen:wght@400..800&display=swap" rel="stylesheet">
            <style>
              ${style}
            </style>
          </head>
          <body>
              ${markup}
                <script type="text/javascript">
              window.addEventListener('load', function() {
                document.querySelectorAll("section").forEach(el => {
                  el.style = "height: " + Math.ceil(el.clientHeight / window.innerHeight) + "00vh";
                })
              })
            </script>
          </body>
        </html>
      `;

      const footer = generateFooter(brochureProp);
      const pdfBuffer = await generatePDF(html, footer);
      response.header('Content-Disposition', `filename="Report.pdf"`)
      response.status(200).type("application/pdf").send(pdfBuffer);

      // response.status(200).type("text/html").send(html)
    } catch (error) {
      console.error('Error generating PDF:', error);
      response.status(500).send('Error generating PDF');
    }
  }

  @Get('residential-sale')
  async ResidentialSale(@Res() response: Response) {
    try {
      const brochureProp = {
        project_name: 'Cressenta',
        road_no: '',
        locality: '',
        area: 'Andheri East',
        city: '',
        type: 'Residential project',
        for: 'sale',
        min_carpet: 210,
        max_carpet: 210,
        carpet_parameter: "sqft",
        constuction_status: 'Upcoming',
        construction_date: { formattedDate: 'Completion in Dec.2014' },
        price_range: '1.04 / 1.66 CR +',
        about_developer: "This Developers is a leading real estate.",
        sub_type: "office/shop/showroom",
        managed_by: {
          name: 'praveen',
          contact: '+ 91 12345 87921',
          email: 'commercial@rdbrothers.com',
        },
        managed_by_second: {
          name: 'sunny',
          contact: '+ 91 12345 87921',
          email: 'commercial@rdbrothers.com',
        },
        highlights_amenities: [{
          id: 1,
          name: 'Cafe',
          filepath: 'images/cafe_icon.png',
        },
        {
          id: 2,
          name: 'CCTV Cameras',
          filepath: 'images/cctv_icon.png',
        },
        {
          id: 3,
          name: 'CCTV/Intercom',
          filepath: 'images/intercom_icon.png',
        },
        {
          id: 4,
          name: 'CCTV/Intercom',
          filepath: 'images/intercom_icon.png',
        },
        ],
        top_amenties: [{
          id: 1,
          name: 'Swimming Pool',
          filepath: 'gallery/swimming_pool.jpg',
        },
        {
          id: 2,
          name: 'Clubhouse',
          filepath: 'gallery/clubhouse.jpg',
        },
        {
          id: 3,
          name: 'Gymnasium',
          filepath: 'gallery/gymnasium.jpg',
        },
        {
          id: 4,
          name: 'Gymnasium',
          filepath: 'gallery/gymnasium.jpg',
        },
        ],
        indoor_amenties: [{
          id: 1,
          name: 'Swimming Pool',
          filepath: 'gallery/swimming_pool.jpg',
        },
        {
          id: 2,
          name: 'Clubhouse',
          filepath: 'gallery/clubhouse.jpg',
        },
        {
          id: 3,
          name: 'Gymnasium',
          filepath: 'gallery/gymnasium.jpg',
        },
        {
          id: 4,
          name: 'Gymnasium',
          filepath: 'gallery/gymnasium.jpg',
        },
        ],
        floor_plan_gallery: [
          {
            id: 1,
            name: '3 BHK Floor Plan',
            filepath: 'https://i.ibb.co/M6LzgrV/area.png',
          },
          {
            id: 2,
            name: '2 BHK Floor Plan',
            filepath: 'https://i.ibb.co/M6LzgrV/area.png',
          },
        ],
        "external_amenities": [
          {
            "id": 1,
            "name": "Garden",
            filepath: 'https://i.ibb.co/P508D6M/amenities.jpg',
          },
          {
            "id": 2,
            "name": "Parking Area",
            filepath: 'https://i.ibb.co/P508D6M/amenities.jpg',
          },
          {
            "id": 3,
            "name": "Jogging Track",
            filepath: 'https://i.ibb.co/P508D6M/amenities.jpg',
          },
          {
            "id": 4,
            "name": "Sports Court",
            filepath: 'https://i.ibb.co/P508D6M/amenities.jpg',
          }
        ],
        distance: {
          highway: "5 km",
          railway_station: "5 km",
          airport: "15 km",
          school: "2 km",
          market: "3 km",
          metro_station: "8 km"
        },
        project_location: "https://i.ibb.co/vP1ThLj/map.png",
        video: 'url',
        rera_no: 'A51800025192'
      }
      const markup = renderToStaticMarkup(createElement(ResidentialSale, brochureProp))
      const style = fs.readFileSync(process.cwd() + '/src/templates/residential-sale/style.css').toString()

      const html = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Report 2</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Sen:wght@400..800&display=swap" rel="stylesheet">
            <style>
              ${style}
            </style>
          </head>
          <body>
              ${markup}
                <script type="text/javascript">
              window.addEventListener('load', function() {
                document.querySelectorAll("section").forEach(el => {
                  el.style = "height: " + Math.ceil(el.clientHeight / window.innerHeight) + "00vh";
                })
              })
            </script>
          </body>
        </html>
      `;

      const footer = generateFooter(brochureProp);
      const pdfBuffer = await generatePDF(html, footer);
      response.header('Content-Disposition', `filename="Report.pdf"`)
      response.status(200).type("application/pdf").send(pdfBuffer);

      // response.status(200).type("text/html").send(html)
    } catch (error) {
      console.error('Error generating PDF:', error);
      response.status(500).send('Error generating PDF');
    }
  }





  @Get('project-single-temp')
  async projectSingleReport(@Res() response: Response) {
    try {
      const markup = renderToStaticMarkup(createElement(ProjectSingleTemp, { text: "test" }))
      // const style = fs.readFileSync(process.cwd() + '/src/templates/project-single-temp/style.css')
      const style = fs.readFileSync(process.cwd() + '/src/templates/project-temp/style.css').toString()

      const html = ` <!DOCTYPE html>
        <html>
          <head>
            <title>Report 2</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Sen:wght@400..800&display=swap" rel="stylesheet">
            <style>
              ${style}
            </style>
          </head>
          <body>
              ${markup}
          </body>
        </html>`

      const footer = generateFooter("");
      const pdfBuffer = await generatePDF(html, footer);
      response.header('Content-Disposition', `filename="project.pdf"`)
      response.status(200).type("application/pdf").send(pdfBuffer);

    } catch (error) {
      console.error('Error generating PDF:', error);
      response.status(500).send('Error generating PDF');
    }
  }

  @Get('/pre-release')
  async preReleasePDF(@Res() response: Response) {

    try {
      const markup = renderToStaticMarkup(createElement(PreLeaseTemp, { test: "test" }))
      const style = fs.readFileSync(process.cwd() + '/src/templates/Prelease/style.css').toString()

      const html = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Report 2</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Sen:wght@400..800&display=swap" rel="stylesheet">
            <style>
              ${style}
            </style>
          </head>
          <body>
              ${markup}
          </body>
        </html>
      `;

      const footer = generateFooter("");
      const pdfBuffer = await generatePDF(html, footer);
      response.header('Content-Disposition', `filename="pre-release.pdf"`)
      response.status(200).type("application/pdf").send(pdfBuffer);
    } catch (error) {
      console.error('Error generating PDF:', error);
      response.status(500).send('Error generating PDF');
    }

  }

  @Get('project-temp-a4')
  async projectReportA4(@Res() response: Response) {
    try {
      const markup = renderToStaticMarkup(createElement(ProjectTempA4, { text: "test" }))

      const style = fs.readFileSync(process.cwd() + '/src/templates/project-tempA4/style.css').toString()

      const html = ` <!DOCTYPE html>
        <html>
          <head>
            <title>Report 2</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Sen:wght@400..800&display=swap" rel="stylesheet">
            <style>
              ${style}
            </style>
          </head>
          <body>
              ${markup}
          </body>
        </html>`

      const footer = generateFooter("");
      const pdfBuffer = await generatePDF(html, footer);
      response.header('Content-Disposition', `filename="project.pdf"`)
      response.status(200).type("application/pdf").send(pdfBuffer);

    } catch (error) {
      console.error('Error generating PDF:', error);
      response.status(500).send('Error generating PDF');
    }
  }

}
