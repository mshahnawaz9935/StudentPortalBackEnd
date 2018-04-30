webpackJsonp([1,4],{

/***/ 392:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 392;


/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(512);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/malam/Documents/GitHub/StudentPortalClient/src/main.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DataService__ = __webpack_require__(80);
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

/***/ 511:
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
            template: __webpack_require__(688),
            styles: [__webpack_require__(679)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/malam/Documents/GitHub/StudentPortalClient/src/app.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__menu_bar_menu_bar_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__jobs_jobs_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__companies_companies_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__appliedjobs_appliedjobs_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__DataService__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__AuthGuard__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__candidates_candidates_component__ = __webpack_require__(514);
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
    { path: 'companies', component: __WEBPACK_IMPORTED_MODULE_9__companies_companies_component__["a" /* CompaniesComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__AuthGuard__["a" /* AuthGuard */]] },
    { path: 'appliedjobs', component: __WEBPACK_IMPORTED_MODULE_10__appliedjobs_appliedjobs_component__["a" /* AppliedjobsComponent */] },
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

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(69);
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

        this.http.get('https://stubuzzportal.azurewebsites.net/api/AppliedJobsAPI')
            .map(function (response) { return response.json(); }).subscribe(function (Serverdata) {
            _this.applied = Serverdata;
            _this.http.get('https://stubuzzportal.azurewebsites.net/api/JobsAPI')
                .map(function (response) { return response.json(); }).subscribe(function (Serverdata) {
                _this.jobs = Serverdata;
                _this.http.get('https://stubuzzportal.azurewebsites.net/api/CompaniesAPI')
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
            template: __webpack_require__(689),
            styles: [__webpack_require__(680)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], AppliedjobsComponent);
    return AppliedjobsComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/malam/Documents/GitHub/StudentPortalClient/src/appliedjobs.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DataService__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
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
        this.profile1 = { Name: '', Address: '', PhoneNumber: '', Role: '' };
        this.get_profile();
    }
    CandidatesComponent.prototype.ngOnInit = function () {
    };
    CandidatesComponent.prototype.get_profile = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this.DataService.access_token + '' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option

        this.http.get('https://stubuzzportal.azurewebsites.net/api/Account/UserInfo', options)
            .map(function (response) { return response.json(); }).subscribe(function (Serverdata) {
            console.log('Profile Data is ' + Serverdata, Serverdata.Id);
            _this.profile1 = Serverdata;
        });
    };
    CandidatesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-candidates',
            template: __webpack_require__(690),
            styles: [__webpack_require__(681)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__DataService__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__DataService__["a" /* DataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _b) || Object])
    ], CandidatesComponent);
    return CandidatesComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/malam/Documents/GitHub/StudentPortalClient/src/candidates.component.js.map

/***/ }),

/***/ 515:
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

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DataService__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Company__ = __webpack_require__(515);
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
        this.company1 = { comp_id: 0, name: '', email: '', about: '' };
        this.jobsdata = [];
        this.show = true;
        this.Company = new __WEBPACK_IMPORTED_MODULE_7__Company__["a" /* Company */](0, '', '', '');
        this.togglejobs = false;
        this.status = '';
        this.getcompany(this.DataService.UserId);
    }
    CompaniesComponent.prototype.ngOnInit = function () {
    };
    CompaniesComponent.prototype.post_data = function (name, email, about) {
        console.log('name is', name, email, about);
        this.body = { Name: name, Email: email,
            about: about, Emp_Id: this.DataService.UserId
        };
        var bodyString = JSON.stringify(this.body); // Stringify payload
        console.log(bodyString);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option

        this.http.post('https://stubuzzportal.azurewebsites.net/api/CompaniesAPI', this.body, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); })
            .subscribe(function (Serverdata) {
            console.log('Data is ' + Serverdata);
        });
    };
    CompaniesComponent.prototype.getcompany = function (Emp_Id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this.DataService.access_token + '' });
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        this.http.get('https://stubuzzportal.azurewebsites.net/api/CompaniesAPI/GetCompany_ByEmp_Id/' + Emp_Id, options)
            .map(function (response) { return response.json(); }).subscribe(function (Serverdata) {
            console.log('Profile Data is ' + Serverdata, Serverdata.Id);
            _this.company1 = Serverdata;
            _this.company_id = Serverdata.id;
            _this.Company = _this.company1;
            console.log('Company id', _this.company_id);
        });
    };
    CompaniesComponent.prototype.showjobs = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this.DataService.access_token + '' });
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option

        this.http.get('https://stubuzzportal.azurewebsites.net/api/JobsAPI/GetJobByCompany/' + this.company_id, options)
            .map(function (response) { return response.json(); }).subscribe(function (Serverdata) {
            console.log('Jobs Data is ' + Serverdata);
            _this.jobsdata = Serverdata;
        });
    };
    CompaniesComponent.prototype.postjobs = function () {
        this.show = false;
    };
    CompaniesComponent.prototype.deletejobs = function (id) {
        var _this = this;

        this.http.delete('https://stubuzzportal.azurewebsites.net/api/JobsAPI/' + id).map(function (response) { return response.json(); }).subscribe(function (data) {
            console.log('Jobs Deleted status is ' + data);
            _this.status = data;
        });
    };
    CompaniesComponent.prototype.view_candidates = function (id) {
        this.router.navigate(['/candidates']);
        this.DataService.candidateid = id;
    };
    CompaniesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-companies',
            template: __webpack_require__(691),
            styles: [__webpack_require__(682)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__DataService__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__DataService__["a" /* DataService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], CompaniesComponent);
    return CompaniesComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/malam/Documents/GitHub/StudentPortalClient/src/companies.component.js.map

/***/ }),

