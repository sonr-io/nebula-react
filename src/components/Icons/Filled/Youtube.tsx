
import Youtube from "../../../assets/filled/Youtube.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function YoutubeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Youtube data-testid="YoutubeIcon" className={classes} />
  );
}
