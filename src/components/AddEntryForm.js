import { PropTypes } from 'react'

export const AddEntryForm = ({ time,
                               meal,
                               good,
                               okay,
                               bad,
                               onNewEntry }) => {

    // Make refs availalbe in submit function
    let _time, _meal, _good, _okay, _bad

    const submit = (e) => {
        e.preventDefault()
        // send an object with new values for the following:
        onNewEntry({
            time: _time.value,
            meal: _meal.value,
            good: _good.checked,
            okay: _okay.checked,
            bad: _bad.checked
        })
        // Once set, reset all values to empty strings
        _time.value = ''
        _meal.value = ''
        _good.checked = false
        _okay.checked = false
        _bad.checked = false
    }

    return (
        <form className="add-entry-form" onSubmit={submit}>
            <label htmlFor="time">Time:
                <input id="time"
                       type="text"
                       required
                       defaultValue={time}
                       ref={input => _time = input}/>
            </label>

            <label htmlFor="meal">Meal:
                <input id="meal"
                       type="text"
                       required
                       defaultValue={meal}
                       ref={input => _meal = input}/>
            </label>

            <div>
                <input id="good"
                       type="checkbox"
                       defaultChecked={good}
                       ref={input => _good = input}/>
                <label htmlFor="good">Good</label>
            </div>

            <div>
                <input id="okay"
                       type="checkbox"
                       defaultChecked={okay}
                       ref={input => _okay = input}/>
                <label htmlFor="okay">
                    Okay
                </label>
            </div>

            <div>
                <input id="bad"
                       type="checkbox"
                       defaultChecked={bad}
                       ref={input => _bad = input}/>
                <label htmlFor="bad">
                    Bad
                </label>
            </div>
            <button>Add Entry</button>
        </form>
    )

}

AddEntryForm.defaultProps = {
    time: "7:00AM",
    meal: "Scrambled eggs and toast",
    good: true,
    okay: false,
    bad: false
}

AddEntryForm.propTypes = {
    time: PropTypes.string.isRequired,
    meal: PropTypes.string.isRequired,
    good: PropTypes.bool.isRequired,
    okay: PropTypes.bool.isRequired,
    bad: PropTypes.bool.isRequired
}
