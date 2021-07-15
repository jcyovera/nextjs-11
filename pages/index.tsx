import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout/Layout';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
          
      </Head>
      <section className={utilStyles.headingMd}>
      <Link href="/posts/post">
          <a>Posts</a>
          </Link>
        <p>[Your Self Introduction]</p>
        
      </section>
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}