
import HomeHashtag from "../../../assets/filled/HomeHashtag.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function HomeHashtagIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <HomeHashtag data-testid="HomeHashtagIcon" className={classes} />
  );
}
