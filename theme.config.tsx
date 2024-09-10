import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>TW3</span>,
  project: {
    link: 'https://github.com/micmc422/TW3',
  },
  chat: {
    link: 'https://discord.com',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1
  },
  search: {
    placeholder: "Chercher dans les cours",
    emptyResult: "Aucun résultat",
    error: "Oups petit probléme... réessayez",
    loading: "Recherche en cours..."
  },
  primaryHue: { dark: 212, light: 212 },
  primarySaturation: { dark: 100, light: 100 },
  editLink: { text: null },
  toc: { title: "Navigation" },
  feedback: {
    content: "Une question ou un problème ?",
  },
  docsRepositoryBase: 'https://github.com/micmc422/TW3',
  footer: {
    text: <>Champollion - TW3 -&nbsp;<a href="https://occitaweb.fr" target="_blank">Bardy Michaël</a></>,
  },
  gitTimestamp: ({ timestamp }) => <>Dernière mise à jour {timestamp.toLocaleDateString()}</>
}

export default config
