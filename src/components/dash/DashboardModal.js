import React,{useState} from "react";
import { Card, Modal, Button, Carousel } from "react-bootstrap";
import MatrixImage from "../../images/MaximusMatrix.JPG"

export const DashboardModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
          <>
          <Button variant="primary" onClick={handleShow}>
            Help!
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
                          The Eisenhower Matrix is a method, developed by Dwight D. Eisenhower, that can help you prioritize and decide on tasks by urgency and importance, 
                          along with sifting out less urgent and important tasks, which can be delegated or not done at all.
                        </p>
                      </Card.Text>
                    </Card.Body>
                </Carousel.Item>
                <Carousel.Item interval={1000000}>
                    <Card.Body className="bg-secondary p-5">
                      <Card.Title>The Chart</Card.Title>
                      <Card.Text>
                        <p>
                          Once you add some todos and rate them, you can come back here and see where they fall on the chart. 
                          Make sure you add some tags to your tag manager. 
                          These will help you organize your todo list even more. 
                          Once you've added tags you can click on them in the lists and filter all your todos by that specific tag.
                        </p>
                      </Card.Text>
                    </Card.Body>
                </Carousel.Item>
                <Carousel.Item interval={1000000}>
                    <Card.Body className="bg-secondary p-5">
                      <Card.Title>Rating urgency</Card.Title>
                      <Card.Text>
                        <p>
                          For something to be urgent it must have a completion time in the near future. 
                          Examples that would rate higher are getting food for dinner, feeding your pets, 
                          or finishing that weekly report when it is Thursday afternoon. 
                        </p>
                      </Card.Text>
                    </Card.Body>
                </Carousel.Item>
                <Carousel.Item interval={1000000}>
                    <Card.Body className="bg-secondary p-5">
                      <Card.Title>Rating importance</Card.Title>
                      <Card.Text>
                        <p>
                          For a task to be important, it must be something only you can do. In our previous example we talked about getting dinner and feeding our fluffy friends. 
                          We can rate the importance lower for these when we can reach out to a loved one, assistant, or a friend for help. 
                          However, that report your required to complete each week to review with your boss every Friday? Rate that very important!
                        </p>
                      </Card.Text>
                    </Card.Body>
                </Carousel.Item>
                <Carousel.Item interval={1000000}>
                    <Card.Body className="bg-secondary p-5">
                      <Card.Title>WHEW! That was a lot...</Card.Title>
                      <Card.Text>
                        <p>
                          Now it's time to organize. First go add your tags and then fill out your todos. I bet you've got a ton of stuff you need to do!
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
  
  // return(
  //   <Card bg="secondary" border="light">
  //   <Card.Header as="h5">What is the Eisenhower matrix?</Card.Header>
  //   <Card.Body>
  //     <Card.Title>Eisenhower Matrix:</Card.Title>
  //     <Card.Text>
  //        <p>The Eisenhower Matrix is a method, developed by Dwight D. Eisenhower, that can help you prioritize and decide on tasks by urgency and importance, 
  //        along with sifting out less urgent and important tasks, which can be delegated or not done at all.</p>
  //        {/* <p>When deciding on how to rate your tasks between important and urgent, think about a few key points. For something to be urgent, 
  //          it must have a completion time in the near future. However, for the same task to be important, it must be something only you can do. For example, 
  //          think about a task like feeding your pets. Of course this task is urgent, but could you ask for some help from a neighbor or a loved one? When rating your tasks less urgent or important, 
  //          don't think about them as being less meaningful, but that they can be put on pause or designated to others. Finally, remember these tasks can change. What was a "schedule" yesterday, could become a "do" today.</p>  */}
  //     </Card.Text>
  //   </Card.Body>
  // </Card>
  // )
}