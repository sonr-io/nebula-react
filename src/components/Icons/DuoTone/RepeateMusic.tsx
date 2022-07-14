
import RepeateMusic from "../../../assets/duotone/RepeateMusic.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RepeateMusicIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <RepeateMusic data-testid="RepeateMusicIcon" className={classes} />
  );
}
