import React from 'react';
import Card from 'react-bootstrap/card'
import Carousel from 'react-bootstrap/carousel'
import ToolTip from '../../images/ToolTip.jpeg'
import TodoList from '../../images/TodoList.png'
import FilterCategory from '../../images/FilterCategory.jpeg'
import FilterTag from '../../images/FilterTag.jpeg'
import TodoAccordian from '../../images/TodoAccordian.jpeg'
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
      <Card.Title style={{color:"#3C493F"}}><h1>Why sign up?</h1></Card.Title>
      <Card.Body>
      <Card.Title style={{color:"#3C493F"}}><h2>With "What To Do" you can:</h2></Card.Title>
        <ul>
          <li><h3 style={{color:"#3C493F"}}>Effectively maintain your todo list</h3></li>
          <li><h3 style={{color:"#3C493F"}}>Organize your tasks with custom tags</h3></li>
          <li><h3 style={{color:"#3C493F"}}>Filter by category or tags to view specific projects</h3></li>
          <li><h3 style={{color:"#3C493F"}}>Visualize your tasks</h3></li>
          <li><h3 style={{color:"#3C493F"}}>Knock down that list in no time!</h3></li>
        </ul>
      </Card.Body>
    </Card>
  )
}