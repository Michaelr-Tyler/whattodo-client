import React from "react"
import { Button } from "react-bootstrap"
// THIS IS THE BEST COMPONENT
export default (props) => {
    return (
        <Button 
            className="ml-1 mr-1"
            onClick={props.onClick} 
            type={props.type || "submit"} 
        >
            {props.label}
        </Button>
    )
}