
import CloudPlus from "../../../assets/filled/CloudPlus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloudPlusIcon({ className, dataTestid = "CloudPlusIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CloudPlus data-testid={dataTestid} className={classes} {...rest} />
  );
}
