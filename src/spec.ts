import { IdentifierSpec } from "./types";

const CAIP2: IdentifierSpec = {
  name: "chainId",
  regex: "[-:a-zA-Z0-9]{5,64}",
  parameters: {
    delimiter: ":",
    values: {
      0: {
        name: "namespace",
        regex: "[-a-z0-9]{3,16}",
      },
      1: {
        name: "reference",
        regex: "[-a-zA-Z0-9]{1,47}",
      },
    },
  },
};

const CAIP10: IdentifierSpec = {
  name: "accountId",
  regex: "[-@:a-zA-Z0-9]{7,128}",
  parameters: {
    delimiter: "@",
    values: {
      0: {
        name: "address",
        regex: "[a-zA-Z0-9]{1,63}",
      },
      1: CAIP2,
    },
  },
};

export const CAIP = {
  "2": CAIP2,
  "10": CAIP10,
};
