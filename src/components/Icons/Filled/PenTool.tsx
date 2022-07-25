
import PenTool from "../../../assets/filled/PenTool.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PenToolIcon({ className, dataTestid = "PenToolIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <PenTool data-testid={dataTestid} className={classes} {...rest} />
  );
}
