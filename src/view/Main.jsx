import React from "react";
import "../style/Main.css";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

class Main extends React.Component {
  state = {
    skills: [
      {
        id: 1,
        name: "Javascript",
        description: "Javascript Description",
        image: require("../image/javascript.png")
      },
      {
        id: 2,
        name: "react",
        description: "React Description",
        image: require("../image/react.png")
      },
      {
        id: 3,
        name: "HTML",
        description: "HTML Description",
        image: require("../image/html.png")
      },
      {
        id: 4,
        name: "CSS",
        description: "CSS Description",
        image: require("../image/css.png")
      }
    ]
  };
  render() {
    const { skills } = this.state;
    return (
      <MainLayout>
        <div className="main">
          <h1>Home Page</h1>
        </div>
        <div className="container">
          {skills.map(item => (
            <div className="card" key={item.id}>
              <Link to={`/detail/${item.id}`}>
                <img className="image" src={item.image} alt={item.name} />
                <h3 className="item-name">{item.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </MainLayout>
    );
  }
}

export default Main;
