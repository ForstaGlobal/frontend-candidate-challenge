import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Todo Application - Forsta</title>
        <meta name="description" content="Todo application made for the forsta frontend developer challenge." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <footer className={styles.footer}>
        <a
          href="https://jimpad.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jimpad©2022{' '}
        </a>
      </footer>
    </div>
  )
}
