
import Tenx from "../../../assets/outline/Tenx.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function TenxIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Tenx data-testid="TenxIcon" className={classes} />
  );
}
