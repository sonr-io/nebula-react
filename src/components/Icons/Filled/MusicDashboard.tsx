
import MusicDashboard from "../../../assets/filled/MusicDashboard.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MusicDashboardIcon({ className, dataTestid = "MusicDashboardIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MusicDashboard data-testid={dataTestid} className={classes} {...rest} />
  );
}
