import * as d3 from "d3";

export interface AgesData {
    age: number,
    name: string
}

const url: string ='https://udemy-react-d3.firebaseio.com/ages.json';
const width: number = 500;
const height: number = 200;

export default class D3Chart {
    constructor(element: any | Element) {
        const svg = d3.select(element)
            .append('svg')
                .attr('width', width)
                .attr('height', height)

        d3.json(url).then((agesData: Array<AgesData>) => {
            const y = d3.scaleLinear()
                .domain([0, d3.max(agesData, (d: any) => d.age)])
                .range([0, height / 2])
            console.log(agesData);

            const x = d3.scaleBand()
                .domain(agesData.map((d: AgesData) => d.name))
                .range([0, width])
                .padding(0.4)

            const rects = svg.selectAll('rect')
                .data(agesData)

            rects.enter()
                .append('rect')
                    .attr('x', (d): any => x(d.name))
                    .attr('y', (d: AgesData) => height - y(d.age))
                    .attr('width', x.bandwidth)
                    .attr('height', (d: AgesData) => y(d.age))
                    .attr('fill', (d: AgesData) => {
                        if (d.age > 10){
                            return 'red'
                        }
                        return 'green'
                    })
        })        
    }
}