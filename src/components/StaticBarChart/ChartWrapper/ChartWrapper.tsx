import React, { Component } from 'react';
import D3Chart from '../D3Chart/D3Chart';

interface WrapperProps {
    gender?: string;
}

class ChartWrapper extends Component <WrapperProps, { chart: any }> {
    componentDidMount(){
        this.setState({
            chart: new D3Chart(this.refs.chart)
        })
    }

    shouldComponentUpdate(){
        return false;
    }

    componentWillReceiveProps(nextProps: WrapperProps){
        this.state.chart.update(nextProps.gender)
    }

    render() {
        return (
            <div ref="chart">
            </div>
        )
    }
}

export default ChartWrapper;