
import Box1 from "../../../assets/duotone/Box1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Box1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Box1 data-testid="Box1Icon" className={classes} />
  );
}
