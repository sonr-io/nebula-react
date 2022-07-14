
import Stickynote from "../../../assets/duotone/Stickynote.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function StickynoteIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Stickynote data-testid="StickynoteIcon" className={classes} />
  );
}
