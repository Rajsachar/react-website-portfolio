import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover": {
        fill: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
  },
}));

export const Logo = () => {
    const classes = useStyles();

    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-35 -10 220 220"
        className={classes.svgHover}
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_5" data-name="Layer 5">
            <rect className="cls-1" x="50.47" y="31.33" width="9.9" height="203.85" rx="3.75"/>
            <rect className="cls-1" x="70.39" y=".71" width="9.9" height="202.54" rx="3.75" transform="translate(-38.83 35.21) rotate(-35.65)"/>
            <rect className="cls-1" x="70.39" y="123.21" width="9.9" height="202.54" rx="3.75" transform="translate(-88.83 10.21) rotate(-35.65)"/>

          </g>
        </g>
      </svg>
    );
};
