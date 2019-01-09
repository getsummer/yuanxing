jQuery("#simulation")
  .on("click", ".s-b88905eb-35b3-48d0-a493-c4f117a1dec6 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("click", ".s-b88905eb-35b3-48d0-a493-c4f117a1dec6 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Radio-button_1")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "target": "#s-Radio-button_1",
                      "value": ""
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-b88905eb-35b3-48d0-a493-c4f117a1dec6 #s-Radio-button_1": {
                        "attributes": {
                          "font-size": "20.0pt",
                          "font-family": "IOS8-Icons-Regular,Arial"
                        }
                      }
                    },{
                      "#s-b88905eb-35b3-48d0-a493-c4f117a1dec6 #s-Radio-button_1 .valign": {
                        "attributes": {
                          "vertical-align": "middle",
                          "text-align": "left"
                        }
                      }
                    },{
                      "#s-b88905eb-35b3-48d0-a493-c4f117a1dec6 #s-Radio-button_1 span": {
                        "attributes": {
                          "color": "#666666",
                          "text-align": "left",
                          "text-decoration": "none",
                          "font-family": "IOS8-Icons-Regular,Arial",
                          "font-size": "20.0pt"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    }
  });