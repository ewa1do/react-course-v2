function NextButton({ dispatch, answer, isFinished }) {
    if (answer === null) return null;

    if (!isFinished) {
        return (
            <div className="btn btn-ui" onClick={() => dispatch({ type: "nextQuestion" })}>
                Next
            </div>
        );
    }

    if (isFinished) {
        return (
            <div className="btn btn-ui" onClick={() => dispatch({ type: "finish" })}>
                Finish
            </div>
        );
    }
}

export default NextButton;
