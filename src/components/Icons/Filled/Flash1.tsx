
import Flash1 from "../../../assets/filled/Flash1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Flash1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Flash1 data-testid="Flash1Icon" className={classes} />
  );
}
