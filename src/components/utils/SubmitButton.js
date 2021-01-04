import React from "react"
import { Button } from "react-bootstrap"
export default (props) => {
    return (
        <Button 
            className="ml-1 mr-1"
            variant={props.variant}
            onClick={props.onClick} 
            type={props.type || "submit"} 
        >
            {props.label}
        </Button>
    )
}