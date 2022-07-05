
import Coffee from "../../../assets/outline/Coffee.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CoffeeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Coffee data-testid="CoffeeIcon" className={classes} />
  );
}
