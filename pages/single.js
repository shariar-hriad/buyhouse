import Head from 'next/head';
import { useState } from 'react';
import { BlogDetails, SingleBlogBanner } from '../src/components';
import Layout from '../src/components/layout';
import Modal from '../src/components/modal';

export default function SingleBlog() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Head>
        <title>Blog - Quality Homes Reimagined, LLC</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <Modal show={show} setShow={setShow} />
        <SingleBlogBanner />
        <BlogDetails show={show} setShow={setShow} />
      </Layout>
    </>
  );
}
