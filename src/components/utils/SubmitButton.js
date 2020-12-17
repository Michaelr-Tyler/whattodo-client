import React from "react"
import { Button } from "react-bootstrap"
// THIS IS THE BEST COMPONENT
export default (props) => {
    return (
        <Button onClick={props.onClick} type={props.type || "submit"} className="w-50 mx-auto">
            {props.label}
        </Button>
    )
}