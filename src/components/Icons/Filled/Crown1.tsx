
import Crown1 from "../../../assets/filled/Crown1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Crown1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Crown1} data-testid="Crown1Icon" className={classes} />
  );
}
