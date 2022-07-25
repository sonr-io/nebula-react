
import CloudAdd from "../../../assets/outline/CloudAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloudAddIcon({ className, dataTestid = "CloudAddIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CloudAdd data-testid={dataTestid} className={classes} {...rest} />
  );
}
