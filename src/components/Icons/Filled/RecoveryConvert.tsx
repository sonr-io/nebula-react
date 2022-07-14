
import RecoveryConvert from "../../../assets/filled/RecoveryConvert.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RecoveryConvertIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={RecoveryConvert} data-testid="RecoveryConvertIcon" className={classes} />
  );
}
