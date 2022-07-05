
import FingerCricle from "../../../assets/filled/FingerCricle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function FingerCricleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <FingerCricle data-testid="FingerCricleIcon" className={classes} />
  );
}
