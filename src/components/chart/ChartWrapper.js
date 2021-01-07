
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
			chart.update(props.todos)
		}
	}, [chart, props.todos])

	return (
		<>
			<div className="chart-area text-center" style={{minWidth:"375px"}} ref={chartArea}></div>
		</>
	)
}

export default ChartWrapper