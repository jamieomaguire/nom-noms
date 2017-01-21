import { EntryRow } from './EntryRow'
import { PropTypes } from 'react'

export const EntriesList = ({entries}) => (
    <table>
        <thead>
            <tr>
                <th>Time</th>
                <th>Meal</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
            {entries.map((entry, i) =>
                <EntryRow key={i}
                          {... entry}/> // spread operator
                )}
        </tbody>
    </table>
)

// Custom Error handling to ensure prop type is an array
EntriesList.propTypes = {
    entries: function(props){
        if(!Array.isArray(props.entries)) {
            return new Error(
                "EntriesList should be an array"
            )
        // } else if (!props.entries.length) {
        //     return new Error(
        //         "EntriesList must have at least one record"
        //     )
        } else {
            return null;
        }
    }
}
