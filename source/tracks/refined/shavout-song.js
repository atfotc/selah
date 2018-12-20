import React from "react"

import {
    Line,
    Repeat,
    Title,
    Track,
    Verse,
    Yahweh,
    Yahshua,
} from "app/components"

import Labels from "app/labels"

const ShavoutSong = props => (
    <Track cues={["00:00"]} music="refined_shavout_song" {...props}>
        <Title>
            <Labels.Refined.ShavoutSong />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { ShavoutSong }
