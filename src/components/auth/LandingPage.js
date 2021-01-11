import React from 'react';
import {Card, Carousel} from 'react-bootstrap'
import ToolTip from '../../images/ToolTip.jpeg'
import TodoList from '../../images/TodoList.png'
import FilterCategory from '../../images/FilterCategory.jpeg'
import FilterTag from '../../images/FilterTag.jpeg'
import TodoAccordian from '../../images/TodoAccordian.jpeg'

//this is the landing page card
export const LandingPageContent = () => {
  return (
    <Card className="mb-5" style={{ background:"#DDE2E3", borderRadius:"50px", padding:"20px"}}>
      <Carousel>
        <Carousel.Item>
          <Card.Img variant="top" src={ToolTip} />
        </Carousel.Item>
        <Carousel.Item>
          <Card.Img variant="top" src={TodoList} />
        </Carousel.Item>
        <Carousel.Item>
          <Card.Img variant="top" src={FilterCategory} />
        </Carousel.Item>
        <Carousel.Item>
          <Card.Img variant="top" src={FilterTag} />
        </Carousel.Item>
        <Carousel.Item>
          <Card.Img variant="top" src={TodoAccordian} />
        </Carousel.Item>
      </Carousel>
      <Card.Title style={{color:"#3C493F"}} className="m-2"><h2>Why sign up?</h2></Card.Title>
      <Card.Body>
      <Card.Title style={{color:"#3C493F"}} className="mb-2"><h3>With "What To Do" you can:</h3></Card.Title>
        <ul>
          <li><h5 style={{color:"#3C493F"}}>Effectively maintain your todo list</h5></li>
          <li><h5 style={{color:"#3C493F"}}>Organize your tasks with custom tags</h5></li>
          <li><h5 style={{color:"#3C493F"}}>Filter by category or tags to view specific projects</h5></li>
          <li><h5 style={{color:"#3C493F"}}>Visualize your tasks</h5></li>
          <li><h5 style={{color:"#3C493F"}}>Knock down that list in no time!</h5></li>
        </ul>
      </Card.Body>
    </Card>
  )
}