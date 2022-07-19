
import KeySquare from "../../../assets/filled/KeySquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function KeySquareIcon({ className, dataTestid = "KeySquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <KeySquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
