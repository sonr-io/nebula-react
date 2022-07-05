
import Map1 from "../../../assets/outline/Map1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Map1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Map1 data-testid="Map1Icon" className={classes} />
  );
}
