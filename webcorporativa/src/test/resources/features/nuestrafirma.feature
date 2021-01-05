Feature: Validate module Nuestra firma

  Background: 
    Given we are at home page

  Scenario: Access of sections of the  module Nuestra firma
    Given we select the module Nuestra firma
    And we validate the first section of Nuestra firma
    And we validate the second section of Nuestra firma
    And we validate the third section of Nuestra firma
    And we validate the fourth section of Nuestra firma
    And we validate the fifth section of Nuestra firma
    Then we switch the theme to dark
