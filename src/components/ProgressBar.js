import React from "react";

export default class ProgressBar extends React.Component {
    //     state = {
    //         percentage: 0
    //     }



    // nextStep() {
    //     if (this.state.percentage === 100) return
    //     this.setState({ percentage: this.state.percentage + 33 })
    // }

    render() {
        return (
            <div className="progress-bar-container">

                <h4> Search Progress </h4>
                <div className="progress-bar">
                    <div className="filler" style={{ width: `${this.props.percentage}%` }} />
                </div>

                <div style={{ marginTop: '20px' }}>

                </div>
            </div>
        )
    }
}