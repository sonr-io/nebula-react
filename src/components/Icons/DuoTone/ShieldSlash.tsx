
import ShieldSlash from "../../../assets/duotone/ShieldSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ShieldSlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ShieldSlash data-testid="ShieldSlashIcon" className={classes} />
  );
}