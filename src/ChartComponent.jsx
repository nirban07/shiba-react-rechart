import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { fetchCryptoData } from "./services/api";

const CryptoChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const cryptoData = await fetchCryptoData();
      // Map API data to chart data format
      const chartData = cryptoData.map((coin) => ({
        name: coin.name,
        price: coin.current_price,
      }));
      console.log(chartData);
      setData(chartData);
    };

    loadData();
    const interval = setInterval(loadData, 20000); // Fetch every 20 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div>
      <h1>Cryptocurrency Prices</h1>
      <BarChart
        width={1000}
        height={800}
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="price" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default CryptoChart;
