import React,{Component} from 'react';
import Feed from './presenter';
import PropTypes from 'prop-types';

class Container extends Component{
    state = {
        loading: true,
    }

    static propTypes={
        getFeed: PropTypes.func.isRequired,
        feed: PropTypes.array
    }

    componentDidMount(){
        if(!this.props.feed){
            this.props.getFeed()
        } else {
            this.setState({
                loading:false,
            })
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.feed){
            this.setState({
                loading: false,
            })
        }
    }

    render(){
        return(
            <Feed {...this.state} feed = {this.props.feed}/>
        )
    }
}

export default Container;