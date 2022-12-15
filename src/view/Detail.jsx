import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

class Detail extends React.Component {
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
    // data: ""
  };

  // componentDidMount() {
  //   const id = this.props.match.params.id;
  //   const data = this.state.skills.find(item => item.id === id);
  //   // console.log(data);
  //   this.setState({ data });
  // }

  render() {
    // const { data } = this.state;
    //     <h1>{data.name}</h1>
    //     <div>
    //       <img src={data.image} alt={data.image} />
    //       <p>{data.description}</p>
    //       <Link to="/">Back Home</Link>
    //     </div>
    const id = 1;
    return (
      <MainLayout>
        {this.state.skills.map(item => {
          if (item.id === id) {
            return (
              <div>
                <h1>{item.name}</h1>
                <img src={item.image} alt={item.image} />
                <div>
                  <p>{item.description}</p>
                  <Link to="/">Back Home</Link>
                </div>
              </div>
            );
          }
        })}
      </MainLayout>
    );
  }
}
export default Detail;