/***/ 517:
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
            template: __webpack_require__(692),
            styles: [__webpack_require__(683)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/Users/malam/Documents/GitHub/StudentPortalClient/src/home.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
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
    function JobsComponent(http) {
        var _this = this;
        this.http = http;

        this.http.get('https://stubuzzportal.azurewebsites.net/api/CompaniesAPI')
            .map(function (response) { return response.json(); }).subscribe(function (Serverdata) {
            console.log('Data is ' + Serverdata);
            _this.companies = Serverdata;
            _this.http.get('https://stubuzzportal.azurewebsites.net/api/JobsAPI')
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
    };
    JobsComponent.prototype.apply = function (companyid, jobid) {
        console.log('here');
        this.body = { studentid: '3000', companyid: companyid, jobid: jobid, applydate: '13/8/2017' };
        var bodyString = JSON.stringify(this.body); // Stringify payload
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option

        this.http.post('https://stubuzzportal.azurewebsites.net/api/AppliedJobsAPI', this.body, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); })
            .subscribe(function (Serverdata) {
            console.log('Data is ' + Serverdata);
        });
        //...errors if any
    };
    JobsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* Component */])({
            selector: 'app-jobs',
            template: __webpack_require__(693),
            styles: [__webpack_require__(684)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], JobsComponent);
    return JobsComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/malam/Documents/GitHub/StudentPortalClient/src/jobs.component.js.map

/***/ }),

/***/ 519:
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

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__User__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DataService__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(154);
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
    }
    LoginComponent.prototype.ngOnInit = function () {
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
            this.http.post('https://stubuzzportal.azurewebsites.net/api/Account/Register', this.body, options) // ...using post request
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

        this.http.post('https://stubuzzportal.azurewebsites.net/Token', body, options) // ...using post request
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
            template: __webpack_require__(694),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__DataService__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__DataService__["a" /* DataService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/malam/Documents/GitHub/StudentPortalClient/src/login.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function MenuBarComponent() {
    }
    MenuBarComponent.prototype.ngOnInit = function () {
    };
    MenuBarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-menu-bar',
            template: __webpack_require__(695),
            styles: [__webpack_require__(686)]
        }), 
        __metadata('design:paramtypes', [])
    ], MenuBarComponent);
    return MenuBarComponent;
}());
//# sourceMappingURL=C:/Users/malam/Documents/GitHub/StudentPortalClient/src/menu-bar.component.js.map

/***/ }),

