import React from "react"

import {
    Line,
    Repeat,
    Title,
    Track,
    Verse,
    Yahweh,
    Yahshua,
    Yisrael,
} from "app/components"

import Labels from "app/labels"

const YouAreWorthy = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="humble_offerings_you_are_worthy"
        {...props}
    >
        <Title>
            <Labels.HumbleOfferings.YouAreWorthy />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { YouAreWorthy }