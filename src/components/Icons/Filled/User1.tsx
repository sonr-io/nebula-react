
import User1 from "../../../assets/filled/User1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function User1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <User1 data-testid="User1Icon" className={classes} />
  );
}
