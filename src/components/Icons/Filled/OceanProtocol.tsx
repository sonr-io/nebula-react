
import OceanProtocol from "../../../assets/filled/OceanProtocol.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function OceanProtocolIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <OceanProtocol data-testid="OceanProtocolIcon" className={classes} />
  );
}
