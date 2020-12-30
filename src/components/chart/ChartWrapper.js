import { text } from 'd3';
import React, { useRef, useState, useEffect } from 'react';
import Chart from './Chart';

const ChartWrapper = (props) => {
	const chartArea = useRef(null)
	const [chart, setChart] = useState(null)

	useEffect(() => {
    
		if (!chart) {
			setChart(new Chart(chartArea.current, props.todos))
		}
		else {
			chart.update()
		}
	}, [chart])

	return (
		<div className="chart-area" style={{"textAlign": "center"}} ref={chartArea}></div>
	)
}

export default ChartWrapper