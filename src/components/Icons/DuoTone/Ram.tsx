
import Ram from "../../../assets/duotone/Ram.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RamIcon({ className, dataTestid = "RamIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Ram data-testid={dataTestid} className={classes} {...rest} />
  );
}
