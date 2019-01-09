jQuery("#simulation")
  .on("click", ".s-7e93de60-efde-4a6e-b431-abdd5e9fdd8a .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
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
  .on("click", ".s-7e93de60-efde-4a6e-b431-abdd5e9fdd8a .toggle", function(event, data) {
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
                      "#s-7e93de60-efde-4a6e-b431-abdd5e9fdd8a #s-Radio-button_1": {
                        "attributes": {
                          "font-size": "20.0pt",
                          "font-family": "IOS8-Icons-Regular,Arial"
                        }
                      }
                    },{
                      "#s-7e93de60-efde-4a6e-b431-abdd5e9fdd8a #s-Radio-button_1 .valign": {
                        "attributes": {
                          "vertical-align": "middle",
                          "text-align": "left"
                        }
                      }
                    },{
                      "#s-7e93de60-efde-4a6e-b431-abdd5e9fdd8a #s-Radio-button_1 span": {
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