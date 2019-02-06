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

const AroundTheMountain = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="humble_offerings_around_the_mountain"
        {...props}
    >
        <Title>
            <Labels.HumbleOfferings.AroundTheMountain />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { AroundTheMountain }
