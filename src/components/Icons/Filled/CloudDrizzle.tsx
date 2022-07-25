
import CloudDrizzle from "../../../assets/filled/CloudDrizzle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloudDrizzleIcon({ className, dataTestid = "CloudDrizzleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CloudDrizzle data-testid={dataTestid} className={classes} {...rest} />
  );
}
