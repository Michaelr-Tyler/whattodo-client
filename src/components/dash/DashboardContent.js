import React from "react";
import { Card } from "react-bootstrap";
import MatrixImage from "../../images/MaximusMatrix.JPG"

export const DashboardContent = () => {

  return(
    <Card bg="secondary" border="light">
    <Card.Img variant="top" src={MatrixImage} />
    <Card.Header as="h5">What is the Eisenhower matrix?</Card.Header>
    <Card.Body>
      <Card.Title>Eisenhower Matrix:</Card.Title>
      <Card.Text>
         <p>The Eisenhower Matrix is a method, developed by Dwight D. Eisenhower, that can help you prioritize and decide on tasks by urgency and importance, 
         along with sifting out less urgent and important tasks, which can be delegated or not done at all.</p>
         <p>When deciding on how to rate your tasks between important and urgent, think about a few key points. For something to be urgent, 
           it must have a completion time in the near future. However, for the same task to be important, it must be something only you can do. For example, 
           think about a task like feeding your pets. Of course this task is urgent, but could you ask for some help from a neighbor or a loved one? When rating your tasks less urgent or important, 
           don't think about them as being less meaningful, but that they can be put on pause or designated to others. Finally, remember these tasks can change. What was a "schedule" yesterday, could become a "do" today.</p> 
      </Card.Text>
    </Card.Body>
  </Card>
  )
}