
import GpsSlash from "../../../assets/outline/GpsSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GpsSlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <GpsSlash data-testid="GpsSlashIcon" className={classes} />
  );
}