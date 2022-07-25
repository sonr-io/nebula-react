
import SaveRemove from "../../../assets/filled/SaveRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SaveRemoveIcon({ className, dataTestid = "SaveRemoveIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SaveRemove data-testid={dataTestid} className={classes} {...rest} />
  );
}
