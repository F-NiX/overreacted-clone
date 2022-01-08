/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import store from '../store'
import Header from './header'
import Footer from './footer'
import Aside from './aside'

export default function Layout({ children }) {
  if (typeof window !== 'undefined')
    document.body.className = store.getState().theme || 'light'
  store.subscribe(() => {
    document.body.className = store.getState().theme
  })
  return (
    <div style={{
      color: 'var(--textNormal)',
      background: 'var(--bg)',
      transition: 'color 0.2s ease-out, background 0.2s ease-out',
      minHeight: 100 + 'vh'
    }}>
      <Head>
        <title>Overreacted — A blog by Dan Abramov</title>
        <meta name="description" content="Created by Foad Nikoukar <F-NiX @ github>" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="/favicon-32x32.png" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet" />
      </Head>
      <div style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '42rem',
        padding: `${2.625}rem ${1.3125}rem`
      }}>
        <Header />
        <Aside />
        { children }
        <Footer />
      </div>
    </div>
  )
}
