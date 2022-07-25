
import Path from "../../../assets/filled/Path.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PathIcon({ className, dataTestid = "PathIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Path data-testid={dataTestid} className={classes} {...rest} />
  );
}
