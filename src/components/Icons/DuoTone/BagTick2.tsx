
import BagTick2 from "../../../assets/duotone/BagTick2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BagTick2Icon({ className, dataTestid = "BagTick2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <BagTick2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
