
import ArrowDown from "../../../assets/filled/ArrowDown.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowDownIcon({ className, dataTestid = "ArrowDownIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArrowDown data-testid={dataTestid} className={classes} {...rest} />
  );
}
