import React from "react"
import { Line, Repeat, Track, Verse, Yahweh } from "../../components"

const YahwehsBlessing = props => (
    <Track
        cues={["00:16"]}
        music="because_of_the_lamb_yahwehs_blessing"
        {...props}
    >
        <Verse repeat repeatText="x4">
            <Line>
                <Yahweh /> bless you, <Yahweh /> guard you
            </Line>
            <Line>
                <Yahweh /> make His face shine upon you
            </Line>
            <Line>and show favour to you</Line>
            <Line>
                <Yahweh /> lift His face upon you
            </Line>
            <Line>and give you peace</Line>
        </Verse>
    </Track>
)

export { YahwehsBlessing }
