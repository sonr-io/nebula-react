
import MoneyRecive from "../../../assets/filled/MoneyRecive.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MoneyReciveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MoneyRecive data-testid="MoneyReciveIcon" className={classes} />
  );
}
