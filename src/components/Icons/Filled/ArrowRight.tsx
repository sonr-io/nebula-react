
import ArrowRight from "../../../assets/filled/ArrowRight.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowRightIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ArrowRight data-testid="ArrowRightIcon" className={classes} />
  );
}
