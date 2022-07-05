
import CloudLightning from "../../../assets/filled/CloudLightning.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CloudLightningIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CloudLightning data-testid="CloudLightningIcon" className={classes} />
  );
}
