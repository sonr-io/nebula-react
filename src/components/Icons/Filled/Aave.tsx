
import Aave from "../../../assets/filled/Aave.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AaveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Aave data-testid="AaveIcon" className={classes} />
  );
}
