
import Hospital from "../../../assets/filled/Hospital.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HospitalIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Hospital} data-testid="HospitalIcon" className={classes} />
  );
}
