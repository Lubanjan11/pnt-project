$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("mct_login.feature");
formatter.feature({
  "line": 1,
  "name": "User Login Mechanism",
  "description": "In order to get all membership benefit from multicart ecommerce \nAs a User I want to perform a online login",
  "id": "user-login-mechanism",
  "keyword": "Feature"
});
formatter.background({
  "line": 6,
  "name": "Langing on MCT Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I open browser chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I land on multicart landing page",
  "keyword": "And "
});
formatter.match({
  "location": "mct_login_steps.i_open_browser_chrome()"
});
formatter.result({
  "duration": 5056129800,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.i_land_on_multicart_landing_page()"
});
formatter.result({
  "duration": 1225891000,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Successfull login",
  "description": "",
  "id": "user-login-mechanism;successfull-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I complete login with James valid credentails",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I expect to seee profile Name as James Williams",
  "keyword": "Then "
});
formatter.match({
  "location": "mct_login_steps.i_complete_login_with_James_valid_credentails()"
});
formatter.result({
  "duration": 3450603000,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.i_expect_to_seee_profile_Name_as_James_Williams()"
});
formatter.result({
  "duration": 2101692400,
  "status": "passed"
});
formatter.after({
  "duration": 4328806600,
  "status": "passed"
});
formatter.uri("mct_myacccount.feature");
formatter.feature({
  "line": 1,
  "name": "My Account",
  "description": "",
  "id": "my-account",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "Langing on MCT Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I open browser chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I land on multicart landing page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I complete login with James valid credentails",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to my account page",
  "keyword": "And "
});
formatter.match({
  "location": "mct_login_steps.i_open_browser_chrome()"
});
formatter.result({
  "duration": 3106894400,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.i_land_on_multicart_landing_page()"
});
formatter.result({
  "duration": 1004945500,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.i_complete_login_with_James_valid_credentails()"
});
formatter.result({
  "duration": 3516546800,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.I_navigate_to_my_account_page()"
});
formatter.result({
  "duration": 3862591200,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "My Account options are available",
  "description": "",
  "id": "my-account;my-account-options-are-available",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I see all my account options available",
  "rows": [
    {
      "cells": [
        "My Orders"
      ],
      "line": 11
    },
    {
      "cells": [
        "Profile"
      ],
      "line": 12
    },
    {
      "cells": [
        "My Return Requests"
      ],
      "line": 13
    },
    {
      "cells": [
        "Change Password"
      ],
      "line": 14
    },
    {
      "cells": [
        "My Favorite Products"
      ],
      "line": 15
    },
    {
      "cells": [
        "My Favorite Sellers"
      ],
      "line": 16
    },
    {
      "cells": [
        "Seller Dashboard"
      ],
      "line": 17
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "mct_login_steps.I_see_all_my_account_options_available(DataTable)"
});
formatter.result({
  "duration": 106984300,
  "status": "passed"
});
formatter.after({
  "duration": 99466800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Langing on MCT Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I open browser chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I land on multicart landing page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I complete login with James valid credentails",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to my account page",
  "keyword": "And "
});
formatter.match({
  "location": "mct_login_steps.i_open_browser_chrome()"
});
formatter.result({
  "duration": 3098340000,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.i_land_on_multicart_landing_page()"
});
formatter.result({
  "duration": 1087831300,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.i_complete_login_with_James_valid_credentails()"
});
formatter.result({
  "duration": 3404164400,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.I_navigate_to_my_account_page()"
});
formatter.result({
  "duration": 3776301100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Can be navigate to all options pages",
  "description": "",
  "id": "my-account;can-be-navigate-to-all-options-pages",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@WIP"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I expect all options links are working",
  "keyword": "Then "
});
formatter.match({
  "location": "mct_login_steps.I_expect_all_options_links_are_working()"
});
formatter.result({
  "duration": 8189424000,
  "status": "passed"
});
formatter.after({
  "duration": 82377100,
  "status": "passed"
});
formatter.uri("mct_regestration.feature");
formatter.feature({
  "line": 1,
  "name": "User Registration Mechanism",
  "description": "In order to get all membership benefit from multicart ecommerce \nI want to registratr my self",
  "id": "user-registration-mechanism",
  "keyword": "Feature"
});
formatter.background({
  "line": 5,
  "name": "Langing on MCT Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I open browser chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I land on multicart landing page",
  "keyword": "And "
});
formatter.match({
  "location": "mct_login_steps.i_open_browser_chrome()"
});
formatter.result({
  "duration": 3266204800,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.i_land_on_multicart_landing_page()"
});
formatter.result({
  "duration": 4145894600,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Successfull registration",
  "description": "",
  "id": "user-registration-mechanism;successfull-registration",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I navigate to Registration Page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I complete registration for MR FNAME",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I expect to seee profile Name MR FNAME",
  "keyword": "Then "
});
formatter.match({
  "location": "mct_login_steps.i_navigate_to_Registration_Page()"
});
formatter.result({
  "duration": 3426358400,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.i_complete_registration_for_MR_FNAME()"
});
formatter.result({
  "duration": 1716511900,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.i_expect_to_seee_profile_Name_MR_FNAME()"
});
formatter.result({
  "duration": 2064856600,
  "status": "passed"
});
formatter.after({
  "duration": 4318492900,
  "status": "passed"
});
});