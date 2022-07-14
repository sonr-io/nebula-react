
import Tag2 from "../../../assets/duotone/Tag2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Tag2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Tag2} data-testid="Tag2Icon" className={classes} />
  );
}
