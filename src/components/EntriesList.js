import FaBirthdayCake from 'react-icons/lib/fa/birthday-cake'
import MdGoat from 'react-icons/lib/md/goat'
import { EntryRow } from './EntryRow'

export const EntriesList = ({entries}) => (
    <table>
        <thead>
            <tr>
                <th>Time</th>
                <th>Meal</th>
                <th>Value</th>
                <th>Birthday</th>
                <th>Goat Eater</th>
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
