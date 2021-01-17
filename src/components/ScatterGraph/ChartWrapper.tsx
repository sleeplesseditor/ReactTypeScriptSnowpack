import React, { Component } from 'react';
import D3Chart from './D3Chart/D3Chart';

interface WrapperProps {
    data?: string[];
    updateName?: Function;
}

class ChartWrapper extends Component <WrapperProps, { chart: any }> {
    componentDidMount(){
        this.setState({
            chart: new D3Chart(this.refs.chart, this.props.data, this.props.updateName)
        })
    }

    shouldComponentUpdate() {
		return false
	}

	componentWillReceiveProps(nextProps: WrapperProps) {
		this.state.chart.update(nextProps.data)
	}

    render() {
        return <div className="chart-area" ref="chart"></div>
    }
}

export default ChartWrapper;