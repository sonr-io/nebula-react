
import Ranking from "../../../assets/filled/Ranking.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RankingIcon({ className, dataTestid = "RankingIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Ranking data-testid={dataTestid} className={classes} {...rest} />
  );
}
