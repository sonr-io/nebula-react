
import Stacks from "../../../assets/filled/Stacks.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function StacksIcon({ className, dataTestid = "StacksIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Stacks data-testid={dataTestid} className={classes} {...rest} />
  );
}
