import { Component, PureComponent } from "react";
import styled from "styled-components";
import { Button } from "antd";

const color = "#fff";

const ProfileContainer = styled.div`
  border: 1px solid ${color};
  border-radius: 8px;
  padding: 16px;
`;

const ProfileLabel = styled.div`
  color: ${color};
  font-weight: bold;
  text-decoration: underline;
`;

export const Profile = ({
  name,
  lastName,
  age,
  email,
  phones,
  onProfileClicked,
}) => {
  const profileId = Math.random();
  const handleProfileClick = () => {
    if (onProfileClicked && typeof onProfileClicked === "function") {
      onProfileClicked(profileId);
    }
  };

  return (
    <ProfileContainer>
      <ProfileLabel>Nombres:</ProfileLabel> {name} <br />
      <ProfileLabel>Apellidos</ProfileLabel>: {lastName} <br />
      <ProfileLabel>Edad:</ProfileLabel> {age} <br />
      <ProfileLabel>Email:</ProfileLabel> {email} <br />
      <ProfileLabel>Telefonos:</ProfileLabel>{" "}
      {phones.map((p, index) => (
        <span key={index}>{p}</span>
      ))}{" "}
      <br />
      <Button type="primary">Hola Mundo</Button>
      <br />
      <br />
      <button
        className="button is-primary is-medium"
        onClick={handleProfileClick}
      >
        Profile ID
      </button>
    </ProfileContainer>
  );
};

export class ProfileClass extends PureComponent {
  constructor() {
    super();

    this.profileId = Math.random();

    this.handleProfileClick = this.handleProfileClick.bind(this);
  }

  handleProfileClick() {
    const { onProfileClicked } = this.props;

    if (onProfileClicked && typeof onProfileClicked === "function") {
      onProfileClicked(this.profileId);
    }
  }

  render() {
    const { name, lastName, age, email, phones } = this.props;

    return (
      <div>
        Nombres: {name} <br />
        Apellidos: {lastName} <br />
        Edad: {age} <br />
        Email: {email} <br />
        Telefonos:{" "}
        {phones.map((p, index) => (
          <span key={index}>{p}</span>
        ))}
        <button onClick={this.handleProfileClick}>Profile ID</button>
      </div>
    );
  }
}
