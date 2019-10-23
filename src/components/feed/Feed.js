import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getQuestions } from '../../actions'
const Feed = props => {
    useEffect(() => {
        props.getQuestions()
    }, [])
    return (
        <div>
            {props.questions ? console.log(JSON.stringify(props.questions)) : ''}
        </div>
    )
}
const mapStateToProp = (state) => {
    return {
        questions: state.quest.data
    }
}
export default connect(mapStateToProp, {
    getQuestions
})(Feed)