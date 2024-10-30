function StartScreen({ numQuestions, dispatch }) {
    function startGame() {
        dispatch({ type: "start" });
    }

    return (
        <div>
            <h3 className="start">Welcome to The React Quiz</h3>
            <p>{numQuestions} question to test your react mastery</p>
            <button className="btn btn-ui" onClick={startGame}>
                Let&apos;s start
            </button>
        </div>
    );
}

export default StartScreen;
