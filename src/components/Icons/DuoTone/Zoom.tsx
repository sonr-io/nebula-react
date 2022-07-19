
import Zoom from "../../../assets/duotone/Zoom.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ZoomIcon({ className, dataTestid = "ZoomIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Zoom data-testid={dataTestid} className={classes} {...rest} />
  );
}
