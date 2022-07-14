
import LocationMinus from "../../../assets/duotone/LocationMinus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LocationMinusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={LocationMinus} data-testid="LocationMinusIcon" className={classes} />
  );
}
