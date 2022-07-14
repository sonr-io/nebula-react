
import CloudSunny from "../../../assets/filled/CloudSunny.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloudSunnyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CloudSunny data-testid="CloudSunnyIcon" className={classes} />
  );
}