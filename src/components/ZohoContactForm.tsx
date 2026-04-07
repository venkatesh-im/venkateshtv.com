"use client";

import { useEffect } from "react";

const FORM_DIV_ID = "zf_div_cBjwIqmY5_HSbJA-NA1-ndQsOoyMsjgVL2ySUR3bcNU";
const FORM_PERMA = "cBjwIqmY5_HSbJA-NA1-ndQsOoyMsjgVL2ySUR3bcNU";
const FORM_SRC = `https://forms.zohopublic.in/impeloxtechprivatelimited1/form/ContactUsVenkateshtvcom/formperma/${FORM_PERMA}?zf_rszfm=1`;

export default function ZohoContactForm() {
  useEffect(() => {
    const container = document.getElementById(FORM_DIV_ID);
    if (!container || container.querySelector("iframe")) return;

    const f = document.createElement("iframe");
    f.src = FORM_SRC;
    f.style.border = "none";
    f.style.height = "1071px";
    f.style.width = "100%";
    f.style.transition = "all 0.5s ease";
    f.setAttribute("aria-label", "Contact Us");
    container.appendChild(f);

    function onMessage(event: MessageEvent) {
      const evntData = event.data;
      if (evntData && typeof evntData === "string") {
        const zf_ifrm_data = evntData.split("|");
        if (zf_ifrm_data.length === 2 || zf_ifrm_data.length === 3) {
          const zf_perma = zf_ifrm_data[0];
          const zf_ifrm_ht_nw = parseInt(zf_ifrm_data[1], 10) + 15 + "px";
          const iframe = container.querySelector("iframe");
          if (
            iframe &&
            iframe.src.indexOf("formperma") > 0 &&
            iframe.src.indexOf(zf_perma) > 0
          ) {
            const prevHeight = iframe.style.height;
            if (zf_ifrm_data.length === 3) {
              iframe.scrollIntoView();
              if (prevHeight !== zf_ifrm_ht_nw) {
                setTimeout(() => { iframe.style.height = zf_ifrm_ht_nw; }, 500);
              }
            } else if (prevHeight !== zf_ifrm_ht_nw) {
              iframe.style.height = zf_ifrm_ht_nw;
            }
          }
        }
      }
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return <div id={FORM_DIV_ID} className="w-full" />;
}
