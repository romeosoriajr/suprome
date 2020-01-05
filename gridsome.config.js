// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "supro.me",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/posts/**/*.md",
        typeName: "Post",
        route: "/blog/:slug"
      }
    },
    {
      use: "gridsome-plugin-pug"
    },
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        separator: "_"
      }
    }
  ],
  port: 3030
};
