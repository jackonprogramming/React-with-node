import React, { Component } from "react";
import { CircularProgress } from "@material-ui/core";

class ExampleLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      message: "",
    };
  }

  getResponse = async () => {
    await postMessage("message")
      .then((res) => {
        // setMessage(res.data.data);
        // setLoading(false);
      })
      .catch(() => {
        // console.log("error");
      });
  };

  componentWillMount() {
    this.setState({ message: "ay mi madre el alan" });
    this.setState({ loading: false });
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    const { message, loading } = this.state;
    return (
      <div>
        {loading ? (
          <>
            <CircularProgress />
          </>
        ) : (
          <>
            <h1>{message}</h1>
          </>
        )}
      </div>
    );
  }
}

export default ExampleLifeCycle;
