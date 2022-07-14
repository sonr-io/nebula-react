
import AlignHorizontally from "../../../assets/filled/AlignHorizontally.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AlignHorizontallyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <AlignHorizontally data-testid="AlignHorizontallyIcon" className={classes} />
  );
}
