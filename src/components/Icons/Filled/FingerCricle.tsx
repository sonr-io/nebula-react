
import FingerCricle from "../../../assets/filled/FingerCricle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FingerCricleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={FingerCricle} data-testid="FingerCricleIcon" className={classes} />
  );
}
