import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'

export const Header = ({title, subTitle}) => (
    <div className="header">
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
    </div>
)
