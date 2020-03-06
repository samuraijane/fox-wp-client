const extractFormData = fd => {
  const data = {};
  for (let key of fd.keys()) {
    data[key] = fd.get(key);
  }
  return data;
};

export default extractFormData;
