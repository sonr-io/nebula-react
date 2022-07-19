
import AttachSquare from "../../../assets/filled/AttachSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AttachSquareIcon({ className, dataTestid = "AttachSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <AttachSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
