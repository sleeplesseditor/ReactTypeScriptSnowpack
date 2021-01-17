import React, { Component } from 'react';
import D3ChartAlternate from './D3Chart/D3Chart';
import './ChartWrapper.scss';

interface WrapperProps {
    year?: string;
}

class ChartWrapper extends Component <WrapperProps, { chart: any }> {
    componentDidMount(){
        this.setState({
            chart: new D3ChartAlternate(this.refs.chart)
        })
    }

    shouldComponentUpdate(){
        return false;
    }

    componentWillReceiveProps(nextProps: WrapperProps){
        this.state.chart.update(nextProps.year)
    }

    render() {
        return (
            <div ref="chart"></div>
        )
    }
}

export default ChartWrapper;