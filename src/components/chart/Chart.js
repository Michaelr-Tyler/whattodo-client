import * as d3 from 'd3'


const MARGIN = { TOP: 40, BOTTOM: 40, LEFT: 25, RIGHT:75 }
const WIDTH = 400 - MARGIN.LEFT - MARGIN.RIGHT
const HEIGHT = 400 - MARGIN.TOP - MARGIN.BOTTOM

class Chart {
	constructor(element, todos) {
		let vis = this
    vis.data = todos
    
		console.log(vis.data)

		vis.g = d3.select(element)
			.append("svg")
				.attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
				.attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
			.append("g")
				.attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)

		vis.x = d3.scaleLinear()
			.range([0, WIDTH])

		vis.y = d3.scaleLinear()
			.range([HEIGHT , 0])
			

		// by default axis generators get set to 0,0 on the canvas which is the top left
		vis.xAxisGroup = vis.g.append("g")
			.attr("transform", `translate(0, ${HEIGHT / 2})`)

		//
    vis.yAxisGroup = vis.g.append("g")
			.attr("transform", `translate(${WIDTH/2}, 0)`)
    

		vis.g.append("text")
		.attr("x", WIDTH - 225)
		.attr("y", HEIGHT - 225)
		.attr("font-size", 20)
		.attr("text-anchoe", "middle")
    .text("Do")
    
    vis.g.append("text")
		.attr("x", WIDTH - 100)
		.attr("y", HEIGHT - 225)
		.attr("font-size", 20)
		.attr("text-anchoe", "middle")
    .text("Schedule")
    
    vis.g.append("text")
		.attr("x", WIDTH - 100)
		.attr("y", HEIGHT - 75)
		.attr("font-size", 20)
		.attr("text-anchoe", "middle")
    .text("Eliminate")
    
    vis.g.append("text")
		.attr("x", WIDTH - 250)
		.attr("y", HEIGHT - 75)
		.attr("font-size", 20)
		.attr("text-anchoe", "middle")
    .text("Delegate")
    
    vis.g.append("text")
		.attr("x", WIDTH - 250)
		.attr("y", HEIGHT - 165)
		.attr("font-size", 10)
		.attr("text-anchoe", "middle")
    .text("More Urgent")
    
    vis.g.append("text")
		.attr("x", WIDTH - 100)
		.attr("y", HEIGHT - 165)
		.attr("font-size", 10)
		.attr("text-anchoe", "middle")
		.text("Less Urgent")

		vis.g.append("text")
		.attr("x", -(HEIGHT / 4))
		.attr("y", 145)
		.attr("transform", "rotate(-90)")
		.attr("font-size", 10)
		.attr("text-anchor", "middle")
    .text("More important")

    vis.g.append("text")
		.attr("x", -(HEIGHT - 75))
		.attr("y", 145)
		.attr("transform", "rotate(-90)")
		.attr("font-size", 10)
		.attr("text-anchor", "middle")
		.text("Less important")


		vis.update(todos)		
	}
	
	update(todos) {
		let vis = this
		vis.data = todos
		vis.x.domain([10 , 0])
		vis.y.domain([0 , 10])

		const xAxisCall = d3.axisBottom(vis.x).tickValues("")
		const yAxisCall = d3.axisLeft(vis.y).tickValues("")

		vis.xAxisGroup.call(xAxisCall)
		vis.yAxisGroup.call(yAxisCall)

		//JOIN
		const circles = vis.g.selectAll("circle")
		.data(vis.data, d => d.name)
		
		//EXIT
		circles.exit().remove()

		//UPDATE
		circles
			.attr("cx", d => vis.x(d.urgent))
			.attr("cy", d => vis.y(d.important))

		//ENTER
		circles.enter().append("circle")
		.attr("cx", d => vis.x(d.urgent))
		.attr("cy", d => vis.y(d.important))
		.attr("r", 5)
		.attr("fill", "grey")
	}
}

export default Chart