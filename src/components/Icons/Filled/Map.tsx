
import Map from "../../../assets/filled/Map.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MapIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Map data-testid="MapIcon" className={classes} />
  );
}
