export const createSelectorOptions = (
  nameString = 'name',
  input: any
): object => {
  let options = input.map((item: any) => ({
    value: item.node?.id,
    label: nameString == 'title' ? item.node?.title : item.node?.name,
  }));

  return options;
};
