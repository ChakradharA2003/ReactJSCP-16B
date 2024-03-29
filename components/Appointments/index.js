// Write your code here
// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem/index'
import './index.css'

class Appointments extends Component {
  state = {
    nameInput: '',
    dateInput: '',
    appointmentsArr: [],
    starAppointmentsArr: [],
    starred: false,
  }

  onChangeTitle = event => {
    this.setState({
      nameInput: event.target.value,
    })
  }

  onChangeDate = event => {
    this.setState({
      dateInput: event.target.value,
    })
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {nameInput, dateInput} = this.state
    const newAppointment = {
      id: uuidv4(),
      name: nameInput,
      date: dateInput,
      isStarred: false,
    }
    this.setState(prevState => ({
      appointmentsArr: [...prevState.appointmentsArr, newAppointment],
      nameInput: '',
      dateInput: '',
    }))
  }

  onClickedStarButton = id => {
    const {appointmentsArr} = this.state
    this.setState(prevState => ({
      appointmentsArr: prevState.appointmentsArr.map(appointment =>
        appointment.id === id
          ? {...appointment, isStarred: !appointment.isStarred}
          : appointment,
      ),
    }))
    const starArr = appointmentsArr.filter(arr => arr.id === id)
    this.setState(prevState => ({
      starAppointmentsArr: [...prevState.starAppointmentsArr, starArr],
    }))
  }

  onClickedStarredButton = () => {
    this.setState(prevState => ({
      starred: !prevState.starred,
    }))
  }

  render() {
    const {
      nameInput,
      dateInput,
      appointmentsArr,
      starAppointmentsArr,
      starred,
    } = this.state
    let appointmentsList
    if (starred === false) {
      appointmentsList = appointmentsArr
    } else {
      appointmentsList = starAppointmentsArr
    }
    return (
      <div className="bg-container">
        <div className="white-card">
          <div className="input-elements-image">
            <form className="input-elements" onSubmit={this.onAddAppointment}>
              <h1 className="heading">Add Appointment</h1>
              <div className="input-feilds">
                <label htmlFor="appointment" className="input-label">
                  TITLE
                </label>
                <input
                  type="text"
                  className="inputs"
                  placeholder="Title"
                  id="appointment"
                  onChange={this.onChangeTitle}
                  value={nameInput}
                />
              </div>
              <div className="input-feilds">
                <label htmlFor="date" className="input-label">
                  DATE
                </label>
                <input
                  type="date"
                  id="date"
                  className="inputs"
                  value={dateInput}
                  onChange={this.onChangeDate}
                />
              </div>
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>

            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="image"
            />
          </div>
          <hr />
          <div className="starred-container">
            <h1 className="header">Appointments</h1>
            <button
              type="button"
              className="starred-btn"
              onClick={this.onClickedStarredButton}
            >
              Starred
            </button>
          </div>
          <ul className="appointments-list">
            {appointmentsList.map(arr => (
              <AppointmentItem
                key={arr.id}
                id={arr.id}
                name={arr.name}
                date={arr.date}
                isStarred={arr.isStarred}
                onClickedStarButton={this.onClickedStarButton}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
