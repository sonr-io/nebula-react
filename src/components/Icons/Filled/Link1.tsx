
import Link1 from "../../../assets/filled/Link1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Link1Icon({ className, dataTestid = "Link1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Link1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
