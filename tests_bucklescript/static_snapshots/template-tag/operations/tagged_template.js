// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';


function deepMerge(json1, param) {
  return json1;
}

var GraphQL_PPX = {
  deepMerge: deepMerge
};

var Raw = { };

var query = (require("gql")`
  query   {
    variousScalars  {
      nullableString
      string
      nullableInt
      int
      nullableFloat
      float
      nullableBoolean
      boolean
      nullableID
      id
    }
  }
`);

function parse(value) {
  var value$1 = value.variousScalars;
  var value$2 = value$1.nullableString;
  var value$3 = value$1.nullableInt;
  var value$4 = value$1.nullableFloat;
  var value$5 = value$1.nullableBoolean;
  var value$6 = value$1.nullableID;
  return {
          variousScalars: {
            nullableString: !(value$2 == null) ? value$2 : undefined,
            string: value$1.string,
            nullableInt: !(value$3 == null) ? value$3 : undefined,
            int: value$1.int,
            nullableFloat: !(value$4 == null) ? value$4 : undefined,
            float: value$1.float,
            nullableBoolean: !(value$5 == null) ? value$5 : undefined,
            boolean: value$1.boolean,
            nullableID: !(value$6 == null) ? value$6 : undefined,
            id: value$1.id
          }
        };
}

function serialize(value) {
  var value$1 = value.variousScalars;
  var value$2 = value$1.id;
  var value$3 = value$1.nullableID;
  var nullableID = value$3 !== undefined ? value$3 : null;
  var value$4 = value$1.boolean;
  var value$5 = value$1.nullableBoolean;
  var nullableBoolean = value$5 !== undefined ? value$5 : null;
  var value$6 = value$1.float;
  var value$7 = value$1.nullableFloat;
  var nullableFloat = value$7 !== undefined ? value$7 : null;
  var value$8 = value$1.int;
  var value$9 = value$1.nullableInt;
  var nullableInt = value$9 !== undefined ? value$9 : null;
  var value$10 = value$1.string;
  var value$11 = value$1.nullableString;
  var nullableString = value$11 !== undefined ? value$11 : null;
  var variousScalars = {
    nullableString: nullableString,
    string: value$10,
    nullableInt: nullableInt,
    int: value$8,
    nullableFloat: nullableFloat,
    float: value$6,
    nullableBoolean: nullableBoolean,
    boolean: value$4,
    nullableID: nullableID,
    id: value$2
  };
  return {
          variousScalars: variousScalars
        };
}

function serializeVariables(param) {
  
}

function makeVariables(param) {
  
}

function makeDefaultVariables(param) {
  
}

var Z__INTERNAL = {
  graphql_module: 0
};

var MyQuery = {
  Raw: Raw,
  query: query,
  parse: parse,
  serialize: serialize,
  serializeVariables: serializeVariables,
  makeVariables: makeVariables,
  makeDefaultVariables: makeDefaultVariables,
  Z__INTERNAL: Z__INTERNAL
};

var MyTypes = { };

var Raw$1 = { };

var query$1 = (require("gql")`
  query   {
    variousScalars  {
      nullableString
      string
      nullableInt
      int
      nullableFloat
      float
      nullableBoolean
      boolean
      nullableID
      id
    }
  }
`);

function parse$1(value) {
  var value$1 = value.variousScalars;
  var value$2 = value$1.nullableString;
  var value$3 = value$1.nullableInt;
  var value$4 = value$1.nullableFloat;
  var value$5 = value$1.nullableBoolean;
  var value$6 = value$1.nullableID;
  return {
          variousScalars: {
            nullableString: !(value$2 == null) ? value$2 : undefined,
            string: value$1.string,
            nullableInt: !(value$3 == null) ? value$3 : undefined,
            int: value$1.int,
            nullableFloat: !(value$4 == null) ? value$4 : undefined,
            float: value$1.float,
            nullableBoolean: !(value$5 == null) ? value$5 : undefined,
            boolean: value$1.boolean,
            nullableID: !(value$6 == null) ? value$6 : undefined,
            id: value$1.id
          }
        };
}

