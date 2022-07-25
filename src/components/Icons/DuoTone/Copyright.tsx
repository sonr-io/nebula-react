
import Copyright from "../../../assets/duotone/Copyright.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CopyrightIcon({ className, dataTestid = "CopyrightIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Copyright data-testid={dataTestid} className={classes} {...rest} />
  );
}
