import React, { PureComponent } from 'react'
import { connect } from 'react-redux';



class Home extends PureComponent {


    render() {
        return (
            <div>home</div>
        )
    }

}

const mapDispatch = (dispatch) => ({
})

const mapState = (state) => ({
})
export default connect(mapState, mapDispatch)(Home);