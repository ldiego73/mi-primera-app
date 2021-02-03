import logo from "./logo.svg";
import "./App.css";

import { Header, Footer, Profile, ProfileClass } from "./components";

function App() {
  const user = {
    id: 100,
    name: "Luis",
    lastName: "Diego",
    age: 30,
    email: "lfdiego7@gmail.com",
    phones: ["+51 33333333", "+1 4444444"],
  };

  const handleClick = () => console.log("Mi primer click");
  const handleProfileClicked = (profileId) => console.log("Mi profile ID is: ", profileId);

  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" onClick={handleClick} />
        <Profile
          name={user.name}
          lastName={user.lastName}
          age={user.age}
          email={user.email}
          phones={user.phones}
          onProfileClicked={handleProfileClicked}
        />
      </header>
      <Footer />
    </div>
  );
}

export default App;
