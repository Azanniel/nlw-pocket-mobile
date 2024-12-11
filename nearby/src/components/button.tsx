import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'

interface ButtonProps extends TouchableOpacityProps {
  isLoading?: boolean
}

function Button({ children, style, isLoading, ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={0.8}
      disabled={isLoading}
      {...props}
    >
      {isLoading && <ActivityIndicator size="small" color={colors.gray[100]} />}
      {!isLoading && children}
    </TouchableOpacity>
  )
}

type TitleProps = TextProps

function Title({ style, ...props }: TitleProps) {
  return <Text style={[styles.title, style]} {...props} />
}

Button.Title = Title

export { Button }

const styles = StyleSheet.create({
  container: {
    height: 56,
    maxHeight: 56,
    backgroundColor: colors.green.base,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 14,
  },

  title: {
    color: colors.gray[100],
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
  },
})
