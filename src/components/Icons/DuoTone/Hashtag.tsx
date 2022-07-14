
import Hashtag from "../../../assets/duotone/Hashtag.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HashtagIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Hashtag} data-testid="HashtagIcon" className={classes} />
  );
}
