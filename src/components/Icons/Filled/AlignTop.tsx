
import AlignTop from "../../../assets/filled/AlignTop.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AlignTopIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <AlignTop data-testid="AlignTopIcon" className={classes} />
  );
}
