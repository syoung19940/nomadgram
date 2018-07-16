import React,{Component} from 'react';
import Feed from './presenter';
import PropTypes from 'prop-types';

class Container extends Component{
    state = {
        loading: true,
    }

    static propTypes={
        getFeed: PropTypes.func.isRequired
    }

    componentDidMount(){
        this.props.getFeed()
    }

    render(){
        return(
            <Feed {...this.state}/>
        )
    }
}

export default Container;