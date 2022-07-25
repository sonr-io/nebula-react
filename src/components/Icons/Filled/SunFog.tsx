
import SunFog from "../../../assets/filled/SunFog.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SunFogIcon({ className, dataTestid = "SunFogIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SunFog data-testid={dataTestid} className={classes} {...rest} />
  );
}
