// Encode specific characters in the input text
export const encodingChars = (text) => {
  text = text.replace('a', '.++kjm@.');
  text = text.replace('e', '@-53j%');
  text = text.replace('i', '.*&*p4w');
  text = text.replace('o', '.v0|@q_.');
  text = text.replace('u', '+wfq%6.');
  text = text.replace('s', 'ñ5$!xz.');
  text = text.replace('r', '-+.2$16');
  text = text.replace('n', '.%9f#-x.');
  text = text.replace('d', ':_[2!z.');

  return text;
}

// Decode the encoded characters back to their original form
export const decodingChars = (text) => {
  text = text.replace('.++kjm@.', 'a');
  text = text.replace('@-53j%', 'e');
  text = text.replace('.*&*p4w', 'i');
  text = text.replace('.v0|@q_.', 'o');
  text = text.replace('+wfq%6.', 'u');
  text = text.replace('ñ5$!xz.', 's');
  text = text.replace('-+.2$16', 'r');
  text = text.replace('.%9f#-x.', 'n');
  text = text.replace(':_[2!z.', 'd');

  return text;
}
