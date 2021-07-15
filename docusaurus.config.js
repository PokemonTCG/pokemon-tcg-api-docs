/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Pokémon TCG API Documentation',
  tagline: 'Get started building your Pokémon TCG application today',
  url: 'https://docs.pokemontcg.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'PokemonTCG', // Usually your GitHub org/user name.
  projectName: 'pokemon-tcg-api-docs', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Pokémon TCG API Documentation',
      logo: {
        alt: 'Logo',
        src: 'img/gengar.png',
        srcDark: 'img/gengar.png'
      },
      items: [
        // {
        //   type: 'docsVersionDropdown',
        // },
        {
          href: 'https://github.com/PokemonTCG',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs',
            },
            {
              label: 'Getting Started',
              to: '/docs/getting-started/authentication',
            },
            {
              label: 'Developer SDKs',
              to: '/docs/sdks/overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/dpsTCvg',
            },
            {
              label: 'Github',
              href: 'https://github.com/PokemonTCG',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/pokemontcg',
            },
          ],
        },
        {
          title: 'Donate',
          items: [
            {
              label: 'Patreon',
              href: 'https://www.patreon.com/pokemon_tcg_api',
            },
            {
              label: 'Ko-fi',
              href: 'https://ko-fi.com/pokemontcg',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Developer Portal',
              href: 'https://dev.pokemontcg.io',
            },
            {
              label: 'Pokémon TCG Guru',
              href: 'https://pokemontcg.guru',
            },
            {
              label: 'Main Site',
              href: 'https://pokemontcg.io',
            },
            
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Pokémon TCG API. This website is not produced, endorsed, supported, or affiliated with Nintendo or The Pokémon Company.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/PokemonTCG/pokemon-tcg-api-docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
