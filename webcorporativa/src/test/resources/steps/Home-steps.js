Given(/^we are at home page$/, function() {
  browser.get("https://sodev.anzen.com.mx:88/");
  browser.configure().window().maximize();
  var timeUnits = require("minium/timeunits");
  $(":root").waitTime(5, timeUnits.SECONDS);
});

Given(/^we validate the first section of the page$/, function() {
  expect($(".bold")).to.exist();
  expect($(".active")).to.exist();
  expect($(".theme-dark")).to.exist();
  scenario.embed(browser.screenshot().asBytes(), "image/png");
});

Given(/^we validate the second section of the page$/, function() {
  $("body > app-root > div > div.body > ad-home > ad-how-we-do-it").scrollIntoView();
  expect($(".an-tag-secondary-20")).to.exist("¿Cómo lo hacemos?");
  expect($("body > app-root > div > div.body > ad-home > ad-how-we-do-it > div > div > div.title.ad-prod-h3.bold")).to.have.text("Soluciones de TI personalizadas");
  expect($("body > app-root > div > div.body > ad-home > ad-how-we-do-it > div > div > div.subtitle.ad-prod-body-1")).to.have.text("Soluciones estratégicas a la medida que proyectan tu negocio a los retos del futuro.");
  expect($("body > app-root > div > div.body > ad-home > ad-how-we-do-it > div > div > div.circles")).to.exist();
  $(":root").waitTime(2, timeUnits.SECONDS);
  scenario.embed(browser.screenshot().asBytes(), "image/png");
});

Given(/^we validate the third section of the page$/, function() {
  $("body > app-root > div > div.body > ad-home > ad-services").scrollIntoView();
  expect($(".an-tag-tertiary-30")).to.have.text("Servicios");
  expect($("body > app-root > div > div.body > ad-home > ad-services > div > div > div.title.ad-prod-h3.bold")).to.have.text("Soluciones confiables");
  expect($(".ad-prod-body-1")).to.have.text("Por medio de equipos multidisciplinarios desarrollamos experiencias y productos únicos centrados en las necesidades de tu negocio.");
  expect($(".tertiary-20")).to.exist();
  expect($(".tertiary-40")).to.exist();
  expect($(".tertiary-60")).to.exist();
  expect($(".tertiary-70")).to.exist();
  $(":root").waitTime(2, timeUnits.SECONDS);
  scenario.embed(browser.screenshot().asBytes(), "image/png");
});
Given(/^we validate the fourth section of the page$/, function() {
  $("body > app-root > div > div.body > ad-home > ad-solutions > div").scrollIntoView();
  expect($("body > app-root > div > div.body > ad-home > ad-solutions > div > div > div.globe.col.c-6")).to.exist();
  expect($("body > app-root > div > div.body > ad-home > ad-solutions > div > div > div.solutions-content.col > div > div.title.ad-prod-h3.bold")).to.have.text("Soluciones globales");
  expect($("body > app-root > div > div.body > ad-home > ad-solutions > div > div > div.solutions-content.col > div > div.subtitle.ad-prod-subtitle-1")).to.exist();
  $(":root").waitTime(2, timeUnits.SECONDS);
  scenario.embed(browser.screenshot().asBytes(), "image/png");
});

Given(/^we validate the fifth section of the page$/, function() {
  $("body > app-root > div > div.body > ad-home > ad-projects > div > div").scrollIntoView();
  expect($(".an-tag-magenta-30")).to.have.text("Proyectos");
  expect($("body > app-root > div > div.body > ad-home > ad-projects > div > div > div.projects > div.title.ad-prod-h3.bold")).to.have.text("Casos de uso recientes");
  expect($("body > app-root > div > div.body > ad-home > ad-projects > div > div > div.projects > div.subtitle.ad-prod-body-1")).to.exist();
  expect($("body > app-root > div > div.body > ad-home > ad-projects > div > div > div.projects > a > an-icon")).to.exist("Ver todos los proyectos");
  expect($(".gren-to-blue-medium")).to.have.text("Banca empresarial");
  expect($(".blue-to-orange-medium")).to.have.text("Banca móvil");
  expect($(".magenta-to-purple-light")).to.have.text("Onboarding digital");
  expect($(".red-to-purple-medium")).to.have.text("Wallet solution");
  $(":root").waitTime(2, timeUnits.SECONDS);
  scenario.embed(browser.screenshot().asBytes(), "image/png");
});

