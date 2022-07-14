
import Lovely from "../../../assets/duotone/Lovely.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LovelyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Lovely} data-testid="LovelyIcon" className={classes} />
  );
}
