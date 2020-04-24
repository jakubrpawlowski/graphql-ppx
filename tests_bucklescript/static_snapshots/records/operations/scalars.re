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
    type t = {variousScalars: t_variousScalars}
    and t_variousScalars = {
      nullableString: Js.Nullable.t(string),
      string,
      nullableInt: Js.Nullable.t(int),
      int,
      nullableFloat: Js.Nullable.t(float),
      float,
      nullableBoolean: Js.Nullable.t(bool),
      boolean: bool,
      nullableID: Js.Nullable.t(string),
      id: string,
    };
  };
  let query = "query   {\nvariousScalars  {\nnullableString  \nstring  \nnullableInt  \nint  \nnullableFloat  \nfloat  \nnullableBoolean  \nboolean  \nnullableID  \nid  \n}\n\n}\n";
  type t = {variousScalars: t_variousScalars}
  and t_variousScalars = {
    nullableString: option(string),
    string,
    nullableInt: option(int),
    int,
    nullableFloat: option(float),
    float,
    nullableBoolean: option(bool),
    boolean: bool,
    nullableID: option(string),
    id: string,
  };
  let parse: Raw.t => t =
    (value) => (
      {

        variousScalars: {
          let value = (value: Raw.t).variousScalars;
          (
            {

              nullableString: {
                let value = (value: Raw.t_variousScalars).nullableString;

                switch (Js.toOption(value)) {
                | Some(value) => Some(value)
                | None => None
                };
              },

              string: {
                let value = (value: Raw.t_variousScalars).string;

                value;
              },

              nullableInt: {
                let value = (value: Raw.t_variousScalars).nullableInt;

                switch (Js.toOption(value)) {
                | Some(value) => Some(value)
                | None => None
                };
              },

              int: {
                let value = (value: Raw.t_variousScalars).int;

                value;
              },

              nullableFloat: {
                let value = (value: Raw.t_variousScalars).nullableFloat;

                switch (Js.toOption(value)) {
                | Some(value) => Some(value)
                | None => None
                };
              },

              float: {
                let value = (value: Raw.t_variousScalars).float;

                value;
              },

              nullableBoolean: {
                let value = (value: Raw.t_variousScalars).nullableBoolean;

                switch (Js.toOption(value)) {
                | Some(value) => Some(value)
                | None => None
                };
              },

              boolean: {
                let value = (value: Raw.t_variousScalars).boolean;

                value;
              },

              nullableID: {
                let value = (value: Raw.t_variousScalars).nullableID;

                switch (Js.toOption(value)) {
                | Some(value) => Some(value)
                | None => None
                };
              },

              id: {
                let value = (value: Raw.t_variousScalars).id;

                value;
              },
            }: t_variousScalars
          );
        },
      }: t
    );
  let makeVar = (~f, ()) => f(Js.Json.null);
  let definition = (parse, query, makeVar);
};