function serialize$1(value) {
  var value$1 = value.variousScalars;
  var value$2 = value$1.id;
  var value$3 = value$1.nullableID;
  var nullableID = value$3 !== undefined ? value$3 : null;
  var value$4 = value$1.boolean;
  var value$5 = value$1.nullableBoolean;
  var nullableBoolean = value$5 !== undefined ? value$5 : null;
  var value$6 = value$1.float;
  var value$7 = value$1.nullableFloat;
  var nullableFloat = value$7 !== undefined ? value$7 : null;
  var value$8 = value$1.int;
  var value$9 = value$1.nullableInt;
  var nullableInt = value$9 !== undefined ? value$9 : null;
  var value$10 = value$1.string;
  var value$11 = value$1.nullableString;
  var nullableString = value$11 !== undefined ? value$11 : null;
  var variousScalars = {
    nullableString: nullableString,
    string: value$10,
    nullableInt: nullableInt,
    int: value$8,
    nullableFloat: nullableFloat,
    float: value$6,
    nullableBoolean: nullableBoolean,
    boolean: value$4,
    nullableID: nullableID,
    id: value$2
  };
  return {
          variousScalars: variousScalars
        };
}

function serializeVariables$1(param) {
  
}

function makeVariables$1(param) {
  
}

function makeDefaultVariables$1(param) {
  
}

var Z__INTERNAL$1 = {
  graphql_module: 0
};

var MyQuery1a = {
  Raw: Raw$1,
  query: query$1,
  parse: parse$1,
  serialize: serialize$1,
  serializeVariables: serializeVariables$1,
  makeVariables: makeVariables$1,
  makeDefaultVariables: makeDefaultVariables$1,
  Z__INTERNAL: Z__INTERNAL$1
};

var Raw$2 = { };

var query$2 = (require("gql")`
  query   {
    variousScalars  {
      nullableString
      string
      nullableInt
      int
      nullableFloat
      float
      nullableBoolean
      boolean
      nullableID
      id
    }
  }
`);

function parse$2(value) {
  var value$1 = value.variousScalars;
  var value$2 = value$1.nullableString;
  var value$3 = value$1.nullableInt;
  var value$4 = value$1.nullableFloat;
  var value$5 = value$1.nullableBoolean;
  var value$6 = value$1.nullableID;
  return {
          variousScalars: {
            nullableString: !(value$2 == null) ? value$2 : undefined,
            string: value$1.string,
            nullableInt: !(value$3 == null) ? value$3 : undefined,
            int: value$1.int,
            nullableFloat: !(value$4 == null) ? value$4 : undefined,
            float: value$1.float,
            nullableBoolean: !(value$5 == null) ? value$5 : undefined,
            boolean: value$1.boolean,
            nullableID: !(value$6 == null) ? value$6 : undefined,
            id: value$1.id
          }
        };
}

function serialize$2(value) {
  var value$1 = value.variousScalars;
  var value$2 = value$1.id;
  var value$3 = value$1.nullableID;
  var nullableID = value$3 !== undefined ? value$3 : null;
  var value$4 = value$1.boolean;
  var value$5 = value$1.nullableBoolean;
  var nullableBoolean = value$5 !== undefined ? value$5 : null;
  var value$6 = value$1.float;
  var value$7 = value$1.nullableFloat;
  var nullableFloat = value$7 !== undefined ? value$7 : null;
  var value$8 = value$1.int;
  var value$9 = value$1.nullableInt;
  var nullableInt = value$9 !== undefined ? value$9 : null;
  var value$10 = value$1.string;
  var value$11 = value$1.nullableString;
  var nullableString = value$11 !== undefined ? value$11 : null;
  var variousScalars = {
    nullableString: nullableString,
    string: value$10,
    nullableInt: nullableInt,
    int: value$8,
    nullableFloat: nullableFloat,
    float: value$6,
    nullableBoolean: nullableBoolean,
    boolean: value$4,
    nullableID: nullableID,
    id: value$2
  };
  return {
          variousScalars: variousScalars
        };
}

function serializeVariables$2(param) {
  
}

function makeVariables$2(param) {
  
}

function makeDefaultVariables$2(param) {
  
}

var Z__INTERNAL$2 = {
  graphql_module: 0
};

var MyQuery1b = {
  Raw: Raw$2,
  query: query$2,
  parse: parse$2,
  serialize: serialize$2,
  serializeVariables: serializeVariables$2,
  makeVariables: makeVariables$2,
  makeDefaultVariables: makeDefaultVariables$2,
  Z__INTERNAL: Z__INTERNAL$2
};

var Raw$3 = { };

var query$3 = (require("gatsby").graphql`
  query   {
    variousScalars  {
      nullableString
      string
      nullableInt
      int
      nullableFloat
      float
      nullableBoolean
      boolean
      nullableID
      id
    }
  }
`);

