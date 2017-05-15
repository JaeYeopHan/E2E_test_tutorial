this.loginTest = function(browser) {
  browser
    .url("http://localhost:8080/")
    .waitForElementVisible("body", 1000)
    .setValue("#email", "kishu#navercorp.com")
    .click("#password")
    .assert.cssClassPresent("form > .form-group:nth-child(1)", "has-error")
    .setValue("#email", "kishu@navercorp.com")
    .click("#password")
    .assert.cssClassNotPresent("form > .form-group:nth-child(1)", "has-error")
    .end();
};

this.sample = function(browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end();
}