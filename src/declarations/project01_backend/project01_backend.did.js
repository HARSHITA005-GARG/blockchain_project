export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'calculateBMI' : IDL.Func(
        [IDL.Float64, IDL.Float64],
        [IDL.Float64, IDL.Text],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
