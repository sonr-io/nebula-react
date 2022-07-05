
import Shield from "../../../assets/duotone/Shield.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ShieldIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Shield data-testid="ShieldIcon" className={classes} />
  );
}
