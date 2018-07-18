import React,{Component} from 'react';
import PhotoAction from './presenter';


class Container extends Component{

    render(){
        return <PhotoAction
        {...this.props}/>
    }

}

export default Container;