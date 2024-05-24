import { ProfileInfo } from "./ProfileInfo";
import { WelcomeMessage } from "./WelcomeMessage";
import "./App.css";
import { Fragment } from "react";

export const App = () => {
  return (
    <>
      <h1>Friend Tracker</h1>
      <div className="content-container">
        <WelcomeMessage />
        <ProfileInfo />
      </div>
    </>
  );
};
