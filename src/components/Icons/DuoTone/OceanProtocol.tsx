
import OceanProtocol from "../../../assets/duotone/OceanProtocol.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function OceanProtocolIcon({ className, dataTestid = "OceanProtocolIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <OceanProtocol data-testid={dataTestid} className={classes} {...rest} />
  );
}
