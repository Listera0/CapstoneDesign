import './Calendar.css';
import { format, subMonths, addMonths } from 'date-fns';
import { useState } from 'react';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import { isSameMonth, isSameDay, addDays, parse } from 'date-fns';
import RenderCells from './RenderCells';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

function Calendar(props) {
  let [modal, setModal] = useState(false);

  const [currentDate, setCurrentMonth] = useState(new Date());
  const [selectedDate, setselectedDate] = useState(new Date());
  const onDateClick = (day) => {
    setselectedDate(day);
    setModal(true);
  };
  const onModalClose = () => {
    setModal(false);
  };
  const prevDate = () => {
    setCurrentMonth(subMonths(currentDate, 1));
  };
  const nextDate = () => {
    setCurrentMonth(addMonths(currentDate, 1));
  };
  const day = [];
  const days = ['Sun', 'Mon', 'Thu', 'Wen', 'Thr', 'Fri', 'Sat'];
  for (let i = 0; i < 7; i++) {
    day.push(
      <div className='claendar__date col' key={i}>
        {' '}
        <span style={{ textAlign: 'start' }}>{days[i]}</span>
        {''}
      </div>
    );
  }

  return (
    <div className='calendar__Container'>
      <div className='calendar__header'>
        <div className='calendar__yymm'>
          <span className='calendar__month'>
            {format(currentDate, 'M')}월
            <span className='calendar__year'>
              {format(currentDate, 'yyyy')}
            </span>
          </span>
        </div>
        <div className='button__div'>
          <div
            className='calendar__left'
            onClick={() => {
              prevDate();
            }}
          >
            <FontAwesomeIcon
              icon={faLongArrowAltLeft}
              size='lg'
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div
            className='calendar__right'
            onClick={() => {
              nextDate();
            }}
          >
            <FontAwesomeIcon
              icon={faLongArrowAltRight}
              size='lg'
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
      </div>
      <div className='calendar__day row'>{day} </div>
      <RenderCells
        allAlert={props.allAlert}
        setAllAlert={props.setAllAlert}
        currentDate={currentDate}
        selectedDate={selectedDate}
        onDateClick={onDateClick}
        modal={modal}
        setModal={setModal}
        onModalClose={onModalClose}
      />
    </div>
  );
}

export default Calendar;
