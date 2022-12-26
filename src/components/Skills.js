import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import HTML from '../asset/html.png';
import CSS from '../asset/css.png';
import JavaScript from '../asset/javascript.png';
import Reactimg from '../asset/Reactimg.png';
import Node from '../asset/node.png';
import Mongo from '../asset/mongo.png';
import ReactBootstrap from '../asset/React-bootstrap.png';
import GitHub from '../asset/github.png';

function Skills() {
  let skills = [
    {
      img:[HTML],
      name: "HTML"
    },
    {
      img: [CSS],
      name: "CSS"
    },
    {
      img: [ReactBootstrap],
      name: "Bootstrap"
    },
    {
      img: [JavaScript],
      name: "JavaScript"
    },
    {
      img:  [Reactimg],
      name: "ReactJS"
    },
    {
      img: [Node],
      name: "NodeJS"
    },
    {
      img: [Mongo],
      name: "MongoDB"
    },
    {
      img: [GitHub],
      name: 'Github'
    }
  ]
  return (
    <div className="container">
      <div className="row">
        <h4 className="b-line">
          Skills/Experience
        </h4>
        {
          skills.map((item) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-12 p-1 text-center">
                {/* <Card style={{ width: '7rem' }}>
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body>
                    <Card.Header></Card.Header>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                {/* </Card.Body>
                </Card> */} 
                <div class="card boder" style={{width: '7rem'}}>
                  <img src={item.img}  className="card-img-top p-2" alt="..."/>
                    <div class="card-body">
                      <h6 class="card-title">{item.name}</h6>
                    </div>
                </div>
              </div>
            )
          })
        }

      </div>
    </div>
  );
}


export default Skills