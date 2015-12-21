export default (db, operation) => {
  const result=[];
  for (let key of Object.keys(db)){
    result.push(operation(db[key]));
  }
  return result;
};


