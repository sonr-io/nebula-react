
import CloudMinus from "../../../assets/duotone/CloudMinus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloudMinusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CloudMinus data-testid="CloudMinusIcon" className={classes} />
  );
}
