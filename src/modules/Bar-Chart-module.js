import { BarChart, Bar, ResponsiveContainer,Tooltip } from "recharts";
const data = [
    {
        name: "1",
        amt: 1500
    },
    {
        name: "2",
        amt: 1600
    },
    {
        name: "3",
        amt: 1700
    },
    {
        name: "4",
        amt: 1800
    },
    {
        name: "5",
        amt: 1900
    },
    {
        name: "6",
        amt: 2000
    },
    {
        name: "7",
        amt: 2100
    },
    {
        name: "1",
        amt: 2200
    },
    {
        name: "2",
        amt: 2300
    },
    {
        name: "3",
        amt: 2400
    },
    {
        name: "4",
        amt: 2500
    },
    {
        name: "5",
        amt: 2600
    },
    {
        name: "6",
        amt: 2400
    },
    {
        name: "7",
        amt: 2300
    },
    {
        name: "1",
        amt: 2200
    },
    {
        name: "2",
        amt: 2100
    },
    {
        name: "3",
        amt: 2000
    },
    {
        name: "4",
        amt: 1900
    },
    {
        name: "5",
        amt: 1800
    },
    {
        name: "6",
        amt: 1700
    },
    {
        name: "1",
        amt: 1500
    },
    {
        name: "2",
        amt: 1600
    },
    {
        name: "3",
        amt: 1700
    },
    {
        name: "4",
        amt: 1800
    },
    {
        name: "5",
        amt: 1900
    },
    {
        name: "6",
        amt: 2000
    },
    {
        name: "7",
        amt: 2100
    },
    {
        name: "1",
        amt: 2200
    },
    {
        name: "2",
        amt: 2300
    },
    {
        name: "3",
        amt: 2400
    },
    {
        name: "4",
        amt: 2500
    },
    {
        name: "5",
        amt: 2600
    },
    {
        name: "6",
        amt: 2400
    },
    {
        name: "7",
        amt: 2300
    },
    {
        name: "1",
        amt: 2200
    },
    {
        name: "2",
        amt: 2100
    },
    {
        name: "3",
        amt: 2000
    },
    {
        name: "4",
        amt: 1900
    },
    {
        name: "5",
        amt: 1800
    },
    {
        name: "6",
        amt: 1700
    },
    {
        name: "1",
        amt: 1500
    },
    {
        name: "2",
        amt: 1600
    },
    {
        name: "3",
        amt: 1700
    },
    {
        name: "4",
        amt: 1800
    },
    {
        name: "5",
        amt: 1900
    },
    {
        name: "6",
        amt: 2000
    },
    {
        name: "7",
        amt: 2100
    },
    {
        name: "1",
        amt: 2200
    },
    {
        name: "2",
        amt: 2300
    },
    {
        name: "3",
        amt: 2400
    },
    {
        name: "4",
        amt: 2500
    },
    {
        name: "5",
        amt: 2600
    },
    {
        name: "6",
        amt: 2400
    },
    {
        name: "7",
        amt: 2300
    },
    {
        name: "1",
        amt: 2200
    },
    {
        name: "2",
        amt: 2100
    },
    {
        name: "3",
        amt: 2000
    },
    {
        name: "4",
        amt: 1900
    },
    {
        name: "5",
        amt: 1800
    },
    {
        name: "6",
        amt: 1700
    }   
 
];

function BarChartModule(props){
    return (
        <div className={`${props.classes}`} style={{ width: "100%", height: 60 }}>
            <ResponsiveContainer>
                <BarChart data={data}>
                    <Tooltip />
                    <Bar dataKey="amt" fill="#4d777a80" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default BarChartModule;