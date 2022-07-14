
import ArrangeCircle from "../../../assets/filled/ArrangeCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrangeCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ArrangeCircle} data-testid="ArrangeCircleIcon" className={classes} />
  );
}
