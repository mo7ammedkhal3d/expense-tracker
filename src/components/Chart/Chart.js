import React from "react";
import ChartBar from './ChartBar';
import './Chart.css';

//#region 
    // we select the label nested of id because the label
    // Her is uniqe the it's posiable to use it as key
//#endregion

const Chart = props =>{
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totlaMaximum = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint =>
            <ChartBar 
            key={dataPoint.label}
            value={dataPoint.value} 
            maxValue={totlaMaximum} 
            label={dataPoint.label}/>)}
        </div>
    );
}

export default Chart;