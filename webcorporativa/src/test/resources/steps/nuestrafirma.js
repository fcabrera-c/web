Given(/^we select the module Nuestra firma$/, function() {
  $(".menu-about-us").click();
});

Given(/^we validate the first section of Nuestra firma$/, function() {
  expect($(".bold")).to.exist();
  expect($(".theme-light")).to.exist();
  expect($(".theme-dark")).to.exist();
  $(":root").waitTime(3, timeUnits.SECONDS);
});

Given(/^we validate the second section of Nuestra firma$/, function() {
  $(".body > ad-about-us:nth-child(2) > ad-business:nth-child(2) > div:nth-child(1)").scrollIntoView();
  expect($(".business > div:nth-child(1) > img:nth-child(1)")).to.exist();
  expect($(".business > div:nth-child(2) > div:nth-child(1)")).to.exist();
  expect($(".business > div:nth-child(2) > div:nth-child(2)")).to.exist();
  $(":root").waitTime(3, timeUnits.SECONDS);
});

Given(/^we validate the third section of Nuestra firma$/, function() {
  $(".body > ad-about-us:nth-child(2) > ad-strategies:nth-child(3) > div:nth-child(1)").scrollIntoView();
  expect($("div.text:nth-child(1) > div:nth-child(1)")).to.exist();
  expect($("div.text:nth-child(1) > div:nth-child(2)")).to.exist();
  expect($(".cards")).to.exist();
  expect($("div.c-3:nth-child(1)")).to.exist();
  expect($("div.c-3:nth-child(2)")).to.exist();
  expect($("div.c-3:nth-child(3)")).to.exist();
  expect($("div.c-3:nth-child(4)")).to.exist();
  $(":root").waitTime(3, timeUnits.SECONDS);
});

Given(/^we validate the fourth section of Nuestra firma$/, function() {
  $(".body > ad-about-us:nth-child(2) > ad-firma-confianza:nth-child(4)").scrollIntoView();
  expect($("h2.ad-prod-h3")).to.exist();
  expect($("p.ad-prod-body-1")).to.exist();
  expect($("div.c-md-6:nth-child(1)")).to.have.text("");
  $("div.c-md-6:nth-child(1) > img:nth-child(1)").moveTo();
  $(":root").waitTime(1, timeUnits.SECONDS);
  expect($("div.c-12:nth-child(2) > img:nth-child(1)")).to.have.text("");
  $("div.c-md-6:nth-child(2) > img:nth-child(1)").moveTo();
  $(":root").waitTime(1, timeUnits.SECONDS);
  expect($("#confianza > div > div.row.vcentered.clients-logos > div:nth-child(3) > img")).to.have.text("");
  $("div.c-md-6:nth-child(3) > img:nth-child(1)").moveTo();
  $(":root").waitTime(1, timeUnits.SECONDS);
  expect($("div.c-md-6:nth-child(4) > img:nth-child(1)")).to.have.text("");
  $("div.c-md-6:nth-child(4) > img:nth-child(1)").moveTo();
  $(":root").waitTime(1, timeUnits.SECONDS);
  expect($("div.c-md-6:nth-child(5) > img:nth-child(1)")).to.have.text("");
  $("div.c-md-6:nth-child(5) > img:nth-child(1)").moveTo();
  $(":root").waitTime(1, timeUnits.SECONDS);
  expect($("div.c-md-6:nth-child(6) > img:nth-child(1)")).to.have.text("");
  $("div.c-md-6:nth-child(6) > img:nth-child(1)").moveTo();
  $(":root").waitTime(1, timeUnits.SECONDS);
  expect($("div.c-md-6:nth-child(7) > img:nth-child(1)")).to.have.text("");
  $("div.c-md-6:nth-child(7) > img:nth-child(1)").moveTo();
  $(":root").waitTime(1, timeUnits.SECONDS);
  expect($("div.c-md-6:nth-child(8) > img:nth-child(1)")).to.have.text("");
  $("div.c-md-6:nth-child(8) > img:nth-child(1)").moveTo();
  $(":root").waitTime(1, timeUnits.SECONDS);
  expect($("div.c-md-6:nth-child(9) > img:nth-child(1)")).to.have.text("");
  $("div.c-md-6:nth-child(9) > img:nth-child(1)").moveTo();
  $(":root").waitTime(1, timeUnits.SECONDS);
  expect($("div.c-md-6:nth-child(10) > img:nth-child(1)")).to.have.text("");
  $("div.c-md-6:nth-child(10) > img:nth-child(1)").moveTo();
  $(":root").waitTime(1, timeUnits.SECONDS);
  expect($("div.c-md-6:nth-child(11) > img:nth-child(1)")).to.have.text("");
  $("div.c-md-6:nth-child(11) > img:nth-child(1)").moveTo();
  $(":root").waitTime(1, timeUnits.SECONDS);
  expect($("div.c-md-6:nth-child(12) > img:nth-child(1)")).to.have.text("");
  $("div.c-md-6:nth-child(12) > img:nth-child(1)").moveTo();
  $(":root").waitTime(1, timeUnits.SECONDS);
  expect($("div.c-md-6:nth-child(13) > img:nth-child(1)")).to.have.text("");
  $("div.c-md-6:nth-child(13) > img:nth-child(1)").moveTo();
  $(":root").waitTime(1, timeUnits.SECONDS);
  expect($("div.c-md-6:nth-child(14) > img:nth-child(1)")).to.have.text("");
  $("div.c-md-6:nth-child(14) > img:nth-child(1)").moveTo();
  $(":root").waitTime(1, timeUnits.SECONDS);
  expect($("div.c-md-6:nth-child(15) > img:nth-child(1)")).to.have.text("");
  $("div.c-md-6:nth-child(15) > img:nth-child(1)").moveTo();
  $(":root").waitTime(2, timeUnits.SECONDS);
});

