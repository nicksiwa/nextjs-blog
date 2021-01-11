import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import { Content } from "../components/section";
import { List, ListItem } from "../components/content";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Content md>
        <p>Hello, I am a front-end developer 😁</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </Content>

      <Content md style={{ paddingTop: "10px" }}>
        <List>
          {allPostsData.map((post) => (
            <ListItem post={post} key={post.id} />
          ))}
        </List>
      </Content>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}
