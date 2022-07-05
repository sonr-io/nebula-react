
import DirectNormal from "../../../assets/duotone/DirectNormal.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function DirectNormalIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DirectNormal data-testid="DirectNormalIcon" className={classes} />
  );
}
