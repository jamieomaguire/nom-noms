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

        // Reset label positions
        // let labelled = document.querySelectorAll('active-label')
        // console.log(labelled)
        // for (let i = 0; i < labelled.length; i++) {
        //     el[i].classList.remove('active-label');
        // }
    }

    // add an animation to the labels
    const toggleLabel = (e) => {
        const labelled = document.querySelector('.active-label')
        if (e.target && e.target.nodeName === 'LABEL') {
            if(!labelled){
                if (!e.target.previousSibling.value) {
                    e.target.classList.toggle('active-label')
                } else {
                    e.target.classList.add('active-label')
                }

            } else {
                if (!labelled.previousSibling.value) {
                    labelled.classList.remove('active-label')
                    e.target.classList.toggle('active-label')
                } else {
                    e.target.classList.add('active-label')
                }
            }
        } else if (e.target && e.target.nodeName === 'INPUT') {
            if(!labelled){
                if (!e.target.value) {
                    e.target.nextSibling.classList.toggle('active-label')
                } else {
                    e.target.nextSibling.classList.add('active-label')
                }

            } else {
                if (!e.target.value) {
                    labelled.classList.remove('active-label')
                    e.target.nextSibling.classList.toggle('active-label')
                } else {
                    e.target.nextSibling.classList.add('active-label')
                }
            }
        }
    }

    return (
        <div className="form-container">
            <form className="add-entry-form" onSubmit={submit} autoComplete="off">
                    <div className="test" onClick={toggleLabel}>
                        <input id="time"
                               className="text-input"
                               type="text"
                               required
                               autoComplete="off"
                               defaultValue={time}
                               ref={input => _time = input}/>
                        <label htmlFor="time">Time:</label>
                    </div>

                    <div className="test" onClick={toggleLabel}>
                        <input id="meal"
                               className="text-input"
                               type="text"
                               required
                               autoComplete="off"
                               defaultValue={meal}
                               ref={input => _meal = input}/>
                        <label htmlFor="meal">Meal:</label>
                   </div>

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
                <button className="btn blue">Add Entry</button>
            </form>
        </div>
    )

}

AddEntryForm.defaultProps = {
    time: "",
    meal: "",
    good: false,
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
