import React from "react";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import js from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
import readingTime from "reading-time";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Layout from "../../components/layout";
import { Title, Text } from "../../components/typography";
import { UserName, ArticleTitle, ArticleMeta } from "../../components/other";
import { Article, Tags } from "../../components/content";

SyntaxHighlighter.registerLanguage("javascript", js);

const renderers = {
  code: ({ value, language }) => {
    return (
      <SyntaxHighlighter
        showLineNumbers
        style={atomOneDark}
        language={language}
        children={value}
      />
    );
  },
};

export default function Post({ postData, stats }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Article>
        <Title xl>{postData.title}</Title>
        <ArticleTitle>
          <UserName name="Siwa Khongsuphap" />
          <Text sm light>
            <ArticleMeta date={postData.date} stats={stats} />
          </Text>
        </ArticleTitle>
        <div>{postData && postData.tags && <Tags tags={postData.tags} />}</div>
        <img src={postData.hero_image} alt={postData.title} />
        <Text readContent>
          <ReactMarkdown
            children={postData.contentHtml}
            escapeHtml={false}
            renderers={renderers}
          />
        </Text>
      </Article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  const stats = readingTime(postData.contentHtml);

  return {
    props: {
      postData,
      stats,
    },
  };
}
