webpackJsonp([1,4],{

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Education; });
var Education = (function () {
    function Education(name, degree, field, grade, description) {
        this.name = name;
        this.degree = degree;
        this.field = field;
        this.grade = grade;
        this.description = description;
    }
    return Education;
}());
//# sourceMappingURL=C:/Users/malam/Documents/GitHub/StudentPortalClient/src/Education.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Experience; });
var Experience = (function () {
    function Experience(title, company, location, description, currentjob) {
        this.title = title;
        this.company = company;
        this.location = location;
        this.description = description;
        this.currentjob = currentjob;
    }
    return Experience;
}());
//# sourceMappingURL=C:/Users/malam/Documents/GitHub/StudentPortalClient/src/Experience.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
var Profile = (function () {
    function Profile(name, Address, PhoneNumber) {
        this.name = name;
        this.Address = Address;
        this.PhoneNumber = PhoneNumber;
    }
    return Profile;
}());
//# sourceMappingURL=C:/Users/malam/Documents/GitHub/StudentPortalClient/src/Profile.js.map

/***/ }),

/***/ 395:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 395;


/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(515);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/malam/Documents/GitHub/StudentPortalClient/src/main.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DataService__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = (function () {
    function AuthGuard(router, http, DataService) {
        this.router = router;
        this.http = http;
        this.DataService = DataService;
    }
    AuthGuard.prototype.canActivate = function () {
        console.log("canActivate : AuthGuard", this.DataService.loggedIN);
        if (this.DataService.loggedIN == true) {
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/home']);
        return false;
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__DataService__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__DataService__["a" /* DataService */]) === 'function' && _c) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/malam/Documents/GitHub/StudentPortalClient/src/AuthGuard.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(691),
            styles: [__webpack_require__(682)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/malam/Documents/GitHub/StudentPortalClient/src/app.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__menu_bar_menu_bar_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__jobs_jobs_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__companies_companies_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__appliedjobs_appliedjobs_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__DataService__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__AuthGuard__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__candidates_candidates_component__ = __webpack_require__(517);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */] },
    { path: 'jobs', component: __WEBPACK_IMPORTED_MODULE_8__jobs_jobs_component__["a" /* JobsComponent */] },
    { path: 'companies', component: __WEBPACK_IMPORTED_MODULE_9__companies_companies_component__["a" /* CompaniesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__AuthGuard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__AuthGuard__["a" /* AuthGuard */]] },
    { path: 'appliedjobs', component: __WEBPACK_IMPORTED_MODULE_10__appliedjobs_appliedjobs_component__["a" /* AppliedjobsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__AuthGuard__["a" /* AuthGuard */]] },
    { path: 'candidates', component: __WEBPACK_IMPORTED_MODULE_15__candidates_candidates_component__["a" /* CandidatesComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__menu_bar_menu_bar_component__["a" /* MenuBarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__jobs_jobs_component__["a" /* JobsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__companies_companies_component__["a" /* CompaniesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__appliedjobs_appliedjobs_component__["a" /* AppliedjobsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_15__candidates_candidates_component__["a" /* CandidatesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__DataService__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_14__AuthGuard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/malam/Documents/GitHub/StudentPortalClient/src/app.module.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppliedjobsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppliedjobsComponent = (function () {
    function AppliedjobsComponent(http) {
        var _this = this;
        this.http = http;
        this.data = [];
        this.http.get('http://localhost:55899/api/AppliedJobsAPI')
            .map(function (response) { return response.json(); }).subscribe(function (Serverdata) {
            _this.applied = Serverdata;
            _this.http.get('http://localhost:55899/api/JobsAPI')
                .map(function (response) { return response.json(); }).subscribe(function (Serverdata) {
                _this.jobs = Serverdata;
                _this.http.get('http://localhost:55899/api/CompaniesAPI')
                    .map(function (response) { return response.json(); }).subscribe(function (Serverdata) {
                    _this.companies = Serverdata;
                    _this.getdetails(_this.applied, _this.jobs, _this.companies);
                });
            });
        });
    }
    AppliedjobsComponent.prototype.getdetails = function (applied, jobs, companies) {
        this.list = [];
        console.log(applied, jobs, companies);
        for (var _i = 0, applied_1 = applied; _i < applied_1.length; _i++) {
            var apply = applied_1[_i];
            var title = void 0, desc = void 0, companyname = void 0;
            for (var _a = 0, jobs_1 = jobs; _a < jobs_1.length; _a++) {
                var job = jobs_1[_a];
                if (apply.jobid == job.id) {
                    title = job.title;
                    desc = job.description;
                }
            }
            for (var _b = 0, companies_1 = companies; _b < companies_1.length; _b++) {
                var company = companies_1[_b];
                if (company.id == apply.companyid) {
                    companyname = company.name;
                }
            }
            this.list.push({ "title": title, "desc": desc, "companyname": companyname });
        }
        console.log(this.list);
    };
    AppliedjobsComponent.prototype.ngOnInit = function () {
    };
    AppliedjobsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* Component */])({
            selector: 'app-appliedjobs',
            template: __webpack_require__(692),
            styles: [__webpack_require__(683)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], AppliedjobsComponent);
    return AppliedjobsComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/malam/Documents/GitHub/StudentPortalClient/src/appliedjobs.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DataService__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_Experience__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_Education__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_Profile__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidatesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CandidatesComponent = (function () {
    function CandidatesComponent(DataService, http) {
        this.DataService = DataService;
        this.http = http;
        this.role = false;
        this.path = '';
        this.profile1 = { Name: 'Shahnawaz', Address: 'Mountjoy', PhoneNumber: '08723533', Role: '' };
        this.experience1 = [{ title: '', company: '', location: '', description: '', currentjob: false }];
        this.education1 = [{ name: '', degree: '', field: '', description: '', grade: '' }];
        this.photo1 = { studentid: '', image_name: '' };
        this.experience = new __WEBPACK_IMPORTED_MODULE_3__profile_Experience__["a" /* Experience */]('', '', '', '', false);
        this.education = new __WEBPACK_IMPORTED_MODULE_4__profile_Education__["a" /* Education */]('', '', '', '', '');
        this.profile = new __WEBPACK_IMPORTED_MODULE_5__profile_Profile__["a" /* Profile */]('', '', '');
        this.get_profile(this.DataService.jobid);
        console.log(this.DataService.jobid);
    }
    CandidatesComponent.prototype.ngOnInit = function () {
    };
    CandidatesComponent.prototype.get_profile = function (id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this.DataService.access_token + '' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        this.http.get('http://localhost:55899/api/AppliedJobsAPI/GetApplied_StudId/' + id, options)
            .map(function (response) { return response.json(); }).subscribe(function (Serverdata) {
            _this.DataService.candidateid = Serverdata.studentid;
            _this.http.get('http://localhost:55899/api/Account/GetUserProfile/' + _this.DataService.candidateid, options)
                .map(function (response) { return response.json(); }).subscribe(function (Serverdata) {
                console.log('Profile Data is ' + Serverdata, Serverdata.Id);
                _this.profile1 = Serverdata;
                _this.get_education(_this.DataService.candidateid);
                _this.get_experience(_this.DataService.candidateid);
                _this.getphoto(_this.DataService.candidateid);
            });
        });
    };
    CandidatesComponent.prototype.get_experience = function (stud_id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this.DataService.access_token + '' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        this.http.get('http://localhost:55899/api/ExperiencesAPI/GetExperience_By_Id/' + stud_id, options)
            .map(function (response) { return response.json(); }).subscribe(function (Serverdata) {
            //    console.log('Experience Data is ' + Serverdata , Serverdata.Id);
            _this.experience1 = Serverdata;
            console.log('Experience data is' + _this.experience1[0] + _this.experience1[0].company + Serverdata[0].company);
        });
    };
    CandidatesComponent.prototype.get_education = function (stud_id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this.DataService.access_token + '' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        this.http.get('http://localhost:55899/api/EducationsAPI/GetEducation_By_Id/' + stud_id, options)
            .map(function (response) { return response.json(); }).subscribe(function (Serverdata) {
            console.log('Education Data is ' + Serverdata);
            _this.education1 = Serverdata;
        });
    };
    CandidatesComponent.prototype.getphoto = function (id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this.DataService.access_token + '' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        this.http.get('http://localhost:55899/api/PhotosAPI/GetPhoto_By_Id/' + id, options)
            .map(function (response) { return response.json(); }).subscribe(function (Serverdata) {
            console.log('Photo Data is ' + Serverdata);
            _this.photo1 = Serverdata;
            _this.photo1.image_name = "Scripts/dist/assets/Images/" + _this.photo1.image_name;
        });
    };
    CandidatesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-candidates',
            template: __webpack_require__(693),
            styles: [__webpack_require__(684)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__DataService__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__DataService__["a" /* DataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _b) || Object])
    ], CandidatesComponent);
    return CandidatesComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/malam/Documents/GitHub/StudentPortalClient/src/candidates.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Company; });
var Company = (function () {
    function Company(comp_id, name, email, about) {
        this.comp_id = comp_id;
        this.name = name;
        this.email = email;
        this.about = about;
    }
    return Company;
}());
//# sourceMappingURL=C:/Users/malam/Documents/GitHub/StudentPortalClient/src/Company.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DataService__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Company__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__jobs_Job__ = __webpack_require__(521);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompaniesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CompaniesComponent = (function () {
    function CompaniesComponent(http, DataService, router) {
        this.http = http;
        this.DataService = DataService;
        this.router = router;
        this.education1 = [{ name: '', degree: '', field: '', description: '', grade: '' }];
        this.company1 = { comp_id: 0, name: '', email: '', about: '' };
        this.jobsdata = [];
        this.show = true;
        this.Company = new __WEBPACK_IMPORTED_MODULE_7__Company__["a" /* Company */](0, '', '', '');
        this.Job = new __WEBPACK_IMPORTED_MODULE_8__jobs_Job__["a" /* Job */]('', '', '', '');
        this.togglejobs = false;
        this.status = '';
        this.DataService.candidateid = '';
        this.getcompany(this.DataService.UserId);
    }
    CompaniesComponent.prototype.ngOnInit = function () {
    };
    CompaniesComponent.prototype.post_data = function (name, email, about) {
        var _this = this;
        this.body = { name: name, email: email,
            about: about, Emp_Id: this.DataService.UserId
        };
        var bodyString = JSON.stringify(this.body); // Stringify payload
        console.log(bodyString);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        if (this.company1.name == '') {
            console.log('name is', name, email, about, 'Posting');
            this.http.post('http://localhost:55899/api/CompaniesAPI', this.body, options) // ...using post request
                .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); })
                .subscribe(function (Serverdata) {
                console.log('Data is ' + Serverdata);
                _this.getcompany(_this.DataService.UserId);
                alert('Company Created Successfully');
            });
        }
        else {
            console.log('name is', name, email, about, 'updating');
            this.body = { name: name, email: email,
                about: about, Emp_Id: this.DataService.UserId, id: this.company_id
            };
            this.http.put('http://localhost:55899/api/CompaniesAPI/' + this.company_id, this.body, options) // ...using put request
                .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); })
                .subscribe(function (Serverdata) {
                console.log('Updated data is ' + Serverdata);
                _this.getcompany(_this.DataService.UserId);
                alert('Company information updated successfully');
                jQuery("#CompanyEditModal").modal("hide");
            });
        }
    };
    CompaniesComponent.prototype.createjob = function (title, description, date) {
        this.body = { title: title, description: description,
            date: date, companyid: this.company_id
        };
        var bodyString = JSON.stringify(this.body); // Stringify payload
        console.log(bodyString);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        console.log(this.body);
        this.http.post('http://localhost:55899/api/JobsAPI', this.body, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); })
            .subscribe(function (Serverdata) {
            console.log('Jobs is ' + Serverdata);
            alert('Job Posted Successfully');
        });
        jQuery("#AddJobsModal").modal("hide");
    };
    CompaniesComponent.prototype.getcompany = function (Emp_Id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this.DataService.access_token + '' });
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        this.http.get('http://localhost:55899/api/CompaniesAPI/GetCompany_ByEmp_Id/' + Emp_Id, options)
            .map(function (response) { return response.json(); }).subscribe(function (Serverdata) {
            console.log('Profile Data is ' + Serverdata, Serverdata.Id);
            _this.company1 = Serverdata;
            _this.company_id = Serverdata.id;
            console.log('Company id', _this.company_id);
        });
    };
    CompaniesComponent.prototype.showjobs = function () {
        var _this = this;
        this.show = false;
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this.DataService.access_token + '' });
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        this.http.get('http://localhost:55899/api/JobsAPI/GetJobByCompany/' + this.company_id, options)
            .map(function (response) { return response.json(); }).subscribe(function (Serverdata) {
            console.log('Jobs Data is ' + Serverdata);
            _this.jobsdata = Serverdata;
        });
    };
    CompaniesComponent.prototype.deletejobs = function (id) {
        var _this = this;
        this.http.delete('http://localhost:55899/api/JobsAPI/' + id).map(function (response) { return response.json(); }).subscribe(function (data) {
            console.log('Jobs Deleted status is ' + data);
            _this.status = data;
        });
    };
    CompaniesComponent.prototype.view_candidates = function (id) {
        this.DataService.jobid = id;
        this.router.navigate(['/candidates']);
    };
    CompaniesComponent.prototype.back = function () {
        this.show = true;
    };
    CompaniesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-companies',
            template: __webpack_require__(694),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__DataService__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__DataService__["a" /* DataService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], CompaniesComponent);
    return CompaniesComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/malam/Documents/GitHub/StudentPortalClient/src/companies.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(695),
            styles: [__webpack_require__(686)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/Users/malam/Documents/GitHub/StudentPortalClient/src/home.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Job; });
var Job = (function () {
    function Job(title, description, date, companyid) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.companyid = companyid;
    }
    return Job;
}());
//# sourceMappingURL=C:/Users/malam/Documents/GitHub/StudentPortalClient/src/Job.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DataService__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JobsComponent = (function () {
    function JobsComponent(http, DataService) {
        var _this = this;
        this.http = http;
        this.DataService = DataService;
        this.http.get('http://localhost:55899/api/CompaniesAPI')
            .map(function (response) { return response.json(); }).subscribe(function (Serverdata) {
            console.log('Data is ' + Serverdata);
            _this.companies = Serverdata;
            _this.http.get('http://localhost:55899/api/JobsAPI')
                .map(function (response) { return response.json(); }).subscribe(function (Serverdata) {
                console.log('Data is ' + Serverdata);
                _this.data = Serverdata;
                _this.getcompany(_this.data);
            });
        });
        // this.http.get('http://localhost:50406/Jobs/getdata')
        // .map((response : Response) => response.json()).subscribe((Serverdata) => {
        //   console.log('xml is ' + Serverdata["soap:Envelope"] );
        //   this.renderxml(Serverdata["soap:Envelope"]);
        // });
    }
    JobsComponent.prototype.renderxml = function (data) {
        this.data1 = data["soap:Body"].SearchJobsResponse.SearchJobsResult.JobListItem;
        for (var _i = 0, _a = this.data1; _i < _a.length; _i++) {
            var job = _a[_i];
            console.log(job);
        }
    };
    JobsComponent.prototype.getcompany = function (data) {
        var _this = this;
        data.forEach(function (job) {
            for (var _i = 0, _a = _this.companies; _i < _a.length; _i++) {
                var company = _a[_i];
                if (job.companyid == company.id)
                    job.name = company.name;
            }
        });
    };
    JobsComponent.prototype.ngOnInit = function () {
        this.searchdata = ['Delhi', 'Kerala', 'Tamil Nadu', 'Banglore', 'Uttar Pradesh', 'Noida', 'Haryana', 'Thrissur'];
    };
    JobsComponent.prototype.apply = function (companyid, jobid) {
        if (this.DataService.loggedIN == true) {
            this.body = { studentid: '3000', companyid: companyid, jobid: jobid, applydate: '13/8/2017' };
            var bodyString = JSON.stringify(this.body); // Stringify payload
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
            var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
            this.http.post('http://localhost:55899/api/AppliedJobsAPI', this.body, options) // ...using post request
                .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); })
                .subscribe(function (Serverdata) {
                console.log('Data is ' + Serverdata);
            });
        }
        else {
            alert('Login or create an account to apply');
        }
    };
    JobsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* Component */])({
            selector: 'app-jobs',
            template: __webpack_require__(696),
            styles: [__webpack_require__(687)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__DataService__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__DataService__["a" /* DataService */]) === 'function' && _b) || Object])
    ], JobsComponent);
    return JobsComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/malam/Documents/GitHub/StudentPortalClient/src/jobs.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(username, password, confirm_password, role) {
        this.username = username;
        this.password = password;
        this.confirm_password = confirm_password;
        this.role = role;
    }
    return User;
}());
//# sourceMappingURL=C:/Users/malam/Documents/GitHub/StudentPortalClient/src/User.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__User__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DataService__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginComponent = (function () {
    function LoginComponent(http, DataService, router) {
        this.http = http;
        this.DataService = DataService;
        this.router = router;
        this.model = new __WEBPACK_IMPORTED_MODULE_5__User__["a" /* User */]('', '', '', '');
        this.show = true;
        if (this.DataService.loggedIN == true) {
            console.log('Login status is', this.DataService.loggedIN);
            this.router.navigate['/profile'];
        }
        else
            this.logout();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.logout = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        this.http.post('http://localhost:55899/api/Account/Logout', options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .subscribe(function (Serverdata) {
            console.log('Logged off');
            _this.router.navigate(['/home']);
        });
    };
    LoginComponent.prototype.post_data = function (username, password, confirm_password, role) {
        console.log('name is', username, password, role);
        if (password == confirm_password) {
            this.body = { Email: username, Password: password,
                ConfirmPassword: password,
                Role: role
            };
            var bodyString = JSON.stringify(this.body); // Stringify payload
            console.log(bodyString);
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
            var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
            this.http.post('http://localhost:55899/api/Account/Register', this.body, options) // ...using post request
                .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); })
                .subscribe(function (Serverdata) {
                console.log('Data is ' + Serverdata);
            });
        }
        else
            alert('Password do not match');
    };
    LoginComponent.prototype.get_data = function (username, password) {
        var _this = this;
        //  username = encodeURIComponent(username);
        var body = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* URLSearchParams */]();
        body.set('userName', username);
        body.set('password', password);
        body.set('grant_type', 'password');
        // let bodyString = JSON.stringify(this.body); // Stringify payload
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        this.http.post('http://localhost:55899/Token', body, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .subscribe(function (Serverdata) {
            console.log('Data is ' + Serverdata.access_token);
            _this.DataService.access_token = Serverdata.access_token;
            _this.DataService.loggedIN = true;
            _this.router.navigate(['/profile']);
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(697),
            styles: [__webpack_require__(688)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__DataService__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__DataService__["a" /* DataService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/malam/Documents/GitHub/StudentPortalClient/src/login.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DataService__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuBarComponent = (function () {
    function MenuBarComponent(DataService) {
        this.DataService = DataService;
    }
    MenuBarComponent.prototype.ngOnInit = function () {
    };
    MenuBarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-menu-bar',
            template: __webpack_require__(698),
            styles: [__webpack_require__(689)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__DataService__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__DataService__["a" /* DataService */]) === 'function' && _a) || Object])
    ], MenuBarComponent);
    return MenuBarComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/malam/Documents/GitHub/StudentPortalClient/src/menu-bar.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Profile__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Experience__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Education__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DataService__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_throw__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ProfileComponent = (function () {
    function ProfileComponent(http, DataService, router) {
        var _this = this;
        this.http = http;
        this.DataService = DataService;
        this.router = router;
        this.role = false;
        this.path = '';
        this.profile1 = { Name: 'Shahnawaz', Address: 'Mountjoy', PhoneNumber: '08723533', Role: '' };
        this.experience1 = [{ title: '', company: '', location: '', description: '', currentjob: false }];
        this.education1 = [{ name: '', degree: '', field: '', description: '', grade: '' }];
        this.photo1 = { studentid: '', image_name: '' };
        this.experience = new __WEBPACK_IMPORTED_MODULE_3__Experience__["a" /* Experience */]('', '', '', '', false);
        this.education = new __WEBPACK_IMPORTED_MODULE_4__Education__["a" /* Education */]('', '', '', '', '');
        this.profile = new __WEBPACK_IMPORTED_MODULE_2__Profile__["a" /* Profile */]('', '', '');
        console.log(this.photo1.image_name.length);
        this.get_profile();
        setTimeout(function () {
            console.log(_this.DataService.access_token, ' ID ', _this.DataService.UserId);
            _this.get_experience(_this.DataService.UserId);
            _this.get_education(_this.DataService.UserId);
            _this.getphoto(_this.DataService.UserId);
        }, 2000);
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.profile_data = function (name, PhoneNumber, Address) {
        var _this = this;
        console.log('name is', name, Address, PhoneNumber);
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        body.set('Name', name);
        body.set('PhoneNumber', PhoneNumber);
        body.set('Address', Address);
        // let bodyString = JSON.stringify(this.body); // Stringify payload
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this.DataService.access_token + '' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        this.http.post('http://localhost:55899/api/Account/EditProfile', body, options) // ...using post request
            .map(function (res) { return res; }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(error.error || 'Server error'); })
            .subscribe(function (Serverdata) {
            console.log('Data is ' + Serverdata);
            _this.get_profile();
        });
    };
    ProfileComponent.prototype.get_profile = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Authorization': 'Bearer ' + this.DataService.access_token + '' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        this.http.get('http://localhost:55899/api/Account/UserInfo', options)
            .map(function (response) { return response.json(); }).subscribe(function (Serverdata) {
            console.log('Profile Data is ' + Serverdata, Serverdata.Id);
            _this.profile1 = Serverdata;
            _this.DataService.UserId = Serverdata.Id;
            _this.DataService.Role = Serverdata.Role;
            if (_this.profile1.Role == 'Employer') {
                console.log('Redirect');
                _this.router.navigate(['/companies']);
            }
        });
    };
    ProfileComponent.prototype.get_experience = function (stud_id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this.DataService.access_token + '' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        this.http.get('http://localhost:55899/api/ExperiencesAPI/GetExperience_By_Id/' + stud_id, options)
            .map(function (response) { return response.json(); }).subscribe(function (Serverdata) {
            //    console.log('Experience Data is ' + Serverdata , Serverdata.Id);
            _this.experience1 = Serverdata;
            console.log('Experience data is' + _this.experience1[0] + _this.experience1[0].company + Serverdata[0].company);
        });
    };
    ProfileComponent.prototype.get_education = function (stud_id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this.DataService.access_token + '' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        this.http.get('http://localhost:55899/api/EducationsAPI/GetEducation_By_Id/' + stud_id, options)
            .map(function (response) { return response.json(); }).subscribe(function (Serverdata) {
            console.log('Education Data is ' + Serverdata);
            _this.education1 = Serverdata;
        });
    };
    ProfileComponent.prototype.post_experience = function (title, company, location, description) {
        console.log('name is', title, company, location, description);
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        body.set('title', title);
        body.set('company', company);
        body.set('location', location);
        body.set('description', description);
        body.set('studentid', this.DataService.UserId);
        body.has('currentjob');
        // let bodyString = JSON.stringify(this.body); // Stringify payload
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this.DataService.access_token + '' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        this.http.post('http://localhost:55899/api/ExperiencesAPI', body, options) // ...using post request
            .map(function (res) { return res; }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(error.error || 'Server error'); })
            .subscribe(function (Serverdata) {
            console.log('Data is ' + Serverdata);
        });
    };
    ProfileComponent.prototype.post_education = function (name, grade, degree, field, description) {
        console.log('name is', name, grade, field, grade, description);
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        body.set('name', name);
        body.set('grade', grade);
        body.set('degree', degree);
        body.set('field', field);
        body.set('studentid', this.DataService.UserId);
        body.set('description', description);
        // let bodyString = JSON.stringify(this.body); // Stringify payload
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this.DataService.access_token + '' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        this.http.post('http://localhost:55899/api/EducationsAPI', body, options) // ...using post request
            .map(function (res) { return res; }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(error.error || 'Server error'); })
            .subscribe(function (Serverdata) {
            console.log('Data is ' + Serverdata);
        });
    };
    ProfileComponent.prototype.fileUpload = function (event) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Authorization': 'Bearer ' + this.DataService.access_token + '' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var formData = new FormData();
        var fileList = event.target.files;
        var file = fileList[0];
        console.log(this.path, file, file.name);
        formData.append('name', file.name);
        formData.append('studentid', this.DataService.UserId);
        formData.append('file', file);
        this.http.post('http://localhost:55899/api/PhotosAPI', formData, options) // ...using post request
            .map(function (res) { return res; }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(error.error || 'Server error'); })
            .subscribe(function (Serverdata) {
            console.log('Photo Status is ' + Serverdata);
            _this.getphoto(_this.DataService.UserId);
        });
    };
    ProfileComponent.prototype.getphoto = function (id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this.DataService.access_token + '' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        this.http.get('http://localhost:55899/api/PhotosAPI/GetPhoto_By_Id/' + this.DataService.UserId, options)
            .map(function (response) { return response.json(); }).subscribe(function (Serverdata) {
            console.log('Photo Data is ' + Serverdata);
            _this.photo1 = Serverdata;
            _this.photo1.image_name = "Scripts/dist/assets/Images/" + _this.photo1.image_name;
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__(699),
            styles: [__webpack_require__(690)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__DataService__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__DataService__["a" /* DataService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/malam/Documents/GitHub/StudentPortalClient/src/profile.component.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/malam/Documents/GitHub/StudentPortalClient/src/environment.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.access_token = '';
        this.UserId = '';
        this.jobid = '';
        this.candidateid = '';
        this.Role = '';
        this.loggedIN = false;
    }
    DataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], DataService);
    return DataService;
    var _a;
}());
//# sourceMappingURL=C:/Users/malam/Documents/GitHub/StudentPortalClient/src/DataService.js.map

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = "/* YOUR CUSTOM STYLES */\r\n   "

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = "     /* TEMPLATE STYLES */\r\n\r\n        main {\r\n            padding-top: 3rem;\r\n            padding-bottom: 2rem;\r\n        }\r\n\r\n        .extra-margins {\r\n            margin-top: 1rem;\r\n            margin-bottom: 2.5rem;\r\n        }\r\n\r\n        .navbar {\r\n            background-color: #3b3b3f;\r\n        }\r\n\r\n        footer.page-footer {\r\n            background-color: #3b3b3f;\r\n            margin-top: 2rem;\r\n        }\r\n        .navbar .btn-group .dropdown-menu a:hover {\r\n            color: #000 !important;\r\n        }\r\n        .navbar .btn-group .dropdown-menu a:active {\r\n            color: #fff !important;\r\n        }\r\n"

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = ".input-file-container {\r\n    position: relative;\r\n    width: 225px;\r\n  } \r\n  .input-file-trigger {\r\n    display: block;\r\n    padding: 14px 45px;\r\n    background: #39D2B4;\r\n    color: #fff;\r\n    font-size: 1em;\r\n    transition: all .4s;\r\n    cursor: pointer;\r\n  }\r\n  .input-file {\r\n    position: absolute;\r\n    top: 0; left: 0;\r\n    width: 225px;\r\n    opacity: 0;\r\n    padding: 14px 0;\r\n    cursor: pointer;\r\n  }"

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = "<app-menu-bar></app-menu-bar>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t\t\t\r\n            <div class=\"row\">\r\n                <table id=\"table\" class=\"table table-striped table-bordered\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>Title</th>\r\n                      <th>Job Description</th>\r\n\t\t\t\t\t              <th>Company</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let job of list\">\r\n                      <td>{{job.desc}}</td>\r\n                      <td>{{job.title}}</td>\r\n                      <td>\r\n                        <b>{{job.companyname}}</b>\r\n                       </td>\r\n                      </tr>\r\n                  </tbody>\r\n\r\n            </table>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = "\r\n<div class =\"container\">\r\n    <!-- Section: Magazine v.2 -->\r\n<section class=\"magazine-section my-5\">\r\n        <!-- Grid row -->\r\n        <h2 class=\"h1-responsive font-weight-bold text-center my-5\">Candidates</h2>\r\n        <p class=\"text-center dark-grey-text w-responsive mx-auto mb-5\">These people took their time to complete the application and applied for the jobs. Have a look at their profile and see which one of them is the best for it.</p>\r\n\r\n        <div class=\"row\">\r\n\r\n          <div class=\"col-lg-12 col-md-12\">\r\n      \r\n            <!-- Small news -->\r\n            <div *ngFor=\"let number of [0,1,2,3,4]\">\r\n            <div class=\"single-news mb-4\">\r\n      \r\n              <div class=\"row\">\r\n      \r\n                <div class=\"col-md-3\">\r\n      \r\n                  <div class=\"avatar mx-auto\">\r\n                    <img class=\"rounded-circle img-fluid\" style=\"height:220px\" src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg\" alt=\"Sample image\">\r\n                    <a>\r\n                      <div class=\"mask rgba-white-slight\"></div>\r\n                    </a>\r\n                  </div>\r\n      \r\n                </div>\r\n                <div class=\"col-md-9\">\r\n      \r\n                  <h3 class=\"font-weight-bold dark-grey-text\">Aisling McAuley</h3>\r\n                  <div class=\"d-flex justify-content-between\">\r\n                    <div class=\"col-11 text-truncate pl-0 mb-3\">\r\n                      <a href=\"#!\" class=\"dark-grey-text\">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</a>\r\n                    </div>\r\n                    <a><i class=\"fa fa-angle-double-right\"></i></a>\r\n                  </div>\r\n      \r\n                </div>\r\n      \r\n              </div>\r\n      \r\n            </div>\r\n            <hr>\r\n            </div>\r\n\r\n            </div>\r\n            </div>\r\n\r\n        </section>\r\n\r\n<p>\r\n  candidates works! and id is {{DataService.candidateid}}\r\n</p>\r\n\r\n  <section class=\"text-center pb-5\">\r\n      <h1 class=\"h1 pt-4\">Manage Your Profile</h1>\r\n  \r\n              <div class=\"testimonial\">\r\n                  <!-- Avatar Photo -->\r\n                  <div class=\"avatar mx-auto\">\r\n  \r\n                      <img  *ngIf=\"photo1.image_name.length == 0\" src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg\" class=\"rounded-circle img-fluid\" alt=\"First sample avatar image\">\r\n  \r\n                      <img *ngIf=\"photo1.image_name.length > 0\" [src]=\"photo1.image_name\" class=\"rounded-circle img-fluid\" alt=\"First sample avatar image\">\r\n                      \r\n                  </div>\r\n            <br>\r\n            <p>   <!--    Summary -->\r\n                      <i class=\"fa fa-quote-left\"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae\r\n                      quaerat ad velit ab. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cum accusamus eveniet\r\n                      molestias voluptatum inventore laboriosam labore sit, aspernatur praesentium iste impedit quidem dolor\r\n                      veniam. <i class=\"fa fa-quote-right\"></i></p><a data-toggle=\"modal\" data-target=\"#orangeModalSubscription\"><i class=\"fa fa-edit fa-3x\" aria-hidden=\"true\"></i></a>\r\n  \r\n                  <h4>{{profile1.Name}}</h4>\r\n                  <h6>{{profile1.PhoneNumber}}</h6>\r\n                  <h6>{{profile1.Address}}</h6>\r\n  \r\n                  <!--Review-->\r\n                  <i class=\"fa fa-star\"> </i>\r\n                  <i class=\"fa fa-star\"> </i>\r\n                  <i class=\"fa fa-star\"> </i>\r\n                  <i class=\"fa fa-star\"> </i>\r\n                  <i class=\"fa fa-star-half-full\"> </i>\r\n              </div>\r\n  </section>\r\n  <!--Experience-->\r\n  <div *ngIf=\"experience1[0].title.length == 0\" >\r\n  <div class=\"card text-center\">\r\n      <div class=\"card-header\">\r\n              <h4 class=\"card-title\"><a>No Work Experience filled up by candidate</a></h4>\r\n      </div>\r\n  </div>\r\n  <hr>\r\n  </div>\r\n  \r\n  <!-- Education -->\r\n  <div *ngIf=\"education1[0].name.length == 0\" >\r\n  <div class=\"card text-center\">\r\n          <div class=\"card-header\">\r\n                  <h4 class=\"card-title\"><a>Nothing about Education in the profile</a></h4>\r\n          </div>\r\n      </div>\r\n      <hr>\r\n    </div>\r\n \r\n  \r\n  <!-- Work Experience -->\r\n  <div *ngIf=\"experience1[0].title.length > 0\" >\r\n  <div class=\"card text-left\" *ngFor=\"let e of experience1\">\r\n    <div class=\"card-header\">\r\n            <h4 class=\"card-title\"><a>Work Experience</a></h4>\r\n    </div>\r\n    <div class=\"row\">\r\n    <div class=\"col-md-10\">\r\n        <h4 class=\"card-body\">{{e.title}}</h4>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n        <a  class=\"card-body text-right\" data-toggle=\"modal\" data-target=\"#ExpModal\"></a>\r\n    </div>\r\n  </div>\r\n        <h5 class=\"card-body\">{{e.company}}</h5>\r\n       \r\n        <div class=\"card-body\">\r\n            <h5 class=\"card-title\">{{e.location}}</h5>\r\n            <p class=\"card-text\">\t{{e.description}}</p>\r\n        </div>\r\n   \r\n  </div>\r\n  <hr></div>\r\n  \r\n  <!-- Education -->\r\n  <div *ngIf=\"education1[0].name.length > 0\" >\r\n  <div class=\"card text-left\" *ngFor=\"let education1 of education1\">\r\n    <div class=\"card-header\">\r\n            <h4 class=\"card-title\"><a>Education</a></h4>\r\n    </div>\r\n    <div class=\"row\">\r\n    <div class=\"col-md-10\">\r\n        <h4 class=\"card-body\">{{education1.name}}</h4>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n        <a  class=\"card-body text-right\" data-toggle=\"modal\" data-target=\"#EducationModal\"></a>\r\n    </div>\r\n  </div>\r\n        <h5 class=\"card-body\">{{education1.degree}}</h5>\r\n       \r\n        <div class=\"card-body\">\r\n            <h5 class=\"card-title\">{{education1.date_to}} -- {{education1.date_from}}</h5>\r\n            <p class=\"card-text\">\t{{education1.description}}</p>\r\n        </div>\r\n   \r\n  </div><hr>\r\n  </div>\r\n  \r\n      \r\n  \r\n  </div>\r\n  "

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = "   <div class=\"container\" >\r\n        <div class=\"modal fade\" id=\"AddJobsModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n                <div class=\"modal-dialog\" role=\"document\">\r\n                    <div class=\"modal-content\">\r\n                        <div class=\"modal-header text-center\">\r\n                            <h4 class=\"modal-title w-100 font-weight-bold\">Create New Job Role</h4>\r\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                                <span aria-hidden=\"true\">&times;</span>\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"modal-body mx-3\">\r\n                            <div class=\"md-form mb-5\">\r\n                                <i class=\"fa fa-user prefix grey-text\"></i>\r\n                                <input type=\"text\" id=\"orangeForm-name\" class=\"form-control validate\" name=\"company\" [(ngModel)]=\"Job.title\"  >\r\n                                <label data-error=\"wrong\" data-success=\"right\" for=\"orangeForm-name\">Job Title</label>\r\n                            </div>\r\n                            <div class=\"md-form mb-5\">\r\n                                <i class=\"fa fa-envelope prefix grey-text\"></i>\r\n                                <input type=\"email\" id=\"orangeForm-email\" class=\"form-control validate\" name=\"email\" [(ngModel)]=\"Job.description\"  >\r\n                                <label data-error=\"wrong\" data-success=\"right\" for=\"orangeForm-email\">Description</label>\r\n                            </div>\r\n            \r\n                            <div class=\"md-form mb-4\">\r\n                                <i class=\"fa fa-lock prefix grey-text\"></i>\r\n                                <input type=\"text\" id=\"orangeForm-pass\" class=\"form-control validate\" name=\"about\" [(ngModel)]=\"Job.date\"  >\r\n                                <label data-error=\"wrong\" data-success=\"right\" for=\"orangeForm-pass\">Date</label>\r\n                            </div>\r\n            \r\n                        </div>\r\n                        <div class=\"modal-footer d-flex justify-content-center\">\r\n                            <button class=\"btn btn-deep-orange\" (click)= \"createjob(Job.title,Job.description,Job.date)\">Edit And Save</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n       <div *ngIf=\"show\" >\r\n        <div class=\"modal fade\" id=\"CompanyEditModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n                <div class=\"modal-dialog\" role=\"document\">\r\n                    <div class=\"modal-content\">\r\n                        <div class=\"modal-header text-center\">\r\n                            <h4 class=\"modal-title w-100 font-weight-bold\">Edit Company Info</h4>\r\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                                <span aria-hidden=\"true\">&times;</span>\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"modal-body mx-3\">\r\n                            <div class=\"md-form mb-5\">\r\n                                <i class=\"fa fa-user prefix grey-text\"></i>\r\n                                <input type=\"text\" id=\"orangeForm-name\" class=\"form-control validate\" name=\"company\" [(ngModel)]=\"Company.name\"  >\r\n                                <label data-error=\"wrong\" data-success=\"right\" for=\"orangeForm-name\">Company name</label>\r\n                            </div>\r\n                            <div class=\"md-form mb-5\">\r\n                                <i class=\"fa fa-envelope prefix grey-text\"></i>\r\n                                <input type=\"email\" id=\"orangeForm-email\" class=\"form-control validate\" name=\"email\" [(ngModel)]=\"Company.email\"  >\r\n                                <label data-error=\"wrong\" data-success=\"right\" for=\"orangeForm-email\">Email</label>\r\n                            </div>\r\n            \r\n                            <div class=\"md-form mb-4\">\r\n                                <i class=\"fa fa-lock prefix grey-text\"></i>\r\n                                <input type=\"text\" id=\"orangeForm-pass\" class=\"form-control validate\" name=\"about\" [(ngModel)]=\"Company.about\"  >\r\n                                <label data-error=\"wrong\" data-success=\"right\" for=\"orangeForm-pass\">About</label>\r\n                            </div>\r\n            \r\n                        </div>\r\n                        <div class=\"modal-footer d-flex justify-content-center\">\r\n                            <button class=\"btn btn-deep-orange\"  (click)= \"post_data(Company.name,Company.email,Company.about)\">Edit And Save</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            \r\n    <section>\r\n\r\n        <h2 class=\"text-center h1 my-5\">\r\n            <strong>Company Information</strong>\r\n        </h2>\r\n        <p class=\"px-xl-5 text-center grey-text mb-5\">Manage your Company page. This page will be displayed to students and other companies.</p>\r\n        \r\n            <div class=\"card text-left\" *ngIf=\"company1.name.length > 0\" >\r\n                    <div class=\"card-header\">\r\n                            <h4 class=\"card-title\"><a>Details</a></h4>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                    <div class=\"col-md-10\">\r\n                        <h4 class=\"card-body\">{{company1.name}}</h4>\r\n                        <p class=\"card-body\"> HeadQuarters : Dublin</p>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <a  class=\"card-body text-right\"  data-toggle=\"modal\" data-target=\"#CompanyEditModal\"><i style=\"margin-top:15px;\" class=\"fa fa-pencil prefix fa-2x\"></i></a>\r\n                    </div>\r\n                  </div>\r\n                        <h5 class=\"card-body\">Privately Held</h5>\r\n                       \r\n                        <div class=\"card-body\">\r\n                            <h5 class=\"card-title\">10 - 50 Employees</h5>\r\n                            <h6 class=\"card-title\"> Description : {{company1.about}}</h6>\r\n                        </div>\r\n                   \r\n                  </div>\r\n\r\n                  <div class=\"card text-left\" *ngIf=\"company1.name.length == 0\" >\r\n                    <div class=\"card-header\">\r\n                            <h4 class=\"card-title\"><a>Details</a></h4>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                    <div class=\"col-md-10\">\r\n                        <h4 class=\"card-body\">No Companies created yet. Create and manage your company. </h4>\r\n                        <p class=\"card-body\"> HeadQuarters : Example - Dublin</p>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <a  class=\"card-body text-right\"  data-toggle=\"modal\" data-target=\"#CompanyEditModal\"><i style=\"margin-top:15px;\" class=\"fa fa-pencil prefix fa-2x\"></i></a>\r\n                    </div>\r\n                  </div>\r\n                        <h5 class=\"card-body\">Privately Held</h5>\r\n                       \r\n                        <div class=\"card-body\">\r\n                            <h5 class=\"card-title\">10 - 50 Employees</h5>\r\n                            <h6 class=\"card-title\"> Description : </h6>\r\n                        </div>\r\n                   \r\n                  </div>\r\n        \r\n        <hr>\r\n        \r\n        <h2 class=\"text-center h1 my-5\">\r\n                <strong>Add / Remove Jobs</strong>\r\n            </h2>\r\n        <div class=\"row pt-5\">\r\n\r\n            <div class=\"col-lg-6 col-xl-7 mb-3\">\r\n        \r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-1 mr-1\">\r\n                        <i class=\"fa fa-bar-chart fa-2x indigo-text\"></i>\r\n                    </div>\r\n                    <div class=\"col-10\">\r\n                        <h5  *ngIf=\"company1.name.length > 0\" class=\"font-weight-bold\" data-toggle=\"modal\" data-target=\"#AddJobsModal\" ><a>Create Jobs Vacancies</a></h5>\r\n                        <h5 *ngIf=\"company1.name.length == 0\" class=\"font-weight-bold\" ><a>Create Jobs Vacancies</a></h5>\r\n                        <p class=\"grey-text\">Add or post new jobs in your company.</p>\r\n                    </div>\r\n                </div>\r\n                <!--Grid row-->\r\n        \r\n                <!--Grid row-->\r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-1 mr-1\">\r\n                        <i class=\"fa fa-music fa-2x pink-text\"></i>\r\n                    </div>\r\n                    <div class=\"col-10\">\r\n                        <h5  class=\"font-weight-bold\"><a (click)=\"showjobs()\">View Job Vacancies in {{company1.name}}</a></h5>\r\n                        <p class=\"grey-text\" >Have a look at the roles we have at the moment.</p>\r\n                    </div>\r\n                </div>\r\n                <!--Grid row-->\r\n        \r\n                <!--Grid row-->\r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-1 mr-1\">\r\n                        <i class=\"fa fa-smile-o fa-2x blue-text\"></i>\r\n                    </div>\r\n                    <div class=\"col-10\">\r\n                        <h5 class=\"font-weight-bold\" ><a (click)=\"showjobs()\">Remove Jobs</a></h5>\r\n                        <p class=\"grey-text\">Use this to remove the vacancies which have been filled.</p>\r\n                    </div>\r\n                </div>\r\n        \r\n            </div>\r\n\r\n            <div class=\"col-lg-6 col-xl-5 mb-3\">\r\n        \r\n                <img src=\"https://mdbootstrap.com/img/Photos/Others/images/82.jpg\" alt=\"Sample project image\" class=\"img-fluid rounded z-depth-1\">\r\n        \r\n            </div>\r\n        \r\n        </div>  \r\n    </section>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"!show\">\r\n               \r\n        <table id=\"table\" class=\"table table-striped table-bordered\">\r\n          <thead>\r\n            <tr>\r\n              <th>Title</th>\r\n              <th>Role</th>\r\n                          <th>VIEW APPLICANTS</th>\r\n                          <th>EDIT</th>\r\n                          <th>DELETE</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let job of jobsdata\">\r\n              <td>{{job.title}}</td>\r\n              <td>{{job.description}}</td>\r\n              <td><button (click)=\"view_candidates(job.id)\"><i class=\"fa fa-envelope-open-o\" aria-hidden=\"true\"></i></button>\r\n                <td><button (click) = \"editjobs(job.id)\"><i class=\"fa fa-edit\"></i></button>\r\n                    <td><button class=\"fa fa-remove\" (click) = \"deletejobs(job.id)\"></button>\r\n\r\n               </td>\r\n              </tr>\r\n          </tbody>\r\n    \r\n    </table>\r\n    <button  class=\"btn btn-deep-orange\" data-toggle=\"modal\" data-target=\"#AddJobsModal\" >Add / Update Jobs</button>\r\n    <button (click)=\"back()\"  class=\"btn btn-deep-orange\" >BACK</button>\r\n    {{status}}\r\n    </div>\r\n  \r\n  </div>\r\n\r\n"

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = "\r\n        <!--Main layout-->\r\n        <div class=\"container\">\r\n                <!--First row-->\r\n            <div class=\"row wow fadeIn\" data-wow-delay=\"0.2s\">\r\n                <div class=\"col-lg-7\">\r\n                    <!--Featured image -->\r\n                    <div class=\"view overlay hm-white-light z-depth-1-half\">\r\n                        <img src=\"https://mdbootstrap.com/img/Photos/Slides/img%20%2877%29.jpg\" class=\"img-fluid \" alt=\"\">\r\n                        <div class=\"mask\">\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n                </div>\r\n\r\n                <!--Main information-->\r\n                <div class=\"col-lg-5\">\r\n                    <h2 class=\"h2-responsive font-bold\">Availability on a single click !</h2>\r\n                    <hr>\r\n                    <p>Struggle days are over. Get information about everything and connect with students in your locality!</p>\r\n                    <a href=\"\" class=\"btn btn-info\">Get it now!</a>\r\n                </div>\r\n            </div>\r\n            <!--/.First row-->\r\n\r\n            <hr class=\"extra-margins my-5\">\r\n\r\n            <!--Second row-->\r\n            <div class=\"row pt-4\">\r\n                <!--First columnn-->\r\n                <div class=\"col-lg-4\">\r\n                    <!--Card-->\r\n                    <div class=\"card wow fadeIn\" data-wow-delay=\"0.4s\">\r\n\r\n                        <!--Card image-->\r\n                        <img class=\"img-fluid\" src=\"https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20(37).jpg\" alt=\"Card image cap\">\r\n\r\n                        <!--Card content-->\r\n                        <div class=\"card-body\">\r\n                            <!--Title-->\r\n                            <h4 class=\"card-title text-center\">Jobs</h4>\r\n                            <hr>\r\n                            <!--Text-->\r\n                            <p class=\"card-text\">Hunting for a job. Make it easy by just clicking here.</p>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <!--/.Card-->\r\n                </div>\r\n                <!--First columnn-->\r\n\r\n                <!--Second columnn-->\r\n                <div class=\"col-lg-4\">\r\n                    <!--Card-->\r\n                    <div class=\"card wow fadeIn\" data-wow-delay=\"0.6s\">\r\n\r\n                        <!--Card image-->\r\n                        <img class=\"img-fluid\" src=\"https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20(21).jpg\" alt=\"Card image cap\">\r\n\r\n                        <!--Card content-->\r\n                        <div class=\"card-body\">\r\n                            <!--Title-->\r\n                            <h4 class=\"card-title text-center\">Companies</h4>\r\n                            <hr>\r\n                            <!--Text-->\r\n                            <p class=\"card-text\">Find more information about the companies you want to work with.</p>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <!--/.Card-->\r\n                </div>\r\n                <!--Second columnn-->\r\n\r\n                <!--Third columnn-->\r\n                <div class=\"col-lg-4\">\r\n                    <!--Card-->\r\n                    <div class=\"card wow fadeIn\" data-wow-delay=\"0.8s\">\r\n\r\n                        <!--Card image-->\r\n                        <img class=\"img-fluid\" src=\"https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20(12).jpg\" alt=\"Card image cap\">\r\n\r\n                        <!--Card content-->\r\n                        <div class=\"card-body\">\r\n                            <!--Title-->\r\n                            <h4 class=\"card-title text-center\">Work-Placement</h4>\r\n                            <hr>\r\n                            <!--Text-->\r\n                            <p class=\"card-text\">Gaining work experience gives your career a massive boost. Click to find internships and apprentices.</p>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <!--/.Card-->\r\n                </div>\r\n                <!--Third columnn-->\r\n            </div>\r\n            <!--/.Second row-->\r\n        </div>\r\n        <!--/.Main layout-->\r\n\r\n    <!--Footer-->\r\n    <footer class=\"page-footer center-on-small-only\">\r\n\r\n        <!--Footer links-->\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <!--First column-->\r\n                <div class=\"col-lg-3 col-md-6 ml-auto\">\r\n                    <h5 class=\"title mb-3\"><strong>About material design</strong></h5>\r\n                    <p>StudentBuzz Portal created by group of students studying in National College Of Ireland.</p>\r\n                    <p>Seeing the modern struggle of the students we want to make students life easy by creating this portal.</p>\r\n                </div>\r\n                <!--/.First column-->\r\n                <hr class=\"w-100 clearfix d-sm-none\">\r\n                <!--Second column-->\r\n                <div class=\"col-lg-2 col-md-6 ml-auto\">\r\n                    <h5 class=\"title mb-3\"><strong>HOME</strong></h5>\r\n                    <ul>\r\n                        <li>\r\n                            <a href=\"#!\">Jobs</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#!\">Companies</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#!\">Applied Jobs</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#!\">Internships</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!--/.Second column-->\r\n                <hr class=\"w-100 clearfix d-sm-none\">\r\n                <!--Third column-->\r\n                <div class=\"col-lg-2 col-md-6 ml-auto\">\r\n                    <h5 class=\"title mb-3\"><strong>INFO</strong></h5>\r\n                    <ul>\r\n                        <li>\r\n                            <a href=\"#!\">Careers</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#!\">Experience</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#!\">Part Time</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#!\">Full Time</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!--/.Third column-->\r\n                <hr class=\"w-100 clearfix d-sm-none\">\r\n                <!--Fourth column-->\r\n                <div class=\"col-lg-2 col-md-6 ml-auto\">\r\n                    <h5 class=\"title mb-3\"><strong>MORE</strong></h5>\r\n                    <ul>\r\n                        <li>\r\n                            <a href=\"#!\">About Us</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#!\">Contact</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#!\">Profile</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#!\">Employer</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!--/.Fourth column-->\r\n            </div>\r\n        </div>\r\n        <!--/.Footer links-->\r\n\r\n        <hr>\r\n\r\n        <!--Call to action-->\r\n        <div class=\"call-to-action\">\r\n            <h4 class=\"mb-5\">Design and Developed By StudentBuzz Team</h4>\r\n            <ul>\r\n                <li>\r\n                    <h5>Know More</h5>\r\n                </li>\r\n                <li><a target=\"_blank\"  class=\"btn btn-danger\" rel=\"nofollow\">Sign up!</a></li>\r\n                <li><a target=\"_blank\"  class=\"btn btn-info\" rel=\"nofollow\">Learn more</a></li>\r\n            </ul>\r\n        </div>\r\n        <!--/.Call to action-->\r\n\r\n        <!--Copyright-->\r\n        <div class=\"footer-copyright\">\r\n            <div class=\"container-fluid\">\r\n                © 2015 Copyright: <a> StudentBuzz.com </a>\r\n\r\n            </div>\r\n        </div>\r\n        <!--/.Copyright-->\r\n\r\n    </footer>\r\n"

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n        <div class=\"row\">\r\n                \r\n        </div>\r\n    <nav class=\"navbar navbar-dark default-color\">\r\n            <div class=\"col-md-5\">\r\n                    <input class=\"form-control mr-sm-2\" type=\"text\"[(ngModel)]=\"curPlace\" placeholder=\"Search\" aria-label=\"Search\">\r\n                    <!-- <ul>  \r\n                            <li  *ngFor=\"let place in searchdata | filter:curPlace\">  \r\n                                <a ng-href=\"https://www.google.co.in/webhp?q={{place}}\">{{place}} </a>  \r\n                            </li>  \r\n                        </ul>   -->\r\n                </div>\r\n                <div class=\"col-md-7\">\r\n                        <button class=\"btn btn-outline-white btn-md my-2 my-sm-0 ml-3\" type=\"submit\">Search</button>\r\n                    </div>\r\n    </nav>\r\n    \r\n\t\t\t<div>\r\n        <div class=\"jumbotron\">\r\n          <div  *ngFor=\"let job of data\">\r\n          <h3 class=\"h3-responsive\">{{job.name}}</h3>\r\n          <p > {{job.title}}<br>\r\n          Ireland</p>\r\n     \r\n          <p>It uses utility classes for typography and spacing to space content out within the larger\r\n              container.\r\n          </p>\r\n          <a class=\"btn btn-primary btn-md\" role=\"button\" (click) = \"apply(job.companyid, job.id)\"><i class=\"fa fa-file-pdf-o\" aria-hidden=\"true\"></i>\r\n                  &nbsp;&nbsp;Easy Apply</a>\r\n          <hr class=\"my-2\">\r\n          </div>\r\n      </div>\r\n      </div>\r\n            <!-- <div class=\"row\">\r\n                <table id=\"table\" class=\"table table-striped table-bordered\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>Title</th>\r\n                      <th>Role</th>\r\n\t\t\t\t\t              <th>Action</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let job of data\">\r\n                      <td>{{job.name}}</td>\r\n                      <td>{{job.title}}</td>\r\n                      <td><button class=\"btn btn-success\" (click) = \"apply(job.companyid, job.id)\">APPLY</button>\r\n                       </td>\r\n                      </tr>\r\n                      <tr *ngFor=\"let job of data1\">\r\n                        <td>{{job.Company}}</td>\r\n                        <td>{{job.Title}}</td>\r\n                        <td><button class=\"btn btn-success\" (click) = \"apply(job.EmployerId, job.Id)\">APPLY</button>\r\n                         </td>\r\n                        </tr>\r\n                  </tbody>\r\n\r\n            </table>\r\n        </div> -->\r\n    </div>"

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n             \r\n<form *ngIf=\"show\">\r\n   \r\n  <h2 class=\"text-center mb-4\">Sign in</h2>\r\n\r\n  <div class=\"md-form\">\r\n      <i class=\"fa fa-envelope prefix grey-text\"></i>\r\n      <input type=\"text\" id=\"defaultForm-email\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\">\r\n      <label for=\"defaultForm-email\">Your email</label>\r\n  </div>\r\n\r\n  <div class=\"md-form\">\r\n      <i class=\"fa fa-lock prefix grey-text\"></i>\r\n      <input type=\"password\" id=\"defaultForm-pass\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\">\r\n      <label for=\"defaultForm-pass\">Your password</label>\r\n  </div>\r\n\r\n  <div class=\"text-center\">\r\n      <button class=\"btn btn-default\" (click)=\"get_data(model.username, model.password)\"  >Login</button>\r\n      <br>\r\n      <br>\r\n      <h5><a (click)=\"show = false\">Go for registration</a></h5>\r\n  </div>\r\n</form>\r\n\r\n<form *ngIf=\"!show\">\r\n    <h2 class=\"text-center mb-4\">Sign up</h2>\r\n\r\n    <div class=\"md-form\">\r\n        <i class=\"fa fa-user prefix grey-text\"></i>\r\n        <input type=\"text\" id=\"orangeForm-name\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\">\r\n        <label for=\"orangeForm-name\">Your Email</label>\r\n    </div>\r\n   \r\n\r\n    <div class=\"md-form\">\r\n        <i class=\"fa fa-lock prefix grey-text\"></i>\r\n        <input type=\"password\" id=\"orangeForm-pass\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\">\r\n        <label for=\"orangeForm-pass\">Your password</label>\r\n    </div>\r\n\r\n    <div class=\"md-form\">\r\n        <i class=\"fa fa-envelope prefix grey-text\"></i>\r\n        <input type=\"password\" name=\"confirm_password\" id=\"orangeForm-email\" class=\"form-control\" [(ngModel)]=\"model.confirm_password\">\r\n        <label for=\"orangeForm-email\">Your Confirm password</label>\r\n    </div>\r\n    <br>\r\n    \r\n    <div class=\"form-check\">\r\n        Are you a&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n        <input name=\"role\" value=\"Student\" type=\"radio\" class=\"with-gap\" [(ngModel)]=\"model.role\" >\r\n        <label for=\"radio106\">Student</label>&nbsp;&nbsp;\r\n\r\n        <input name=\"role\" value=\"Employer\" type=\"radio\" class=\"with-gap\"  [(ngModel)]=\"model.role\">\r\n        <label for=\"radio107\">Employer</label>\r\n    </div>\r\n    \r\n   \r\n\r\n    <div class=\"text-center\">\r\n        <button class=\"btn btn-deep-orange\" (click)=\"post_data(model.username, model.password,model.confirm_password, model.role)\" >Sign up</button>\r\n        <br>\r\n        <br>\r\n        <h4><a (click)=\"show = true\">Click here to go to Login Page</a></h4>\r\n    </div>\r\n\r\n\r\n</form>\r\n\r\n</div>"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = "       <!--Navbar-->\r\n        <nav class=\"navbar navbar-expand-lg navbar-dark\">\r\n            <div class=\"container\">\r\n                <a class=\"navbar-brand\" [routerLink]=\"['/']\">StudentBuzz</a>\r\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n                    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                    <span class=\"navbar-toggler-icon\"></span>\r\n                </button>\r\n                <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n                    <ul class=\"navbar-nav mr-auto\">\r\n                        <li class=\"nav-item active\">\r\n                            <a class=\"nav-link\" [routerLink]=\"['/home']\">Home <span class=\"sr-only\">(current)</span></a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" [routerLink]=\"['/jobs']\">Jobs</a>\r\n                        </li>\r\n                        <li class=\"nav-item\"  *ngIf=\"this.DataService.Role == 'Employer'\">\r\n                            <a class=\"nav-link\" [routerLink]=\"['/companies']\">Companies</a>\r\n                        </li>\r\n                          <li class=\"nav-item\" *ngIf=\"this.DataService.loggedIN==false\">\r\n                            <a class=\"nav-link\"  [routerLink]=\"['/login']\">Register/Login</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" [routerLink]=\"['/appliedjobs']\">Applied Jobs</a>\r\n                        </li>\r\n                        <li class=\"nav-item btn-group\">\r\n                            <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">More \r\n                            </a>\r\n                            <div class=\"dropdown-menu dropdown-primary\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                                <a *ngIf=\"this.DataService.loggedIN == true\" (click) = \"this.DataService.loggedIN = false\" class=\"dropdown-item\" [routerLink]=\"['/login']\">Log Out</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                    <form class=\"form-inline\">\r\n                        <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </nav>\r\n        <!--/.Navbar-->\r\n  <br>\r\n  <br>"

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\" >\r\n\r\n<section class=\"text-center pb-5\">\r\n    <h1 class=\"h1 pt-4\">Manage Your Profile</h1>\r\n\r\n            <div class=\"testimonial\">\r\n                <!-- Avatar Photo -->\r\n                <div class=\"avatar mx-auto\">\r\n\r\n                    <img  *ngIf=\"photo1.image_name.length == 0\" src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg\" class=\"rounded-circle img-fluid\" alt=\"First sample avatar image\">\r\n\r\n                    <img *ngIf=\"photo1.image_name.length > 0\" [src]=\"photo1.image_name\" class=\"rounded-circle img-fluid\" alt=\"First sample avatar image\">\r\n                    \r\n                </div>\r\n          <br>\r\n          <p>   <!--    Summary -->\r\n                    <i class=\"fa fa-quote-left\"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae\r\n                    quaerat ad velit ab. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cum accusamus eveniet\r\n                    molestias voluptatum inventore laboriosam labore sit, aspernatur praesentium iste impedit quidem dolor\r\n                    veniam. <i class=\"fa fa-quote-right\"></i></p><a data-toggle=\"modal\" data-target=\"#orangeModalSubscription\"><i class=\"fa fa-edit fa-3x\" aria-hidden=\"true\"></i></a>\r\n\r\n                <h4>{{profile1.Name}}</h4>\r\n                <h6>{{profile1.PhoneNumber}}</h6>\r\n                <h6>{{profile1.Address}}</h6>\r\n\r\n                <!--Review-->\r\n                <i class=\"fa fa-star\"> </i>\r\n                <i class=\"fa fa-star\"> </i>\r\n                <i class=\"fa fa-star\"> </i>\r\n                <i class=\"fa fa-star\"> </i>\r\n                <i class=\"fa fa-star-half-full\"> </i>\r\n            </div>\r\n</section>\r\n<!--Experience-->\r\n      <div *ngIf=\"photo1.image_name.length == 0\" class=\"input-file-container\">  \r\n          <input class=\"input-file\" id=\"my-file\" type=\"file\" [(ngModel)]=\"path\" (change)=\"fileUpload($event)\">\r\n          <label tabindex=\"0\" for=\"my-file\"   class=\"input-file-trigger\">Select a file...</label>\r\n        </div>\r\n<div *ngIf=\"experience1[0].title.length == 0\" >\r\n<div class=\"card text-center\">\r\n    <div class=\"card-header\">\r\n            <h4 class=\"card-title\"><a>Add Your Work Experience</a></h4>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <p class=\"card-text\">...</p>\r\n \r\n        <div class=\"md-form\">\r\n            <a data-toggle=\"modal\" data-target=\"#ExpModal\"><i class=\"fa fa-pencil prefix\"></i></a>\r\n            <textarea type=\"text\" id=\"textareaPrefix\" class=\"form-control md-textarea\" rows=\"3\"></textarea>\r\n            <label for=\"textareaPrefix\">Fill out your experience</label>\r\n        </div>\r\n    </div>\r\n</div>\r\n<hr>\r\n</div>\r\n\r\n<!-- Education -->\r\n<div *ngIf=\"education1[0].name.length == 0\" >\r\n<div class=\"card text-center\">\r\n        <div class=\"card-header\">\r\n                <h4 class=\"card-title\"><a>Education</a></h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <p class=\"card-text\">...</p>\r\n     \r\n            <div class=\"md-form\">\r\n                  <a data-toggle=\"modal\" data-target=\"#EducationModal\"><i class=\"fa fa-pencil prefix\"></i></a>\r\n                <textarea type=\"text\" id=\"textareaPrefix\" class=\"form-control md-textarea\" rows=\"3\"></textarea>\r\n                <label for=\"textareaPrefix\">Education</label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <hr>\r\n  </div>\r\n\r\n<div class=\"modal fade\" id=\"orangeModalSubscription\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-notify modal-warning\" role=\"document\">\r\n        <!--Content-->\r\n        <div class=\"modal-content\">\r\n            <!--Header-->\r\n            <div class=\"modal-header text-center\">\r\n                <h4 class=\"modal-title white-text w-100 font-weight-bold py-2\">Edit Basic Info</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\" class=\"white-text\">&times;</span>\r\n                </button>\r\n            </div>\r\n\r\n            <!--Body-->\r\n            <div class=\"modal-body\">\r\n                <div class=\"md-form mb-5\">\r\n                    <i class=\"fa fa-user prefix grey-text\"></i>\r\n                    <input type=\"text\" id=\"form3\" class=\"form-control validate\" name=\"name\" [(ngModel)]=\"profile.name\">\r\n                    <label data-error=\"wrong\" data-success=\"right\" for=\"form3\">Your name</label>\r\n                </div>\r\n\r\n                <div class=\"md-form\">  \r\n                    <i class=\"fa fa-bank prefix grey-text\" aria-hidden=\"true\"></i>\r\n\r\n                    <input type=\"text\" id=\"form2\" class=\"form-control validate\" name=\"Address\" [(ngModel)]=\"profile.Address\">\r\n                    <label data-error=\"wrong\" data-success=\"right\" for=\"form2\">Your address</label>\r\n                </div>\r\n                <div class=\"md-form\">\r\n                    <i class=\"fa fa-mobile-phone prefix grey-text\" aria-hidden=\"true\"></i>\r\n                    <input type=\"text\" id=\"form3\" class=\"form-control validate\" name=\"PhoneNumber\" [(ngModel)]=\"profile.PhoneNumber\">\r\n                    <label data-error=\"wrong\" data-success=\"right\" for=\"form1\">Your Phone</label>\r\n                </div>\r\n            </div>\r\n\r\n            <!--Footer-->\r\n            <div class=\"modal-footer justify-content-center\">\r\n                <a type=\"button\" (click)= \"profile_data(profile.name,profile.PhoneNumber,profile.Address)\" class=\"btn btn-outline-warning waves-effect\">SAVE <i class=\"fa fa-paper-plane-o ml-1\"></i></a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n \r\n<!-- Experience Modal -->\r\n<div class=\"modal fade\" id=\"ExpModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\"\r\n  data-backdrop=\"false\">\r\n  <div class=\"modal-dialog modal-dialog-centered modal-lg modal-notify modal-info\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <!--Header-->\r\n      <div class=\"modal-header\">\r\n        <p class=\"heading lead\">Experience\r\n        </p>\r\n\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\" class=\"white-text\">×</span>\r\n        </button>\r\n      </div>\r\n\r\n      <!--Body-->\r\n      <div class=\"modal-body\">\r\n        <div class=\"text-center\">\r\n          <i class=\"fa fa-desktop fa-4x mb-3 animated rotateIn\"></i>\r\n          <p>\r\n            <strong>Work Experience</strong>\r\n          </p>\r\n          <p>Let the employers know about your experience.\r\n            <strong>Make them notice.</strong>\r\n          </p>\r\n        </div>\r\n        <div class=\"md-form\">\r\n                <input type=\"text\" name=\"title\" class=\"md-textarea form-control\" [(ngModel)]=\"experience.title\" />\r\n                <label for=\"title\">Title</label>\r\n              </div>\r\n        <div class=\"md-form\">\r\n            <input type=\"text\" name=\"company\" class=\"md-textarea form-control\"  [(ngModel)]=\"experience.company\" />\r\n             <label for=\"title\">Company</label>\r\n         </div>\r\n         <div class=\"md-form\">\r\n                <input type=\"text\" name=\"location\" class=\"md-textarea form-control\" [(ngModel)]=\"experience.location\" />\r\n                 <label for=\"title\">Location</label>\r\n             </div>\r\n        <div class=\"md-form\">\r\n          <textarea type=\"text\" name=\"description\" class=\"md-textarea form-control\" rows=\"3\"  [(ngModel)]=\"experience.description\"></textarea>\r\n          <label for=\"form79textarea\">Description</label>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <!--Footer-->\r\n      <div class=\"modal-footer justify-content-center\">\r\n        <a type=\"button\" class=\"btn btn-primary waves-effect waves-light\" (click)=\"post_experience(experience.title,experience.company,experience.location,experience.description)\">Save\r\n          <i class=\"fa fa-paper-plane ml-1\"></i>\r\n        </a>\r\n        <a type=\"button\" class=\"btn btn-outline-primary waves-effect\" data-dismiss=\"modal\">Cancel</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Modal: Experience -->\r\n\r\n<!-- Education Modal -->\r\n<div class=\"modal fade\" id=\"EducationModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\"\r\n  data-backdrop=\"false\">\r\n  <div class=\"modal-dialog modal-dialog-centered modal-lg modal-notify modal-info\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <!--Header-->\r\n      <div class=\"modal-header\">\r\n        <p class=\"heading lead\">Education\r\n        </p>\r\n\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\" class=\"white-text\">×</span>\r\n        </button>\r\n      </div>\r\n\r\n      <!--Body-->\r\n      <div class=\"modal-body\">\r\n        <div class=\"text-center\">\r\n          <i class=\"fa fa-file-text-o fa-4x mb-3 animated rotateIn\"></i>\r\n          <p>\r\n            <strong>Education</strong>\r\n          </p>\r\n          <p>Describe your educational background.\r\n            <strong>Make them notice.</strong>\r\n          </p>\r\n        </div>\r\n        <div class=\"md-form\">\r\n                <input type=\"text\" id=\"school\" class=\"md-textarea form-control\" [(ngModel)]=\"education.name\" />\r\n                <label for=\"title\">School</label>\r\n              </div>\r\n        <div class=\"md-form\">\r\n            <input type=\"text\" id=\"degree\" class=\"md-textarea form-control\" [(ngModel)]=\"education.degree\"  />\r\n             <label for=\"title\">Degree</label>\r\n         </div>\r\n         <div class=\"md-form\">\r\n                <input type=\"text\" id=\"field\" class=\"md-textarea form-control\" [(ngModel)]=\"education.field\"  />\r\n                 <label for=\"title\">Field of Study</label>\r\n             </div>\r\n             <div class=\"md-form\">\r\n                    <input type=\"text\"  [(ngModel)]=\"education.grade\"  class=\"md-textarea form-control\" />\r\n                     <label for=\"title\">Field of Grade</label>\r\n                 </div>\r\n        <div class=\"md-form\">\r\n          <textarea type=\"text\" [(ngModel)]=\"education.description\" class=\"md-textarea form-control\" rows=\"3\"></textarea>\r\n          <label for=\"form79textarea\">Description</label>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <!--Footer-->\r\n      <div class=\"modal-footer justify-content-center\">\r\n        <a type=\"button\" class=\"btn btn-primary waves-effect waves-light\" (click)=\"post_education(education.name,education.grade,education.degree,education.field,education.description)\">Save\r\n          <i class=\"fa fa-paper-plane ml-1\"></i>\r\n        </a>\r\n        <a type=\"button\" class=\"btn btn-outline-primary waves-effect\" data-dismiss=\"modal\">Cancel</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Work Experience -->\r\n<div *ngIf=\"experience1[0].title.length > 0\" >\r\n<div class=\"card text-left\" *ngFor=\"let e of experience1\">\r\n  <div class=\"card-header\">\r\n          <h4 class=\"card-title\"><a>Work Experience</a></h4>\r\n  </div>\r\n  <div class=\"row\">\r\n  <div class=\"col-md-10\">\r\n      <h4 class=\"card-body\">{{e.title}}</h4>\r\n  </div>\r\n  <div class=\"col-md-2\">\r\n      <a  class=\"card-body text-right\" data-toggle=\"modal\" data-target=\"#ExpModal\"><i style=\"margin-top:15px;\" class=\"fa fa-pencil prefix fa-2x\"></i></a>\r\n  </div>\r\n</div>\r\n      <h5 class=\"card-body\">{{e.company}}</h5>\r\n     \r\n      <div class=\"card-body\">\r\n          <h5 class=\"card-title\">{{e.location}}</h5>\r\n          <p class=\"card-text\">\t{{e.description}}</p>\r\n      </div>\r\n \r\n</div>\r\n<hr></div>\r\n\r\n<!-- Education -->\r\n<div *ngIf=\"education1[0].name.length > 0\" >\r\n<div class=\"card text-left\" *ngFor=\"let education1 of education1\">\r\n  <div class=\"card-header\">\r\n          <h4 class=\"card-title\"><a>Education</a></h4>\r\n  </div>\r\n  <div class=\"row\">\r\n  <div class=\"col-md-10\">\r\n      <h4 class=\"card-body\">{{education1.name}}</h4>\r\n  </div>\r\n  <div class=\"col-md-2\">\r\n      <a  class=\"card-body text-right\" data-toggle=\"modal\" data-target=\"#EducationModal\"><i style=\"margin-top:15px;\" class=\"fa fa-pencil prefix fa-2x\"></i></a>\r\n  </div>\r\n</div>\r\n      <h5 class=\"card-body\">{{education1.degree}}</h5>\r\n     \r\n      <div class=\"card-body\">\r\n          <h5 class=\"card-title\">{{education1.date_to}} -- {{education1.date_from}}</h5>\r\n          <p class=\"card-text\">\t{{education1.description}}</p>\r\n      </div>\r\n \r\n</div><hr>\r\n</div>\r\n\r\n    \r\n\r\n</div>\r\n"

/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(396);


/***/ })

},[734]);
//# sourceMappingURL=main.bundle.map