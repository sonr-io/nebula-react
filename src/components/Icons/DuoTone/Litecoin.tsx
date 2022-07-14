
import Litecoin from "../../../assets/duotone/Litecoin.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LitecoinIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Litecoin} data-testid="LitecoinIcon" className={classes} />
  );
}
