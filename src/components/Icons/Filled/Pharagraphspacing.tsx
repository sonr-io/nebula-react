
import Pharagraphspacing from "../../../assets/filled/Pharagraphspacing.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PharagraphspacingIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Pharagraphspacing data-testid="PharagraphspacingIcon" className={classes} />
  );
}
