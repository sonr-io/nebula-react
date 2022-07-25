
import ForwardItem from "../../../assets/filled/ForwardItem.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ForwardItemIcon({ className, dataTestid = "ForwardItemIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ForwardItem data-testid={dataTestid} className={classes} {...rest} />
  );
}
