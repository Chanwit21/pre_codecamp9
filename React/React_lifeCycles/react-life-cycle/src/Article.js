import React, { Component } from 'react'

export class Article extends Component {
    static getDerivedStateFromProps(props, state){
        console.log("[Article.js] getDerivedStateFromProps")
        return state
    }

    shouldComponentUpdate(nextProps,nextState) {
        console.log("[Article.js] shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[Article.js] getSnapshotBeforeUpdate")
        return {x:0,y:0}

    }

    componentDidUpdate(prevProps, prevState ,snapshot) {
        console.log("[Article.js] componentDidUpdate",snapshot)
    }

    render() {
        console.log("[Article.js] Render")
        return (
            <p>
                {this.props.article}
            </p>
        )
    }
}

export default Article