function parse$3(value) {
  var value$1 = value.variousScalars;
  var value$2 = value$1.nullableString;
  var value$3 = value$1.nullableInt;
  var value$4 = value$1.nullableFloat;
  var value$5 = value$1.nullableBoolean;
  var value$6 = value$1.nullableID;
  return {
          variousScalars: {
            nullableString: !(value$2 == null) ? value$2 : undefined,
            string: value$1.string,
            nullableInt: !(value$3 == null) ? value$3 : undefined,
            int: value$1.int,
            nullableFloat: !(value$4 == null) ? value$4 : undefined,
            float: value$1.float,
            nullableBoolean: !(value$5 == null) ? value$5 : undefined,
            boolean: value$1.boolean,
            nullableID: !(value$6 == null) ? value$6 : undefined,
            id: value$1.id
          }
        };
}

function serialize$3(value) {
  var value$1 = value.variousScalars;
  var value$2 = value$1.id;
  var value$3 = value$1.nullableID;
  var nullableID = value$3 !== undefined ? value$3 : null;
  var value$4 = value$1.boolean;
  var value$5 = value$1.nullableBoolean;
  var nullableBoolean = value$5 !== undefined ? value$5 : null;
  var value$6 = value$1.float;
  var value$7 = value$1.nullableFloat;
  var nullableFloat = value$7 !== undefined ? value$7 : null;
  var value$8 = value$1.int;
  var value$9 = value$1.nullableInt;
  var nullableInt = value$9 !== undefined ? value$9 : null;
  var value$10 = value$1.string;
  var value$11 = value$1.nullableString;
  var nullableString = value$11 !== undefined ? value$11 : null;
  var variousScalars = {
    nullableString: nullableString,
    string: value$10,
    nullableInt: nullableInt,
    int: value$8,
    nullableFloat: nullableFloat,
    float: value$6,
    nullableBoolean: nullableBoolean,
    boolean: value$4,
    nullableID: nullableID,
    id: value$2
  };
  return {
          variousScalars: variousScalars
        };
}

function serializeVariables$3(param) {
  
}

function makeVariables$3(param) {
  
}

function makeDefaultVariables$3(param) {
  
}

var Z__INTERNAL$3 = {
  graphql_module: 0
};

var MyQuery2 = {
  Raw: Raw$3,
  query: query$3,
  parse: parse$3,
  serialize: serialize$3,
  serializeVariables: serializeVariables$3,
  makeVariables: makeVariables$3,
  makeDefaultVariables: makeDefaultVariables$3,
  Z__INTERNAL: Z__INTERNAL$3
};

var Raw$4 = { };

var query$4 = (require("gatsby").graphql`
  query   {
    variousScalars  {
      nullableString
      string
      nullableInt
      int
      nullableFloat
      float
      nullableBoolean
      boolean
      nullableID
      id
    }
  }
`);

function parse$4(value) {
  var value$1 = value.variousScalars;
  var value$2 = value$1.nullableString;
  var value$3 = value$1.nullableInt;
  var value$4 = value$1.nullableFloat;
  var value$5 = value$1.nullableBoolean;
  var value$6 = value$1.nullableID;
  return {
          variousScalars: {
            nullableString: !(value$2 == null) ? value$2 : undefined,
            string: value$1.string,
            nullableInt: !(value$3 == null) ? value$3 : undefined,
            int: value$1.int,
            nullableFloat: !(value$4 == null) ? value$4 : undefined,
            float: value$1.float,
            nullableBoolean: !(value$5 == null) ? value$5 : undefined,
            boolean: value$1.boolean,
            nullableID: !(value$6 == null) ? value$6 : undefined,
            id: value$1.id
          }
        };
}

function serialize$4(value) {
  var value$1 = value.variousScalars;
  var value$2 = value$1.id;
  var value$3 = value$1.nullableID;
  var nullableID = value$3 !== undefined ? value$3 : null;
  var value$4 = value$1.boolean;
  var value$5 = value$1.nullableBoolean;
  var nullableBoolean = value$5 !== undefined ? value$5 : null;
  var value$6 = value$1.float;
  var value$7 = value$1.nullableFloat;
  var nullableFloat = value$7 !== undefined ? value$7 : null;
  var value$8 = value$1.int;
  var value$9 = value$1.nullableInt;
  var nullableInt = value$9 !== undefined ? value$9 : null;
  var value$10 = value$1.string;
  var value$11 = value$1.nullableString;
  var nullableString = value$11 !== undefined ? value$11 : null;
  var variousScalars = {
    nullableString: nullableString,
    string: value$10,
    nullableInt: nullableInt,
    int: value$8,
    nullableFloat: nullableFloat,
    float: value$6,
    nullableBoolean: nullableBoolean,
    boolean: value$4,
    nullableID: nullableID,
    id: value$2
  };
  return {
          variousScalars: variousScalars
        };
}

