import puppeteer, { PDFOptions } from 'puppeteer'
import * as fs from 'node:fs'
const PDFDocument = require('pdf-lib').PDFDocument

async function generatePDF(html: string, footer: string): Promise<Buffer> {
    const staticPages = fs.readFileSync('./src/templates/static.pdf');

    const browser = await puppeteer.launch({
        headless: true, devtools: true, dumpio: true,
    });
    const page = await browser.newPage();


    await page.setViewport({ width: 595, height: 1200, deviceScaleFactor: 0 })

    await page.setContent(html, { waitUntil: 'networkidle0' });

    // Use screen CSS instead of print
    await page.emulateMediaType('print');

    const pdfOptions: PDFOptions = {
        format: 'A4',
        margin: {
            top: 22,
            bottom: 105
        },
        printBackground: true,
        preferCSSPageSize: true,
        displayHeaderFooter: true,
        headerTemplate: `
        <style>
            *,
            *::before,
            *::after {
                box-sizing: border-box;
            }

            html {
                -webkit-print-color-adjust: exact
            }
            body {
                --navy: #172639;
                --golden: #eaa636;
                --margin-y: 22px;
                --margin-x: 32px;
                --border-width: 1.5px;
                --border-color: var(--golden);
            }

            .header {
                width: calc(100% - var(--margin-x) * 2);
                margin: auto;
                border-top: var(--border-width) solid var(--border-color);
            }
        </style>
        <div class="header">
        </div>
        `,
        footerTemplate: footer
    };

    const pdfBuffer = await page.pdf(pdfOptions);

    const mergedPdf = await PDFDocument.create();
    const pdfsToMerge = [staticPages, pdfBuffer];

    for (const pdfBytes of pdfsToMerge) {
        const pdf = await PDFDocument.load(pdfBytes);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => {
            mergedPdf.addPage(page);
        });
    }

    const buf = await mergedPdf.save();

    await browser.close();

    return buf;
}


export default generatePDF; 