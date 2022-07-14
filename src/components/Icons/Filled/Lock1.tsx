
import Lock1 from "../../../assets/filled/Lock1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Lock1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Lock1 data-testid="Lock1Icon" className={classes} />
  );
}
