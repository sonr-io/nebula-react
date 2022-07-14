
import Youtube from "../../../assets/outline/Youtube.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function YoutubeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Youtube} data-testid="YoutubeIcon" className={classes} />
  );
}
