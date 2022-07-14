
import ArrowSquareRight from "../../../assets/filled/ArrowSquareRight.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowSquareRightIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ArrowSquareRight data-testid="ArrowSquareRightIcon" className={classes} />
  );
}
