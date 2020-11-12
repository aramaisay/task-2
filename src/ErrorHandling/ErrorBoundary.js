import {Component} from 'react'

class ErrorBoundary extends Component {
    constructor (props) {
        super(props);
        this.state = {
            error: false
        }
    }

    static getDerivedStateFromError(err) {
        return {error: true};
    }

    componentDidCatch(error, errorInfo) {
        // console.log(error, errorInfo);
    }

    render() {
        const {fallback, children} = this.props;

        return this.state.error?fallback:children;
    }
}

export default ErrorBoundary;
