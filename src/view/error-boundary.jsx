import React, { Component } from 'react'
import React, { type Node } from 'react';
// Not the best marker, but using invariant as a signal for when to try to recover from an error

type Props = {|
    children: (setOnError: Function) => Node,
  |};
  
  function printFatalError(error: Error) {
    if (process.env.NODE_ENV === 'production') {
      return;
    }
    // eslint-disable-next-line no-console
    console.error(
      ...getFormattedMessage(
        `
          An error has occurred while a drag is occurring.
          Any existing drag will be cancelled.
  
          > ${error.message}
          `,
      ),
    );
    // eslint-disable-next-line no-console
    console.error('raw', error);
  }
  

function shouldRecover(error: Error): boolean {
  return error.message.indexOf('Invariant failed') !== -1;
}

export default class ErrorBoundary extends Component<Props> {


    onError: ?() => void;

    componentDidMount() {
      window.addEventListener('error', this.onFatalError);
    }
    componentWillUnmount() {
      window.removeEventListener('error', this.onFatalError);
    }

    setOnError = (fn: () => void) => {
        this.onError = fn;
      };

      onFatalError = (error: Error) => {
        printFatalError(error);
    
        if (this.onError) {
          this.onError();
        } else {
          warning('Could not find recovering function');
        }
    
        // If the failure was due to an invariant failure - then we handle the error
        if (shouldRecover(error)) {
          this.setState({});
        }
      };

      componentDidCatch(error: Error) {
        this.onFatalError(error);
        // if it was not an invariant - throw
        if (!shouldRecover(error)) {
          throw error;
        }
      }
    
  render() {
        return this.props.children(this.setOnError);
  }
}
