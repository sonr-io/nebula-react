
import Blogger from "../../../assets/outline/Blogger.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BloggerIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Blogger} data-testid="BloggerIcon" className={classes} />
  );
}
