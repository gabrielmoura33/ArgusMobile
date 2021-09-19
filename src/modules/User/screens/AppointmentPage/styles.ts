import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.Secondary};
`;

export const ServiceSelectLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.RobotoSlabMedium};
  font-size: 19px;
  line-height: 25px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.Neutral100};
`;
export const ServiceSelectSubtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.RobotoSlabMedium};

  font-size: 8px;
  line-height: 10px;

  color: rgba(255, 255, 255, 0.64);
  text-align: justify;
`;

export const ServicesWrapper = styled.ScrollView`
  margin-top: 13px;
  margin-bottom: 40px;
`;

export const ServicesDetailWrapper = styled.View`
  margin-top: 32px;
  margin-bottom: 32px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ServicesBadgeComponent = styled.View``;

export const AppointmentDateWrapper = styled.View``;

export const AppointmentDateLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.RobotoSlabMedium};
  font-size: 25px;
  line-height: 33px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.Neutral100};
`;

export const AppointmentHourWrapper = styled.View``;

export const PeriodLabel = styled.Text`
  margin-top: 24px;
  font-family: ${({ theme }) => theme.fonts.RobotoSlabMedium};

  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(18)}px;

  color: ${({ theme }) => theme.colors.Neutral400};
`;

export const AvailableHourWrapper = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 12px;
`;

interface AvailableHourProps {
  isActive?: boolean;
}
export const AvailableHour = styled(RectButton)<AvailableHourProps>`
  height: 40px;
  background: ${({ theme }) => theme.colors.DarkerBlue};
  border-radius: 10px;
  width: 60px;
  margin-right: 12px;
  align-items: center;
  justify-content: center;
  ${props => props.isActive && `background: #E06714`}
`;

export const AvailableHourText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.RobotoSlabMedium};
  color: ${({ theme }) => theme.colors.Neutral100};
`;

export const NextButtonWrapper = styled.View`
  margin-top: 32px;
  margin-bottom: 32px;
  padding: 0 10px;
`;
