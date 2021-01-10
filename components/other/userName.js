import React from "react";
import style from "styled-components";
import { Avatar } from "../image";
import { Title } from "../typography";

function UserName({ className, name }) {
  return (
    <div className={className}>
      <Avatar sm src="/images/profile.jpg" alt={name} />
      <Title sm>{name}</Title>
    </div>
  );
}

const UserNameStyle = style(UserName)`
	display: flex;
	align-items: center;
  margin-right: 10px;
  
  > h1 {
    margin: 5px 0;
  }

	> img {
    width: auto;
		margin: 5px 10px 5px 0 !important;
	}
`;

export default UserNameStyle;
