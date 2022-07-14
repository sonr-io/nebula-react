
import DirectRight from "../../../assets/filled/DirectRight.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DirectRightIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DirectRight data-testid="DirectRightIcon" className={classes} />
  );
}
