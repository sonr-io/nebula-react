
import Redo from "../../../assets/filled/Redo.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RedoIcon({ className, dataTestid = "RedoIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Redo data-testid={dataTestid} className={classes} {...rest} />
  );
}
