import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import { Content } from "../components/section";
import { Title, Text } from "../components/typography";
import { List, ListItem } from "../components/content";

import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

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
        <Title lg>Blog</Title>
        <List>
          {allPostsData.map(({ id, date, title }) => (
            <ListItem key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <Text sm light>
                <Date dateString={date} />
              </Text>
            </ListItem>
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
