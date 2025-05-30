import { Brush, Content, IPhone } from "../assets/images";
import { scale, verticalScale } from "../utils/constants";

  export const onboardingSlides = [
    {
      id: '1',
      title: 'Take a photo to identify\n the plant!',
      boldPart: 'identify',
      image:Content,
      brush: Brush,
      brushStyle: {
        position: "absolute",
        resizeMode: "contain",
        width: scale(130),
        height: verticalScale(13),
        top: verticalScale(34),
        right: scale(-12),
      }
    },
    {
      id: '2',
      title: 'Get plant',
      boldPart: ' care guides',
      image: IPhone,
      brush: Brush,
      brushStyle: {
        position: "absolute",
        resizeMode: "contain",
        width: scale(152),
        height: verticalScale(13),
        top: verticalScale(34),
        right: scale(6),
      }
    },
  ];
