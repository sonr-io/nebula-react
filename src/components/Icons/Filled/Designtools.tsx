
import Designtools from "../../../assets/filled/Designtools.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DesigntoolsIcon({ className, dataTestid = "DesigntoolsIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Designtools data-testid={dataTestid} className={classes} {...rest} />
  );
}
