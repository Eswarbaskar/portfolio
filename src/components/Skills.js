import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

function Skills() {
  let skills = [
    {
      img: "https://raw.githubusercontent.com/Vickyarjun/portfolio-react-app/master/src/assets/html.png",
      name: "HTML"
    },
    {
      img: "https://raw.githubusercontent.com/Vickyarjun/portfolio-react-app/master/src/assets/css.png",
      name: "CSS"
    },
    {
      img: "https://raw.githubusercontent.com/Vickyarjun/portfolio-react-app/master/src/assets/React-bootstrap.png",
      name: "Bootstra"
    },
    {
      img: "https://raw.githubusercontent.com/Vickyarjun/portfolio-react-app/master/src/assets/javascript.png",
      name: "JavaScript"
    },
    {
      img: "https://raw.githubusercontent.com/Vickyarjun/portfolio-react-app/master/src/assets/Reactimg.png",
      name: "ReactJS"
    },
    {
      img: "https://raw.githubusercontent.com/Vickyarjun/portfolio-react-app/master/src/assets/node.png",
      name: "NodeJS"
    },
    {
      img: "https://raw.githubusercontent.com/Vickyarjun/portfolio-react-app/master/src/assets/mongo.png",
      name: "MongoDB"
    },
    {
      img: 'https://raw.githubusercontent.com/Vickyarjun/portfolio-react-app/master/src/assets/github.png',
      name: 'Github'
    }
  ]
  return (
    <div className="container mt-2 p-2">
      <div className="row">
        <h4 className="b-line">
          Skills/Experience
        </h4>
        {
          skills.map((item) => {
            return (
              <div className="col-lg-3 col-md-4 col-xsm-6 p-1 text-center">
                {/* <Card style={{ width: '7rem' }}>
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body>
                    <Card.Header></Card.Header>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                {/* </Card.Body>
                </Card> */} 
                <div class="card boder" style={{width: '7rem'}}>
                  <img src={item.img}  class="card-img-top" alt="..."/>
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