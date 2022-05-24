/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "abubekerseifu portfolio",
  titleTemplate: "%s | abubekerseifu portfolio",
  defaultTitle: " abubekerseifu portfolio",
  description: "abubekerseifu portfolio",
  canonical: "https://abubekerseifu.com",
  openGraph: {
    url: "https://abubekerseifu.com",
    title: "abubekerseifu portfolio",
    description: "abubekerseifu portfolio",
    images: [
      {
        url: "https://www.svgrepo.com/download/13562/portfolio.svg",
        alt: "abubekerseifu portfolio og-image",
      },
    ],
    site_name: "abubekerseifu portfolio",
  },
  twitter: {
    handle: "@abubekerseifu",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
