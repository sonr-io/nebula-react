
import Cards from "../../../assets/outline/Cards.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CardsIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Cards data-testid="CardsIcon" className={classes} />
  );
}
