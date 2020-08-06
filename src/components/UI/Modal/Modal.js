import React, {Component} from "react";
import classes from "./Modal.module.css"
import Auxiliary from '../../../hoc/Auxilary'
import BackDrop from '../Backdrop/Backdrop'

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.show !== this.props.show;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Modal updated')
    }

    render() {
        return (
            <Auxiliary>
                <BackDrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={classes.Modal}
                     style={{
                         transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                         opacity: this.props.show ? '1' : '0'
                     }}>
                    {this.props.children}
                </div>
            </Auxiliary>
        );
    }
}

export default Modal;