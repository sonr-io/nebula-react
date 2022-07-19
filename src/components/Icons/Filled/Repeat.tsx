
import Repeat from "../../../assets/filled/Repeat.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RepeatIcon({ className, dataTestid = "RepeatIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Repeat data-testid={dataTestid} className={classes} {...rest} />
  );
}
