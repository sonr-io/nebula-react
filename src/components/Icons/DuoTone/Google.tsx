
import Google from "../../../assets/duotone/Google.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GoogleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Google} data-testid="GoogleIcon" className={classes} />
  );
}
