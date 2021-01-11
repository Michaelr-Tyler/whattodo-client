import React,{useState} from "react";
import { Card, Modal, Button, Carousel, Badge } from "react-bootstrap";
import MatrixImage from "../../images/MaximusMatrix.JPG"

export const DashboardModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
          <>
          <Button variant="primary" onClick={handleShow}>
            How does this work?
          </Button>

          <Modal show={show} onHide={handleClose}>
              <Card className="bg-secondary">
                <Card.Img variant="top" src={MatrixImage} />
                <Carousel>
                <Carousel.Item interval={1000000}>
                    <Card.Body className="bg-secondary p-5">
                      <Card.Title>Eisenhower Matrix:</Card.Title>
                      <Card.Text>
                        <p>
                          The Eisenhower Matrix is a method, developed by Dwight D. Eisenhower, that can help you prioritize and decide on tasks by urgency and importance. 
                          Less urgent and important tasks can be sifted out, and can be delegated or not done at all.
                        </p>
                      </Card.Text>
                    </Card.Body>
                </Carousel.Item>
                <Carousel.Item interval={1000000}>
                    <Card.Body className="bg-secondary p-5">
                      <Card.Title>The Chart and Tags</Card.Title>
                      <Card.Text>
                        <p>
                          Once you have added some todos and rated them, you can come back here and see where they fall on the chart. 
                          Add some tags to your tag manager to organize your list even more.
                        
                          You can click on the <Badge pill variant="primary">tags</Badge> in your lists to filter all of your todos by that specific tag.
                        </p>
                      </Card.Text>
                    </Card.Body>
                </Carousel.Item>
                <Carousel.Item interval={1000000}>
                    <Card.Body className="bg-secondary p-5">
                      <Card.Title>Rating Urgency</Card.Title>
                      <Card.Text>
                        <p>
                          For something to be urgent it must have a completion time in the near future. 
                          Examples of tasks that would rate higher are things such as getting food for dinner, feeding your pets, 
                          or finishing that weekly report when it's Thursday afternoon. 
                        </p>
                      </Card.Text>
                    </Card.Body>
                </Carousel.Item>
                <Carousel.Item interval={1000000}>
                    <Card.Body className="bg-secondary p-5">
                      <Card.Title>Rating Importance</Card.Title>
                      <Card.Text>
                        <p>
                          For a task to be important, it must be something only you can do. Previously, we mentioned getting food for dinner and feeding our fluffy friends. 
                          We can rate the importance lower for these because we can reach out to a loved one, friend, or assistant for help. 
                          However, that weekly report that you're required to complete and review with your boss every Friday? Rate that as very important!
                        </p>
                      </Card.Text>
                    </Card.Body>
                </Carousel.Item>
                <Carousel.Item interval={1000000}>
                    <Card.Body className="bg-secondary p-5">
                      <Card.Title>WHEW! That was a lot...</Card.Title>
                      <Card.Text>
                        <p>
                          Now it's time to organize. First, go add your tags and then fill out your todos. I bet you've got a ton of stuff you need to do!
                        </p>
                      </Card.Text>
                    </Card.Body>
                </Carousel.Item>
                </Carousel>
              </Card>
            {/* <Modal.Body><p>The Eisenhower Matrix is a method, developed by Dwight D. Eisenhower, that can help you prioritize and decide on tasks by urgency and importance, 
            along with sifting out less urgent and important tasks, which can be delegated or not done at all.</p></Modal.Body> */}
            <Modal.Footer className="bg-secondary">
              <Button variant="info" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>

  )

}