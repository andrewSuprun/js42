function validateMessage(msg) {
  if (msg === null) throw ReferenceError('Message is null!');
  if (typeof msg != 'string') throw TypeError(`Message should be of type string but was of type ${typeof msg}!`);
  if (msg.length === 0 || msg.length > 255) throw RangeError(`Message contains ${msg.length} characters!`);
  if (msg.indexOf("<")!= -1 && msg.indexOf("<") < msg.lastIndexOf(">")) return false;
  return true;
}
