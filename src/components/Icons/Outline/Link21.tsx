
import Link21 from "../../../assets/outline/Link21.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Link21Icon({ className, dataTestid = "Link21Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Link21 data-testid={dataTestid} className={classes} {...rest} />
  );
}
