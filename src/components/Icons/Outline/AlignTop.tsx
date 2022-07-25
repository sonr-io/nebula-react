
import AlignTop from "../../../assets/outline/AlignTop.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AlignTopIcon({ className, dataTestid = "AlignTopIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <AlignTop data-testid={dataTestid} className={classes} {...rest} />
  );
}
