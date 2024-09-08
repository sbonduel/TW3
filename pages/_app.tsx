import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useConfig } from 'nextra-theme-docs'


function colorsByPath(path: string) {
    if (path?.startsWith("/git")) return [214, 50]
    if (path?.startsWith("/NPM")) return [0, 59]
    if (path?.startsWith("/docker")) return [194, 90]
    if (path?.startsWith("/node.js")) return [139, 45]
    if (path?.startsWith("/mongoDB")) return [99, 47]
    if (path?.startsWith("/react")) return [189, 100]
    return [212, 100] //valeurs par défaut dans theme.config.tsx
}

export default function MyApp({ Component, pageProps }: AppProps) {
    const { ...all } = useConfig()
    console.log(all)
    const { asPath, defaultLocale, locale } = useRouter()
    const [hue, setHue] = useState(212);
    const [saturation, setSaturation] = useState(100);
    useEffect(() => {
        const [dynHue, dynSat] = colorsByPath(asPath);
        setHue(dynHue);
        setSaturation(dynSat)
    }, [asPath])
    return <>
        <Head>
            <style>
                {`
        :root {
          --nextra-primary-hue: ${hue}deg!important;
          --nextra-primary-saturation: ${saturation}%!important;
        }

        .dark {
          --nextra-primary-hue: ${hue}deg!important;
          --nextra-primary-saturation: ${saturation}%!important;
        }
      `}
            </style>
        </Head>
        <Component {...pageProps} />
    </>
}