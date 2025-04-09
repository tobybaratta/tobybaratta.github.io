import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Toby Baratta',
  titleTemplate: ':title - Toby Baratta',
  description: `Toby Baratta's personal website, a PhD Student in Informatics at UC-Irvine`,
  lang: 'en-US',
  lastUpdated: true,
  base: '/',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    outline: [2, 2],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Now', link: '/now' },
      { text: 'CV', link: '/cv' },
      { text: 'Blog', link: '/blog/' },
      { text: 'Contact', link: '/contact' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/tobybaratta' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/tobybaratta' },
      { icon: 'gmail', link: 'mailto:me@toby.earth' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/toby.earth' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Toby Baratta',
    },
  },
  markdown: {
    theme: 'material-theme-palenight',
    lineNumbers: true,
  },
  appearance: 'dark',
});
