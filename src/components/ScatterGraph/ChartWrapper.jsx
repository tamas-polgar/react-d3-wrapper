import React, { Component } from 'react';
import D3Chart from './D3Chart/D3Chart';

class ChartWrapper extends Component {
    componentDidMount(){
        this.setState({
            chart: new D3Chart(this.refs.chart, this.props.data)
        })
        console.log('Chart Wrapper level', this.props.data)
    }

    shouldComponentUpdate(){
        return false;
    }

    componentWillReceiveProps(nextProps) {
        this.state.chart.update(nextProps.data)
	}

    render() {
        return (
            <div ref="chart"></div>
        )
    }
}

export default ChartWrapper;