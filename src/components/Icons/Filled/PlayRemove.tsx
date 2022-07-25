
import PlayRemove from "../../../assets/filled/PlayRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PlayRemoveIcon({ className, dataTestid = "PlayRemoveIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <PlayRemove data-testid={dataTestid} className={classes} {...rest} />
  );
}
