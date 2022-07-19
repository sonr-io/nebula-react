
import Hierarchy2 from "../../../assets/duotone/Hierarchy2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Hierarchy2Icon({ className, dataTestid = "Hierarchy2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Hierarchy2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
