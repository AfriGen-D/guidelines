import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Guidelines",
  description: "General guidelines",
  base: "/guidelines",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "General", link: "/general" },
    ],

    sidebar: [
      {
        text: "General",
        items: [
          {
            text: "Contribution guidelines",
            link: "general/contribution-guidelines",
          },
          {
            text: "Branding guidelines",
            link: "general/branding-guidelines",
          },
          {
            text: "Versioning guidelines",
            link: "general/versioning-guidelines",
          },
          {
            text: "Creating documentation repos",
            link: "general/creating-docs-repo",
          },
          {
            text: "Markdown guidelines",
            link: "general/markdown-guidelines",
          },
          {
            text: "Vitepress API",
            link: "general/vitepress-api",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/AfriGen-D/guidelines" },
    ],
  },
});
