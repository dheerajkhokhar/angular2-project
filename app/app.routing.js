"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var messages_component_1 = require('./messages/messages.component');
var not_found_component_1 = require('./not-found.component');
var auth_guard_service_1 = require('./auth-guard.service');
var prevent_unsaved_chnages_guard_service_1 = require('./prevent-unsaved-chnages-guard.service');
exports.routing = router_1.RouterModule.forRoot([
    { path: '', component: home_component_1.HomeComponent },
    {
        path: 'messages',
        component: messages_component_1.MessagesComponent,
        canActivate: [auth_guard_service_1.AuthGuard],
        canDeactivate: [prevent_unsaved_chnages_guard_service_1.PreventUnsavedChangedGuard]
    },
    { path: '**', component: not_found_component_1.NotFoundComponent }
]);
//# sourceMappingURL=app.routing.js.map