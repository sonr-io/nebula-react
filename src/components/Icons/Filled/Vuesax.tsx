
import Vuesax from "../../../assets/filled/Vuesax.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VuesaxIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Vuesax data-testid="VuesaxIcon" className={classes} />
  );
}
