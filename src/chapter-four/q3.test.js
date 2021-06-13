describe("shuffled array properties remain the same.", () => {
  it("should be the same", () => {
    a = [0, 1, 2, 3, 3, 4, 5, 6, 7];
    b = [...a];
    c = shuffle(a);

    expect(c.sort()).toEqual(b);
  });
});
