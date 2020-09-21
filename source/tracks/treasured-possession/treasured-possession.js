import React from "react"

import {
    Line,
    Repeat,
    Title,
    Track,
    Verse,
    Yahweh,
    Yisrael,
} from "app/components"

import Labels from "app/labels"

const TreasuredPossession = props => (
    <Track
        cues={[
            "00:00",
            "00:03",
            "00:22",
            "00:36",
            "00:55",
            "01:13",
            "01:31",
            "01:50",
            "02:04",
            "02:22",
            "02:41",
            "03:00",
            "03:14",
        ]}
        music="treasured_possession_treasured_possession"
        {...props}
    >
        <Title>
            <Labels.TreasuredPossession.TreasuredPossession />
        </Title>
        <Verse name="one">
            <Line>
                Who is like you, oh <Yisrael />
            </Line>
            <Line>Set-apart and chosen</Line>
            <Line>
                People of Almighty <Yahweh />
            </Line>
            <Line>redeemed by His outstretched arm</Line>
        </Verse>
        <Verse name="two">
            <Line>For His praises and His esteem</Line>
            <Line>an oath made to all generations</Line>
            <Line>The plan that will stand</Line>
            <Line>till the end of time</Line>
        </Verse>
        <Verse name="three">
            <Line>Oh favoured one, lift your eyes to Him</Line>
            <Line>boast in His Set-Apart Name</Line>
            <Line>
                <Yahweh /> is your shield and your solid rock
            </Line>
            <Line>all perish but He will remain</Line>
        </Verse>
        <Verse name="four">
            <Line>
                Oh Master <Yahweh /> there is none like You
            </Line>
            <Line>creation resounds with Your praise</Line>
            <Line>The ones You establish are never moved</Line>
            <Line>they walk in the light of Your face</Line>
        </Verse>
        <Repeat name="three" />
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Repeat name="four" />
        <Repeat name="three" />
        <Verse>
            <Line>Who is like you, beloved people</Line>
            <Line>he has you set in the palm of His hand</Line>
            <Line>Oh favoured one, you are His treasure</Line>
        </Verse>
        <Verse repeat repeatText="x3">
            <Line>So walk in the light of His face</Line>
        </Verse>
    </Track>
)

export { TreasuredPossession }
