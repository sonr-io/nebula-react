
import Ui8 from "../../../assets/duotone/Ui8.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Ui8Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Ui8 data-testid="Ui8Icon" className={classes} />
  );
}
