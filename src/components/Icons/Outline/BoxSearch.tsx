
import BoxSearch from "../../../assets/outline/BoxSearch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BoxSearchIcon({ className, dataTestid = "BoxSearchIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <BoxSearch data-testid={dataTestid} className={classes} {...rest} />
  );
}
