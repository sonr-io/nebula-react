
import BulletList from "../../../assets/duotone/BulletList.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BulletListIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BulletList data-testid="BulletListIcon" className={classes} />
  );
}
