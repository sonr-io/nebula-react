
import Crown from "../../../assets/filled/Crown.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CrownIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Crown data-testid="CrownIcon" className={classes} />
  );
}