function serializeVariables$4(param) {
  
}

function makeVariables$4(param) {
  
}

function makeDefaultVariables$4(param) {
  
}

var Z__INTERNAL$4 = {
  graphql_module: 0
};

var MyQuery3 = {
  Raw: Raw$4,
  query: query$4,
  parse: parse$4,
  serialize: serialize$4,
  serializeVariables: serializeVariables$4,
  makeVariables: makeVariables$4,
  makeDefaultVariables: makeDefaultVariables$4,
  Z__INTERNAL: Z__INTERNAL$4
};

var Raw$5 = { };

var query$5 = (require("gatsby")`
  query   {
    variousScalars  {
      nullableString
      string
      nullableInt
      int
      nullableFloat
      float
      nullableBoolean
      boolean
      nullableID
      id
    }
  }
`);

function parse$5(value) {
  var value$1 = value.variousScalars;
  var value$2 = value$1.nullableString;
  var value$3 = value$1.nullableInt;
  var value$4 = value$1.nullableFloat;
  var value$5 = value$1.nullableBoolean;
  var value$6 = value$1.nullableID;
  return {
          variousScalars: {
            nullableString: !(value$2 == null) ? value$2 : undefined,
            string: value$1.string,
            nullableInt: !(value$3 == null) ? value$3 : undefined,
            int: value$1.int,
            nullableFloat: !(value$4 == null) ? value$4 : undefined,
            float: value$1.float,
            nullableBoolean: !(value$5 == null) ? value$5 : undefined,
            boolean: value$1.boolean,
            nullableID: !(value$6 == null) ? value$6 : undefined,
            id: value$1.id
          }
        };
}

function serialize$5(value) {
  var value$1 = value.variousScalars;
  var value$2 = value$1.id;
  var value$3 = value$1.nullableID;
  var nullableID = value$3 !== undefined ? value$3 : null;
  var value$4 = value$1.boolean;
  var value$5 = value$1.nullableBoolean;
  var nullableBoolean = value$5 !== undefined ? value$5 : null;
  var value$6 = value$1.float;
  var value$7 = value$1.nullableFloat;
  var nullableFloat = value$7 !== undefined ? value$7 : null;
  var value$8 = value$1.int;
  var value$9 = value$1.nullableInt;
  var nullableInt = value$9 !== undefined ? value$9 : null;
  var value$10 = value$1.string;
  var value$11 = value$1.nullableString;
  var nullableString = value$11 !== undefined ? value$11 : null;
  var variousScalars = {
    nullableString: nullableString,
    string: value$10,
    nullableInt: nullableInt,
    int: value$8,
    nullableFloat: nullableFloat,
    float: value$6,
    nullableBoolean: nullableBoolean,
    boolean: value$4,
    nullableID: nullableID,
    id: value$2
  };
  return {
          variousScalars: variousScalars
        };
}

function serializeVariables$5(param) {
  
}

function makeVariables$5(param) {
  
}

function makeDefaultVariables$5(param) {
  
}

var Z__INTERNAL$5 = {
  graphql_module: 0
};

var MyQuery4 = {
  Raw: Raw$5,
  query: query$5,
  parse: parse$5,
  serialize: serialize$5,
  serializeVariables: serializeVariables$5,
  makeVariables: makeVariables$5,
  makeDefaultVariables: makeDefaultVariables$5,
  Z__INTERNAL: Z__INTERNAL$5
};

var Raw$6 = { };

var query$6 = (require("gatsby")`
  fragment ListFragment on Lists   {
    nullableOfNullable
    nullableOfNonNullable
  }
`);

function parse$6(value) {
  var value$1 = value.nullableOfNullable;
  var value$2 = value.nullableOfNonNullable;
  return {
          nullableOfNullable: !(value$1 == null) ? value$1.map((function (value) {
                    if (!(value == null)) {
                      return value;
                    }
                    
                  })) : undefined,
          nullableOfNonNullable: !(value$2 == null) ? value$2.map((function (value) {
                    return value;
                  })) : undefined
        };
}

