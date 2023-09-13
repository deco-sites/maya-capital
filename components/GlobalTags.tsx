import { asset, Head } from "$fresh/runtime.ts";

function GlobalTags() {
  return (
    <Head>
      {/* Enable View Transitions API */}
      <meta name="view-transition" content="same-origin" />
      {/* Tailwind v3 CSS file */}
      <link href={asset("/styles.css")} rel="stylesheet" />
      {/* Web Manifest */}
      <link rel="manifest" href={asset("/site.webmanifest")} />
      {
        /*
         * Include fonts
         * tip: It's always better copy fonts to the `/static/fonts` folder than serving from another
         * domain since DNS resolution times can really affect performance.
         */
      }
      <style
        dangerouslySetInnerHTML={{
          __html: `
          /* latin-ext */
          @font-face {
            font-family: 'Posteramatext';
            src: url('https://uploads-ssl.webflow.com/5ca9b45ad636b789185d2595/5ca9b74c1283e5d8c307d72b_PosteramaText-Light.ttf') format('truetype');
            font-weight: 300;
            font-style: normal;
            font-display: auto;
          }
          @font-face {
            font-family: 'Posteramatext';
            src: url('https://uploads-ssl.webflow.com/5ca9b45ad636b789185d2595/5ca9b74d3be192a8f27be7ae_PosteramaText-Regular.ttf') format('truetype');
            font-weight: 400;
            font-style: normal;
            font-display: auto;
          }
          @font-face {
            font-family: 'Posteramatext';
            src: url('https://uploads-ssl.webflow.com/5ca9b45ad636b789185d2595/5ca9b74d1283e5575407d72c_PosteramaText-SemiBold.otf') format('opentype');
            font-weight: 600;
            font-style: normal;
            font-display: auto;
          }
          @font-face {
            font-family: 'Albert Sans';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(${
            asset("/fonts/i7dOIFdwYjGaAMFtZd_QA1ZVYFeQGQyUV3U.woff2")
          }) format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          /* latin */
          @font-face {
            font-family: 'Albert Sans';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(${
            asset("/fonts/i7dOIFdwYjGaAMFtZd_QA1ZbYFeQGQyU.woff2")
          }) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          /* latin-ext */
          @font-face {
            font-family: 'Albert Sans';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(${
            asset("/fonts/i7dOIFdwYjGaAMFtZd_QA1ZVYFeQGQyUV3U.woff2")
          }) format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          /* latin */
          @font-face {
            font-family: 'Albert Sans';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(${
            asset("/fonts/i7dOIFdwYjGaAMFtZd_QA1ZbYFeQGQyU.woff2")
          }) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          /* latin-ext */
          @font-face {
            font-family: 'Albert Sans';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(${
            asset("/fonts/i7dOIFdwYjGaAMFtZd_QA1ZVYFeQGQyUV3U.woff2")
          }) format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          /* latin */
          @font-face {
            font-family: 'Albert Sans';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(${
            asset("/fonts/i7dOIFdwYjGaAMFtZd_QA1ZbYFeQGQyU.woff2")
          }) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          span {
            color: #feb13f;
          }
          body {
            font-family: Posteramatext;
          }
          .fade-in {
            animation: fade-in 0.5s ease-in-out forwards;
          }
          .fade-in {
            opacity: 0;
            animation: fadeAnimation 1s ease forwards;
            display: flex !important;
          }
          
          @keyframes fadeAnimation {
            to {
              opacity: 1;
            }
          }

          .hide{
            display: none;
          }
          
      `,
        }}
      />
    </Head>
  );
}

export default GlobalTags;
