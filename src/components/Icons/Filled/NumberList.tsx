
import NumberList from "../../../assets/filled/NumberList.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NumberListIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <NumberList data-testid="NumberListIcon" className={classes} />
  );
}
