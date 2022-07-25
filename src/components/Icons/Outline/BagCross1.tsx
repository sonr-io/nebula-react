
import BagCross1 from "../../../assets/outline/BagCross1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BagCross1Icon({ className, dataTestid = "BagCross1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <BagCross1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
