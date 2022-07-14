
import CloudMinus from "../../../assets/filled/CloudMinus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloudMinusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={CloudMinus} data-testid="CloudMinusIcon" className={classes} />
  );
}
