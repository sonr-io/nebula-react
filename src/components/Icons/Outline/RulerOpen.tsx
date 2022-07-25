
import RulerOpen from "../../../assets/outline/RulerOpen.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RulerOpenIcon({ className, dataTestid = "RulerOpenIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <RulerOpen data-testid={dataTestid} className={classes} {...rest} />
  );
}
