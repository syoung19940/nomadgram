import React,{Component} from 'react';
import PhotoComments from './presenter';

class Container extends Component {
    render(){
        return(
            <PhotoComments {...this.props}/>
        )
    }
}

export default Container;