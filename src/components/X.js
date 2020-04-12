import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="200.000000pt" height="200.000000pt" viewBox="0 0 200.000000 200.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
stroke="none">
<path d="M317 1672 l-157 -157 260 -260 260 -260 -260 -260 -260 -260 160
-160 160 -160 260 260 260 260 260 -260 260 -260 160 160 160 160 -260 260
-260 260 260 260 260 260 -160 160 -160 160 -260 -260 -260 -260 -258 258
c-141 141 -259 257 -262 257 -3 0 -76 -71 -163 -158z"/>
</g>
</svg>
`;

export default ({ color }) => (
  <SvgXml xml={xml} width={70} height={70} fill={color} />
);
