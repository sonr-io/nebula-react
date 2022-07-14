
import CardSlash from "../../../assets/outline/CardSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CardSlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CardSlash data-testid="CardSlashIcon" className={classes} />
  );
}
