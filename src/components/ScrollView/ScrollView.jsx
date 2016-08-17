import React, {Component} from 'react'
import './ScrollView.scss'

export default class ScrollView extends Component {
  render() {
    return <div className='scroll-view'>{this.props.children}</div>
  }
}