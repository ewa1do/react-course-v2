import { useReducer } from "react";

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
    console.log(state, action);

    const actions = {
        inc: { ...state, count: state.count + state.step },
        dec: { ...state, count: state.count - state.step },
        setCount: { ...state, count: action.payload },
        setStep: { ...state, step: action.payload },
        reset: { ...state, ...initialState },
    };

    return actions[action.type] || state;
}

function DateCounter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { count, step } = state;

    // This mutates the date object.
    const date = new Date("june 21 2027");
    date.setDate(date.getDate() + count);

    const dec = function () {
        dispatch({ type: "dec" });
    };

    const inc = function () {
        dispatch({ type: "inc" });
    };

    const defineCount = function (e) {
        dispatch({ type: "setCount", payload: Number(e.target.value) });
    };

    const defineStep = function (e) {
        dispatch({ type: "setStep", payload: Number(e.target.value) });
    };

    const reset = function () {
        dispatch({ type: "reset" });
    };

    return (
        <div className="counter">
            <div>
                <input type="range" min="0" max="10" value={step} onChange={defineStep} />
                <span>{step}</span>
            </div>

            <div>
                <button onClick={dec}>-</button>
                <input value={count} onChange={defineCount} />
                <button onClick={inc}>+</button>
            </div>

            <p>{date.toDateString()}</p>

            <div>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
}
export default DateCounter;
