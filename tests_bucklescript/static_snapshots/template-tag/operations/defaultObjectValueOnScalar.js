// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';


var Raw = { };

var query = (require("gql")`
  query   {
    defaultObjectValueOnScalar(filter: {some: {json: "value"}}, arg: {field: "otherValue"})
  }
`);

function parse(value) {
  return {
          defaultObjectValueOnScalar: value.defaultObjectValueOnScalar
        };
}

function serialize(value) {
  var value$1 = value.defaultObjectValueOnScalar;
  return {
          defaultObjectValueOnScalar: value$1
        };
}

function serializeVariables(param) {
  
}

function makeVariables(param) {
  
}

function makeDefaultVariables(param) {
  
}

var Z__INTERNAL = {
  _graphql_filter_92: 0,
  _graphql_arg_140: 0,
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

exports.MyQuery = MyQuery;
/* query Not a pure module */