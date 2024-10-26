import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/gidlogo.png" />

        {/* Meta description */}
        <meta
          name="description"
          content="GetItDone is a full-service digital agency offering professional video production, website development, and project management services. Elevate your brand with cutting-edge digital solutions tailored to your business needs."
        />

        {/* Open Graph Meta Tags - Used by Instagram and LinkedIn */}
        <meta
          property="og:title"
          content="GetItDone - Digital Solutions Agency"
        />
        <meta
          property="og:description"
          content="GetItDone offers professional video production, website development, and project management services to help you elevate your brand."
        />
        <meta property="og:image" content="/gidlogo.png" />
        <meta property="og:url" content="https://gidddd.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Additional Meta for LinkedIn (Optional but Recommended) */}
        <meta property="og:site_name" content="GetItDone" />
        <meta name="linkedin:creator" content="GetItDone Agency" />

        {/* Instagram relies on Open Graph tags, so nothing extra is needed */}

        {/* Viewport for responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
