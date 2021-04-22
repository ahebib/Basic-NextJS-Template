import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <div>
          <h1>NextJS Template</h1>

          <div><a href="./projects/websites">Website Projects</a></div>
          <div><a href="./projects/movies">Movies</a></div>
      </div>
    </div>
  )
}
