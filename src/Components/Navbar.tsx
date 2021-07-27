import React from "react";
import { Link } from "react-router-dom";
import { User } from "../Model/Model";
import "./App.css";

const style = {
  btn: "p-4 w-40 shadow-2xl ring-2 bg-yellow-300 text-white ring-gray-200 text-center rounded-full py-1 px-1 text-lg  mt-1",
};

export class Navbar extends React.Component<{
  user: User | undefined;
}> {
  render() {
    let loginLogOut: any;
    if (this.props.user) {
      loginLogOut = (
        <Link to="/logout">
          <button className={style.btn}>{this.props.user.userName} </button>
        </Link>
      );
    } else {
      loginLogOut = (
        <Link to="login">
          <button className={style.btn}>Login </button>
        </Link>
      );
    }

    return (
      <div className="flex flex-row h-12 space-x-20 justify-center bg-green-200">
        <Link to="/">
          <button className={style.btn}>Home</button>
        </Link>
        <Link to="/profile">
          <button className={style.btn}>Profile</button>
        </Link>

        {loginLogOut}
      </div>
    );
  }
}
