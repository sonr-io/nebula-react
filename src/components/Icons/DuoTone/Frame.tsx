
import Frame from "../../../assets/duotone/Frame.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FrameIcon({ className, dataTestid = "FrameIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Frame data-testid={dataTestid} className={classes} {...rest} />
  );
}
