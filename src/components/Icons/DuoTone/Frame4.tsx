
import Frame4 from "../../../assets/duotone/Frame4.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Frame4Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Frame4 data-testid="Frame4Icon" className={classes} />
  );
}
