import Head from "next/head";
import React, { useEffect, useState } from "react";
import AddProduct from "@/components/prodcuts/Add";
import UpdateProduct from "@/components/prodcuts/Update";
import ProductsTable from "@/components/prodcuts/Table";
import { useSelector } from "react-redux";

function AdminDashboard() {
  const status = useSelector((state) => state.products.status);
  return (
    <div>
      <Head>
        <title>admin dashboard</title>
      </Head>
      <div className="container">
        {status === "add" ? (
          <AddProduct />
        ) : status === "update" ? (
          <UpdateProduct />
        ) : null}
        <ProductsTable />
      </div>
    </div>
  );
}

export default AdminDashboard;
