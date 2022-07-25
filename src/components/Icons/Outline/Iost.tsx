
import Iost from "../../../assets/outline/Iost.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function IostIcon({ className, dataTestid = "IostIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Iost data-testid={dataTestid} className={classes} {...rest} />
  );
}
