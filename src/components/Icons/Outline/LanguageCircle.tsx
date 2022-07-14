
import LanguageCircle from "../../../assets/outline/LanguageCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LanguageCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <LanguageCircle data-testid="LanguageCircleIcon" className={classes} />
  );
}
