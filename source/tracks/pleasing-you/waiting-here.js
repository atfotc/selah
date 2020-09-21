import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const WaitingHere = props => (
    <Track
        cues={[
            "00:00",
            "00:18",
            "00:38",
            "00:57",
            "01:37",
            "01:55",
            "02:14",
            "02:55",
        ]}
        music="pleasing_you_waiting_here"
        {...props}
    >
        <Title>
            <Labels.PleasingYou.WaitingHere />
        </Title>
        <Verse name="one">
            <Line>I’m breathing in the fear of You</Line>
            <Line>My heart is changed, my life renewed</Line>
            <Line>I’m breathing in the fear of You</Line>
            <Line>Everything I am I give to You</Line>
        </Verse>
        <Verse name="two">
            <Line>I’m walking in the light of You</Line>
            <Line>Your Word, the lamp</Line>
            <Line>has shown me truth</Line>
            <Line>I'm walking in the Light of You</Line>
            <Line>Everyday my feet will follow You</Line>
        </Verse>
        <Verse name="three" repeat>
            <Line>I am standing in the hope of You</Line>
            <Line>and no matter what I won’t be moved</Line>
            <Line>I am standing in the hope of You</Line>
            <Line>
                <Yahweh /> I am waiting here for You
            </Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Verse>
            <Line>
                <Yahweh /> I am waiting here for You
            </Line>
        </Verse>
    </Track>
)

export { WaitingHere }
