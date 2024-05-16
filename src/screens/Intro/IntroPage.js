import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import Intro1Image from '../../assets/icon/mobileimg2.svg';
import Intro2Image from '../../assets/icon/mobileimage1.svg';
import Intro3Image from '../../assets/icon/RatingLike1.svg';
import introStyles from '../../styles/Intro/IntroStyle';

const IntroPage = ({markIntroAsShown}) => {
  const [buttonText, setButtonText] = useState('Next');
  const [currentIndex, setCurrentIndex] = useState(0);

  const onButtonClick = swiper => {
    if (currentIndex >= 2) {
      markIntroAsShown();
    } else {
      swiper?.current?.scrollBy(1);
    }
  };

  const slideChanged = index => {
    setCurrentIndex(index);
    if (index >= 2) {
      setButtonText('Login');
    } else {
      setButtonText('Next');
    }
  };

  let swiperRef;

  return (
    <View style={introStyles.container}>
      <Swiper
        loop={false}
        showsPagination
        activeDotColor="#CA3A6C"
        dotStyle={introStyles.swipperDotStyle}
        activeDotStyle={introStyles.swipperActiveDotStyle}
        onIndexChanged={slideChanged}
        ref={swiper => (swiperRef = swiper)}>
        <View style={introStyles.slide}>
          <Intro1Image style={introStyles.image} />
          <Text style={introStyles.headingText}>PearlConnect Appraisal</Text>
          <Text style={introStyles.childText}>
            Performance Appraisal is a systematic evaluation of the individuals
            with regard to his (or) her performance on the job and his potential
            for development
          </Text>
        </View>

        <View style={introStyles.slide}>
          <Intro2Image style={introStyles.image} />
          <Text style={introStyles.headingText}>Appraisal Performance</Text>
          <Text style={introStyles.childText}>
            A performance appraisal is a regular review of an employee's job
            performance and overall contribution to a company.
          </Text>
        </View>

        <View style={introStyles.slide}>
          <Intro3Image style={introStyles.image} />
          <Text style={introStyles.headingText}>Appraisal Rating</Text>
          <Text style={introStyles.childText}>
            Employees are assessed using a numerical scale on predefined
            criteria, indicating performance levels.
          </Text>
        </View>
      </Swiper>

      <View style={introStyles.nextButtonContainer}>
        <TouchableOpacity
          onPress={() => onButtonClick(swiperRef)}
          style={introStyles.button}>
          <Text style={introStyles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IntroPage;
