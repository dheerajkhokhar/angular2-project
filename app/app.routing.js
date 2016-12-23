"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var survey_component_1 = require('./survey/survey.component');
var not_found_component_1 = require('./not-found.component');
exports.routing = router_1.RouterModule.forRoot([
    { path: '', component: home_component_1.HomeComponent },
    {
        path: 'survey',
        component: survey_component_1.SurveyComponent
    },
    { path: '**', component: not_found_component_1.NotFoundComponent }
]);
//# sourceMappingURL=app.routing.js.map