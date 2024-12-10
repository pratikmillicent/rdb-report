import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import * as fs from 'fs';
import generatePDF from './generatePDF';
import { response, Response } from 'express';
import Temp1 from './templates';
import Temp2 from './templates/report2';
import ProjectTemp from './templates/project-temp';
import PreLeaseTemp from './templates/Prelease/Index';
import ProjectSingleTemp from './templates/project-single-temp';
import ProjectTempA4 from './templates/project-tempA4';
import ProjectTemp3 from './templates/project-temp2';

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
      const pdfBuffer = await generatePDF(html);
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
      const pdfBuffer = await generatePDF(html);
      response.header('Content-Disposition', `filename="Report.pdf"`)
      response.status(200).type("application/pdf").send(pdfBuffer);
    } catch (error) {
      console.error('Error generating PDF:', error);
      response.status(500).send('Error generating PDF');
    }
  }

  @Get('project-temp')
  async projectReport2(@Res() response: Response) {
    try {
      const markup = renderToStaticMarkup(createElement(ProjectTemp, { test: "test" }))
      const style = fs.readFileSync(process.cwd() + '/src/templates/project-temp/style.css').toString()

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
      // const pdfBuffer = await generatePDF(html);
      // response.header('Content-Disposition', `filename="Report.pdf"`)
      // response.status(200).type("application/pdf").send(pdfBuffer);

      response.status(200).type("text/html").send(html)
    } catch (error) {
      console.error('Error generating PDF:', error);
      response.status(500).send('Error generating PDF');
    }
  }


  @Get('project-temp2')
  async projectReport3(@Res() response: Response) {
    try {
      const markup = renderToStaticMarkup(createElement(ProjectTemp3))
      const style = fs.readFileSync(process.cwd() + '/src/templates/project-temp2/style.css').toString()

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
      const pdfBuffer = await generatePDF(html);
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

      const pdfBuffer = await generatePDF(html)
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

      const pdfBuffer = await generatePDF(html)
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

      const pdfBuffer = await generatePDF(html)
      response.header('Content-Disposition', `filename="project.pdf"`)
      response.status(200).type("application/pdf").send(pdfBuffer);

    } catch (error) {
      console.error('Error generating PDF:', error);
      response.status(500).send('Error generating PDF');
    }
  }

}
