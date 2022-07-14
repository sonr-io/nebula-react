
import CloudLightning from "../../../assets/outline/CloudLightning.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloudLightningIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={CloudLightning} data-testid="CloudLightningIcon" className={classes} />
  );
}
