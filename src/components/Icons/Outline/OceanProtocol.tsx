
import OceanProtocol from "../../../assets/outline/OceanProtocol.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function OceanProtocolIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={OceanProtocol} data-testid="OceanProtocolIcon" className={classes} />
  );
}
