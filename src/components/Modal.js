import React from 'react';
import "../styles/modal.css";
import PropTypes from "prop-types";

//source : https://medium.com/swlh/build-a-simple-modal-component-with-react-1b174c3f5301

export default class Modal extends React.Component{

    onClose = e => {
      this.props.onClose && this.props.onClose(e);
    };

    render(){

        if(!this.props.show){
            return null;
        }
        return (
            <div class='modal' id='modal'>
                <h2>Modal Window</h2>
                <div class='content'>{this.props.children}</div>
                <div class='actions'>
                    <button class='toggle-button' onClick = {this.onClose}>
                        close
                    </button>
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
  };