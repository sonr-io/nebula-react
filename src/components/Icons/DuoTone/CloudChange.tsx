
import CloudChange from "../../../assets/duotone/CloudChange.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CloudChangeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CloudChange data-testid="CloudChangeIcon" className={classes} />
  );
}
