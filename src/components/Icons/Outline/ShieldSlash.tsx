
import ShieldSlash from "../../../assets/outline/ShieldSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ShieldSlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ShieldSlash} data-testid="ShieldSlashIcon" className={classes} />
  );
}
