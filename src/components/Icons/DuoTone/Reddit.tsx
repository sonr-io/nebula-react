
import Reddit from "../../../assets/duotone/Reddit.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RedditIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Reddit data-testid="RedditIcon" className={classes} />
  );
}
