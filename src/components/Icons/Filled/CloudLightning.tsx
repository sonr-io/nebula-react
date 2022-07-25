
import CloudLightning from "../../../assets/filled/CloudLightning.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloudLightningIcon({ className, dataTestid = "CloudLightningIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CloudLightning data-testid={dataTestid} className={classes} {...rest} />
  );
}
