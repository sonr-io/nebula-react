
import Strongbox from "../../../assets/filled/Strongbox.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function StrongboxIcon({ className, dataTestid = "StrongboxIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Strongbox data-testid={dataTestid} className={classes} {...rest} />
  );
}
