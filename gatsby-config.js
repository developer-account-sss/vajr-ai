/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.vajr.ai`,
    author: "SalVenture Tech LLC",
    title: "Vajr AI| Swarm Drones",
    description: "Intelligent, Multi-Layered Counter- Swarm UAS defense system",
  },
  plugins: [
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Abhaya Libre`,
            file: `https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;600;700;800&family=Dancing+Script:wght@400..700&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Oswald:wght@200..700&display=swap`,
          },
          {
            name: `Dosis`,
            file: `https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&display=swap`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Vajr AI| Swarm Drones",
        short_name: "Vajr AI| Swarm Drones",
        start_url: "/",
        // background_color: "#ffffff",
        // theme_color: "#007bff",
        display: "minimal-ui",
        icon: "src/images/favicon.png",
      },
    },
  ],
}
