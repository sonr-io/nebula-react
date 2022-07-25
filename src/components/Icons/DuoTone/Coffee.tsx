
import Coffee from "../../../assets/duotone/Coffee.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CoffeeIcon({ className, dataTestid = "CoffeeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Coffee data-testid={dataTestid} className={classes} {...rest} />
  );
}
