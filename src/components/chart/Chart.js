import * as d3 from 'd3'




const MARGIN = { TOP: 10, BOTTOM: 10, LEFT: 10, RIGHT:50 }
const WIDTH = 400 - MARGIN.LEFT - MARGIN.RIGHT
const HEIGHT = 400 - MARGIN.TOP - MARGIN.BOTTOM 

class Chart {
	constructor(element, todos) {

		let vis = this
		vis.data = todos

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

    vis.yAxisGroup = vis.g.append("g")
			.attr("transform", `translate(${WIDTH/2}, 0)`)
		

		vis.g.append("text")
		.attr("x", WIDTH/4)
		.attr("y", HEIGHT/4)
		.attr("font-size", 20)
		.attr("fill", "#fa6401")
    .text("Do")
    
    vis.g.append("text")
		.attr("x", WIDTH/1.5)
		.attr("y", HEIGHT/4)
		.attr("font-size", 20)
		.attr("fill", "#344555")
    .text("Schedule")
    
    vis.g.append("text")
		.attr("x", WIDTH/1.5)
		.attr("y", HEIGHT/1.25)
		.attr("font-size", 20)
		.attr("fill", "#ffb600")
    .text("Eliminate")
    
    vis.g.append("text")
		.attr("x", WIDTH/4)
		.attr("y", HEIGHT/1.25)
		.attr("font-size", 20)
		.attr("text-anchor", "middle")
		.attr("fill", "#25acb1")
    .text("Delegate")
    
    vis.g.append("text")
		.attr("x", WIDTH/4)
		.attr("y", HEIGHT/2.1)
		.attr("font-size", 10)
		.attr("text-anchor", "middle")
    .text("More Urgent")
    
    vis.g.append("text")
		.attr("x", WIDTH/1.5)
		.attr("y", HEIGHT/2.1)
		.attr("font-size", 10)
		.text("Less Urgent")

		vis.g.append("text")
		.attr("x", -(HEIGHT / 4))
		.attr("y", WIDTH/2.1)
		.attr("transform", "rotate(-90)")
		.attr("font-size", 10)
		.attr("text-anchor", "middle")
    .text("More important")

    vis.g.append("text")
		.attr("x", -(HEIGHT - 75))
		.attr("y", WIDTH/2.1)
		.attr("transform", "rotate(-90)")
		.attr("font-size", 10)
		.attr("text-anchor", "middle")
		.text("Less important")


		vis.update(todos)		
	}
	
	update(todos) {
		let vis = this
		vis.data = todos
		const color = (todos) => {
			if (todos.urgent >= 5 && todos.important >= 5) {
				return "#fa6401"
			} else if (todos.urgent >= 5 && todos.important < 5) {
				return "#25acb1"
			} else if (todos.urgent < 5 && todos.important >= 5) {
				return "#344555"
			} else if (todos.urgent < 5 && todos.important < 5) {
				return "#ffb600"
			}
		}
		vis.x.domain([10 , 0])
		vis.y.domain([0 , 10])

		const xAxisCall = d3.axisBottom(vis.x).tickValues("")
		const yAxisCall = d3.axisLeft(vis.y).tickValues("")

		vis.xAxisGroup.call(xAxisCall)
		vis.yAxisGroup.call(yAxisCall)


		//JOIN
		const circles = vis.g.selectAll("circle")
		.data(vis.data, d => d.task)

			
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
		.attr("fill", color)
		.append('title')
		.text(d => d.task)
	}
}

export default Chart