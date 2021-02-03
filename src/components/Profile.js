import { Component, PureComponent } from "react";

export const Profile = ({ name, lastName, age, email, phones, onProfileClicked }) => {
  const profileId = Math.random();
  const handleProfileClick = () => {
    if (onProfileClicked && typeof onProfileClicked === "function") {
      onProfileClicked(profileId);
    }
  }

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
      <button onClick={handleProfileClick}>Profile ID</button>
    </div>
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
