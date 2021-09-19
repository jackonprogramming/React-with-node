import React, { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import { postMessage } from "../API/response";

const Testing = (props) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const getResponse = async () => {
    await postMessage("message?error=ok")
      .then((res) => {
        setMessage(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        console.log("error");
        setMessage(error.data);
        setLoading(false);
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
