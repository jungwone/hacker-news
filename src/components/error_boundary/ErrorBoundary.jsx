import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h2>{"Unexpected error occured :("}</h2>
          {this.state.error && <div>{this.state.error.message}</div>}
        </>
      );
    }

    return this.props.children;
  }
}
