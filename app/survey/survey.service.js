"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var SurveyService = (function () {
    function SurveyService() {
    }
    SurveyService.prototype.getSurveys = function () {
        return [{
                "_id": "585ccc99ae470b0e00f9eeee",
                "_acl": {
                    "creator": "57f22781047135bd266d0017"
                },
                "notificationType": "SURVEY",
                "type": "textCheckBox",
                "isActive": true,
                "isSent": true,
                "isAck": false,
                "notificationAttributes": {
                    "cycle": 1711,
                    "order": 5,
                    "title": "Symptomatic Medication and Treatment Satisfaction Surveys",
                    "subTitle": "How you take your MS medication is important in managing your MS.  Keeping tabs on other medications taken for your symptoms is also helpful.  Take these surveys to provide feedback on your MS medication experience, and to record your use of other key medications.",
                    "surveys": ["SURVEY_10", "SURVEY_9"]
                },
                "_kmd": {
                    "ect": "2016-12-23T07:04:57.187Z",
                    "lmt": "2016-12-23T07:04:57.187Z"
                }
            }, {
                "_id": "585ca4c35a6f2a0e00fcd116",
                "_acl": {
                    "creator": "57f22781047135bd266d0017"
                },
                "notificationType": "SURVEY",
                "type": "textRadio",
                "isActive": true,
                "isSent": true,
                "isAck": false,
                "notificationAttributes": {
                    "cycle": 855,
                    "order": 6,
                    "title": "Comorbidities",
                    "subTitle": "Having other health conditions can affect how your MS is understood and managed. Take this survey to update your information.",
                    "surveys": ["SURVEY_11"]
                },
                "_kmd": {
                    "ect": "2016-12-23T04:14:59.118Z",
                    "lmt": "2016-12-23T04:14:59.118Z"
                }
            }, {
                "_id": "585ca71bae470b0e00f9eca2",
                "_acl": {
                    "creator": "57f22781047135bd266d0017"
                },
                "notificationType": "SURVEY",
                "type": "textRadio",
                "isActive": true,
                "isSent": true,
                "isAck": false,
                "notificationAttributes": {
                    "cycle": 855,
                    "order": 7,
                    "title": "Pain and Visual Impairment Surveys",
                    "subTitle": "It’s important to track how MS-related pain and/or visual problems may be affecting your daily activities. Take these surveys to track how they are affecting you.",
                    "surveys": ["SURVEY_12", "SURVEY_13"]
                },
                "_kmd": {
                    "ect": "2016-12-23T04:24:59.339Z",
                    "lmt": "2016-12-23T04:24:59.339Z"
                }
            }, {
                "_id": "585cabcbae470b0e00f9ecfd",
                "_acl": {
                    "creator": "57f22781047135bd266d0017"
                },
                "notificationType": "SURVEY",
                "isActive": true,
                "isSent": true,
                "isAck": false,
                "notificationAttributes": {
                    "cycle": 855,
                    "order": 9,
                    "title": "Bladder and Bowel Control Surveys",
                    "subTitle": "Trouble with bladder control and/or unpredictable bowel  issues are common with MS. Take these surveys to track bladder and bowel control problems.",
                    "surveys": ["SURVEY_16", "SURVEY_15"]
                },
                "_kmd": {
                    "ect": "2016-12-23T04:44:59.827Z",
                    "lmt": "2016-12-23T04:44:59.827Z"
                }
            }, {
                "_id": "585cae235a6f2a0e00fcd1df",
                "_acl": {
                    "creator": "57f22781047135bd266d0017"
                },
                "notificationType": "SURVEY",
                "isActive": true,
                "isSent": true,
                "isAck": false,
                "notificationAttributes": {
                    "cycle": 855,
                    "order": 10,
                    "title": "Smoking and Marijuana Use Survey",
                    "subTitle": "Whether or not you smoke tobacco or use marijuana may impact your MS. Take this survey to update your information.",
                    "surveys": ["SURVEY_17"]
                },
                "_kmd": {
                    "ect": "2016-12-23T04:54:59.999Z",
                    "lmt": "2016-12-23T04:54:59.999Z"
                }
            }, {
                "_id": "585cb2cfae470b0e00f9ed72",
                "_acl": {
                    "creator": "57f22781047135bd266d0017"
                },
                "notificationType": "SURVEY",
                "isActive": true,
                "isSent": true,
                "isAck": false,
                "notificationAttributes": {
                    "cycle": 855,
                    "order": 12,
                    "title": "Mental Health Survey",
                    "subTitle": "Your mood and mental wellness can be affected by MS. Take this survey to track how you’re feeling.",
                    "surveys": ["SURVEY_18"]
                },
                "_kmd": {
                    "ect": "2016-12-23T05:14:55.439Z",
                    "lmt": "2016-12-23T05:14:55.439Z"
                }
            }, {
                "_id": "585cb527c77a6f0e00e4ee3e",
                "_acl": {
                    "creator": "57f22781047135bd266d0017"
                },
                "notificationType": "SURVEY",
                "isActive": true,
                "isSent": true,
                "isAck": false,
                "notificationAttributes": {
                    "cycle": 855,
                    "order": 13,
                    "title": "Sleep Disturbance Survey",
                    "subTitle": "MS and its symptoms can affect your ability to get good rest. Take this survey to track your sleep quality.",
                    "surveys": ["SURVEY_19"]
                },
                "_kmd": {
                    "ect": "2016-12-23T05:24:55.624Z",
                    "lmt": "2016-12-23T05:24:55.624Z"
                }
            }, {
                "_id": "585cb9d8fb5d4b0e008afa1b",
                "_acl": {
                    "creator": "57f22781047135bd266d0017"
                },
                "notificationType": "SURVEY",
                "isActive": true,
                "isSent": true,
                "isAck": false,
                "notificationAttributes": {
                    "cycle": 855,
                    "order": 15,
                    "title": "Headache Questionnaire",
                    "subTitle": "Headaches are a common symptom of MS. Take this survey to track how headaches are affecting you.",
                    "surveys": ["SURVEY_20"]
                },
                "_kmd": {
                    "ect": "2016-12-23T05:44:56.105Z",
                    "lmt": "2016-12-23T05:44:56.105Z"
                }
            }, {
                "_id": "585cbc30ae470b0e00f9edd4",
                "_acl": {
                    "creator": "57f22781047135bd266d0017"
                },
                "notificationType": "SURVEY",
                "isActive": true,
                "isSent": true,
                "isAck": false,
                "notificationAttributes": {
                    "cycle": 855,
                    "order": 16,
                    "title": "Social Participation and Sexual Satisfaction Surveys",
                    "subTitle": "It’s important to monitor how MS can affect your involvement in social activities. Furthermore, the ability to express physical affection can be problematic with MS. Take these surveys to track these issues.",
                    "surveys": ["SURVEY_21", "SURVEY_22"]
                },
                "_kmd": {
                    "ect": "2016-12-23T05:54:56.330Z",
                    "lmt": "2016-12-23T05:54:56.330Z"
                }
            }, {
                "_id": "585cc590c77a6f0e00e4ef04",
                "_acl": {
                    "creator": "57f22781047135bd266d0017"
                },
                "notificationType": "SURVEY",
                "isActive": true,
                "isSent": true,
                "isAck": false,
                "notificationAttributes": {
                    "cycle": 1711,
                    "order": 2,
                    "title": "Side Effect Tracker and MRI Status Update",
                    "subTitle": "Monitoring side effects of your MS medication and your MRI history is important. Take these surveys to track medication side effects as well as findings from your recent MRI.",
                    "surveys": ["SURVEY_4", "SURVEY_3"]
                },
                "_kmd": {
                    "ect": "2016-12-23T06:34:56.783Z",
                    "lmt": "2016-12-23T06:34:56.783Z"
                }
            }, {
                "_id": "585cca41ae470b0e00f9ee93",
                "_acl": {
                    "creator": "57f22781047135bd266d0017"
                },
                "notificationType": "SURVEY",
                "isActive": true,
                "isSent": true,
                "isAck": false,
                "notificationAttributes": {
                    "cycle": 856,
                    "order": 4,
                    "title": "Cognitive Function and Fatigue Surveys",
                    "subTitle": "Fatigue is a common symptom with MS. In addition, MS can affect how well you think, focus, or remember. Take these surveys to track your energy level and cognitive functioning.",
                    "surveys": ["SURVEY_7", "SURVEY_8"]
                },
                "_kmd": {
                    "ect": "2016-12-23T06:54:57.013Z",
                    "lmt": "2016-12-23T06:54:57.013Z"
                }
            }, {
                "_id": "585cbe88ae470b0e00f9ee2f",
                "_acl": {
                    "creator": "57f22781047135bd266d0017"
                },
                "notificationType": "SURVEY",
                "isActive": true,
                "isSent": true,
                "isAck": false,
                "notificationAttributes": {
                    "cycle": 1710,
                    "order": 17,
                    "title": "Symptom Improvement Survey",
                    "subTitle": "Monitoring how your current MS medication is working is important. Take this survey to update the impact of your MS medication on symptoms.",
                    "surveys": ["SURVEY_14"]
                },
                "_kmd": {
                    "ect": "2016-12-23T06:04:56.311Z",
                    "lmt": "2016-12-23T06:04:56.311Z"
                }
            }, {
                "_id": "585cc0e0c77a6f0e00e4eea1",
                "_acl": {
                    "creator": "57f22781047135bd266d0017"
                },
                "notificationType": "SURVEY",
                "isActive": true,
                "isSent": true,
                "isAck": false,
                "notificationAttributes": {
                    "cycle": 855,
                    "order": 18,
                    "title": "Employment and Insurance Status",
                    "subTitle": "",
                    "surveys": ["SURVEY_23"]
                },
                "_kmd": {
                    "ect": "2016-12-23T06:14:56.563Z",
                    "lmt": "2016-12-23T06:14:56.563Z"
                }
            }, {
                "_id": "585cc3385a6f2a0e00fcd2ea",
                "_acl": {
                    "creator": "57f22781047135bd266d0017"
                },
                "notificationType": "SURVEY",
                "isActive": true,
                "isSent": true,
                "isAck": false,
                "notificationAttributes": {
                    "cycle": 856,
                    "order": 1,
                    "title": "Mobility and Overall Ability Survey",
                    "subTitle": "MS can affect how well you can talk or move around and your overall functioning. Take this survey to track how you’re doing.",
                    "surveys": ["SURVEY_1", "SURVEY_2"]
                },
                "_kmd": {
                    "ect": "2016-12-23T06:24:56.563Z",
                    "lmt": "2016-12-23T06:24:56.563Z"
                }
            }, {
                "_id": "585cc7e8c77a6f0e00e4ef60",
                "_acl": {
                    "creator": "57f22781047135bd266d0017"
                },
                "notificationType": "SURVEY",
                "isActive": true,
                "isSent": true,
                "isAck": false,
                "notificationAttributes": {
                    "cycle": 856,
                    "order": 3,
                    "title": "Diet and Exercise Surveys",
                    "subTitle": "Some aspects of your diet may be important with MS. In addition, keeping track of your physical activity can help provide insight into how MS is impacting you and how you can manage your health. Take these surveys to track your dietary intake and exercise routine.",
                    "surveys": ["SURVEY_5", "SURVEY_6"]
                },
                "_kmd": {
                    "ect": "2016-12-23T06:44:56.864Z",
                    "lmt": "2016-12-23T06:44:56.864Z"
                }
            }
        ];
    };
    SurveyService.prototype.getindividualSurvey = function () {
        return [{
                "order": 1,
                "question": {
                    "type": "textCheckBox",
                    "preQuestion": "Are you taking any medication for the following symptoms?",
                    "text": "",
                    "options": [{
                            "order": 1,
                            "text": "Walking Difficulty",
                            "checked": false,
                            "subType": "dropDown",
                            "hasSubOptions": true,
                            "subOptions": [{
                                    "order": 1,
                                    "text": "Ampyra<sup>®</sup> (dalfampridine)"
                                }, {
                                    "order": 2,
                                    "text": "Other"
                                }]
                        }, {
                            "order": 2,
                            "text": "Depression",
                            "checked": false,
                            "subType": "dropDown",
                            "hasSubOptions": true,
                            "subOptions": [{
                                    "order": 1,
                                    "text": "Zoloft<sup>®</sup> (sertraline)"
                                }, {
                                    "order": 2,
                                    "text": "Wellbutrin<sup>®</sup> (bupropion)"
                                }, {
                                    "order": 3,
                                    "text": "Prozac<sup>®</sup> (fluoxetine)"
                                }, {
                                    "order": 4,
                                    "text": "Paxil<sup>®</sup> (paroxetine)"
                                }, {
                                    "order": 5,
                                    "text": "Effexor<sup>®</sup>, Effexor XR<sup>®</sup> (venlafaxine)"
                                }, {
                                    "order": 6,
                                    "text": "Cymbalta<sup>®</sup> (duloxetine)"
                                }, {
                                    "order": 7,
                                    "text": "Other"
                                }]
                        }, {
                            "order": 3,
                            "text": "Sleep",
                            "checked": false,
                            "subType": "dropDown",
                            "hasSubOptions": true,
                            "subOptions": [{
                                    "order": 1,
                                    "text": "Ambien<sup>®</sup> (zolpidem)"
                                }, {
                                    "order": 2,
                                    "text": "Lunesta<sup>®</sup> (eszopiclone)"
                                }, {
                                    "order": 3,
                                    "text": "Melatonin"
                                }, {
                                    "order": 4,
                                    "text": "Rozerem<sup>®</sup> (ramelteon)"
                                }, {
                                    "order": 5,
                                    "text": "Other"
                                }]
                        }, {
                            "order": 4,
                            "text": "Pain",
                            "checked": false,
                            "subType": "dropDown",
                            "hasSubOptions": true,
                            "subOptions": [{
                                    "order": 1,
                                    "text": "Neurontin<sup>®</sup> (gabapentin)"
                                }, {
                                    "order": 2,
                                    "text": "Tofranil<sup>®</sup> (imipramine)"
                                }, {
                                    "order": 3,
                                    "text": "Lyrica<sup>®</sup> (pregabalin)"
                                }, {
                                    "order": 4,
                                    "text": "Pamelor<sup>®</sup> (nortriptyline)"
                                }, {
                                    "order": 5,
                                    "text": "Elavil<sup>®</sup> (amitriptyline)"
                                }, {
                                    "order": 6,
                                    "text": "Dilantin<sup>®</sup> (phenytoin)"
                                }, {
                                    "order": 7,
                                    "text": "Cymbalta<sup>®</sup> (duloxetine)"
                                }, {
                                    "order": 8,
                                    "text": "Other"
                                }]
                        }, {
                            "order": 5,
                            "text": "Fatigue",
                            "checked": false,
                            "subType": "dropDown",
                            "hasSubOptions": true,
                            "subOptions": [{
                                    "order": 1,
                                    "text": "Symmetrel<sup>®</sup> (amantadine)"
                                }, {
                                    "order": 2,
                                    "text": "Provigil<sup>®</sup> (modafinil)"
                                }, {
                                    "order": 3,
                                    "text": "Nuvigil<sup>®</sup> (armodafinil)"
                                }, {
                                    "order": 4,
                                    "text": "Adderall<sup>®</sup> (amphetamine)"
                                }, {
                                    "order": 5,
                                    "text": "Ritalin<sup>®</sup> (methylphenidate)"
                                }, {
                                    "order": 6,
                                    "text": "Concerta<sup>®</sup> (methylphenidate)"
                                }, {
                                    "order": 7,
                                    "text": "Other"
                                }]
                        }, {
                            "order": 6,
                            "text": "Cognitive Problems",
                            "checked": false,
                            "subType": "dropDown",
                            "hasSubOptions": true,
                            "subOptions": [{
                                    "order": 1,
                                    "text": "Aricept<sup>®</sup> (donepezil)"
                                }, {
                                    "order": 2,
                                    "text": "Exelon<sup>®</sup> (rivastigmine)"
                                }, {
                                    "order": 3,
                                    "text": "Namenda<sup>®</sup> (memantine)"
                                }, {
                                    "order": 4,
                                    "text": "Other"
                                }]
                        }, {
                            "order": 7,
                            "text": "Muscle Spasm",
                            "checked": false,
                            "subType": "dropDown",
                            "hasSubOptions": true,
                            "subOptions": [{
                                    "order": 1,
                                    "text": "Zanaflex<sup>®</sup> (tizanidine)"
                                }, {
                                    "order": 2,
                                    "text": "Lioresal<sup>®</sup> (baclofen)"
                                }, {
                                    "order": 3,
                                    "text": "Valium<sup>®</sup> (diazepam)"
                                }, {
                                    "order": 4,
                                    "text": "Klonopin<sup>®</sup> (clonazepam)"
                                }, {
                                    "order": 5,
                                    "text": "Other"
                                }]
                        }, {
                            "order": 8,
                            "text": "Bladder Dysfunction",
                            "checked": false,
                            "subType": "dropDown",
                            "hasSubOptions": true,
                            "subOptions": [{
                                    "order": 1,
                                    "text": "Detrol<sup>®</sup> (tolterodine)"
                                }, {
                                    "order": 2,
                                    "text": "Ditropan<sup>®</sup> (oxybutynin)"
                                }, {
                                    "order": 3,
                                    "text": "Oxytrol<sup>®</sup> (oxybutynin)"
                                }, {
                                    "order": 4,
                                    "text": "Tofranil<sup>®</sup> (imipramine)"
                                }, {
                                    "order": 5,
                                    "text": "Other"
                                }]
                        }, {
                            "order": 9,
                            "checked": false,
                            "text": "Taking No Medication for These Symptoms",
                            "hasSubOptions": false
                        }]
                }
            }];
    };
    SurveyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SurveyService);
    return SurveyService;
}());
exports.SurveyService = SurveyService;
//# sourceMappingURL=survey.service.js.map