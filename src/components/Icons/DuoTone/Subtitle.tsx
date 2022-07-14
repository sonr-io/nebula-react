
import Subtitle from "../../../assets/duotone/Subtitle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SubtitleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Subtitle} data-testid="SubtitleIcon" className={classes} />
  );
}
