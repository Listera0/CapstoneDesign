import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import { isSameMonth, isSameDay, addDays, parse } from 'date-fns';
import { format, subMonths, addMonths } from 'date-fns';
import { useState } from 'react';
import './RenderCells.css';
import CloseButton from 'react-bootstrap/CloseButton';
import Modal from 'react-bootstrap/Modal';
import { useEffect } from 'react';
const RenderCells = ({
  currentDate,
  selectedDate,
  onDateClick,
  modal,
  setModal,
  onModalClose,
}) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = '';

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, 'd');
      const cloneDay = day;
      days.push(
        <div
          className={`col cell  ${
            !isSameMonth(day, monthStart)
              ? 'disabled'
              : isSameDay(day, selectedDate)
              ? 'selected'
              : format(currentDate, 'M') !== format(day, 'M')
              ? 'not-valid'
              : 'valid'
          }`}
          key={day}
          onClick={() => onDateClick(cloneDay)}
        >
          {modal ? (
            <SignInModal
              style={{ background: 'rgba(0,0,0,0.5)' }}
              modal={modal}
              onModalClose={onModalClose}
              currentDate={currentDate}
              selectedDate={selectedDate}
              onDateClick={onDateClick}
            ></SignInModal>
          ) : null}
          <span
            className={
              format(currentDate, 'M') !== format(day, 'M')
                ? 'text not-valid'
                : ''
            }
          >
            {formattedDate}
          </span>
          <span
            style={{
              display: 'block',
              alignItems: 'center',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
            }}
          ></span>
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div className='row days' key={day}>
        {days}
      </div>
    );
    days = [];
  }
  return <div className='body'>{rows}</div>;
};
export default RenderCells;

function SignInModal({
  onModalClose,
  isSameDay,
  currentDate,
  selectedDate,
  onDateClick,
}) {
  const [modalSelectedDate, setModalSelectedDate] = useState(selectedDate);

  useEffect(() => {
    // 모달이 열릴 때마다 selectedDate를 업데이트합니다.
    setModalSelectedDate(selectedDate);
  }, []);
  return (
    <div
      className='backColor'
      style={{
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',

        position: 'fixed',
        zIndex: '1000',
      }}
    >
      <div
        className='modal show'
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal.Dialog>
          <Modal.Header style={{ borderBottom: 'rgb(222,222,222)' }}>
            <h2 style={{ display: 'flex' }}>
              {format(modalSelectedDate, 'M 월 d 일 일정')}{' '}
            </h2>
          </Modal.Header>

          <div>
            <p
              style={{
                fontWeight: '400',
                fontSize: '20px',
                color: 'black',
                textAlign: 'start',

                padding: '0rem 1rem',
                lineHeight: '18px',
              }}
            >
              일정내용
            </p>
          </div>
          <Modal.Body>
            <form>
              <button
                style={{
                  justifyContent: 'center',
                  width: '100%',
                  marginBottom: '3%',
                  borderRadius: '5px',
                  backgroundColor: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  margin: '0  auto 0 0',
                }}
                onClick={() => onModalClose()}
              >
                <CloseButton />
              </button>
            </form>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    </div>
  );
}
