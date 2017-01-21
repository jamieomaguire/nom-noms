export const Form = ({selectVal}) => (
    <form>
        <p><input type="text" name="time" placeholder="Time"/></p>
        <p><input type="text" name="meal" placeholder="Meal"/></p>
        <p>
            <select defaultValue={selectVal}>
                <option>Good</option>
                <option>Okay</option>
                <option>Bad</option>
            </select>
        </p>
        <p><button name="submitBtn">Add Entry</button></p>
    </form>
)
