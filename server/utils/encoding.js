export const encodingChars = (text) => {
  text = text.replace('a', '.++klm@.')
  text = text.replace('e', '.@-53l%.')
  text = text.replace('i', '.*&*p4w.')
  text = text.replace('o', '.v0|@c_.')
  text = text.replace('u', '.+wfc%6.')

  return text;
}

export const dencodingChars = (text) => {
  text = text.replace('.++klm@.', 'a')
  text = text.replace('.@-53l%.', 'e')
  text = text.replace('.*&*p4w.', 'i')
  text = text.replace('.v0|@c_.', 'o')
  text = text.replace('.+wfc%6.', 'u')

  return text;
}