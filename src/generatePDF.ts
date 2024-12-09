import puppeteer, { PDFOptions } from 'puppeteer'

async function generatePDF(html: string): Promise<Buffer> {
    const browser = await puppeteer.launch({
        headless: true, devtools: true, dumpio: true,
    });
    const page = await browser.newPage();

    await page.setContent(html, { waitUntil: 'networkidle0' });

    // Use screen CSS instead of print
    await page.emulateMediaType('print');

    const pdfOptions: PDFOptions = {
        format: 'A4',
        // width: '11.25in',
        // height: '20.00in',
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
        footerTemplate: `
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

            .wrapper {
                width: calc(100% - var(--margin-x) * 2);
                margin: auto;
            }

            .footer {
                border: var(--border-width) solid var(--border-color);
                border-top: 0;

                background: var(--navy);

                padding: 20px var(--margin-x);

                display: flex;
                justify-content: space-between;
            }

            .attr {
                display: flex;
                justify-content: space-between;
                font-size: 12px;
                padding: 6px var(--margin-x);
            }
        </style>
        <div class="wrapper">
            <div class="footer">
                <div>
                    <p style="margin: 10px; font-size: 16px; color: white;">Praveen Thatipamula</p>
                </div>
                <div>
                    <p style="margin: 10px; font-size: 16px; color: white;">Sunny Thakkar</p>
                </div>
            </div>
            <div class="attr">
                <span>Built on Experience</span>
                <span>www.rdbrothers.com</span>
                <span>Built on Experience</span>
            </div>
        </div>
        `
    };

    const pdfBuffer = await page.pdf(pdfOptions);

    await browser.close();

    return Buffer.from(pdfBuffer);
}


export default generatePDF; 