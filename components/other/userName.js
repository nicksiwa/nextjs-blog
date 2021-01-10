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

	> img {
		margin-right: 10px !important;
	}
`;

export default UserNameStyle;
