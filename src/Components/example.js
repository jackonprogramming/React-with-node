import React, { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import { getMessage, postMessage } from "../API/response";

const Testing = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const getResponse = async () => {
    await postMessage("message")
      .then((res) => {
        setMessage(res.data.data);
        setLoading(false);
      })
      .catch(() => {
        // console.log("error");
      });
  };

  useEffect(() => {
    getResponse();
  }, []);
  return (
    <div>
      {loading ? (
        <>
          <CircularProgress />
        </>
      ) : (
        <h1>{message}</h1>
      )}
    </div>
  );
};

export default Testing;
