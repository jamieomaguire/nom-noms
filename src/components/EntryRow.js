import FaBirthdayCake from 'react-icons/lib/fa/birthday-cake'
import MdGoat from 'react-icons/lib/md/goat'

export const EntryRow = ({time, meal, value, birthday, goatEater}) => (
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
            {(birthday) ? <FaBirthdayCake/> : null}
        </td>
        <td>
            {(goatEater) ? <MdGoat/> : null}
        </td>
    </tr>
)
