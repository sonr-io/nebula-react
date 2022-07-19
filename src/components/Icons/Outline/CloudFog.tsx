
import CloudFog from "../../../assets/outline/CloudFog.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloudFogIcon({ className, dataTestid = "CloudFogIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CloudFog data-testid={dataTestid} className={classes} {...rest} />
  );
}
