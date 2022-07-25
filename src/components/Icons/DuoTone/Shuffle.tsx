
import Shuffle from "../../../assets/duotone/Shuffle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ShuffleIcon({ className, dataTestid = "ShuffleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Shuffle data-testid={dataTestid} className={classes} {...rest} />
  );
}
