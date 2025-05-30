import {Colors} from '../theme/colors';
import {SpeedIcon, ScanIcon} from '../assets/icons'; // icons/index.ts üzerinden export ettiğin yerse
import {Feature} from '../model/ui/feauturesProps';

export const features: Feature[] = [
  {
    title: 'Unlimited',
    subtitle: 'Plant Identify',
    icon: <SpeedIcon width={17} height={17} fill={Colors.WHITE} />,
  },
  {
    title: 'Faster',
    subtitle: 'Process',
    icon: <ScanIcon width={17} height={17} fill={Colors.WHITE} />,
  },
  {
    title: 'Detailed',
    subtitle: 'Plant Care',
    icon: <ScanIcon width={17} height={17} fill={Colors.WHITE} />,
  },
];
