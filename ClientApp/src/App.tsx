import "./custom.css";
import Counter from "./components/Counter";
import FetchData from "./components/FetchData";
import Home from "./components/Home";
import Layout from "./components/Layout";
import React, { useEffect } from "react";
import { Route } from "react-router";
import { SampleApi } from "./openapisdk";

export default () => {
  useEffect(() => {
    test();
  }, []);

  async function test() {
    const api = new SampleApi({ basePath: "https://localhost:5001" });
    const res = await api.samplePost("testid", {
      param: "testparam",
    });
    alert(res.data.value);
  }

  return (
    <Layout>
      <Route exact path="/" component={Home} />
      <Route path="/counter" component={Counter} />
      <Route path="/fetch-data/:startDateIndex?" component={FetchData} />
    </Layout>
  );
};
