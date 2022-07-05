
import Blend from "../../../assets/duotone/Blend.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BlendIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Blend data-testid="BlendIcon" className={classes} />
  );
}
