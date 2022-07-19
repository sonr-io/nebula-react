
import Medal from "../../../assets/filled/Medal.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MedalIcon({ className, dataTestid = "MedalIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Medal data-testid={dataTestid} className={classes} {...rest} />
  );
}
