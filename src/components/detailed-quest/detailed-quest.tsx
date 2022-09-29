import { useEffect, useState } from 'react';
import { MainLayout } from '../common/common';
import { ReactComponent as IconClock } from '../../assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from '../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/utilityHooks';
import { fetchQuestAction, postOrderAction } from '../../store/api-actions';
import { questId } from '../../store/quest-process/quest-process';
import { getErrorMessage, getQuest, getQuestLoadStatus, getSuccessMessage } from '../../store/quest-process/selectors';
import { setTypeRu, setLevelRu } from '../home/utility';
import MessagePopup from '../common/popup/popup';
import { FormInputType } from '../../types';


const DetailedQuest = (): JSX.Element => {

  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);
  const handleBookingButtonClick = () => {
    setIsBookingModalOpened(true);
  };
  const {id} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const value = id;
    dispatch(questId(value));
    dispatch(fetchQuestAction());
  }, [id, dispatch]);
  const errorMessage = useAppSelector(getErrorMessage);
  const quest = useAppSelector(getQuest);
  const isLoaded = useAppSelector(getQuestLoadStatus);
  const successMessage = useAppSelector(getSuccessMessage)
  const {coverImg, title, type, duration, peopleCount, level, description} = quest

  return (
    <MainLayout>
      <S.Main>
        <MessagePopup>{successMessage? successMessage : ''}</MessagePopup>
        <MessagePopup>{errorMessage? errorMessage : ''}</MessagePopup>
        {isLoaded?
        <S.PageImage
          src={`/${coverImg}`}
          width="1366"
          height="768"
        />
        : ''}
        <S.PageContentWrapper>
          <S.PageHeading>

            <S.PageTitle>{isLoaded? title
            : ''}</S.PageTitle>
            <S.PageSubtitle>{isLoaded? setTypeRu(type)
            : ''}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{isLoaded? duration
                : ''} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{isLoaded? `${peopleCount[0]}-${peopleCount[1]} чел`
                : ''}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{isLoaded? setLevelRu(level)
                : ''}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {isLoaded? description
              : ''}
            </S.QuestDescription>
            {isLoaded?
            <S.QuestBookingBtn onClick={handleBookingButtonClick}>
              Забронировать
            </S.QuestBookingBtn>
            : ''}
          </S.PageDescription>
        </S.PageContentWrapper>
        {isBookingModalOpened && <BookingModal onClose={(closeStatus: boolean) => setIsBookingModalOpened(closeStatus)} onSubmit={(formInput: FormInputType) => dispatch(postOrderAction(formInput))} />}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;

