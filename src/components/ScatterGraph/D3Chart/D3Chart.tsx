import * as d3 from 'd3'

const margin: any = { top: 10, bottom: 80, left: 70, right: 10 }
const width: number = 600 - margin.left - margin.right;
const height: number = 400 - margin.top - margin.bottom;

export interface YearData {
    height: number;
    age: number;
    name: string;
}

export default class D3Chart {
    [x: string]: any;
    vis: any;
    g!: d3.Selection<SVGGElement, unknown, null, undefined>;
    x!: d3.ScaleLinear<number, number>;
    y!: d3.ScaleLinear<number, number>;
    xAxisGroup!: any;
    yAxisGroup!: any;
    data!: Array<YearData>;

	constructor(element: Element | any, data: string[] | any, updateName: any) {
        const vis = this;
        vis.updateName = updateName

		vis.g = d3.select(element)
			.append("svg")
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom)
			.append("g")
				.attr("transform", `translate(${margin.left}, ${margin.top})`)

        vis.xAxisGroup = vis.g.append('g')
            .attr('transform', `translate(0, ${height})`)
        vis.yAxisGroup = vis.g.append('g')

        vis.g.append('text')
            .attr('x', width / 2)
            .attr('y', height + 40)
            .attr('font-size', 20)
            .attr('text-anchor', 'middle')
            .text('Age')

        vis.g.append('text')
            .attr('x', -(height / 2))
            .attr('y', -50)
            .attr('transform', 'rotate(-90)')
            .attr('font-size', 20)
            .attr('text-anchor', 'middle')
            .text('Height in cm')
        
		vis.update(data)		
	}

	update(data: YearData[]): void {
        const vis = this;
        vis.data = data;

        vis.x = d3.scaleLinear()
            .range([0, width])

        vis.y = d3.scaleLinear()
            .range([height, 0])

        vis.xAxisGroup = vis.g.append('g')
            .attr('transform', `translate(0, ${height})`)
        vis.yAxisGroup = vis.g.append('g')
        
        vis.x.domain([0, d3.max(vis.data, (d: any) => d.age)])
        vis.y.domain([0, d3.max(vis.data, (d: any) => d.height)])

        const xAxisCall = d3.axisBottom(vis.x)
        const yAxisCall = d3.axisLeft(vis.y)

        vis.xAxisGroup.transition().duration(1000).call(xAxisCall)
        vis.yAxisGroup.transition().duration(1000).call(yAxisCall)

        // JOIN
        const circles = vis.g.selectAll('circle')
            .data(vis.data, (d: any) => d.name)

        // EXIT
        circles.exit()
            .transition().duration(1000)
                .attr('cy', vis.y(0))
                .remove()

        // UPDATE
        circles.transition().duration(1000)
            .attr('cx', (d: any) => vis.x(d.age))
            .attr('cy', (d: any) => vis.y(d.height))

        // ENTER
        circles.enter().append('circle')
            .attr("cy", vis.y(0))
            .attr("cx", (d: any) => vis.x(d.age))
            .attr("r", 5)
            .attr('fill', '#259CD0')
            .on('click', (d: any) => vis.updateName(d.name))
            .transition().duration(1000)
				.attr("cy", (d: any) => vis.y(d.height))
	}
}
