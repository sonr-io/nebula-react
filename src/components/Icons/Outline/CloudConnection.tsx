
import CloudConnection from "../../../assets/outline/CloudConnection.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloudConnectionIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CloudConnection data-testid="CloudConnectionIcon" className={classes} />
  );
}
