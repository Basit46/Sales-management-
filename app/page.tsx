import React from "react";
import SalesTarget from "./components/SalesTarget";
import Box from "./components/Box";
import CustomerMap from "./components/CustomerMap";
import SalesChart from "./components/SalesChart";
import ProductList from "./components/ProductList";

const Home = () => {
  return (
    <div>
      <h1 className="text-[24px] font-medium">Dashboard</h1>

      <div className="mt-[20px] grid grid-cols-4 gap-[20px]">
        <SalesTarget />
        <CustomerMap />
        <Box
          name="Total Revenue"
          link="/orders"
          value={"231M"}
          percentUp={true}
          percent={10.6}
        />
        <Box
          name="Total Customer"
          link="/customers"
          value={"50"}
          percentUp={true}
          percent={1.3}
        />

        <Box
          name="Total Orders"
          link="/orders"
          value={"1.3k"}
          percentUp={true}
          percent={10}
        />
        <Box
          name="Total Product"
          link="/products"
          value={"10"}
          percentUp={false}
          percent={1}
        />
        <SalesChart />
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
