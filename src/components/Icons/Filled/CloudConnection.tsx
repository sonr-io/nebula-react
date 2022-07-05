
import CloudConnection from "../../../assets/filled/CloudConnection.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CloudConnectionIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CloudConnection data-testid="CloudConnectionIcon" className={classes} />
  );
}