function verifyArgsAndParse(_ListFragment, value) {
  return parse$6(value);
}

function serialize$6(value) {
  var value$1 = value.nullableOfNonNullable;
  var nullableOfNonNullable = value$1 !== undefined ? value$1.map((function (value) {
            return value;
          })) : null;
  var value$2 = value.nullableOfNullable;
  var nullableOfNullable = value$2 !== undefined ? value$2.map((function (value) {
            if (value !== undefined) {
              return value;
            } else {
              return null;
            }
          })) : null;
  return {
          nullableOfNullable: nullableOfNullable,
          nullableOfNonNullable: nullableOfNonNullable
        };
}

function verifyName(param) {
  
}

var Z__INTERNAL$6 = {
  graphql: 0,
  graphql_module: 0
};

var ListFragment = {
  Raw: Raw$6,
  query: query$6,
  parse: parse$6,
  verifyArgsAndParse: verifyArgsAndParse,
  serialize: serialize$6,
  verifyName: verifyName,
  Z__INTERNAL: Z__INTERNAL$6
};

var Raw$7 = { };

var query$7 = (require("gatsby")`
  query MyQuery5  {
    lists  {
      ...ListFragment
    }
  }
`);

function parse$7(value) {
  return {
          lists: parse$6(value.lists)
        };
}

function serialize$7(value) {
  var value$1 = value.lists;
  var lists = serialize$6(value$1);
  return {
          lists: lists
        };
}

function serializeVariables$6(param) {
  
}

function makeVariables$6(param) {
  
}

function makeDefaultVariables$6(param) {
  
}

var Z__INTERNAL$7 = {
  graphql_module: 0
};

var MyQuery5 = {
  Raw: Raw$7,
  query: query$7,
  parse: parse$7,
  serialize: serialize$7,
  serializeVariables: serializeVariables$6,
  makeVariables: makeVariables$6,
  makeDefaultVariables: makeDefaultVariables$6,
  Z__INTERNAL: Z__INTERNAL$7
};

var Raw$8 = { };

var query$8 = ((frag_0) => require("gatsby")`
  query MyQuery6  {
    lists  {
      ...ListFragment
    }
  }
  ${frag_0}
`)(query$6);

function parse$8(value) {
  return {
          lists: parse$6(value.lists)
        };
}

function serialize$8(value) {
  var value$1 = value.lists;
  var lists = serialize$6(value$1);
  return {
          lists: lists
        };
}

function serializeVariables$7(param) {
  
}

function makeVariables$7(param) {
  
}

function makeDefaultVariables$7(param) {
  
}

var Z__INTERNAL$8 = {
  graphql_module: 0
};

var MyQuery6 = {
  Raw: Raw$8,
  query: query$8,
  parse: parse$8,
  serialize: serialize$8,
  serializeVariables: serializeVariables$7,
  makeVariables: makeVariables$7,
  makeDefaultVariables: makeDefaultVariables$7,
  Z__INTERNAL: Z__INTERNAL$8
};

var Raw$9 = { };

var query$9 = (require("gql")`
  query MyQuery7  {
    lists  {
      ...ListFragment
    }
  }
`);

function parse$9(value) {
  return {
          lists: parse$6(value.lists)
        };
}

function serialize$9(value) {
  var value$1 = value.lists;
  var lists = serialize$6(value$1);
  return {
          lists: lists
        };
}

function serializeVariables$8(param) {
  
}

function makeVariables$8(param) {
  
}

function makeDefaultVariables$8(param) {
  
}

var Z__INTERNAL$9 = {
  graphql_module: 0
};

var MyQuery7 = {
  Raw: Raw$9,
  query: query$9,
  parse: parse$9,
  serialize: serialize$9,
  serializeVariables: serializeVariables$8,
  makeVariables: makeVariables$8,
  makeDefaultVariables: makeDefaultVariables$8,
  Z__INTERNAL: Z__INTERNAL$9
};

exports.GraphQL_PPX = GraphQL_PPX;
exports.MyQuery = MyQuery;
exports.MyTypes = MyTypes;
exports.MyQuery1a = MyQuery1a;
exports.MyQuery1b = MyQuery1b;
exports.MyQuery2 = MyQuery2;
exports.MyQuery3 = MyQuery3;
exports.MyQuery4 = MyQuery4;
exports.ListFragment = ListFragment;
exports.MyQuery5 = MyQuery5;
exports.MyQuery6 = MyQuery6;
exports.MyQuery7 = MyQuery7;
/* query Not a pure module */
