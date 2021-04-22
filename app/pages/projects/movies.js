import Head from 'next/head'

export default function Movies({ sampleData }) {
  return (
    <div>
      <Head>
        <title>Movies</title>
      </Head>
      <ul>
        {sampleData.map((m) => (
          <li>{m.title}</li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const sampleData = [
    {
      'title': 'Black Widow',
      'releaseDate': 'July 9, 2021'
    },
    {
      'title': 'Shang-Chi and the Legend of the Ten Rings',
      'releaseDate': 'September 3, 2021'
    },
    {
      'title': 'The Eternals',
      'releaseDate': 'November 5, 2021'
    },
    {
      'title': 'Spider-Man: No Way Home',
      'releaseDate': 'December 17, 2021'
    }
  ]

  return {
    props: {
      sampleData,
    },
  }
}