
import Ranking from "../../../assets/duotone/Ranking.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function RankingIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Ranking data-testid="RankingIcon" className={classes} />
  );
}
