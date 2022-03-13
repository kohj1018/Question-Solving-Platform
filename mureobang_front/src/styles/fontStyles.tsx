import styled from 'styled-components';
import {Typography} from "@mui/material";

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

export const H1 = styled(Typography)`
  font-size: ${fontSize.H1} !important;
  line-height: ${fontLineHeight.H1} !important;
  font-weight: ${fontWeight.H1} !important;
`
export const H2 = styled(Typography)`
  font-size: ${fontSize.H2} !important;
  line-height: ${fontLineHeight.H2} !important;
  font-weight: ${fontWeight.H2} !important;
`
export const H3 = styled(Typography)`
  font-size: ${fontSize.H3} !important;
  line-height: ${fontLineHeight.H3} !important;
  font-weight: ${fontWeight.H3} !important;
`
export const H4 = styled(Typography)`
  font-size: ${fontSize.H4} !important;
  line-height: ${fontLineHeight.H4} !important;
  font-weight: ${fontWeight.H4} !important;
`
export const HT = styled(Typography)`
  font-size: ${fontSize.HT} !important;
  line-height: ${fontLineHeight.HT} !important;
  font-weight: ${fontWeight.HT} !important;
`
export const Text1 = styled(Typography)`
  font-size: ${fontSize.Text1} !important;
  line-height: ${fontLineHeight.Text1} !important;
  font-weight: ${fontWeight.Text1} !important;
`
export const Text2 = styled(Typography)`
  font-size: ${fontSize.Text2} !important;
  line-height: ${fontLineHeight.Text2} !important;
  font-weight: ${fontWeight.Text2} !important;
`
export const Text3 = styled(Typography)`
  font-size: ${fontSize.Text3} !important;
  line-height: ${fontLineHeight.Text3} !important;
  font-weight: ${fontWeight.Text3} !important;
`
export const Text4 = styled(Typography)`
  font-size: ${fontSize.Text4} !important;
  line-height: ${fontLineHeight.Text4} !important;
  font-weight: ${fontWeight.Text4} !important;
`
export const Btn1 = styled(Typography)`
  font-size: ${fontSize.Btn1} !important;
  line-height: ${fontLineHeight.Btn1} !important;
  font-weight: ${fontWeight.Btn1} !important;
`
export const Btn2 = styled(Typography)`
  font-size: ${fontSize.Btn2} !important;
  line-height: ${fontLineHeight.Btn2} !important;
  font-weight: ${fontWeight.Btn2} !important;
`
export const BT = styled(Typography)`
  font-size: ${fontSize.BT} !important;
  line-height: ${fontLineHeight.BT} !important;
  font-weight: ${fontWeight.BT} !important;
`
export const Search = styled(Typography)`
  font-size: ${fontSize.Search} !important;
  line-height: ${fontLineHeight.Search} !important;
  font-weight: ${fontWeight.Search} !important;
`