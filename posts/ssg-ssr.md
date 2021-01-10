---
title: "When to Use Static Generation v.s. Server-side Rendering"
date: "2020-01-02"
hero_image: "/images/article_1.jpg"
---

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.

```javascript
import React from "react";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import js from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import Layout from "../../components/layout";
import { Title, Text } from "../../components/typography";

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

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <Title xl>{postData.title}</Title>
        <Text light>
          <Date dateString={postData.date} />
        </Text>
        <Text content>
          <ReactMarkdown
            children={postData.contentHtml}
            escapeHtml={false}
            renderers={renderers}
          />
        </Text>
      </article>
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

  return {
    props: {
      postData,
    },
  };
}
```
