import React from 'react';

//source : https://medium.com/swlh/build-a-simple-modal-component-with-react-1b174c3f5301

export default class Modal extends React.Component{

    // onClose = e =>{this.props.onClose && this.props.onClose(e)};

    onClose = e => {
      this.props.onClose(e);
    };

    render(){

        if(!this.props.show){
            return null;
        }
        return (
            <div class='ModalWrapper'>
                <div>{this.props.children}</div>
                <div>
                    <button onClick = {e =>{this.onClose(e)}}>
                        close
                    </button>
                </div>
            </div>
        )
    }
}