/***/ 522:
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

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Profile__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DataService__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
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
    function ProfileComponent(http, DataService) {
        var _this = this;
        this.http = http;
        this.DataService = DataService;
        this.role = false;
        this.profile1 = { Name: '', Address: '', PhoneNumber: '', Role: '' };
        this.profile = new __WEBPACK_IMPORTED_MODULE_2__Profile__["a" /* Profile */]('', '', '');
        this.get_profile();
        setTimeout(function () {
            console.log(_this.DataService.access_token, ' ID ', _this.DataService.UserId);
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

        this.http.post('https://stubuzzportal.azurewebsites.net/api/Account/EditProfile', body, options) // ...using post request
            .map(function (res) { return res; }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error.error || 'Server error'); })
            .subscribe(function (Serverdata) {
            console.log('Data is ' + Serverdata);
            _this.get_profile();
        });
    };
    ProfileComponent.prototype.get_profile = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this.DataService.access_token + '' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option

        this.http.get('https://stubuzzportal.azurewebsites.net/api/Account/UserInfo', options)
            .map(function (response) { return response.json(); }).subscribe(function (Serverdata) {
            console.log('Profile Data is ' + Serverdata, Serverdata.Id);
            _this.profile1 = Serverdata;
            _this.DataService.UserId = Serverdata.Id;
            if (_this.profile1.Role == 'Employer')
                _this.role = true;
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__(696),
            styles: [__webpack_require__(687)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__DataService__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__DataService__["a" /* DataService */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/malam/Documents/GitHub/StudentPortalClient/src/profile.component.js.map

/***/ }),

/***/ 524:
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

/***/ 679:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "/* YOUR CUSTOM STYLES */\r\n   "

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

module.exports = "     /* TEMPLATE STYLES */\r\n\r\n        main {\r\n            padding-top: 3rem;\r\n            padding-bottom: 2rem;\r\n        }\r\n\r\n        .extra-margins {\r\n            margin-top: 1rem;\r\n            margin-bottom: 2.5rem;\r\n        }\r\n\r\n        .navbar {\r\n            background-color: #3b3b3f;\r\n        }\r\n\r\n        footer.page-footer {\r\n            background-color: #3b3b3f;\r\n            margin-top: 2rem;\r\n        }\r\n        .navbar .btn-group .dropdown-menu a:hover {\r\n            color: #000 !important;\r\n        }\r\n        .navbar .btn-group .dropdown-menu a:active {\r\n            color: #fff !important;\r\n        }\r\n"

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = "<app-menu-bar></app-menu-bar>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t\t\t\r\n            <div class=\"row\">\r\n                <table id=\"table\" class=\"table table-striped table-bordered\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>Title</th>\r\n                      <th>Job Description</th>\r\n\t\t\t\t\t              <th>Company</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let job of list\">\r\n                      <td>{{job.desc}}</td>\r\n                      <td>{{job.title}}</td>\r\n                      <td>\r\n                        <b>{{job.companyname}}</b>\r\n                       </td>\r\n                      </tr>\r\n                  </tbody>\r\n\r\n            </table>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = "\n<div class =\"container\">\n<p>\n  candidates works! and id is {{DataService.candidateid}}\n</p>\n\n<p>\n    Name : {{profile1.Name}}\n  </p>\n  <p>\n    Phone : {{profile1.PhoneNumber}}\n  </p>\n  <p>\n    Address : {{profile1.Address}}\n  </p></div>"

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = "\r\n   <div class=\"container\" >\r\n       <div *ngIf=\"show\" >\r\n        <div class=\"modal fade\" id=\"CompanyEditModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n                <div class=\"modal-dialog\" role=\"document\">\r\n                    <div class=\"modal-content\">\r\n                        <div class=\"modal-header text-center\">\r\n                            <h4 class=\"modal-title w-100 font-weight-bold\">Edit Company Info</h4>\r\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                                <span aria-hidden=\"true\">&times;</span>\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"modal-body mx-3\">\r\n                            <div class=\"md-form mb-5\">\r\n                                <i class=\"fa fa-user prefix grey-text\"></i>\r\n                                <input type=\"text\" id=\"orangeForm-name\" class=\"form-control validate\" name=\"company\" [(ngModel)]=\"Company.name\"  >\r\n                                <label data-error=\"wrong\" data-success=\"right\" for=\"orangeForm-name\">Company name</label>\r\n                            </div>\r\n                            <div class=\"md-form mb-5\">\r\n                                <i class=\"fa fa-envelope prefix grey-text\"></i>\r\n                                <input type=\"email\" id=\"orangeForm-email\" class=\"form-control validate\" name=\"email\" [(ngModel)]=\"Company.email\"  >\r\n                                <label data-error=\"wrong\" data-success=\"right\" for=\"orangeForm-email\">Email</label>\r\n                            </div>\r\n            \r\n                            <div class=\"md-form mb-4\">\r\n                                <i class=\"fa fa-lock prefix grey-text\"></i>\r\n                                <input type=\"password\" id=\"orangeForm-pass\" class=\"form-control validate\" name=\"about\" [(ngModel)]=\"Company.about\"  >\r\n                                <label data-error=\"wrong\" data-success=\"right\" for=\"orangeForm-pass\">About</label>\r\n                            </div>\r\n            \r\n                        </div>\r\n                        <div class=\"modal-footer d-flex justify-content-center\">\r\n                            <button class=\"btn btn-deep-orange\" (click)= \"post_data(Company.name,Company.email,Company.about)\">Edit And Save</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            \r\n    <section>\r\n\r\n        <h2 class=\"text-center h1 my-5\">\r\n            <strong>Company Information</strong>\r\n        </h2>\r\n        <p class=\"px-xl-5 text-center grey-text mb-5\">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\r\n            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n        \r\n        <div class=\"row\">\r\n        \r\n            <div class=\"col-lg-6 col-xl-5 pr-lg-5 pb-5\">\r\n        \r\n                <img src=\"https://mdbootstrap.com/img/Photos/Others/images/83.jpg\" alt=\"Sample project image\" class=\"img-fluid rounded z-depth-1\">\r\n        \r\n            </div>\r\n\r\n            <div class=\"col-lg-6 col-xl-7 pl-lg-5 pb-4\">\r\n        \r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-1 mr-1\">\r\n                        <i class=\"fa fa-book fa-2x cyan-text\"></i>\r\n                    </div>\r\n                    <div class=\"col-10\">\r\n                        <h5 class=\"font-weight-bold\">Name</h5>\r\n                        <p class=\"grey-text\"><br>{{company1.name}}</p>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-1 mr-1\">\r\n                        <i class=\"fa fa-code fa-2x red-text\"></i>\r\n                    </div>\r\n                    <div class=\"col-10 \">\r\n                        <h5 class=\"font-weight-bold\">About</h5>\r\n                        <p class=\"grey-text\"><br>{{company1.about}}</p>\r\n                    </div>\r\n                </div>\r\n    \r\n                <div class=\"row\">\r\n                    <div class=\"col-1 mr-1\">\r\n                        <i class=\"fa fa-money fa-2x deep-purple-text\"></i>\r\n                    </div>\r\n                    <div class=\"col-10\">\r\n                        <h5 class=\"font-weight-bold\">Email</h5>\r\n                        <p class=\"grey-text\"><br>{{company1.email}}</p>\r\n                    </div>\r\n                    <div class=\"col-2 mr-1\">\r\n                            \r\n                        </div><button class=\"btn btn-light-blue\" data-toggle=\"modal\" data-target=\"#CompanyEditModal\">EDIT INFO</button>\r\n                </div>\r\n        \r\n            </div>\r\n\r\n        \r\n        </div>\r\n\r\n        \r\n        <hr>\r\n        \r\n        <h2 class=\"text-center h1 my-5\">\r\n                <strong>Add / Remove Jobs</strong>\r\n            </h2>\r\n        <div class=\"row pt-5\">\r\n\r\n            <div class=\"col-lg-6 col-xl-7 mb-3\">\r\n        \r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-1 mr-1\">\r\n                        <i class=\"fa fa-bar-chart fa-2x indigo-text\"></i>\r\n                    </div>\r\n                    <div class=\"col-10\">\r\n                        <h5 class=\"font-weight-bold\"><a>Create Jobs Vacancies</a></h5>\r\n                        <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda\r\n                            voluptate velit.</p>\r\n                    </div>\r\n                </div>\r\n                <!--Grid row-->\r\n        \r\n                <!--Grid row-->\r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-1 mr-1\">\r\n                        <i class=\"fa fa-music fa-2x pink-text\"></i>\r\n                    </div>\r\n                    <div class=\"col-10\">\r\n                        <h5  class=\"font-weight-bold\"><a (click)=\"showjobs()\">View Job Vacancies in {{company1.name}}</a></h5>\r\n                        <p class=\"grey-text\" >Have a look at the roles we have at the moment.</p>\r\n                    </div>\r\n                </div>\r\n                <!--Grid row-->\r\n        \r\n                <!--Grid row-->\r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-1 mr-1\">\r\n                        <i class=\"fa fa-smile-o fa-2x blue-text\"></i>\r\n                    </div>\r\n                    <div class=\"col-10\">\r\n                        <h5 class=\"font-weight-bold\">Remove Jobs</h5>\r\n                        <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda\r\n                            voluptate velit.</p>\r\n                    </div>\r\n                </div>\r\n        \r\n            </div>\r\n\r\n            <div class=\"col-lg-6 col-xl-5 mb-3\">\r\n        \r\n                <img src=\"https://mdbootstrap.com/img/Photos/Others/images/82.jpg\" alt=\"Sample project image\" class=\"img-fluid rounded z-depth-1\">\r\n        \r\n            </div>\r\n        \r\n        </div>  \r\n    </section>\r\n\r\n   <div>       \r\n        <h2 class=\"text-center mb-4\">Create/Edit Jobs in company</h2>\r\n      \r\n        <div class=\"md-form\">\r\n            <i class=\"fa fa-user prefix grey-text\"></i>\r\n            <input type=\"text\" id=\"orangeForm-name\" class=\"form-control\" name=\"name\" [(ngModel)]=\"Company.name\">\r\n            <label>Name</label>\r\n        </div>\r\n    \r\n        <div class=\"md-form\">\r\n            <i class=\"fa fa-envelope prefix grey-text\"></i>\r\n            <input type=\"text\" id=\"orangeForm-email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"Company.email\">\r\n            <label for=\"orangeForm-email\">Email</label>\r\n        </div>\r\n      \r\n        <div class=\"md-form\">\r\n            <i class=\"fa fa-lock prefix grey-text\"></i>\r\n            <input type=\"text\" id=\"orangeForm-pass\" class=\"form-control\" name=\"about\" [(ngModel)]=\"Company.about\">\r\n            <label for=\"orangeForm-pass\">About</label>\r\n        </div>\r\n    \r\n         </div>\r\n    \r\n  <div class=\"text-center\">\r\n        <button class=\"btn btn-deep-orange\" (click)= \"post_data(Company.name,Company.email,Company.about)\" >Create / Company Save Details</button>\r\n        <button class=\"btn btn-deep-orange\" (click)=\"postjobs()\" >Create / Jobs in {{company1.name}}</button>\r\n        <button class=\"btn btn-deep-orange\" >BACK</button>\r\n        <button (click)=\"showjobs()\" class=\"btn btn-deep-orange\" >View Jobs in {{company1.name}}</button>\r\n        <br>\r\n        <br>\r\n    </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"!show\">\r\n               \r\n        <table id=\"table\" class=\"table table-striped table-bordered\">\r\n          <thead>\r\n            <tr>\r\n              <th>Title</th>\r\n              <th>Role</th>\r\n                          <th>VIEW APPLICANTS</th>\r\n                          <th>EDIT</th>\r\n                          <th>DELETE</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let job of jobsdata\">\r\n              <td>{{job.title}}</td>\r\n              <td>{{job.description}}</td>\r\n              <td><button (click)=\"view_candidates(job.id)\"><i class=\"fa fa-envelope-open-o\" aria-hidden=\"true\"></i></button>\r\n                <td><button (click) = \"editjobs(job.id)\"><i class=\"fa fa-edit\"></i></button>\r\n                    <td><button class=\"fa fa-remove\" (click) = \"deletejobs(job.id)\"></button>\r\n\r\n               </td>\r\n              </tr>\r\n          </tbody>\r\n    \r\n    </table>\r\n    <button (click)=\"view_candidates()\"  class=\"btn btn-deep-orange\" >BACK</button>\r\n    {{status}}\r\n    </div>\r\n  \r\n  </div>\r\n\r\n"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = "\r\n        <!--Main layout-->\r\n        <div class=\"container\">\r\n            <!--First row-->\r\n            <div class=\"row wow fadeIn\" data-wow-delay=\"0.2s\">\r\n                <div class=\"col-lg-7\">\r\n                    <!--Featured image -->\r\n                    <div class=\"view overlay hm-white-light z-depth-1-half\">\r\n                        <img src=\"https://mdbootstrap.com/img/Photos/Slides/img%20%2877%29.jpg\" class=\"img-fluid \" alt=\"\">\r\n                        <div class=\"mask\">\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n                </div>\r\n\r\n                <!--Main information-->\r\n                <div class=\"col-lg-5\">\r\n                    <h2 class=\"h2-responsive font-bold\">Availability on a single click !</h2>\r\n                    <hr>\r\n                    <p>Struggle days are over. Get information about everything and connect with students in your locality!</p>\r\n                    <a href=\"\" class=\"btn btn-info\">Get it now!</a>\r\n                </div>\r\n            </div>\r\n            <!--/.First row-->\r\n\r\n            <hr class=\"extra-margins my-5\">\r\n\r\n            <!--Second row-->\r\n            <div class=\"row pt-4\">\r\n                <!--First columnn-->\r\n                <div class=\"col-lg-4\">\r\n                    <!--Card-->\r\n                    <div class=\"card wow fadeIn\" data-wow-delay=\"0.4s\">\r\n\r\n                        <!--Card image-->\r\n                        <img class=\"img-fluid\" src=\"https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20(37).jpg\" alt=\"Card image cap\">\r\n\r\n                        <!--Card content-->\r\n                        <div class=\"card-body\">\r\n                            <!--Title-->\r\n                            <h4 class=\"card-title text-center\">Jobs</h4>\r\n                            <hr>\r\n                            <!--Text-->\r\n                            <p class=\"card-text\">Hunting for a job. Make it easy by just clicking here.</p>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <!--/.Card-->\r\n                </div>\r\n                <!--First columnn-->\r\n\r\n                <!--Second columnn-->\r\n                <div class=\"col-lg-4\">\r\n                    <!--Card-->\r\n                    <div class=\"card wow fadeIn\" data-wow-delay=\"0.6s\">\r\n\r\n                        <!--Card image-->\r\n                        <img class=\"img-fluid\" src=\"https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20(21).jpg\" alt=\"Card image cap\">\r\n\r\n                        <!--Card content-->\r\n                        <div class=\"card-body\">\r\n                            <!--Title-->\r\n                            <h4 class=\"card-title text-center\">Companies</h4>\r\n                            <hr>\r\n                            <!--Text-->\r\n                            <p class=\"card-text\">Find more information about the companies you want to work with.</p>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <!--/.Card-->\r\n                </div>\r\n                <!--Second columnn-->\r\n\r\n                <!--Third columnn-->\r\n                <div class=\"col-lg-4\">\r\n                    <!--Card-->\r\n                    <div class=\"card wow fadeIn\" data-wow-delay=\"0.8s\">\r\n\r\n                        <!--Card image-->\r\n                        <img class=\"img-fluid\" src=\"https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20(12).jpg\" alt=\"Card image cap\">\r\n\r\n                        <!--Card content-->\r\n                        <div class=\"card-body\">\r\n                            <!--Title-->\r\n                            <h4 class=\"card-title text-center\">Work-Placement</h4>\r\n                            <hr>\r\n                            <!--Text-->\r\n                            <p class=\"card-text\">Gaining work experience gives your career a massive boost. Click to find internships and apprentices.</p>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <!--/.Card-->\r\n                </div>\r\n                <!--Third columnn-->\r\n            </div>\r\n            <!--/.Second row-->\r\n        </div>\r\n        <!--/.Main layout-->\r\n\r\n    <!--Footer-->\r\n    <footer class=\"page-footer center-on-small-only\">\r\n\r\n        <!--Footer links-->\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <!--First column-->\r\n                <div class=\"col-lg-3 col-md-6 ml-auto\">\r\n                    <h5 class=\"title mb-3\"><strong>About material design</strong></h5>\r\n                    <p>StudentBuzz Portal created by group of students studying in National College Of Ireland.</p>\r\n                    <p>Seeing the modern struggle of the students we want to make students life easy by creating this portal.</p>\r\n                </div>\r\n                <!--/.First column-->\r\n                <hr class=\"w-100 clearfix d-sm-none\">\r\n                <!--Second column-->\r\n                <div class=\"col-lg-2 col-md-6 ml-auto\">\r\n                    <h5 class=\"title mb-3\"><strong>HOME</strong></h5>\r\n                    <ul>\r\n                        <li>\r\n                            <a href=\"#!\">Jobs</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#!\">Companies</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#!\">Applied Jobs</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#!\">Internships</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!--/.Second column-->\r\n                <hr class=\"w-100 clearfix d-sm-none\">\r\n                <!--Third column-->\r\n                <div class=\"col-lg-2 col-md-6 ml-auto\">\r\n                    <h5 class=\"title mb-3\"><strong>INFO</strong></h5>\r\n                    <ul>\r\n                        <li>\r\n                            <a href=\"#!\">Careers</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#!\">Experience</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#!\">Part Time</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#!\">Full Time</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!--/.Third column-->\r\n                <hr class=\"w-100 clearfix d-sm-none\">\r\n                <!--Fourth column-->\r\n                <div class=\"col-lg-2 col-md-6 ml-auto\">\r\n                    <h5 class=\"title mb-3\"><strong>MORE</strong></h5>\r\n                    <ul>\r\n                        <li>\r\n                            <a href=\"#!\">About Us</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#!\">Contact</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#!\">Profile</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#!\">Employer</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!--/.Fourth column-->\r\n            </div>\r\n        </div>\r\n        <!--/.Footer links-->\r\n\r\n        <hr>\r\n\r\n        <!--Call to action-->\r\n        <div class=\"call-to-action\">\r\n            <h4 class=\"mb-5\">Design and Developed By StudentBuzz Team</h4>\r\n            <ul>\r\n                <li>\r\n                    <h5>Know More</h5>\r\n                </li>\r\n                <li><a target=\"_blank\"  class=\"btn btn-danger\" rel=\"nofollow\">Sign up!</a></li>\r\n                <li><a target=\"_blank\"  class=\"btn btn-info\" rel=\"nofollow\">Learn more</a></li>\r\n            </ul>\r\n        </div>\r\n        <!--/.Call to action-->\r\n\r\n        <!--Copyright-->\r\n        <div class=\"footer-copyright\">\r\n            <div class=\"container-fluid\">\r\n                © 2015 Copyright: <a> StudentBuzz.com </a>\r\n\r\n            </div>\r\n        </div>\r\n        <!--/.Copyright-->\r\n\r\n    </footer>\r\n"

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t\t\t\r\n            <div class=\"row\">\r\n                <table id=\"table\" class=\"table table-striped table-bordered\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>Title</th>\r\n                      <th>Role</th>\r\n\t\t\t\t\t              <th>Action</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let job of data\">\r\n                      <td>{{job.name}}</td>\r\n                      <td>{{job.title}}</td>\r\n                      <td><button class=\"btn btn-success\" (click) = \"apply(job.companyid, job.id)\">APPLY</button>\r\n                       </td>\r\n                      </tr>\r\n                      <tr *ngFor=\"let job of data1\">\r\n                        <td>{{job.Company}}</td>\r\n                        <td>{{job.Title}}</td>\r\n                        <td><button class=\"btn btn-success\" (click) = \"apply(job.EmployerId, job.Id)\">APPLY</button>\r\n                         </td>\r\n                        </tr>\r\n                  </tbody>\r\n\r\n            </table>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n             \r\n<form *ngIf=\"show\">\r\n   \r\n  <h2 class=\"text-center mb-4\">Sign in</h2>\r\n\r\n  <div class=\"md-form\">\r\n      <i class=\"fa fa-envelope prefix grey-text\"></i>\r\n      <input type=\"text\" id=\"defaultForm-email\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\">\r\n      <label for=\"defaultForm-email\">Your email</label>\r\n  </div>\r\n\r\n  <div class=\"md-form\">\r\n      <i class=\"fa fa-lock prefix grey-text\"></i>\r\n      <input type=\"password\" id=\"defaultForm-pass\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\">\r\n      <label for=\"defaultForm-pass\">Your password</label>\r\n  </div>\r\n\r\n  <div class=\"text-center\">\r\n      <button class=\"btn btn-default\" (click)=\"get_data(model.username, model.password)\"  >Login</button>\r\n      <br>\r\n      <br>\r\n      <h5><a (click)=\"show = false\">Go for registration</a></h5>\r\n  </div>\r\n</form>\r\n\r\n<form *ngIf=\"!show\">\r\n    <h2 class=\"text-center mb-4\">Sign up</h2>\r\n\r\n    <div class=\"md-form\">\r\n        <i class=\"fa fa-user prefix grey-text\"></i>\r\n        <input type=\"text\" id=\"orangeForm-name\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\">\r\n        <label for=\"orangeForm-name\">Your Email</label>\r\n    </div>\r\n   \r\n\r\n    <div class=\"md-form\">\r\n        <i class=\"fa fa-lock prefix grey-text\"></i>\r\n        <input type=\"password\" id=\"orangeForm-pass\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\">\r\n        <label for=\"orangeForm-pass\">Your password</label>\r\n    </div>\r\n\r\n    <div class=\"md-form\">\r\n        <i class=\"fa fa-envelope prefix grey-text\"></i>\r\n        <input type=\"password\" name=\"confirm_password\" id=\"orangeForm-email\" class=\"form-control\" [(ngModel)]=\"model.confirm_password\">\r\n        <label for=\"orangeForm-email\">Your Confirm password</label>\r\n    </div>\r\n    <br>\r\n    \r\n    <div class=\"form-check\">\r\n        Are you a&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n        <input name=\"role\" value=\"Student\" type=\"radio\" class=\"with-gap\" [(ngModel)]=\"model.role\" >\r\n        <label for=\"radio106\">Student</label>&nbsp;&nbsp;\r\n\r\n        <input name=\"role\" value=\"Employer\" type=\"radio\" class=\"with-gap\"  [(ngModel)]=\"model.role\">\r\n        <label for=\"radio107\">Employer</label>\r\n    </div>\r\n    \r\n   \r\n\r\n    <div class=\"text-center\">\r\n        <button class=\"btn btn-deep-orange\" (click)=\"post_data(model.username, model.password,model.confirm_password, model.role)\" >Sign up</button>\r\n        <br>\r\n        <br>\r\n        <h4><a (click)=\"show = true\">Click here to go to Login Page</a></h4>\r\n    </div>\r\n\r\n\r\n</form>\r\n\r\n</div>"

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = "       <!--Navbar-->\r\n        <nav class=\"navbar navbar-expand-lg navbar-dark\">\r\n            <div class=\"container\">\r\n                <a class=\"navbar-brand\" [routerLink]=\"['/']\">StudentBuzz</a>\r\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n                    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                    <span class=\"navbar-toggler-icon\"></span>\r\n                </button>\r\n                <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n                    <ul class=\"navbar-nav mr-auto\">\r\n                        <li class=\"nav-item active\">\r\n                            <a class=\"nav-link\" [routerLink]=\"['/home']\">Home <span class=\"sr-only\">(current)</span></a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" [routerLink]=\"['/jobs']\">Jobs</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" [routerLink]=\"['/companies']\">Companies</a>\r\n                        </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" [routerLink]=\"['/login']\">Register/Login</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" [routerLink]=\"['/appliedjobs']\">Applied Jobs</a>\r\n                        </li>\r\n                        <li class=\"nav-item btn-group\">\r\n                            <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">More \r\n                            </a>\r\n                            <div class=\"dropdown-menu dropdown-primary\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                                <a class=\"dropdown-item\" href=\"#\">About Us</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                    <form class=\"form-inline\">\r\n                        <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </nav>\r\n        <!--/.Navbar-->\r\n  <br>\r\n  <br>"

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\r\n<p>\r\n  Name : {{profile1.Name}}\r\n</p>\r\n<p>\r\n  Phone : {{profile1.PhoneNumber}}\r\n</p>\r\n<p>\r\n  Address : {{profile1.Address}}\r\n</p>\r\n\r\n<h5 *ngIf=\"role == true\"><a>Create/View your Company and Post Jobs</a></h5>\r\n\r\n<form >\r\n  <h2 class=\"text-center mb-4\">Edit Profile</h2>\r\n\r\n  <div class=\"md-form\">\r\n      <i class=\"fa fa-user prefix grey-text\"></i>\r\n      <input type=\"text\" id=\"orangeForm-name\" class=\"form-control\" name=\"name\" [(ngModel)]=\"profile.name\">\r\n      <label for=\"orangeForm-name\">Your name</label>\r\n  </div>\r\n  <div class=\"md-form\">\r\n      <i class=\"fa fa-envelope prefix grey-text\"></i>\r\n      <input type=\"text\" id=\"orangeForm-email\" class=\"form-control\" name=\"PhoneNumber\" [(ngModel)]=\"profile.PhoneNumber\">\r\n      <label for=\"orangeForm-email\">Your Phone</label>\r\n  </div>\r\n\r\n  <div class=\"md-form\">\r\n      <i class=\"fa fa-lock prefix grey-text\"></i>\r\n      <input type=\"text\" id=\"orangeForm-pass\" class=\"form-control\" name=\"Address\" [(ngModel)]=\"profile.Address\">\r\n      <label for=\"orangeForm-pass\">Your Address</label>\r\n  </div>\r\n\r\n  <div class=\"text-center\">\r\n      <button class=\"btn btn-deep-orange\" (click)= \"profile_data(profile.name,profile.PhoneNumber,profile.Address)\" >Save Profile</button>\r\n      <br>\r\n      <br>\r\n  </div>\r\n\r\n \r\n\r\n</form>\r\n</div>"

/***/ }),

/***/ 731:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(393);


/***/ }),

/***/ 80:
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
        this.candidateid = '';
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

/***/ })

},[731]);
//# sourceMappingURL=main.bundle.map