import React, { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import axios from "axios";

const Testing = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.post(`http://localhost:3000/message?error=ok`).then((res) => {
      setMessage(res.data.body);
      setLoading(false);

      // const persons = res.data;
      // this.setState({ persons });
    });
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
