
import LanguageSquare from "../../../assets/outline/LanguageSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LanguageSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <LanguageSquare data-testid="LanguageSquareIcon" className={classes} />
  );
}
