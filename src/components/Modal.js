import React from 'react';

//source : https://medium.com/swlh/build-a-simple-modal-component-with-react-1b174c3f5301

export default class Modal extends React.Component{

    render(){

        if(!this.props.show){
            return null;
        }
        return <div>{this.props.children}</div>
    }
}