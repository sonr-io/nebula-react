
import LampSlash from "../../../assets/outline/LampSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LampSlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <LampSlash data-testid="LampSlashIcon" className={classes} />
  );
}
