
import Add from "../../../assets/filled/Add.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AddIcon({ className, dataTestid = "AddIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Add data-testid={dataTestid} className={classes} {...rest} />
  );
}
