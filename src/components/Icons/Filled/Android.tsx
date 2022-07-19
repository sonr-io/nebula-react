
import Android from "../../../assets/filled/Android.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AndroidIcon({ className, dataTestid = "AndroidIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Android data-testid={dataTestid} className={classes} {...rest} />
  );
}
