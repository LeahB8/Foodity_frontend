import React from "react";

export default class ProgressBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            percentage: 0
        }
        this.nextStep = this.nextStep.bind(this)
    }

    nextStep() {
        if (this.state.percentage === 100) return
        this.setState({ percentage: this.state.percentage + 33 })
    }

    render() {
        return (
            <div>

                <h2> Search Progress </h2>
                <div className="progress-bar">
                    <div className="filler" style={{ width: `${this.state.percentage}%` }} />
                </div>

                <div style={{ marginTop: '20px' }}>
                    <button onClick={this.nextStep}>
                        Next Step
                    </button>
                </div>
            </div>
        )
    }
}