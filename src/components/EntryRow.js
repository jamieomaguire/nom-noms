import TiDeleteOutline from 'react-icons/lib/ti/delete-outline'
import { PropTypes } from 'react'

export const EntryRow = ({time, meal, value}) => (
    <tr>
        <td>
            {time}
        </td>
        <td>
            {meal}
        </td>
        <td>
            {value}
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
    value: PropTypes.string.isRequired
}
