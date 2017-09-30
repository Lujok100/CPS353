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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var website_service_1 = require("./shared/website.service");
var WebsitesListComponent = (function () {
    function WebsitesListComponent(websiteService) {
        this.websiteService = websiteService;
    }
    WebsitesListComponent.prototype.ngOnInit = function () {
        this.websites = this.websiteService.getWebsites();
    };
    WebsitesListComponent.prototype.websiteClick = function (data) {
        console.log("the data is: " + data);
    };
    return WebsitesListComponent;
}());
WebsitesListComponent = __decorate([
    core_1.Component({
        selector: 'websites-list',
        //templateUrl: 'app/websites/websites-list.component.html'
        template: "\n<div>\n    <h1>Web sites</h1>\n    <hr />\n    <div class=\"row\">\n        <div *ngFor=\"let website of websites\" class=\"col-md-5\">\n            <website-thumbnail  [website]=\"website\" (eventClick)=\"websiteClick($event)\"></website-thumbnail>\n        </div>\n    </div>\n</div>\n"
    }),
    __metadata("design:paramtypes", [website_service_1.WebsiteService])
], WebsitesListComponent);
exports.WebsitesListComponent = WebsitesListComponent;
//# sourceMappingURL=websites-list.component.js.map