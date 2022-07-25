
import DirectNormal from "../../../assets/filled/DirectNormal.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DirectNormalIcon({ className, dataTestid = "DirectNormalIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <DirectNormal data-testid={dataTestid} className={classes} {...rest} />
  );
}
