
import Google from "../../../assets/filled/Google.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function GoogleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Google data-testid="GoogleIcon" className={classes} />
  );
}
