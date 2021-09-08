const data_types = [
  "String",
  "Date",
  "Object",
  "ObjectId",
  "Number",
  "Boolean",
  "Array(ObjectIds)",
  "Array(Objects)",
  "Array(Strings)",
  "Array(Numbers)",
  "Array(Boolean)",
  "Array(Misc)",
];
const namespace_validator = {
  validator: (namespace) => namespace.indexOf(" ") === -1,
  message: `variable namespace cannot contain empty spaces.`,
};
module.exports = {
  data_types,
  namespace_validator,
};
