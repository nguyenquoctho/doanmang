import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

export default class SignUp extends Component {

    render() {
        return (
            <Modal 
            className="modalSignUp"
             isOpen={this.props.isOpen }
            toggle={this.props.onToggle}>
                <ModalHeader>Sign Up Form
                <button
                     className="btnClose"
                     onClick={this.props.onToggle}
                     >x</button>
                </ModalHeader>
                <ModalBody>
                    <form>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                />
                        </div>
                        <div className="form-group">
                            <label>Date of birth</label>
                            <input
                                type="date"
                                className="form-control"
                                 />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="gmail"
                                className="form-control"
                                 />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                 />
                        </div>
                        <div className="form-group">
                            <label>Comfirm</label>
                            <input
                                type="password"
                                className="form-control"
                                />
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <button 
                    className="btn btnSignUp"
                   
                    >
                        Sign Up
                    </button>
                   
                </ModalFooter>
            </Modal>
        )
    }
}
