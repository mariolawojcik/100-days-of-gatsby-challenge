module.exports = {
  siteMetadata: {
    title: "100 days of gatsby",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "QR1jOXWcQ-Q0FhN_MBIOgTfEsEQXI-L21SeYUQmkUBU",
        spaceId: "oe2x7vakryvp",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    // "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
