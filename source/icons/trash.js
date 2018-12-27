import React, { Component } from "react"
import PropTypes from "prop-types"
import Svg, { Path } from "react-native-svg"
import { SizeContext } from "app/context"
import { relativeSize } from "app/helpers"
import { AccentLightColor } from "app/colors"

class Trash extends Component {
    static propTypes = {
        fill: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
    }

    static defaultProps = {
        fill: AccentLightColor,
        width: 31.5,
        height: 36,
    }

    render() {
        const { fill, width, height } = this.props

        return (
            <SizeContext.Consumer>
                {context => (
                    <Svg
                        viewBox="0 0 448 512"
                        width={relativeSize(width, context)}
                        height={relativeSize(height, context)}
                    >
                        <Path
                            fill={fill}
                            d="M192 188v216c0 6.627-5.373 12-12 12h-24c-6.627 0-12-5.373-12-12V188c0-6.627 5.373-12 12-12h24c6.627 0 12 5.373 12 12zm100-12h-24c-6.627 0-12 5.373-12 12v216c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12V188c0-6.627-5.373-12-12-12zm132-96c13.255 0 24 10.745 24 24v12c0 6.627-5.373 12-12 12h-20v336c0 26.51-21.49 48-48 48H80c-26.51 0-48-21.49-48-48V128H12c-6.627 0-12-5.373-12-12v-12c0-13.255 10.745-24 24-24h74.411l34.018-56.696A48 48 0 0 1 173.589 0h100.823a48 48 0 0 1 41.16 23.304L349.589 80H424zm-269.611 0h139.223L276.16 50.913A6 6 0 0 0 271.015 48h-94.028a6 6 0 0 0-5.145 2.913L154.389 80zM368 128H80v330a6 6 0 0 0 6 6h276a6 6 0 0 0 6-6V128z"
                        />
                    </Svg>
                )}
            </SizeContext.Consumer>
        )
    }
}

export { Trash }
