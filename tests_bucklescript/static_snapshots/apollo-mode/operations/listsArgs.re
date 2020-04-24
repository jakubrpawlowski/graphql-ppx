[@ocaml.ppx.context
  {
    tool_name: "migrate_driver",
    include_dirs: [],
    load_path: [],
    open_modules: [],
    for_package: None,
    debug: false,
    use_threads: false,
    use_vmthreads: false,
    recursive_types: false,
    principal: false,
    transparent_modules: false,
    unboxed_types: false,
    unsafe_string: false,
    cookies: [],
  }
];
module MyQuery = {
  module Raw = {
    type t = {
      __typename: string,
      listsInput: string,
    };
  };
  let query = "query ($nullableOfNullable: [String], $nullableOfNonNullable: [String!], $nonNullableOfNullable: [String]!, $nonNullableOfNonNullable: [String!]!)  {\n__typename  \nlistsInput(arg: {nullableOfNullable: $nullableOfNullable, nullableOfNonNullable: $nullableOfNonNullable, nonNullableOfNullable: $nonNullableOfNullable, nonNullableOfNonNullable: $nonNullableOfNonNullable})  \n}\n";
  type t = {
    __typename: string,
    listsInput: string,
  };
  type t_variables = {
    nullableOfNullable: option(array(option(string))),
    nullableOfNonNullable: option(array(string)),
    nonNullableOfNullable: array(option(string)),
    nonNullableOfNonNullable: array(string),
  };
  let parse: Raw.t => t =
    (value) => (
      {

        __typename: {
          let value = (value: Raw.t).__typename;

          value;
        },

        listsInput: {
          let value = (value: Raw.t).listsInput;

          value;
        },
      }: t
    );
  let serialize: t => Raw.t =
    (value) => (
      {
        let listsInput = {
          let value = (value: t).listsInput;

          value;
        }
        and __typename = {
          let value = (value: t).__typename;

          value;
        };
        {

          __typename,

          listsInput,
        };
      }: Raw.t
    );
  let serializeVariables: t_variables => Js.Json.t =
    inp =>
      [|
        (
          "nullableOfNullable",
          (
            a =>
              switch (a) {
              | None => None
              | Some(b) =>
                (
                  a =>
                    Some(
                      a
                      |> Array.map(b =>
                           switch (
                             (
                               a =>
                                 switch (a) {
                                 | None => None
                                 | Some(b) =>
                                   (a => Some(Js.Json.string(a)))(b)
                                 }
                             )(
                               b,
                             )
                           ) {
                           | Some(c) => c
                           | None => Js.Json.null
                           }
                         )
                      |> Js.Json.array,
                    )
                )(
                  b,
                )
              }
          )(
            inp.nullableOfNullable,
          ),
        ),
        (
          "nullableOfNonNullable",
          (
            a =>
              switch (a) {
              | None => None
              | Some(b) =>
                (
                  a =>
                    Some(
                      a
                      |> Array.map(b =>
                           switch ((a => Some(Js.Json.string(a)))(b)) {
                           | Some(c) => c
                           | None => Js.Json.null
                           }
                         )
                      |> Js.Json.array,
                    )
                )(
                  b,
                )
              }
          )(
            inp.nullableOfNonNullable,
          ),
        ),
        (
          "nonNullableOfNullable",
          (
            a =>
              Some(
                a
                |> Array.map(b =>
                     switch (
                       (
                         a =>
                           switch (a) {
                           | None => None
                           | Some(b) => (a => Some(Js.Json.string(a)))(b)
                           }
                       )(
                         b,
                       )
                     ) {
                     | Some(c) => c
                     | None => Js.Json.null
                     }
                   )
                |> Js.Json.array,
              )
          )(
            inp.nonNullableOfNullable,
          ),
        ),
        (
          "nonNullableOfNonNullable",
          (
            a =>
              Some(
                a
                |> Array.map(b =>
                     switch ((a => Some(Js.Json.string(a)))(b)) {
                     | Some(c) => c
                     | None => Js.Json.null
                     }
                   )
                |> Js.Json.array,
              )
          )(
            inp.nonNullableOfNonNullable,
          ),
        ),
      |]
      |> Js.Array.filter(
           fun
           | (_, None) => false
           | (_, Some(_)) => true,
         )
      |> Js.Array.map(
           fun
           | (k, Some(v)) => (k, v)
           | (k, None) => (k, Js.Json.null),
         )
      |> Js.Dict.fromArray
      |> Js.Json.object_;
  let makeVar =
      (
        ~f,
        ~nullableOfNullable=?,
        ~nullableOfNonNullable=?,
        ~nonNullableOfNullable,
        ~nonNullableOfNonNullable,
        (),
      ) =>
    f(
      serializeVariables(
        {

          nullableOfNullable,

          nullableOfNonNullable,

          nonNullableOfNullable,

          nonNullableOfNonNullable,
        }: t_variables,
      ),
    );
  let definition = (parse, query, makeVar);
  let makeVariables = makeVar(~f=f => f);
};
