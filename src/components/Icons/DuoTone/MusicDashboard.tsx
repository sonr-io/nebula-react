
import MusicDashboard from "../../../assets/duotone/MusicDashboard.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MusicDashboardIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={MusicDashboard} data-testid="MusicDashboardIcon" className={classes} />
  );
}
