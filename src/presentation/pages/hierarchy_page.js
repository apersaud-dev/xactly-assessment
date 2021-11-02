import { useState, useEffect } from "react";
import mockData from '../../data/mockData.json';
import mockDataTwo from '../../data/mockDataTwo.json';
import RecursiveSalesRole from "../components/recursive_sales_role";

function HierarchyPage() {
    const [apiData, setApiData] = useState({ title: "" });

    const refreshData = () => {
        const thirtyMinutes = 30 * 1000; // Set to 30 seconds so that you can see the simulation of the data change
        let firstMockDataset = true;
        setInterval(() => {
            if (firstMockDataset) {
                setApiData(mockData);
            }
            else {
                setApiData(mockDataTwo);
            }
            firstMockDataset = !firstMockDataset;
        }, thirtyMinutes);
    }

    useEffect(() => {
        setApiData(mockData);
        refreshData()
    }, [])


    if (apiData.title === "") {
        return (
            <div>Data is loading...</div>
        )
    } else {
        return (
            <main className="hierarchy">
                <h1 className="hierarchy__headline">Dashboard - Hierarchy</h1>
                <RecursiveSalesRole
                    key={`${apiData.title}`}
                    data={apiData}
                />
            </main>
        )
    }
}

export default HierarchyPage;