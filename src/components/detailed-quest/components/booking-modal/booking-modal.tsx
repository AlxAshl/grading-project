import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from '../../../../assets/img/icon-close.svg';
import { ChangeEvent, FormEvent, useState } from 'react';
import { FormInputType } from '../../../../types';


type BookingModalProps = {
  onClose: (closeStatus: boolean) => void;
  onSubmit: (formInput: FormInputType) => void;
}

const BookingModal = (props: BookingModalProps) => {

  const {onClose} = props;
  const {onSubmit} = props
  const closeStatus = false
  const [formInput, setFormInput] = useState({
    name: '',
    phone: '',
    peopleCount: '',
    isLegal: true
  });

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormInput({...formInput, [name]: value,});
  };

  const handleCloseBtnClick = () => {
    onClose(closeStatus)
  };

  return(
  <S.BlockLayer>
    <S.Modal>
      <S.ModalCloseBtn onClick={handleCloseBtnClick}>
        <IconClose width="16" height="16" />
        <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
      </S.ModalCloseBtn>
      <S.ModalTitle>Оставить заявку</S.ModalTitle>
      <S.BookingForm onSubmit = {(evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        onSubmit(formInput);
        onClose(closeStatus);
    }}
        action="#"
        method="post"
        id="booking-form"
      >
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
          <S.BookingInput onChange={handleInputChange}
            type="text"
            name="name"
            placeholder="Имя"
            required
          />
        </S.BookingField>
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-phone">
            Контактный телефон
          </S.BookingLabel>
          <S.BookingInput onChange={handleInputChange}
            type="tel"
            name="phone"
            placeholder="Телефон"
            minLength={10}
            maxLength={10}
            pattern ='^[0-9]+$'
            required
          />
        </S.BookingField>
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-people">
            Количество участников
          </S.BookingLabel>
          <S.BookingInput onChange={handleInputChange}
            type="number"
            name="peopleCount"
            placeholder="Количество участников"
            required
            min={1}
          />
        </S.BookingField>
        <S.BookingSubmit type="submit" >Отправить заявку</S.BookingSubmit>
        <S.BookingCheckboxWrapper>
          <S.BookingCheckboxInput
            type="checkbox"
            id="booking-legal"
            name="booking-legal"
            required
          />
          <S.BookingCheckboxLabel
            className="checkbox-label"
            htmlFor="booking-legal"
          >
            <S.BookingCheckboxText>
              Я согласен с{' '}
              <S.BookingLegalLink href="#">
                правилами обработки персональных данных и пользовательским
                соглашением
              </S.BookingLegalLink>
            </S.BookingCheckboxText>
          </S.BookingCheckboxLabel>
        </S.BookingCheckboxWrapper>
      </S.BookingForm>
    </S.Modal>
  </S.BlockLayer>
)};

export default BookingModal;

