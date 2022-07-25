
import CloudConnection from "../../../assets/filled/CloudConnection.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloudConnectionIcon({ className, dataTestid = "CloudConnectionIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CloudConnection data-testid={dataTestid} className={classes} {...rest} />
  );
}
