import React from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
      <h1>Something went wrong. Please try again later.</h1>
      <Link to='/tasks'> go to home page</Link>
      </>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
