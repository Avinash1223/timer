import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
    console.log('constructor is called')
  }

  componentDidMount() {
    console.log('componentDidMount is called')
    this.TimerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    console.log('component will  unmount')
    clearInterval(this.TimerId)
  }

  tick = () => {
    // console.log('timer is running in the background')
    this.setState({date: new Date()})
  }

  render() {
    const {date} = this.state
    console.log('render method', date)
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
