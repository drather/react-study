import React from "react";

class ConfirmButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isConfirmed: false,
        };

        // 클래스 component - bind 방식
        // this.handleConfirm = this.handleConfirm.bind(this);
        
    }

    // 클래스 component - bind 방식
    // handleConfirm() {
    //     this.setState( (prevState ) => ( {
    //         isConfirmed: !prevState.isConfirmed,
    //     }));
    // }

    // ArrowFunction 방식
    handlerConfirm = () => {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }));
    }

    render() {
        return (
            <button
                onClick={this.handleConfirm}
                disabled={this.state.isConfirmed}
            >
                {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        );
    }

}

export default ConfirmButton;