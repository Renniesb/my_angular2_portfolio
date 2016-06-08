webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(1);
	var platform_browser_dynamic_1 = __webpack_require__(160);
	var core_1 = __webpack_require__(4);
	var http_1 = __webpack_require__(280);
	var router_deprecated_1 = __webpack_require__(301);
	var my_app_1 = __webpack_require__(333);
	// enableProdMode()
	platform_browser_dynamic_1.bootstrap(my_app_1.AppComponent, [
	    http_1.HTTP_PROVIDERS,
	    router_deprecated_1.ROUTER_PROVIDERS,
	    core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })
	])
	    .catch(function (err) { return console.error(err); });


/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(4);
	var router_deprecated_1 = __webpack_require__(301);
	var suggestions_component_1 = __webpack_require__(334);
	var projects_component_1 = __webpack_require__(338);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'my-app',
	            providers: [router_deprecated_1.ROUTER_PROVIDERS],
	            pipes: [],
	            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
	            templateUrl: 'src/app/my-app.html',
	            styleUrls: ['src/app/my-app.css']
	        }),
	        router_deprecated_1.RouteConfig([
	            { path: '/projects', component: projects_component_1.ProjectsComponent, name: 'Projects', useAsDefault: true },
	            { path: '/suggestions', component: suggestions_component_1.SuggestionsView, name: 'Suggestions' },
	        ]),
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(4);
	var suggestion_1 = __webpack_require__(335);
	var suggestion_service_1 = __webpack_require__(336);
	var SuggestionsComponent = (function () {
	    function SuggestionsComponent() {
	    }
	    SuggestionsComponent.prototype.voteUp = function () {
	        this.suggestion.voteUp();
	        return false;
	    };
	    SuggestionsComponent.prototype.voteDown = function () {
	        this.suggestion.voteDown();
	        return false;
	    };
	    SuggestionsComponent = __decorate([
	        core_1.Component({
	            selector: 'suggestion-posts',
	            inputs: ['suggestion'],
	            host: {
	                class: 'row'
	            },
	            template: "\n    <div class=\"\">\n      <div class=\"\">\n        <div class=\"\">\n          {{ suggestion.votes }}\n        </div>\n        <div class=\"\">\n          Points\n        </div>\n      </div>\n    </div>\n    <div class=\"\">\n      <a class=\"\">\n        {{ suggestion.title }}\n      </a>\n      <div class=\"\">{{ suggestion.comment}}</div>\n      <ul class=\"\">\n        <li class=\"\">\n          <a href (click)=\"voteUp()\">\n            <i class=\"\"></i>\n              upvote\n            </a>\n        </li>\n        <li class=\"\">\n          <a href (click)=\"voteDown()\">\n            <i class=\"arrow down icon\"></i>\n            downvote\n          </a>\n        </li>\n      </ul>\n    </div>\n  "
	        }),
	        __metadata('design:paramtypes', [])
	    ], SuggestionsComponent);
	    return SuggestionsComponent;
	}());
	exports.SuggestionsComponent = SuggestionsComponent;
	var SuggestionsView = (function () {
	    function SuggestionsView(suggestionService) {
	        this.suggestionService = suggestionService;
	    }
	    SuggestionsView.prototype.getSuggestions = function () {
	        this.suggestions = this.suggestionService.getSuggestions();
	    };
	    SuggestionsView.prototype.ngOnInit = function () {
	        this.getSuggestions();
	    };
	    SuggestionsView.prototype.addSuggestion = function (title, comment) {
	        console.log("Adding suggestion title: " + title.value + " and comment: " + comment.value);
	        this.suggestions.push(new suggestion_1.Suggestion(title.value, comment.value, 0));
	        title.value = '';
	        comment.value = '';
	    };
	    SuggestionsView.prototype.sortedSuggestions = function () {
	        return this.suggestions.sort(function (a, b) { return b.votes - a.votes; });
	    };
	    SuggestionsView = __decorate([
	        core_1.Component({
	            directives: [SuggestionsComponent],
	            template: "\n    <form class=\"Container\">\n      <h3 class=\"\">Add a Project Suggestion</h3>\n\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <label for=\"title\">Suggested Project Title:</label>\n          <input name=\"title\" #newtitle>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <label for=\"comment\">Suggested Project Idea</label>\n          <textarea name=\"comment\" #newcomment style=\"width:100%; height=100px\"></textarea>\n        </div>\n      </div>\n\n      <button (click)=\"addSuggestion(newtitle, newcomment)\"\n              class=\"\">\n        Submit suggestion\n      </button>\n    </form>\n\n    <div class=\"\">\n      <suggestion-posts\n        *ngFor=\"let suggestion of sortedSuggestions()\"\n        [suggestion]=\"suggestion\">\n      </suggestion-posts>\n    </div>\n  ", providers: [suggestion_service_1.SuggestionService]
	        }),
	        __metadata('design:paramtypes', [suggestion_service_1.SuggestionService])
	    ], SuggestionsView);
	    return SuggestionsView;
	}());
	exports.SuggestionsView = SuggestionsView;


/***/ },

