
import CloudSnow from "../../../assets/filled/CloudSnow.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloudSnowIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CloudSnow data-testid="CloudSnowIcon" className={classes} />
  );
}
