export const mockCategories = [
  { _id: 'TEST_CATEGORY1', userId: 'FAKE_USER1', name: 'TestCategory1' },

  { _id: 'TEST_CATEGORY2', userId: 'FAKE_USER2', name: 'TestCategory2' },

  { _id: 'TEST_CATEGORY3', userId: 'FAKE_USER3', name: 'TestCategory3' },
];

export const mockCategoriesState = () =>
  mockCategories.reduce((prev, curr) => ({
    ...prev,
    [curr._id as string]: curr,
  }));
