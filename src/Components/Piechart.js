import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
function Piechart() {

    const options = {
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Software Developers"
        },
        data: [{
            type: "pie",
            startAngle: 75,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: 18, label: "Angular" },
                { y: 49, label: "React" },
                { y: 9, label: "Python" },
                { y: 5, label: "React-native" },
                { y: 19, label: "Java" }
            ]
        }]
    }
    return (
<div><CanvasJSChart options = {options}
			/></div>
    );
}

export default Piechart;