import React, { useEffect, useState } from "react";
import Form from "../../components/Form";
import Spinner from "../../components/Spinner";
import Table from "../../components/Table";
import Constants from "../../helpers/Constants";
import { filter } from "../../helpers/function";
import "./style.css";
function Logger() {
  const [apiData, setApiData] = useState([]);
  const [loggerData, setLoggerData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState([]);
  useEffect(() => {
    // get the logger data from the endPoint
    setLoading(true);
    fetch(Constants.API_END_POINT)
      .then((response) => response.json())
      .then((responseData) => {
        setLoggerData(responseData.result.auditLog);
        setApiData(responseData.result.auditLog);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      query.map((item) => filter(item, loggerData, setLoggerData, query));
    } else {
      setLoggerData(apiData);
    }
  }, [query, apiData]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Form setQuery={setQuery} />
          <Table loggerData={loggerData} />
        </>
      )}
    </>
  );
}

export default Logger;
