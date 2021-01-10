import React from "react";
import style from "styled-components";
import Link from "next/link";
import { Title, Text } from "../typography";
import Date from "../date";
import { UserName, ArticleTitle } from '../other'

function ListItem({ className, post }) {
  const { id, date, title, hero_image } = post;

  return (
    <li className={className} key={id}>
      <Link href={`/posts/${id}`}>
        <a>
          <img src={hero_image} alt={title} />
          <Title>{title}</Title>
          <ArticleTitle>
            <UserName name="Siwa Khongsuphap" />
            <Text sm light>
              <Date dateString={date} />
            </Text>
          </ArticleTitle>
        </a>
      </Link>
    </li>
  );
}

const ListItemStyled = style(ListItem)`
  margin: 0 0 2.5rem;

  h1 {
    margin: 1rem 0 0.5rem;
    line-height: 1.25;
  }

  a {
    color: inherit;

    &:hover {
      text-decoration: none;
    } 
  }

  img {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export default ListItemStyled;
