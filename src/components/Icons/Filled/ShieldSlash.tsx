
import ShieldSlash from "../../../assets/filled/ShieldSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ShieldSlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ShieldSlash data-testid="ShieldSlashIcon" className={classes} />
  );
}
