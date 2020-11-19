module.exports = {
  title: 'The Cad Coder',
  tagline: 'Free SOLIDWORKS API Tutorials for Engineers.',
  url: 'https://prashantbaher.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'static/img/logo.png',
  organizationName: 'prashantbaher', // Usually your GitHub org/user name.
  projectName: 'Test-theme', // Usually your repo name.
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-117501871-2',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    navbar: {
      title: 'The Cad Coder',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
/*        {
          to: 'docs/doc2',
          // activeBasePath: 'docs',
          label: 'Doc',
          position: 'left',
        },*/
        {
          label: 'VBA',
          position: 'left',
          items: [
            {
              to: 'docs/vba-Intro',
              label: 'VBA Tutorials',
            },
            {
              to: 'docs/vba-userforms',
              label: 'VBA UserForms',
            },
          ]
        },
        {
          to: 'docs/vba-in-sw',
          label: 'SOLIDWORKS VBA',
          position: 'left',
        },
        {
          to: 'docs/sw-cpp',
          label: 'SOLIDWORKS C++',
          position: 'left',
        },
        {
          label: 'About',
          position: 'right',
          items: [
            {
              to: 'docs/about',
              label: 'About Me',
              position: 'right',
            },
            {
              to: 'docs/resources',
              label: 'Resources',
              position: 'right',
            },
            {
              to: 'docs/privacy',
              label: 'Privacy Policy',
              position: 'right',
            },
          ],
        },
//        {
//          href: 'https://github.com/facebook/docusaurus',
//          label: 'GitHub',
//          position: 'right',
//        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Tutorials',
          items: [
            {
              label: 'VBA Introduction',
              to: 'docs/vba-Intro',
            },
            {
              label: 'VBA in Solidworks',
              to: 'docs/vba-in-sw',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/thecadcoder',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCm_VglqA2S4WUXM55vyqAFg',
            },
            /*
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
            */
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'E-Mail',
              href: 'mailto:thecadcoder@gmail.com',
            },
            {
              label: 'Buy Me a Coffee',
              href: 'https://www.buymeacoffee.com/thecadcoder',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Cad Coder, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          //editUrl:
            //'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          //editUrl:
            //'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
