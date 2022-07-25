
import Link2 from "../../../assets/duotone/Link2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Link2Icon({ className, dataTestid = "Link2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Link2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
