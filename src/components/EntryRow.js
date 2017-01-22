import TiDeleteOutline from 'react-icons/lib/ti/delete-outline'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import { PropTypes } from 'react'

export const EntryRow = ({time, meal, good, okay, bad}) => (
    <tr>
        <td>
            {time}
        </td>
        <td>
            {meal}
        </td>
        <td>
            {(good) ? <SnowFlake/> : null}
        </td>
        <td>
            {(okay) ? <SnowFlake/> : null}
        </td>
        <td>
            {(bad) ? <SnowFlake/> : null}
        </td>
        <td>
            <button className="deleteBtn">
                <TiDeleteOutline size={30} color={'#999'}/>
            </button>
        </td>
    </tr>
)

EntryRow.proptypes = {
    time: PropTypes.string.isRequired,
    meal: PropTypes.string.isRequired,
    good: PropTypes.bool,
    okay: PropTypes.bool,
    bad: PropTypes.bool
}
