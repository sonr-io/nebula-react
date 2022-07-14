
import Blend from "../../../assets/outline/Blend.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BlendIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Blend} data-testid="BlendIcon" className={classes} />
  );
}
