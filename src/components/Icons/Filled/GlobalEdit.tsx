
import GlobalEdit from "../../../assets/filled/GlobalEdit.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GlobalEditIcon({ className, dataTestid = "GlobalEditIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <GlobalEdit data-testid={dataTestid} className={classes} {...rest} />
  );
}
