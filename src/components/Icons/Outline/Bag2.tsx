
import Bag2 from "../../../assets/outline/Bag2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Bag2Icon({ className, dataTestid = "Bag2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Bag2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
