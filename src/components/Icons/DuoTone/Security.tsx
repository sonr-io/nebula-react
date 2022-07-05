
import Security from "../../../assets/duotone/Security.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SecurityIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Security data-testid="SecurityIcon" className={classes} />
  );
}