/***/ 335:
/***/ function(module, exports) {

	"use strict";
	var Suggestion = (function () {
	    function Suggestion(title, comment, votes) {
	        this.title = title;
	        this.comment = comment;
	        this.votes = votes || 0;
	    }
	    Suggestion.prototype.voteUp = function () {
	        this.votes += 1;
	    };
	    Suggestion.prototype.voteDown = function () {
	        this.votes -= 1;
	    };
	    return Suggestion;
	}());
	exports.Suggestion = Suggestion;


/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(4);
	var mock_suggestions_1 = __webpack_require__(337);
	var SuggestionService = (function () {
	    function SuggestionService() {
	    }
	    SuggestionService.prototype.getSuggestions = function () {
	        return mock_suggestions_1.SUGGESTIONS;
	    };
	    SuggestionService = __decorate([
	        core_1.Injectable(),
	        __metadata('design:paramtypes', [])
	    ], SuggestionService);
	    return SuggestionService;
	}());
	exports.SuggestionService = SuggestionService;


/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var suggestion_1 = __webpack_require__(335);
	exports.SUGGESTIONS = [
	    new suggestion_1.Suggestion('Angular 2', 'http://angular.io', 3),
	    new suggestion_1.Suggestion('Fullstack', 'http://fullstack.io', 2),
	    new suggestion_1.Suggestion('Angular Homepage', 'http://angular.io', 1)
	];


/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(4);
	var tech_service_1 = __webpack_require__(339);
	var project_service_1 = __webpack_require__(341);
	var ProjectsComponent = (function () {
	    function ProjectsComponent(projectService, techService) {
	        this.projectService = projectService;
	        this.techService = techService;
	        this.title = 'Filter Projects by Technology';
	        /* projects that match the selected tech */
	        this.matchedProjects = [];
	        /* The checked items in the list */
	        this.selectedTechnology = [];
	    }
	    ProjectsComponent.prototype.ngOnInit = function () {
	        this.getTech();
	        this.getProjects();
	        this.updateSelectedList();
	    };
	    ProjectsComponent.prototype.getProjects = function () {
	        this.allProjects = this.projectService.getProjects();
	    };
	    ProjectsComponent.prototype.getTech = function () {
	        this.technologyList = this.techService.getTech();
	    };
	    ProjectsComponent.prototype.favUp = function (project) {
	        project.favUp();
	        return false;
	    };
	    ProjectsComponent.prototype.onInteractionEvent = function (event) {
	        var item = this.technologyList.find(function (val) { return val.name === event.target.value; });
	        item.checked = !item.checked;
	        this.updateSelectedList();
	    };
	    ProjectsComponent.prototype.updateSelectedList = function () {
	        var _this = this;
	        var checkedNames = this.technologyList.filter(function (val) { return val.checked === true; }).map(function (n) { return n.name; });
	        this.matchedProjects = this.allProjects.filter(function (project) {
	            return _this.containsAny(project.technologies, checkedNames);
	        });
	    };
	    ProjectsComponent.prototype.containsAny = function (arr1, arr2) {
	        for (var i in arr1) {
	            if (arr2.indexOf(arr1[i]) > -1) {
	                return true;
	            }
	        }
	        return false;
	    };
	    ;
	    ProjectsComponent = __decorate([
	        core_1.Component({
	            selector: 'my-app',
	            host: { class: 'dashboard' },
	            templateUrl: 'app/components/projects/projects.component.html',
	            providers: [project_service_1.ProjectService, tech_service_1.TechService]
	        }),
	        __metadata('design:paramtypes', [project_service_1.ProjectService, tech_service_1.TechService])
	    ], ProjectsComponent);
	    return ProjectsComponent;
	}());
	exports.ProjectsComponent = ProjectsComponent;


/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(4);
	var mock_tech_1 = __webpack_require__(340);
	var TechService = (function () {
	    function TechService() {
	    }
	    TechService.prototype.getTech = function () {
	        return mock_tech_1.MOCKTECH;
	    };
	    TechService = __decorate([
	        core_1.Injectable(),
	        __metadata('design:paramtypes', [])
	    ], TechService);
	    return TechService;
	}());
	exports.TechService = TechService;


/***/ },

/***/ 340:
/***/ function(module, exports) {

	"use strict";
	/* all possible tech */
	exports.MOCKTECH = [
	    {
	        name: "Javascript",
	        checked: true
	    }, {
	        name: "PHP",
	        checked: true
	    }, {
	        name: "HTML5",
	        checked: true
	    }, {
	        name: "CSS3",
	        checked: true
	    }, {
	        name: "AngularJS",
	        checked: true
	    }, {
	        name: "BackboneJS",
	        checked: true
	    }, {
	        name: "KnockoutJS",
	        checked: true
	    }, {
	        name: "Bootstrap",
	        checked: true
	    }, {
	        name: "Wordpress",
	        checked: true
	    },
	    {
	        name: "Photoshop",
	        checked: true
	    }
	];


/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(4);
	var mock_projects_1 = __webpack_require__(342);
	var ProjectService = (function () {
	    function ProjectService() {
	    }
	    ProjectService.prototype.getProjects = function () {
	        return mock_projects_1.MOCKPROJECTS;
	    };
	    ProjectService = __decorate([
	        core_1.Injectable(),
	        __metadata('design:paramtypes', [])
	    ], ProjectService);
	    return ProjectService;
	}());
	exports.ProjectService = ProjectService;


/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var project_1 = __webpack_require__(343);
	/* all the projects worked on */
	exports.MOCKPROJECTS = [
	    new project_1.Project("Web Design Business Website", ["Wordpress", "Bootstrap", "PHP", "HTML5", "CSS3"], 0),
	    new project_1.Project("Vocab Immersion Trainer App", ["AngularJS", "Javascript", "Bootstrap", "HTML5", "CSS3"], 0)
	];


/***/ },

/***/ 343:
/***/ function(module, exports) {

	"use strict";
	var Project = (function () {
	    function Project(name, technologies, favs) {
	        this.name = name;
	        this.technologies = technologies;
	        this.favs = favs || 0;
	    }
	    Project.prototype.favUp = function () {
	        this.favs += 1;
	    };
	    return Project;
	}());
	exports.Project = Project;


/***/ }

});
//# sourceMappingURL=app.map