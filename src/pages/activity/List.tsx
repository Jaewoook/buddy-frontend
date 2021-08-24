import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import {Text, Button, Box, SearchInput} from '../../components';
import {Buddy} from '../../components/icons';

const FloatButton = styled(Button)`
  width: 245px;
  height: 72px;
  position: fixed;
  bottom: 35px;
  right: 50px;
  font-size: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`;

const Dummy = [
  {
    id: '610d458b79e122ea1d150cd6',
    titls: 'it is long night',
    start: '1628249722',
    end: '1628249722',
    place: '성곡도서관 2층 스터디룸',
    type: 1,
    description: '2021년 2차 알고리즘 스터디',
  },
  {
    id: '610d458b79e122ea1d150888',
    titls: 'really long night',
    start: '1628249722',
    end: '1628249722',
    place: '성곡도서관 2층 스터디룸',
    type: 1,
    description: '2021년 2차 로아 스터디',
  },
  {
    id: '610d458b79e122ea1d150777',
    titls: 'very long night',
    start: '1628249722',
    end: '1628249722',
    place: '성곡도서관 2층 스터디룸',
    type: 1,
    description: '2021년 2차 ㅠㅠ 스터디',
  },
];

interface CardProps {
  id?: string;
  title?: string;
  start?: string;
  end?: string;
  place?: string;
  type?: 0 | 1 | 2;
  description?: string;
}

const ActivityCard = (props: CardProps) => {
  const {title, start} = props;
  return (
    <Box isFlex flexDirection='column'>
      <Buddy width='226px' height='147px' />
      <Text fontSize='18px' lineHeight='22px' color='#454440'>{title}</Text>
      <Text fontSize='14px' lineHeight='18px' color='#9E9E9E'>{start}</Text>
    </Box>
  );
};

export const List = () => {
  const [InputTextValue, setInputTextValue] = useState('');
  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTextValue(event.target.value);
  }, [setInputTextValue]);

  const FoundAnniversary = Dummy.map((info, idx) => (
    <Box key={idx}>
      <ActivityCard title={info.titls} start={info.start} />
    </Box>
  ));
  const Study = Dummy.map((info, idx) => (
    <Box key={idx}>
      <ActivityCard title={info.titls} start={info.start} />
    </Box>
  ));
  const EtCetera = Dummy.map((info, idx) => (
    <Box key={idx}>
      <ActivityCard title={info.titls} start={info.start} />
    </Box>
  ));

  return (
    <Box width='100%' py='48px' px='60px'>
      <Box isFlex width='100%' mt='32px' alignItems='flex-end' justifyContent='space-between'>
        <Text color='#454440' fontSize='40px' fontWeight={700} lineHeight='50px'>활동관리</Text>
        <SearchInput onChange={handleInputChange} value={InputTextValue} placeholder='search' />
      </Box>
      <Text fontSize='24px' lineHeight='29px' color='#454440' pt='60px' pb='20px'>스터디</Text>
      <Box isFlex>
        {FoundAnniversary}
      </Box>
      <Text fontSize='24px' lineHeight='29px' color='#454440' pt='30px' >창립제</Text>
      <Box isFlex>
        {Study}
      </Box>
      <Text fontSize='24px' lineHeight='29px' color='#454440' pt='30px' >기타</Text>
      <Box isFlex>
        {EtCetera}
      </Box>
      <FloatButton>새로운 활동 추가하기</FloatButton>
    </Box>
  );
};
