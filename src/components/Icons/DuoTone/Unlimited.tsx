
import Unlimited from "../../../assets/duotone/Unlimited.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function UnlimitedIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Unlimited data-testid="UnlimitedIcon" className={classes} />
  );
}
