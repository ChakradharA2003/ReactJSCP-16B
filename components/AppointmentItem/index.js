// Write your code here
import './index.css'
import {format} from 'date-fns'

const AppointmentItem = props => {
  const {id, name, date, isStarred, onClickedStarButton} = props
  const starClicked = () => {
    onClickedStarButton(id)
  }
  /*
  const year = date.slice(0, 4)
  const month = date.slice(4, 6)
  const day = date.slice(6, 8)
  */
  console.log(isStarred)
  const formatedDate = format(new Date(date), 'dd MMMM yyyy, EEEE')
  console.log(formatedDate)
  const starImg = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="appoints-list">
      <div className="title-star">
        <h1 className="title">{name}</h1>
        <button
          type="button"
          data-testid="star"
          className="star-button"
          onClick={starClicked}
        >
          <img src={starImg} alt="star" className="star-image" />
        </button>
      </div>
      <p className="date-para">Date: {formatedDate}</p>
    </li>
  )
}
export default AppointmentItem
