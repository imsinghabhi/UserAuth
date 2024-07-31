import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface DownloadIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const DownloadIcon: React.FC<DownloadIconProps> = ({ width = 24, height = 24, color = '#000' }) => (
  <Svg width={width} height={height} viewBox="0 0 48 48" fill="none">
    <Path d="M38 18h-8V6H18v12h-8l14 14 14-14zM10 36v4h28v-4H10z" fill={color} />
    <Path fill="none" d="M0 0h48v48H0z" />
  </Svg>
);

export default DownloadIcon;
