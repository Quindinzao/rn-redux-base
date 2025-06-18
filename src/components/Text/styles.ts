import styled from 'styled-components/native';

interface RNStyledTextProps {
  typeText: 'title' | 'caption';
}

export const StyledText = styled.Text<RNStyledTextProps>`
  ${({ theme, typeText }) =>
    typeText === 'caption'
      ? {
          color: theme.colors.caption,
          fontSize: 14,
          paddingBottom: 8,
          paddingRight: 24,
          paddingLeft: 24,
        }
      : {
          color: theme.colors.text,
          fontWeight: 600,
          fontSize: 24,
          padding: 24,
        }};
`;
