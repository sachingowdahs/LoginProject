import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
function Areachart() {

    const options = {
        theme: "light2",
        animationEnabled: true,
        exportEnabled: true,
        title: {
            text: "Number of Software Developers"
        },
        axisY: {
            title: "Number of Developers ( in Million )"
        },
        data: [
        {
            type: "area",
            xValueFormatString: "YYYY",
            yValueFormatString: "#,##0.## Million",
            dataPoints: [
                { x: new Date(2023, 0), y: 4.6},
                { x: new Date(2022, 0), y: 4.0},
                { x: new Date(2021, 0), y: 3.4},
                { x: new Date(2020, 0), y: 2.3},
                { x: new Date(2019, 0), y: 2.2},
                { x: new Date(2018, 0), y: 2.0},
                { x: new Date(2017, 0), y: 1.2}
            ]
        }
        ]
    }
    return (
<div><CanvasJSChart options = {options}
			/></div>
    );
}

export default Areachart;