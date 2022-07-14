
import Battery2full from "../../../assets/duotone/Battery2full.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Battery2fullIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Battery2full} data-testid="Battery2fullIcon" className={classes} />
  );
}
