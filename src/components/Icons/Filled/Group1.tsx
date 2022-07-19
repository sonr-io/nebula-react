
import Group1 from "../../../assets/filled/Group1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Group1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Group1 data-testid="Group1Icon" className={classes} />
  );
}
