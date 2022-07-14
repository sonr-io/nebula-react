
import AlignRight from "../../../assets/filled/AlignRight.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AlignRightIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={AlignRight} data-testid="AlignRightIcon" className={classes} />
  );
}
