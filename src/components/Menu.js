import { Link } from 'react-router';
import TiHomeOutline from 'react-icons/lib/ti/home-outline';
import MdAddCircleOutline from 'react-icons/lib/md/add-circle-outline';
import TiChartPieOutline from 'react-icons/lib/ti/chart-pie-outline';
import MdFormatListBulleted from 'react-icons/lib/md/format-list-bulleted';

export const Menu = () =>
    <nav className="menu">
        <Link to="/add-entry" activeClassName="selected" className="nav-link">
            <MdAddCircleOutline />
        </Link>
        <Link to="/" activeClassName="selected" className="nav-link">
            <TiHomeOutline />
        </Link>
        <Link to="/view-chart" activeClassName="selected" className="nav-link">
            <TiChartPieOutline />
        </Link>
        <Link to="/view-list" activeClassName="selected" className="nav-link">
            <MdFormatListBulleted />
        </Link>
    </nav>
