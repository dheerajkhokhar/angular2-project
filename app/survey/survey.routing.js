"use strict";
var router_1 = require('@angular/router');
var survey_component_1 = require('./survey.component');
var individualSurvey_component_1 = require('./individualSurvey.component');
exports.photosRouting = router_1.RouterModule.forChild([
    { path: 'surveylist', component: survey_component_1.SurveyComponent },
    { path: 'survey', component: individualSurvey_component_1.IndividualSurvey }
]);
//# sourceMappingURL=survey.routing.js.map