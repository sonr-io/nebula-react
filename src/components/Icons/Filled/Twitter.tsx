
import Twitter from "../../../assets/filled/Twitter.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TwitterIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Twitter data-testid="TwitterIcon" className={classes} />
  );
}
