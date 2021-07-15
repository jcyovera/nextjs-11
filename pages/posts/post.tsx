import Link from 'next/link';
import style from '../../styles/posts.module.scss';
import Layout from '../../components/layout/Layout';

export default function Posts() {
    return (
        <Layout>
            <div>
                <h1>List of Post</h1>
                <h2 className={style.head2}>
                    <Link href="/">
                    <a>Back to home</a>
                    </Link>
                </h2>
            </div>
        </Layout>
           
        )
  }