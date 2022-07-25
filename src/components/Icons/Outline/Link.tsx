
import Link from "../../../assets/outline/Link.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LinkIcon({ className, dataTestid = "LinkIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Link data-testid={dataTestid} className={classes} {...rest} />
  );
}
