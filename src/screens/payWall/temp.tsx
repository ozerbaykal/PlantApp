import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale, scale, verticalScale} from '../../utils/constants';
import {Colors} from '../../theme/colors';
import {OptionCardProps} from '../../model/ui/optionCardProps';

const OptionCard = ({
  thisOption,
  selected,
  setSelected,
  title,
  subtitle,
  isGradient = false,
  showSaveLabel = false,
}: OptionCardProps) => {
  const isSelected = selected === thisOption;

  const renderContent = (contentExtraProps = {}, viewExtraStyles = {}) => (
    <View
      style={[styles.option, isSelected && styles.selected, viewExtraStyles]}
      {...contentExtraProps}>
      {showSaveLabel && (
        <View style={styles.saveLabel}>
          <Text style={styles.saveLabelText}>Save 50%</Text>
        </View>
      )}
      <View
        style={[
          styles.checkboxContainer,
          isSelected && styles.selectedCheckbox,
        ]}>
        {isSelected && <View style={styles.selectedCheckboxInner} />}
      </View>
      <View>
        <Text style={styles.optionTitle}>{title}</Text>
        <Text style={styles.optionSubtitle}>{subtitle}</Text>
      </View>
    </View>
  );

  if (isGradient) {
    return (
      <TouchableOpacity onPress={() => setSelected(thisOption)}>
        <LinearGradient
          collapsable={false}
          colors={['#28AF6E00', '#28AF6E3D']} 
          start={{x: 0.6, y: 0}}
          end={{x: 1, y: 0}}
          style={{borderRadius: 10}} // LinearGradient'e border radius
        >
          {/* Gradient durumunda iç View'in arka planını transparan yap */}
          {renderContent(
            {collapsable: false},
            {backgroundColor: 'transparent'},
          )}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={() => setSelected(thisOption)}>
      {renderContent()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  option: {
    width: '100%',
    backgroundColor: '#1c2923',
    borderRadius: 10,
    height: verticalScale(60),
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(12),
    borderWidth: 0.5,
    borderColor: '#FFFFFF4D',
  },
  optionTitle: {
    fontSize: moderateScale(16),
    color: Colors.WHITE,
    fontFamily: 'Rubik-Medium',
  },
  optionSubtitle: {
    fontSize: moderateScale(12),
    color: Colors.GRAY,
    fontFamily: 'Rubik-Light',
  },
  checkboxContainer: {
    marginLeft: scale(16),
    width: scale(24),
    height: scale(24),
    backgroundColor: '#2d3a35',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    borderWidth: 1.5,
    borderColor: Colors.GREEN,
  },
  selectedCheckbox: {
    backgroundColor: '#28AF6E',
  },
  selectedCheckboxInner: {
    backgroundColor: 'white',
    width: 8,
    height: 8,
    borderRadius: 100,
  },
  saveLabel: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: Colors.GREEN,
    paddingLeft: scale(12),
    paddingRight: scale(9),
    paddingVertical: verticalScale(4),
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 20,
    zIndex: 1,
  },
  saveLabelText: {
    color: Colors.WHITE,
    fontSize: moderateScale(12),
    fontFamily: 'Rubik-Medium',
  },
});

export default OptionCard;
