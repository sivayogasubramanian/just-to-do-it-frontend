// MUI Icons
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AssignmentTurnedInTwoToneIcon from '@material-ui/icons/AssignmentTurnedInTwoTone';
import TodayIcon from '@material-ui/icons/Today';
import DateRangeIcon from '@material-ui/icons/DateRange';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';

export const items = [
  { index: 1, text: 'All', icon: <FormatListBulletedIcon />, path: '/home' },
  { index: 2, text: 'Due Today', icon: <TodayIcon />, path: '/today' },
  {
    index: 3,
    text: 'Due This Week',
    icon: <DateRangeIcon />,
    path: '/nextweek',
  },
  {
    index: 4,
    text: 'Completed',
    icon: <AssignmentTurnedInTwoToneIcon />,
    path: '/completed',
  },
  {
    index: 5,
    text: 'Recently Deleted',
    icon: <DeleteSweepIcon />,
    path: '/deleted',
  },
];
