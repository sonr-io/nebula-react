
import More from "../../../assets/filled/More.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MoreIcon({ className, dataTestid = "MoreIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <More data-testid={dataTestid} className={classes} {...rest} />
  );
}