Given(/^we validate the fifth section of Nuestra firma$/, function() {
  $(".body > ad-about-us:nth-child(2) > ad-tell-idea:nth-child(5) > div:nth-child(1)").scrollIntoView();
  expect($(".idea > div:nth-child(2) > div:nth-child(1)")).to.have.text("Impulsamos los negocios de hoy con la tecnología del mañana");
  expect($(".idea > div:nth-child(2) > div:nth-child(2)")).to.have.text("Trabajamos como un socio de innovación digital, mejorando la eficiencia del negocio por medio de estrategias omnicanal y Metodologías Ágiles.");
  expect($("a.ad-prod-body-1 > an-icon:nth-child(1)")).to.have.text("");
  $(":root").waitTime(3, timeUnits.SECONDS);
});

Then(/^we switch the theme to dark$/, function() {
  $("body > app-root > div > div.body > ad-about-us > ad-header-about-us > div").scrollIntoView();
  $("body > app-root > div > div.body > ad-about-us > ad-header-about-us > div > div > div.dots > ad-theme-switch > div > div.theme-dark").click();
  $(":root").waitTime(2, timeUnits.SECONDS);
  $(".body > ad-about-us:nth-child(2) > ad-business:nth-child(2) > div:nth-child(1)").scrollIntoView();
  $(":root").waitTime(2, timeUnits.SECONDS);
  $(".body > ad-about-us:nth-child(2) > ad-strategies:nth-child(3) > div:nth-child(1)").scrollIntoView();
  $(":root").waitTime(2, timeUnits.SECONDS);
  $(".body > ad-about-us:nth-child(2) > ad-firma-confianza:nth-child(4)").scrollIntoView();
  $(":root").waitTime(2, timeUnits.SECONDS);
  $(".body > ad-about-us:nth-child(2) > ad-tell-idea:nth-child(5) > div:nth-child(1)").scrollIntoView();
  $(":root").waitTime(2, timeUnits.SECONDS);
  browser.quit();
});
