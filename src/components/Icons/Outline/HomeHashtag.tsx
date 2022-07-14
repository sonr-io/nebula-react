
import HomeHashtag from "../../../assets/outline/HomeHashtag.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HomeHashtagIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <HomeHashtag data-testid="HomeHashtagIcon" className={classes} />
  );
}
