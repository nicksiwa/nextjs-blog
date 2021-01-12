import Head from "next/head";
import Layout, { siteTitle } from "../../../components/layout";
import { getPostPagination, getSortedPostsData } from "../../../lib/posts";
import { Content } from "../../../components/section";
import { List, ListItem } from "../../../components/content";
import { POSTS_PER_PAGE } from "../../../constants/app";
import { Pagination } from "../../../components/other";

export default function Home({ posts, numPages, currentPage }) {
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
          {posts.map((post) => (
            <ListItem post={post} key={post.id} />
          ))}
        </List>

        <Pagination
          numPages={numPages}
          currentPage={currentPage}
          linkUrl="/posts/page"
        />
      </Content>
    </Layout>
  );
}

export async function getStaticPaths() {
  const pages = getPostPagination();

  return {
    paths: pages,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const page = (params && parseInt(params.page)) || 1;
  const allPostsData = getSortedPostsData();
  const numPages = Math.ceil(allPostsData.length / POSTS_PER_PAGE);
  const pageIndex = page - 1;
  const posts = allPostsData.slice(
    pageIndex * POSTS_PER_PAGE,
    (pageIndex + 1) * POSTS_PER_PAGE
  );

  return {
    props: {
      posts,
      numPages,
      currentPage: page,
    },
  };
}
