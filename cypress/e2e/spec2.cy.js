describe("spec 2", () => {
  it("find Specific classname", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".checkas").contains("Click me").click();
  });
});
