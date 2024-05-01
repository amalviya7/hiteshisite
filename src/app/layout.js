/* eslint-disable react/prop-types */
"use client";

import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { usePathname } from "next/navigation";
import Script from "next/script";
import React, { Suspense } from "react";
// lazy loading Suspense
import { Ring } from "@uiball/loaders";

//component
import Header from "@/components/header/Header";
const Footer = React.lazy(() => import("@/components/footer/Footer"));

//json
import { metadata } from "@/json/common/common";

metadata;

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          as="style"
          // onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W6J9CJ5');`,
          }}
        />
				{/* <!-- Google tag (gtag.js) --> */}
				<Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-D8NR73MEJ5"
        />
				<Script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());

						gtag('config', 'G-D8NR73MEJ5');`,
          }}
        />
				<meta charSet="UTF-8" />
				<meta name="description" content="Hiteshi" />
				<meta name="keywords" content="HTML, CSS, JavaScript" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="google-site-verification" content="Fuv5SazIeeDRM378tVhqw10j957ySr9K5NnydGhAnJU" />
				
      </head>
      {["/service/", "/partnerships/", "/feedback/"].includes(pathname) ? (
        <body suppressHydrationWarning={true}>
          <div>{children}</div>
        </body>
      ) : (
        <body suppressHydrationWarning={true}>
					{/* <!-- Google Tag Manager (noscript) --> */}
					<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W6J9CJ5" height="0" width="0" /* style="display:none;visibility:hidden" */></iframe></noscript>
					{/* <!-- End Google Tag Manager (noscript) --> */}

          <Header />
          {/* old mt-4 */}
          <div className="mt-[50px]">{children}</div>
          <Suspense
            fallback={
              <div className="flex justify-center p-5">
                <Ring size={50} lineWeight={5} speed={2} color="#289CE8" />
              </div>
            }
          >
            <Footer />
          </Suspense>
          {/* <Script type="text/javascript" strategy="lazyOnload" id="tawk_script">
            {`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/586b88abf9976a1964f9a784/default';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();`}
          </Script> */}
          <Script
            type="text/javascript"
            strategy="lazyOnload"
            src="https://www.googletagmanager.com/gtag/js?id=G-D8NR73MEJ5"
            id="google-analytics-script-async"
          />
          <Script
            type="text/javascript"
            strategy="lazyOnload"
            id="google-analytics-script"
          >
            {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-D8NR73MEJ5');`}
          </Script>
          {/* End of Google Analytics */}

          <Script
            type="text/javascript"
            src="https://cdn.pagesense.io/js/hiteshi/3c293d85061547ebbca421aeb2207022.js"
          />
        </body>
      )}
    </html>
  );
}
