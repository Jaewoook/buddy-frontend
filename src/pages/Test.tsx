import React, {useCallback, useState, useMemo} from 'react';
import styled from 'styled-components';
import {Button, Box, Check, Textarea, ToggleSwitch, Input, Select, PopUp} from '../components';
import {Arrow, Check as CheckIcon, Buddy} from '../components/icons';

const Label = styled.p`
  margin: 0;
`;

const StateLabel = styled.span<{active: boolean;}>`
  padding: 2px 6px;
  color: ${({active}) => active ? '#fff' : '#000'};
  ${({active}) => active ? 'background-color: #3399cc;' : ''}
  border: 1px solid #3399cc;
`;

export const Test = () => {
  const [count, setCount] = useState(0);
  const [textValue, setTextValue] = useState('');
  const [inputTextValue, setInputTextValue] = useState('');
  const [check, setCheck] = useState(false);
  const [secondCheck, setSecondCheck] = useState(false);
  const [selected, setSelected] = useState('none');
  const [isToggle, setToggle] = useState(false);
  const [Yes, setYes] = useState(false);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count, setCount]);
  const handleToggleChange = useCallback((toggle: boolean) => {
    setToggle(toggle);
    console.log(`current toggle state: ${isToggle} change toggle state: ${toggle}`);
  }, [isToggle, setToggle]);
  const handleTextareaChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(event.target.value);
  }, [setTextValue]);
  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTextValue(event.target.value);
  }, [setInputTextValue]);
  const handleCheck = useCallback(() => {
    setCheck(!check);
  }, [check, setCheck]);
  const handleSecondCheck = useCallback(() => {
    setSecondCheck(!secondCheck);
  }, [secondCheck, setSecondCheck]);
  const handleSelect = useCallback((index: number, value: string) => {
    setSelected(value);
  }, [setSelected]);
  const handleYes = useCallback(() => {
    setYes(!Yes);
  }, [Yes, setYes]);
  const env = useMemo(() => process.env.REACT_APP_ENV, []);
  return (
    <Box width='100%' p='16px 24px'>
      <p>
        deployed channel&nbsp;&nbsp;
        <StateLabel active={env === 'localhost'}>localhost</StateLabel>
        <StateLabel active={env === 'development'}>development</StateLabel>
        <StateLabel active={env === 'production'}>production</StateLabel>
      </p>
      <h2>Box</h2>
      <Box mb='4px' isFlex alignItems='center' justifyContent='center' color='#000' bg='#eee'>
        Basic Flex Box
      </Box>
      <Box isInlineBlock bg='#aaa' p='4px'>
        Basic Inline Box 1
      </Box>
      <Box ml='4px' isInlineBlock bg='#aacccc' p='4px'>
        Basic Inline Box 2
      </Box>
      <Box ml='4px' isInlineBlock bg='#3399cc' p='4px' color='#fff'>
        Basic Inline Box 3
      </Box>
      <h2>Button</h2>
      <Button mr='8px'>Button 1</Button>
      <Button onClick={handleClick}>{count} time clicked</Button>
      <h2>Check</h2>
      <Check mr='16px' boxShape='rectangle' size='14px' fontSize='16px' label='check' checked={check} onCheck={handleCheck} />
      <Check boxShape='circle' size='14px' fontSize='14px' fontWeight={500} color='#00f' label='adding' checked={secondCheck} onCheck={handleSecondCheck} />
      <h2>Textarea</h2>
      <Textarea onChange={handleTextareaChange} mr='8px' value={textValue} placeholder='Textarea 1' />
      <Textarea value='' placeholder='error textarea' error />
      <h2>Input</h2>
      <Input onChange={handleInputChange} mr='8px' value={inputTextValue} placeholder='Input 1' />
      <Input value='' placeholder='error input' error />
      <h2>Select</h2>
      <Select width='200px' placeholder='Select 1' onSelect={handleSelect}>
        <option>Selection 1</option>
        <option>Selection 2</option>
        <option>Selection 3</option>
        <option>Selection 3</option>
        <option>Selection 3</option>
        <option>Selection 3</option>
        <option>Selection 3</option>
        <option>Selection 3</option>
        <option>Selection 3</option>
        <option>Selection 3</option>
      </Select>
      <Select ml='4px' width='200px' placeholder='Long Long Long Select 2'>
        <option>Selection 1</option>
        <option>Selection 2</option>
      </Select>
      <Select ml='4px' width='200px' placeholder='Select 3' initialSelection={2}>
        <option>Selection 1</option>
        <option>Selection 2</option>
        <option>Selection 3</option>
      </Select>
      <Box>
        <p>Select 1 selected value is <span style={{color: '#f00'}}>{selected}</span></p>
      </Box>
      <h2>Toggle</h2>
      <ToggleSwitch onToggleClick={handleToggleChange} />
      <ToggleSwitch ml='4px' onToggleClick={handleToggleChange} />
      <h2>Icon</h2>
      <Box>
        <Box isInlineFlex minWidth='100px' height='80px' flexDirection='column' alignItems='center'>
          <Arrow mb='8px' color='#000' />
          <Label>Arrow (1.5x)</Label>
        </Box>
        <Box ml='4px' isInlineFlex minWidth='100px' height='80px' flexDirection='column' alignItems='center'>
          <CheckIcon mb='8px' color='#000' />
          <Label>Check (3x)</Label>
        </Box>
        <Box ml='4px' isInlineFlex minWidth='100px' height='80px' flexDirection='column' alignItems='center'>
          <Buddy mb='8px' width='30px' height='30px' color='#000' />
          <Label>Buddy Icon (30x30)</Label>
        </Box>
      </Box>
      <h2>PopUp</h2>
      <Box isFlex>
        <Box>
          <PopUp onYes={handleYes} popupType='입부' name='홍길동' />
        </Box>
        <Box ml='20px'>
          <PopUp popupType='퇴부' name='홍길동' />
        </Box>
      </Box>
    </Box>
  );
};
