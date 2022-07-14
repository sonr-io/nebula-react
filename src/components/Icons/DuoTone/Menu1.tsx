
import Menu1 from "../../../assets/duotone/Menu1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Menu1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Menu1 data-testid="Menu1Icon" className={classes} />
  );
}
