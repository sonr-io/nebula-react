
import GooglePlay from "../../../assets/duotone/GooglePlay.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GooglePlayIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <GooglePlay data-testid="GooglePlayIcon" className={classes} />
  );
}
