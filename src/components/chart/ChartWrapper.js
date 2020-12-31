
import React, { useRef, useState, useEffect } from 'react';
import Chart from './Chart';

const ChartWrapper = (props) => {
	const chartArea = useRef(null)
	// const chartArea2 = useRef(null)
	const [chart, setChart] = useState(null)

	useEffect(() => {
    // setChart(new Chart(chartArea.current, props.todos))
		if (!chart) {
			setChart(new Chart(chartArea.current, props.todos))
			console.log("if hit")
		}
		else {
			chart.update(props.todos)
			console.log("else hit")
		}
	}, [chart, props.todos])

	// new Chart(chartArea2.current, props.todos)

	return (
	<>
		<div className="chart-area" style={{"textAlign": "center"}} ref={chartArea}></div>
		{/* <div className="chart-area" style={{"textAlign": "center"}} ref={chartArea2}></div> */}
	</>
	)
}

export default ChartWrapper