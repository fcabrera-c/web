# language: en
# ------------------------------------------------------------------------------
Feature: Validate modules Inicio and Nuestra firma

  Scenario: Access of sections of the  module Inicio
    Given we are at home page
    And we validate the first section of the page
    And we validate the second section of the page
    And we validate the third section of the page
    And we validate the fourth section of the page
    And we validate the fifth section of the page
    And we validate the sexth section of the page
    And we validate the seventh section of the page
    And we validate the eigth section of the page
    And we change the theme to dark
    And we validate the footer of page "Facebook-Twitter-LinkedIn-Instagram"
