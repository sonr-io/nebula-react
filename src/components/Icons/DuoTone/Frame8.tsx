
import Frame8 from "../../../assets/duotone/Frame8.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Frame8Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Frame8} data-testid="Frame8Icon" className={classes} />
  );
}
