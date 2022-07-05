
import Blogger from "../../../assets/duotone/Blogger.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BloggerIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Blogger data-testid="BloggerIcon" className={classes} />
  );
}
