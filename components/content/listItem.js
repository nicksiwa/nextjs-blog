import React from "react";
import style from "styled-components";
import Link from "next/link";
import readingTime from "reading-time";
import { Title, Text } from "../typography";
import { UserName, ArticleTitle, ArticleMeta } from "../other";

function ListItem({ className, post }) {
  const { id, date, title, hero_image, contentHtml } = post;
  const stats = readingTime(contentHtml);

  return (
    <li className={className}>
      <Link href={`/posts/${id}`}>
        <a>
          <img src={hero_image} alt={title} />
          <Title>{title}</Title>
          <ArticleTitle>
            <UserName name="Siwa Khongsuphap" />
            <Text sm light>
              <ArticleMeta date={date} stats={stats} />
            </Text>
          </ArticleTitle>
        </a>
      </Link>
    </li>
  );
}

const ListItemStyled = style(ListItem)`
  margin: 0 0 2.5rem;

  a {
    color: inherit;

    &:hover {
      text-decoration: none;
    }

    > h1 {
      margin: 1rem 0 0.5rem;
      line-height: 1.25;
    }

    > img {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;

export default ListItemStyled;
