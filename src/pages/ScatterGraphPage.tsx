import React, { useState, useEffect } from 'react';
import ChartWrapper from '../components/ScatterGraph/ChartWrapper';
import Table from '../components/ScatterGraph/Table';
import { json } from 'd3';

interface activeName {
    activeName: string;
}

function ScatterGraphPage(): JSX.Element {
    const [scatterData, dataLoader] = useState<string[] | any>({ data: [] });
    const [activeName, activeNameSelector] = useState<string[] | any>('');

    useEffect(() => {
        json('https://udemy-react-d3.firebaseio.com/children.json')
            .then(data => dataLoader({ data }))
            .catch(error => console.log(error))
    }, []);

    const updateName = (activeName: activeName) => { 
        activeNameSelector({ activeName })
    }

    const updateData = (data: string) => {
        dataLoader({ data })
    }

    const renderChart = () => {
        if(scatterData.length === 0) {
            return 'No Data Yet'
        }
        return (
            <div className='graph-container'>
                <ChartWrapper data={scatterData.data} updateName={updateName} />
                <Table data={scatterData.data} updateData={updateData} activeName={activeName.activeName} />
            </div>
        )
    };

    return (
        <div className="App">
            <h2>Scatter Graph Wrapper</h2>
            {renderChart()}
        </div>
  );
}

export default ScatterGraphPage;