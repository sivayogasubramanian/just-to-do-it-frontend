// MUI Icons
import HomeIcon from '@material-ui/icons/Home';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import TodayIcon from '@material-ui/icons/Today';
import NextWeekIcon from '@material-ui/icons/NextWeek';

export const items = [
  { index: 1, text: 'All', icon: <HomeIcon />, path: '/home' },
  { index: 2, text: 'Due Today', icon: <TodayIcon />, path: '/today' },
  { index: 3, text: 'Due Next Week', icon: <NextWeekIcon />, path: '/home' },
  {
    index: 4,
    text: 'Completed',
    icon: <CheckCircleIcon />,
    path: '/completed',
  },
];
