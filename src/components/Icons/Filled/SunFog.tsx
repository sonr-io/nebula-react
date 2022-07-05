
import SunFog from "../../../assets/filled/SunFog.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SunFogIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SunFog data-testid="SunFogIcon" className={classes} />
  );
}
