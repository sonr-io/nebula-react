
import Bubble from "../../../assets/duotone/Bubble.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BubbleIcon({ className, dataTestid = "BubbleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Bubble data-testid={dataTestid} className={classes} {...rest} />
  );
}