Given(/^we validate the sexth section of the page$/, function() {
  $("body > app-root > div > div.body > ad-home > ad-confianza").scrollIntoView();
  expect($("#confianza > div > div:nth-child(1) > div > h2")).to.have.text("Confianza garantizada");
  expect($("#confianza > div > div:nth-child(1) > div > p")).to.have.text("Empresas a nivel mundial han puesto su negocio en nuestras manos para impulsar su marca y mejorar sus productos digitales.");
  expect($("#confianza > div > div.row.clients-logos > div:nth-child(1)")).to.exist("Citibanamex");
  $("#confianza > div > div.row.clients-logos > div:nth-child(1)").moveTo();
  $(":root").waitTime(1, timeUnits.SECONDS);
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  expect($("#confianza > div > div.row.clients-logos > div:nth-child(2)")).to.exist("Scotiabanck");
  $("#confianza > div > div.row.clients-logos > div:nth-child(2)").moveTo();
  $(":root").waitTime(1, timeUnits.SECONDS);
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  expect($("#confianza > div > div.row.clients-logos > div:nth-child(3)")).to.exist("Santander");
  $("#confianza > div > div.row.clients-logos > div:nth-child(3)").moveTo();
  $(":root").waitTime(1, timeUnits.SECONDS);
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  expect($("#confianza > div > div.row.clients-logos > div:nth-child(4)")).to.exist("BBVA");
  $("#confianza > div > div.row.clients-logos > div:nth-child(4)").moveTo();
  $(":root").waitTime(1, timeUnits.SECONDS);
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  expect($("#confianza > div > div.row.clients-logos > div:nth-child(5)")).to.exist("Banorte");
  $("#confianza > div > div.row.clients-logos > div:nth-child(5)").moveTo();
  $(":root").waitTime(1, timeUnits.SECONDS);
  scenario.embed(browser.screenshot().asBytes(), "image/png");
});

Given(/^we validate the seventh section of the page$/, function() {
  $("#colabora > div").scrollIntoView();
  expect($("#colabora > div > div > div > an-tag > div")).to.have.text("Carreras");
  expect($("#colabora > div > div > div > h2")).to.have.text("Colabora con nosotros");
  expect($("#colabora > div > div > div > p")).to.have.text("Compártenos tu experiencia y evolucionemos juntos.");
  expect($("#colabora > div > div > div > a")).to.have.text("Ver todas las vacantes");
  $(":root").waitTime(2, timeUnits.SECONDS);
  scenario.embed(browser.screenshot().asBytes(), "image/png");
});

Given(/^we validate the eigth section of the page$/, function() {
  $("#idea > div").scrollIntoView();
  expect($("#idea > div > div > div > an-tag > div")).to.have.text("Contacto");
  expect($("#idea > div > div > div > h2")).to.have.text("¿Tienes una idea?");
  expect($("#idea > div > div > div > a > an-icon")).to.exist("Cuéntanos sobre ella");
  $(":root").waitTime(2, timeUnits.SECONDS);
  scenario.embed(browser.screenshot().asBytes(), "image/png");
});

Given(/^we change the theme to dark$/, function() {
  $("body > app-root > div > div.body > ad-home > ad-us > div").scrollIntoView();
  $("body > app-root > div > div.body > ad-home > ad-us > div > div > div.dots > ad-theme-switch > div > div.theme-dark").click();
  $(":root").waitTime(2, timeUnits.SECONDS);
  $("body > app-root > div > div.body > ad-home > ad-us > div > div > div.dots > ad-theme-switch > div > div.theme-light > an-icon").click();
  $(":root").waitTime(2, timeUnits.SECONDS);
  scenario.embed(browser.screenshot().asBytes(), "image/png");
});

Given(/^we validate the footer of page$/, function() {
  $("#main-footer > div > div > div > figure > img").scrollIntoView();
  $("#main-footer > div > div > div > section > a.menu-social.footer-facebook > an-icon").moveTo();
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  $("#main-footer > div > div > div > section > a.menu-social.footer-twitter").moveTo();
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  $("#main-footer > div > div > div > section > a.menu-social.footer-linkedin").moveTo();
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  $("#main-footer > div > div > div > section > a.menu-social.footer-instagram").moveTo();
  scenario.embed(browser.screenshot().asBytes(), "image/png");
});
