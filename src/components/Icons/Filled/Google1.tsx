
import Google1 from "../../../assets/filled/Google1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Google1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Google1 data-testid="Google1Icon" className={classes} />
  );
}
