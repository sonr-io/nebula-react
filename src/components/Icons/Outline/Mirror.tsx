
import Mirror from "../../../assets/outline/Mirror.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MirrorIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Mirror} data-testid="MirrorIcon" className={classes} />
  );
}
