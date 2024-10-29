import puppeteer, { PDFOptions } from 'puppeteer'

async function generatePDF(html: string): Promise<Buffer> {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.setContent(html, { waitUntil: 'networkidle0' });

    const pdfOptions: PDFOptions = {
        format: 'A4',
        // width: '11.25in',
        // height: '20.00in',
        printBackground: true,
        preferCSSPageSize: true,
    };

    const pdfBuffer = await page.pdf(pdfOptions);

    await browser.close();

    return Buffer.from(pdfBuffer);
}


export default generatePDF; 