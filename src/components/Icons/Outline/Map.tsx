
import Map from "../../../assets/outline/Map.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MapIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Map} data-testid="MapIcon" className={classes} />
  );
}
