
import BoxTime from "../../../assets/filled/BoxTime.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BoxTimeIcon({ className, dataTestid = "BoxTimeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <BoxTime data-testid={dataTestid} className={classes} {...rest} />
  );
}
