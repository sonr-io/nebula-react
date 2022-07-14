
import Subtitle from "../../../assets/outline/Subtitle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SubtitleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Subtitle data-testid="SubtitleIcon" className={classes} />
  );
}
