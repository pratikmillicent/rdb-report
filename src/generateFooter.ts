export const generateFooter = (brochureProp) => {
    return `
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

                padding: 0px var(--margin-x);

                display: flex;
                justify-content: space-between;
            }

            .attr {
                display: flex;
                justify-content: space-between;
                font-size: 12px;
                padding: 6px var(--margin-x);
            }

            .footer-img{
                margin: 8px; 
                font-size: 12px; 
                color: white;
            }

        </style>
        <div class="wrapper">
            <div class="footer">
                <div>
                 <div style="margin: 8px; font-size: 16px; color: white;">${brochureProp.managed_by.name}</div>
                    <div class="footer-img">
                    ${brochureProp.managed_by.contact || "+91 8104922414"}
                    </div>
                    <div style="margin: 8px; font-size: 12px; color: white;">
              ${brochureProp.managed_by.email || "comercial@rdbrothers.com"}</div>
                </div>
                <div>
                    <div style="margin: 8px; font-size: 16px; color: white;">${brochureProp.managed_by.name}</div>
                    <div style="margin: 8px; font-size: 12px; color: white;">${brochureProp.managed_by.contact || "+91 8104922414s"}</div>
                    <div style="margin: 8px; font-size: 12px; color: white;">${brochureProp.managed_by.email || "comercial@rdbrothers.com"}</div>
                </div>
            </div>
            <div class="attr">
                <span>Built on Experience</span>
                <span>www.rdbrothers.com</span>
                <span>Maha RERA No,${brochureProp.rera_no}</span>
            </div>
        </div>
        `
}