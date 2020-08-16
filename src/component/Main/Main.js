import React, { Component } from 'react'

import Banner from './component/Banner'
import LatestMovie from './component/LatestMovie'
import OtherMovie from './component/OtherMovie'

export class Main extends Component {
    render() {
        return (
            <div>
                <Banner></Banner>
                <LatestMovie></LatestMovie>
                <OtherMovie></OtherMovie>
            </div>
        )
    }
}

export default Main
