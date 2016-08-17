import React, {Component, PropTypes} from 'react'
import {range} from 'ramda'
import './Grid.scss'

export default class Grid extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    items: PropTypes.array,
    itemWidth: PropTypes.number,
    itemHeight: PropTypes.number,
    rulerWidth: PropTypes.number,
    rulerHeight: PropTypes.number
  }

  static defaultProps = {
    width: 11,
    height: 8,
    items: [[]],
    itemWidth: 60,
    itemHeight: 60,
    rulerWidth: 24,
    rulerHeight: 24
  }

  render() {
    const {width, height, itemWidth, itemHeight, rulerHeight, rulerWidth, items} = this.props

    const itemsWidth = width * itemWidth
    const itemsHeight = height * itemHeight

    return <div className='grid layout column' style={{
      width: itemsWidth + rulerWidth,
      height: itemsHeight + rulerHeight
    }}>
      <div className='ruler ruler-top layout row' style={{
        paddingLeft: rulerWidth,
        width: itemsWidth + rulerWidth,
        height: rulerHeight
      }}>
        {
          range(1, width + 1).map(i => <div key={i} style={{ width: itemWidth }}>{i}</div>)
        }
      </div>
      <div className='layout row'>
        <div className='ruler ruler-left layout column' style={{
          width: rulerWidth,
          height: itemsHeight
        }}>
          {
            range(1, height + 1).map(i => <div key={i} style={{ height: itemHeight }}>{i}</div>)
          }
        </div>
        <div className='items layout column' style={{
          width: itemsWidth,
          height: itemsHeight
        }}>
          {
            items.map((row, i) => {
              return <div className='row' key={i}>
                {
                  row.map((item, j) => {
                    return <div className={`item ${!item ? 'blank' : 'item_' + item}`} key={j} style={{
                      width: itemWidth,
                      height: itemHeight
                    }}>{item ? item : null}</div>
                  })
                }
              </div>
            })
          }
        </div>
      </div>
    </div>
  }
}