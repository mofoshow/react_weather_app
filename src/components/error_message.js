import React from "react";

class ErrorMessage extends React.Component{

    render(){
        return(
            <div className="col-12 mt-5 text-center">
                <h2>{this.props.errorMessage}</h2>
            </div>
        )
    }
}

export default ErrorMessage;