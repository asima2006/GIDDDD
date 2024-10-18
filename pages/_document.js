import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Add favicon here */}
        <link rel="icon" href="/gidlogo.png" />
        {/* You can add other meta tags here as well */}
        <meta
          name="description"
          content="GetItDone is a full-service digital agency offering professional video production, website development, and project management services. Elevate your brand with cutting-edge digital solutions tailored to your business needs."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
