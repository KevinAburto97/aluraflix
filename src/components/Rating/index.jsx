import React from "react";

const cleanPercentage = (percentage) => {
    const tooLow = !Number.isFinite(+percentage) || percentage < 0;
    const tooHigh = percentage > 100;
    return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ colour, pct }) => {
    const r = 50;
    const circ = 2 * Math.PI * r;
    const strokePct = ((100 - pct) * circ) / 100;
    return (
        <circle
        r={r}
        cx={140}
        cy={60}
        fill="#242424"
        stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
        strokeWidth={"0.75rem"}
        strokeDasharray={circ}
        strokeDashoffset={pct ? strokePct : 0}
        strokeLinecap="round"
        ></circle>
    );
};

const Text = ({ percentage }) => {
    return (
        <text
            x="50%"
            y="50%"
            dominantBaseline="central"
            textAnchor="middle"
            fontSize={"1.5em"}
            fill="#f9f9f9"
            >
            {percentage.toFixed(0)}%
        </text>
    );
};

const Pie = ({ percentage, colour }) => {
    const pct = cleanPercentage(percentage);
    if(pct >= 70)
        colour = "#77dd77"
    else if (pct < 70 && pct >= 40)
        colour = "#84b6f4"
    else
        colour = "#ff6961"

    return (
        <svg width={120} height={120}>
        <g transform={`rotate(-90 ${"100 100"})`}>
            <Circle colour="lightgrey" />
            <Circle colour={colour} pct={pct} />
        </g>
            <Text percentage={pct} />
        </svg>
    );
};

export default Pie;
