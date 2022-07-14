
import CloudRemove from "../../../assets/outline/CloudRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloudRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CloudRemove data-testid="CloudRemoveIcon" className={classes} />
  );
}
