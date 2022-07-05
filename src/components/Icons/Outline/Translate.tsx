
import Translate from "../../../assets/outline/Translate.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function TranslateIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Translate data-testid="TranslateIcon" className={classes} />
  );
}
