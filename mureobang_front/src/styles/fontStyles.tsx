import styled from 'styled-components';

export const fontSize = {
  big: '2.0rem',
  normal: '1.6rem',
  small: '1.4rem',

  H1: '4.8rem',
  H2: '3.6rem',
  H3: '2.0rem',
  H4: '1.8rem',
  HT: '1.6rem',
  Text1: '1.6rem',
  Text2: '1.4rem',
  Text3: '1.2rem',
  Text4: '1.0rem',
  Btn1: '1.6rem',
  Btn2: '1.4rem',
  BT: '1.2rem',
  Search: '1.8rem'
}

export const fontLineHeight = {
  H1: '7.0rem',
  H2: '4.8rem',
  H3: '2.8rem',
  H4: '2.6rem',
  HT: '2.4rem',
  Text1: '2.4rem',
  Text2: '2.0rem',
  Text3: '1.8rem',
  Text4: '1.8rem',
  Btn1: '2.4rem',
  Btn2: '2.0rem',
  BT: '1.8rem',
  Search: '2.6rem'
}

export const fontWeight = {
  H1: '700',
  H2: '600',
  H3: '700',
  H4: '700',
  HT: '700',
  Text1: '500',
  Text2: '500',
  Text3: '500',
  Text4: '600',
  Btn1: '700',
  Btn2: '700',
  BT: '600',
  Search: '400'
}

export const H1 = styled.p`
  font-size: ${fontSize.H1};
  line-height: ${fontLineHeight.H1};
  font-weight: ${fontWeight.H1};
`
export const H2 = styled.p`
  font-size: ${fontSize.H2};
  line-height: ${fontLineHeight.H2};
  font-weight: ${fontWeight.H2};
`
export const H3 = styled.p`
  font-size: ${fontSize.H3};
  line-height: ${fontLineHeight.H3};
  font-weight: ${fontWeight.H3};
`
export const H4 = styled.p`
  font-size: ${fontSize.H4};
  line-height: ${fontLineHeight.H4};
  font-weight: ${fontWeight.H4};
`
export const HT = styled.p`
  font-size: ${fontSize.HT};
  line-height: ${fontLineHeight.HT};
  font-weight: ${fontWeight.HT};
`
export const Text1 = styled.p`
  font-size: ${fontSize.Text1};
  line-height: ${fontLineHeight.Text1};
  font-weight: ${fontWeight.Text1};
`
export const Text2 = styled.p`
  font-size: ${fontSize.Text2};
  line-height: ${fontLineHeight.Text2};
  font-weight: ${fontWeight.Text2};
`
export const Text3 = styled.p`
  font-size: ${fontSize.Text3};
  line-height: ${fontLineHeight.Text3};
  font-weight: ${fontWeight.Text3};
`
export const Text4 = styled.p`
  font-size: ${fontSize.Text4};
  line-height: ${fontLineHeight.Text4};
  font-weight: ${fontWeight.Text4};
`
export const Btn1 = styled.p`
  font-size: ${fontSize.Btn1};
  line-height: ${fontLineHeight.Btn1};
  font-weight: ${fontWeight.Btn1};
`
export const Btn2 = styled.p`
  font-size: ${fontSize.Btn2};
  line-height: ${fontLineHeight.Btn2};
  font-weight: ${fontWeight.Btn2};
`
export const BT = styled.p`
  font-size: ${fontSize.BT};
  line-height: ${fontLineHeight.BT};
  font-weight: ${fontWeight.BT};
`
export const Search = styled.p`
  font-size: ${fontSize.Search};
  line-height: ${fontLineHeight.Search};
  font-weight: ${fontWeight.Search};
`