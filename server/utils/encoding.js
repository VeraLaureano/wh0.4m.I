// Encode specific characters in the input text
export const encodingChars = (text) => {
  // Replace 'a' with '.++klm@.'
  text = text.replace('a', '.++klm@.');
  // Replace 'e' with '.@-53l%.'
  text = text.replace('e', '.@-53l%.');
  // Replace 'i' with '.*&*p4w.'
  text = text.replace('i', '.*&*p4w.');
  // Replace 'o' with '.v0|@c_.'
  text = text.replace('o', '.v0|@c_.');
  // Replace 'u' with '.+wfc%6.'
  text = text.replace('u', '.+wfc%6.');

  return text;
}

// Decode the encoded characters back to their original form
export const dencodingChars = (text) => {
  // Replace '.++klm@.' with 'a'
  text = text.replace('.++klm@.', 'a');
  // Replace '.@-53l%.' with 'e'
  text = text.replace('.@-53l%.', 'e');
  // Replace '.*&*p4w.' with 'i'
  text = text.replace('.*&*p4w.', 'i');
  // Replace '.v0|@c_.' with 'o'
  text = text.replace('.v0|@c_.', 'o');
  // Replace '.+wfc%6.' with 'u'
  text = text.replace('.+wfc%6.', 'u');

  return text;
}
