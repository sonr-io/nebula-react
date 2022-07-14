
import Coffee from "../../../assets/duotone/Coffee.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CoffeeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Coffee} data-testid="CoffeeIcon" className={classes} />
  );
}
