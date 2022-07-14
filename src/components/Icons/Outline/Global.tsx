
import Global from "../../../assets/outline/Global.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GlobalIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Global data-testid="GlobalIcon" className={classes} />
  );
}