import React,{useState, useEffect, useMemo} from 'react'
import Chart from 'react-apexcharts'


export default function Results({dieHistory, showGraph}) {

    const [graph, setGraph] = useState({
        options: {
            chart: {
                id: 'Die-Graph'
            },
            xaxis: {
                categories: [1, 2, 3, 4, 5, 6]
            }
        },
        series: [{
            name: 'Dice Roll',
            data: []
        }]
    })
    const updateChart = () => {
        setGraph({
            options: {
                chart: {
                    id: 'Die-Graph'
                },
                xaxis: {
                    categories: [1, 2, 3, 4, 5, 6]
                }
            },
            series: [{
                name: 'Dice Roll',
                data: [dieHistory[1], dieHistory[2], dieHistory[3], dieHistory[4], dieHistory[5], dieHistory[6]]
            }]
        })
    }
    console.log(graph)
    return (
        <div>
            { showGraph ?
            <Chart
                options={graph.options} 
                series={graph.series} 
                type='bar'
                width={500}
                height={320}
                /> : null}
            <button onClick={updateChart}>update</button>
        </div>
    )
}
