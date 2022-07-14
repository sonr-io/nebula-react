
import CloudFog from "../../../assets/duotone/CloudFog.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloudFogIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={CloudFog} data-testid="CloudFogIcon" className={classes} />
  );
}
