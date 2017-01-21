import { Link } from 'react-router'
import TiHomeOutline from 'react-icons/lib/ti/home-outline'
import MdAddCircleOutline from 'react-icons/lib/md/add-circle-outline'
import TiChartPieOutline from 'react-icons/lib/ti/chart-pie-outline'
import MdFormatListBulleted from 'react-icons/lib/md/format-list-bulleted'

export const Menu = () =>
    <nav className="menu">
        <Link to="/add-entry" activeClassName="selected">
            <MdAddCircleOutline />
        </Link>
        <Link to="/" activeClassName="selected">
            <TiHomeOutline />
        </Link>
        <Link to="/view-chart" activeClassName="selected">
            <TiChartPieOutline />
        </Link>
        <Link to="/view-list" activeClassName="selected">
            <MdFormatListBulleted />
        </Link>
    </nav>
