webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiService = /** @class */ (function () {
    function ApiService(_http) {
        this._http = _http;
    }
    ApiService.prototype.createParty = function (party) {
        return this._http.post('/party/create', party).map(function (data) { return data.json(); }).toPromise();
    };
    ApiService.prototype.getParties = function () {
        return this._http.get('/parties').map(function (data) { return data.json(); }).toPromise();
    };
    ApiService.prototype.getPartySongs = function (partyid) {
        return this._http.get('/' + partyid + '/songs').map(function (data) { return data.json(); }).toPromise();
    };
    ApiService.prototype.deleteParty = function (partyid) {
        return this._http.get('/party/' + partyid + '/delete').map(function (data) { return data.json(); }).toPromise();
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__party_list_party_list_component__ = __webpack_require__("./src/app/party-list/party-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__existing_party_password_existing_party_password_component__ = __webpack_require__("./src/app/existing-party-password/existing-party-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__playlist_playlist_component__ = __webpack_require__("./src/app/playlist/playlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_party_create_party_component__ = __webpack_require__("./src/app/create-party/create-party.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'guest', component: __WEBPACK_IMPORTED_MODULE_2__party_list_party_list_component__["a" /* PartyListComponent */] },
    { path: 'guest/:name/:id/password', component: __WEBPACK_IMPORTED_MODULE_4__existing_party_password_existing_party_password_component__["a" /* ExistingPartyPasswordComponent */] },
    { path: 'guest/:name/:id', component: __WEBPACK_IMPORTED_MODULE_5__playlist_playlist_component__["a" /* PlaylistComponent */] },
    { path: 'dj', component: __WEBPACK_IMPORTED_MODULE_6__create_party_create_party_component__["a" /* CreatePartyComponent */] },
    { path: 'dj/:name/:id', component: __WEBPACK_IMPORTED_MODULE_5__playlist_playlist_component__["a" /* PlaylistComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".center {\n    margin: auto;\n    //width: 40%;\n    text-align:center;\n    padding: 10px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-list class=\"center\"></app-list>\n<div class=\"center\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_service__ = __webpack_require__("./src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__song_service__ = __webpack_require__("./src/app/song.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__party_list_party_list_component__ = __webpack_require__("./src/app/party-list/party-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__existing_party_password_existing_party_password_component__ = __webpack_require__("./src/app/existing-party-password/existing-party-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__playlist_playlist_component__ = __webpack_require__("./src/app/playlist/playlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__create_party_create_party_component__ = __webpack_require__("./src/app/create-party/create-party.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__list_list_component__ = __webpack_require__("./src/app/list/list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__party_list_party_list_component__["a" /* PartyListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__existing_party_password_existing_party_password_component__["a" /* ExistingPartyPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_11__playlist_playlist_component__["a" /* PlaylistComponent */],
                __WEBPACK_IMPORTED_MODULE_12__create_party_create_party_component__["a" /* CreatePartyComponent */],
                __WEBPACK_IMPORTED_MODULE_13__list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__create_party_create_party_component__["a" /* CreatePartyComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_0__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__song_service__["a" /* SongService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/create-party/create-party.component.css":
/***/ (function(module, exports) {

module.exports = ".contents{\n\ttext-align: left;\n}\n.wrapper{\n\tdisplay:table;\n\ttext-align: center;\n}\nh3 {\n\tfont: verdana;\n}\n"

/***/ }),

/***/ "./src/app/create-party/create-party.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center;display:inline-block;\">\n<div style=\"text-align:left;\">\n<h3>Create New Party</h3>\n\n<p class=\"red\" *ngIf=\"checkUnique\">Party name already exists</p>\n<form (submit)=\"onSelectCreate()\">\n    <div>\n        <input id=\"partyName\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"temp.name\" placeholder=\"Party Name\" required>\n        <span class=\"red\" *ngIf='name.valid == false'>Party name is required</span>\n    </div>\n    <div>\n        <input id=\"accessKey\" name=\"key\" #key=\"ngModel\" [(ngModel)]=\"temp.accessKey\" placeholder=\"Access Key\" minlength='3' required>\n        <span class=\"red\" *ngIf='key.valid == false'>Must be at least 3 characters</span>\n    </div>\n    <div>\n        <input id=\"password\" name=\"pw\" #pw=\"ngModel\" [(ngModel)]=\"temp.password\" placeholder=\"Password\" minlength='3' required>\n        <span class=\"red\" *ngIf='pw.valid == false'>Must be at least 3 characters</span>\n    </div>\n    <input type=\"submit\" value='Create' [disabled]=\"!name.valid || !key.valid || !pw.valid\">\n</form>\n\n<h3>DJ Existing Party</h3>\n<input id=\"existingPartyName\" placeholder=\"Party Name\">\n<input id=\"existingPartyPassword\" placeholder=\"Password\">\n<button (click)= \"onSelectView()\">View</button>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/create-party/create-party.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePartyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parties__ = __webpack_require__("./src/app/parties.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__("./src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreatePartyComponent = /** @class */ (function () {
    function CreatePartyComponent(router, apiService) {
        this.router = router;
        this.apiService = apiService;
    }
    CreatePartyComponent.prototype.ngOnInit = function () {
        // Initialize parties
        this.temp = new __WEBPACK_IMPORTED_MODULE_1__parties__["a" /* Party */]();
        this.checkUnique = false;
        this.getParties();
    };
    CreatePartyComponent.prototype.getParties = function () {
        var _this = this;
        this.apiService.getParties().then(function (result) {
            _this.existingParties = result;
        });
    };
    // Create party
    CreatePartyComponent.prototype.onSelectCreate = function () {
        var _this = this;
        // Get party information
        this.partyName = document.getElementById("partyName").value;
        this.partyPassword = document.getElementById("password").value;
        this.partyAccessKey = document.getElementById("accessKey").value;
        // Create party object
        this.temp = new __WEBPACK_IMPORTED_MODULE_1__parties__["a" /* Party */]();
        this.temp.name = this.partyName;
        this.temp.password = this.partyPassword;
        this.temp.accessKey = this.partyAccessKey;
        // Use apiService to create party in database
        var self = this;
        this.apiService.getParties().then(function (parties) {
            var flag = false;
            for (var i = 0; i < parties.length; i++) {
                if (parties[i].name == _this.partyName) {
                    flag = true;
                }
            }
            if (flag) {
                _this.checkUnique = true;
            }
            else {
                self.apiService.createParty(_this.temp).then(function (result) {
                    if (result != 'err') {
                        _this.router.navigateByUrl('/dj/' + _this.partyName + '/' + result.id);
                    }
                    else
                        console.log('err');
                });
            }
        });
        // this.apiService.createParty(this.temp).then(result => {
        //   if(result != 'err')
        //   {
        //     this.router.navigateByUrl('/dj/' + this.partyName + '/' + result.id);
        //   }
        //   else
        //     console.log('err');
        // });
    };
    CreatePartyComponent.prototype.onSelectView = function () {
        // Update party list
        this.getParties();
        // Get party information
        this.partyName = document.getElementById("existingPartyName").value;
        this.partyPassword = document.getElementById("existingPartyPassword").value;
        var partyExists = false;
        // Look for party in existing parties list
        for (var i = 0; i < this.existingParties.length; i++) {
            if (this.existingParties[i].name == this.partyName) {
                partyExists = true;
                if (this.existingParties[i].password == this.partyPassword)
                    this.router.navigateByUrl('/dj/' + this.partyName + '/' + this.existingParties[i].id);
                else
                    alert("Invalid Party Password, please try again.");
            }
        }
        if (!partyExists)
            alert("This party does not exist, please create a new party.");
    };
    CreatePartyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-party',
            template: __webpack_require__("./src/app/create-party/create-party.component.html"),
            styles: [__webpack_require__("./src/app/create-party/create-party.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */]])
    ], CreatePartyComponent);
    return CreatePartyComponent;
}());



/***/ }),

/***/ "./src/app/existing-party-password/existing-party-password.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/existing-party-password/existing-party-password.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n{{partyName}} \n<br>\n <input id=\"accessKey\" placeholder=\"Party Access Key\">\n <button (click)=\"onSelectButton(partyName,partyid)\">Go</button>\n</p>\n"

/***/ }),

/***/ "./src/app/existing-party-password/existing-party-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExistingPartyPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("./src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExistingPartyPasswordComponent = /** @class */ (function () {
    function ExistingPartyPasswordComponent(route, router, apiService) {
        this.route = route;
        this.router = router;
        this.apiService = apiService;
    }
    // Get list of parties in database and get party information
    ExistingPartyPasswordComponent.prototype.getParties = function () {
        var _this = this;
        this.apiService.getParties().then(function (result) {
            _this.existingParties = result;
            _this.partyName = _this.route.snapshot.paramMap.get('name');
            _this.partyid = +_this.route.snapshot.paramMap.get('id');
            for (var i = 0; i < _this.existingParties.length; i++) {
                if (_this.existingParties[i].id == _this.partyid && _this.existingParties[i].name == _this.partyName) {
                    _this.partyAccessKey = _this.existingParties[i].accessKey;
                }
            }
        });
    };
    ExistingPartyPasswordComponent.prototype.ngOnInit = function () {
        this.getParties();
    };
    ExistingPartyPasswordComponent.prototype.onSelectButton = function (name, id) {
        //check password
        var passCheck = false;
        if (document.getElementById("accessKey").value == this.partyAccessKey) {
            passCheck = true;
        }
        if (passCheck) {
            this.router.navigateByUrl('/guest/' + name + '/' + id);
        }
        else {
            alert("Invalid Party Access Key, please try again.");
        }
    };
    ExistingPartyPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-existing-party-password',
            template: __webpack_require__("./src/app/existing-party-password/existing-party-password.component.html"),
            styles: [__webpack_require__("./src/app/existing-party-password/existing-party-password.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]])
    ], ExistingPartyPasswordComponent);
    return ExistingPartyPasswordComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".linkLogo {\n    float: middle;\n    padding: 30px;\n    text-align:center;\n    height: 200px;\n}\n\n.center {\n    margin: auto;\n    width: 100%;\n    padding: 10px;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n  <img class=\"linkLogo\" src=\"https://image.ibb.co/du1A9c/UpbeatDJ.png\" (click)=\"onSelectDJ()\">\n  <img class=\"linkLogo\" src=\"https://image.ibb.co/dLLsNx/Upbeat_Guest.png\" (click)=\"onSelectGuest()\">\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("./src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, apiService) {
        this.router = router;
        this.apiService = apiService;
        this.people = [];
    }
    HomeComponent.prototype.onSelectGuest = function () {
        this.router.navigateByUrl('/guest');
    };
    HomeComponent.prototype.onSelectDJ = function () {
        this.router.navigateByUrl('/dj');
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/***/ (function(module, exports) {

module.exports = ".link {\n  background-color: #AC4FC6;\n  color: white;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 10px;\n  font-size: 17px;\n  vertical-align: middle;\n}\n\n.link:hover {\n  background-color: #6c337c;\n}\n\n.header {\n  background: black;\n}\n\n.taskbar {\n  background: #AC4FC6;\n  margin: auto;\n  padding: 10px;\n}\n\n.logo {\n  height: 100px; \n  display: block;\n  padding: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 35%;\n}\n\n.center {\n  margin: auto;\n  padding: 10px;\n\n}\n\n#homeImage {\n  height: 30px;\n  padding: 0 10px;\n  background-color: #AC4FC6;\n}\n\n#homeImage:hover {\n  background-color: #6c337c;\n}"

/***/ }),

/***/ "./src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <img src=\"https://image.ibb.co/hK1Rf7/Upbeat.png\" class=\"logo\">\n</div>\n<div class=\"taskbar\">\n  <div class=\"center\">\n    <a class=\"link\" (click)=\"partyClick()\" > Join a Party </a>\n    <img id=\"homeImage\" src=\"https://image.ibb.co/myUNNx/Up_Beat_Home_White.png\" (click)=\"homeClick()\" >\n    <a class=\"link\" (click)=\"loginClick()\" > DJ a Party </a>\n  </div>\n  </div>\n\n\n"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = /** @class */ (function () {
    function ListComponent(router) {
        this.router = router;
    }
    ListComponent.prototype.homeClick = function () { this.router.navigateByUrl('/'); };
    ListComponent.prototype.partyClick = function () { this.router.navigateByUrl('/guest'); };
    ListComponent.prototype.loginClick = function () { this.router.navigateByUrl('/dj'); };
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list',
            template: __webpack_require__("./src/app/list/list.component.html"),
            styles: [__webpack_require__("./src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/parties.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Party; });
var Party = /** @class */ (function () {
    function Party(id, name, accessKey, password) {
        if (id === void 0) { id = null; }
        if (name === void 0) { name = ""; }
        if (accessKey === void 0) { accessKey = ""; }
        if (password === void 0) { password = ""; }
        this.id = id;
        this.name = name;
        this.accessKey = accessKey;
        this.password = password;
    }
    return Party;
}());

//  export const PARTIES: Party[] =[
//     { name: "lit", id : 1 },
//     { name: "lit part 2", id : 2 },
//     { name: "fire emoji", id : 3 }
// ] 


/***/ }),

/***/ "./src/app/party-list/party-list.component.css":
/***/ (function(module, exports) {

module.exports = "ul {\n    list-style-type: none;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 0;\n    width: 40%;\n  }\n   \n  li {\n    font: 200 20px/1.5 Helvetica, Verdana, sans-serif;\n    border-bottom: 1px solid #ccc;\n  }\n   \n  li:last-child {\n    border: none;\n  }\n   \n  li span {\n    text-decoration: none;\n    color: #000;\n    display: block;\n    width: 200px;\n    margin-right: auto;\n    margin-left: auto;\n    cursor: pointer;\n   \n    -webkit-transition: font-size 0.3s ease, background-color 0.3s ease;\n    transition: font-size 0.3s ease, background-color 0.3s ease;\n  }\n   \n  li span:hover {\n    font-size: 30px;\n    background: #f6f6f6;\n  }"

/***/ }),

/***/ "./src/app/party-list/party-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>My Parties</h2>\n<ul class=\"parties\">\n  <li *ngFor=\"let party of parties\">\n    <span (click)=\"onSelectParty(party.name,party.id)\">{{party.name}}</span>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/party-list/party-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartyListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("./src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PartyListComponent = /** @class */ (function () {
    function PartyListComponent(router, apiService) {
        this.router = router;
        this.apiService = apiService;
    }
    PartyListComponent.prototype.getParties = function () {
        var _this = this;
        this.apiService.getParties().then(function (result) {
            _this.parties = result;
        });
    };
    PartyListComponent.prototype.onSelectParty = function (name, id) {
        this.router.navigateByUrl('/guest/' + name + '/' + id + '/password');
    };
    PartyListComponent.prototype.ngOnInit = function () {
        this.getParties();
    };
    PartyListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-party-list',
            template: __webpack_require__("./src/app/party-list/party-list.component.html"),
            styles: [__webpack_require__("./src/app/party-list/party-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]])
    ], PartyListComponent);
    return PartyListComponent;
}());



/***/ }),

/***/ "./src/app/playlist/playlist.component.css":
/***/ (function(module, exports) {

module.exports = "img {\n    height: 20px;\n    width: 20px;\n    padding-right: 5px;\n    cursor: pointer;\n    min-width: 10px;\n}\n\n#iconUp {\n    background-image: url( 'https://image.ibb.co/hnhs5H/Upbeat_Up_Arrow.png' );\n    background-repeat: no-repeat;\n    height: 20px;\n    width: 20px;\n    background-size: 20px 20px;\n    border: none;\n    background-color: white;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    cursor: pointer;\n    min-width: 10px;\n}\n\n#iconDown {\n    background-image: url( 'https://image.ibb.co/b118ec/Upbeat_Down_Arrow.png' );\n    background-repeat: no-repeat;\n    height: 20px;\n    width: 20px;\n    border: none;\n    background-size: 20px 20px;\n    background-color: white;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    cursor: pointer;\n    min-width: 10px;\n}\n\n#iconUpD {\n    background-image: url( 'https://image.ibb.co/j5ENqH/Upbeat_Up_Arrow_Disabled.png' );\n    background-repeat: no-repeat;\n    height: 20px;\n    width: 20px;\n    background-size: 20px 20px;\n    border: none;\n    background-color: white;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    cursor: pointer;\n    min-width: 10px;\n}\n\n#iconDownD {\n    background-image: url( 'https://image.ibb.co/nu9cPc/Upbeat_Down_Arrow_Disabled.png' );\n    background-repeat: no-repeat;\n    height: 20px;\n    width: 20px;\n    border: none;\n    background-size: 20px 20px;\n    background-color: white;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    cursor: pointer;\n    min-width: 10px;\n}\n\nli {\n    padding: 10px;\n    border: black;\n    text-align: right;\n}\n"

/***/ }),

/***/ "./src/app/playlist/playlist.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n\t.song-details{\n\t\tdisplay:inline-block;\n\t}\n\tul{\n\t\tlist-style: none;\n\t}\n</style>\n<h2>Party: {{partyName}}</h2>\n<h3>Access Key: {{accessKey}}</h3>\n<button *ngIf=\"isDj\" (click)=\"deleteParty()\">Delete Party</button>\n<ul class=\"songs\">\n\t<div style=\"display: inline-block; margin-right: auto; margin-left: auto; text-align: center;\">\n  <li *ngFor=\"let song of songs\">\n   \t<div class=\"song-details\"><img src=\"https://image.ibb.co/jpaovH/Upbeat_Delete.png\" *ngIf=\"isDj\" (click)=\"onSelectDelete(song)\"></div>\n  \t<div class=\"song-details\"> {{song.name}} by {{song.artist}} </div>\n\t\t<div class=\"song-details\"><b style=\"padding-left: 15px;\">{{song.upcount}}</b>\n    \t\t\t<button style=\"padding-left: 5px;\" id=\"iconUp\" (click)=\"onSelectUpVote(song)\" *ngIf=\"!checkUpVoted[partyid][song.artist][song.name]\"></button>\n    \t\t\t<button style=\"padding-left: 5px;\" id=\"iconUpD\" (click)=\"onSelectUpVote(song)\" *ngIf=\"checkUpVoted[partyid][song.artist][song.name]\"></button>\n    \t\t\t<button id=\"iconDown\" (click)=\"onSelectDownVote(song)\" *ngIf=\"!checkDownVoted[partyid][song.artist][song.name]\"></button>\n    \t\t\t<button id=\"iconDownD\" (click)=\"onSelectDownVote(song)\" *ngIf=\"checkDownVoted[partyid][song.artist][song.name]\"></button>\n\t\t</div>\n\t</li>\n\t</div>\n\t<br>\n\t<p *ngIf=\"uniqueSong\">Song has already been added</p>\n\t<p *ngIf=\"emptySong\">Song name and artist required</p>\n\t<form (submit)=\"onAddSong()\">\n\t\t<label for=\"\">\n\t\t\t<input id=\"song\" name=\"songName\" [(ngModel)]=\"tempSong.name\" placeholder=\"Song Name\">\n\t\t</label>\n\t\t<label for=\"\">\n\t\t<input id=\"artist\" name=\"songArtist\" [(ngModel)]=\"tempSong.artist\" placeholder=\"Artist\">\n\t\t</label>\n\t\t\n\t\t<input type=\"submit\" value=\"Add\">\n\t</form>\n</ul>"

/***/ }),

/***/ "./src/app/playlist/playlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__song__ = __webpack_require__("./src/app/song.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__song_service__ = __webpack_require__("./src/app/song.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("./src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlaylistComponent = /** @class */ (function () {
    function PlaylistComponent(route, router, songService, apiService) {
        this.route = route;
        this.router = router;
        this.songService = songService;
        this.apiService = apiService;
        this.songs = [];
        this.isDj = false;
    }
    // Initialize variables
    PlaylistComponent.prototype.ngOnInit = function () {
        this.getVoteCheck();
        this.tempSong = new __WEBPACK_IMPORTED_MODULE_1__song__["a" /* Song */]();
        this.uniqueSong = false;
        this.emptySong = false;
        this.getParties();
        this.url = this.router.url;
        if (this.url[1] == 'd')
            this.isDj = true;
        else
            this.isDj = false;
    };
    // Get checkVoted from session on server side
    PlaylistComponent.prototype.getVoteCheck = function () {
        var _this = this;
        this.songService.getUpVoteCheck().then(function (result1) {
            _this.checkUpVoted = result1;
            _this.songService.getDownVoteCheck().then(function (result2) {
                _this.checkDownVoted = result2;
            });
        });
    };
    // Use apiService to get parties and initialize party information
    PlaylistComponent.prototype.getParties = function () {
        var _this = this;
        this.apiService.getParties().then(function (result) {
            _this.existingParties = result;
            _this.partyName = _this.route.snapshot.paramMap.get('name');
            _this.partyid = +_this.route.snapshot.paramMap.get('id');
            for (var i = 0; i < _this.existingParties.length; i++) {
                if (_this.existingParties[i].id == _this.partyid && _this.existingParties[i].name == _this.partyName) {
                    _this.accessKey = _this.existingParties[i].accessKey;
                }
            }
            _this.getSongs(_this.partyid);
        });
    };
    // Use songService to get songs for the party
    PlaylistComponent.prototype.getSongs = function (partyid) {
        var _this = this;
        this.songService.getSongs(partyid).then(function (result) {
            _this.songs = result;
            if (_this.checkUpVoted[_this.partyid] == undefined)
                _this.checkUpVoted[_this.partyid] = {};
            if (_this.checkDownVoted[_this.partyid] == undefined)
                _this.checkDownVoted[_this.partyid] = {};
            // Temp variable to keep track of songs in checkVoted that may have been deleted
            var temp1 = {};
            for (var key in _this.checkUpVoted[_this.partyid]) {
                temp1[key] = {};
                for (var key2 in _this.checkUpVoted[_this.partyid][key]) {
                    temp1[key][key2] = false;
                }
            }
            // Add any new songs to checkUpVoted[this.partyid] and checkDownVoted[this.partyid]. Mark songs in temp1.
            for (var i = 0; i < result.length; i++) {
                if (_this.checkUpVoted[_this.partyid][result[i].artist] == undefined) {
                    _this.checkUpVoted[_this.partyid][result[i].artist] = {};
                    _this.checkUpVoted[_this.partyid][result[i].artist][result[i].name] = false;
                    _this.checkDownVoted[_this.partyid][result[i].artist] = {};
                    _this.checkDownVoted[_this.partyid][result[i].artist][result[i].name] = false;
                    temp1[result[i].artist] = {};
                    temp1[result[i].artist][result[i].name] = true;
                }
                else if (_this.checkUpVoted[_this.partyid][result[i].artist][result[i].name] == undefined) {
                    _this.checkUpVoted[_this.partyid][result[i].artist][result[i].name] = false;
                    _this.checkDownVoted[_this.partyid][result[i].artist][result[i].name] = false;
                    temp1[result[i].artist][result[i].name] = true;
                }
                else {
                    temp1[result[i].artist][result[i].name] = true;
                }
            }
            // Look for any unmarked songs in temp1 and delete keys from checkUpVoted[this.partyid]
            for (var key in temp1) {
                for (var key2 in temp1[key]) {
                    if (!temp1[key][key2]) {
                        delete _this.checkUpVoted[_this.partyid][key][key2];
                        delete _this.checkDownVoted[_this.partyid][key][key2];
                    }
                }
                if (Object.keys(_this.checkUpVoted[_this.partyid][key]).length == 0) {
                    delete _this.checkUpVoted[_this.partyid][key];
                    delete _this.checkDownVoted[_this.partyid][key];
                }
            }
            // Save checkUpVoted[this.partyid] into session on server side
            _this.songService.saveUpVoteCheck(_this.checkUpVoted).then(function (result) {
                // Save checkDownVoted[this.partyid] into session on server side
                _this.songService.saveDownVoteCheck(_this.checkDownVoted).then(function (result2) {
                    // Sort songs by number of upcounts
                    _this.songs.sort(function (obj1, obj2) {
                        if (obj1.upcount > obj2.upcount) {
                            return -1;
                        }
                        if (obj1.upcount < obj2.upcount) {
                            return 1;
                        }
                        return 0;
                    });
                });
            });
        });
    };
    // Delete songs
    PlaylistComponent.prototype.deleteParty = function () {
        var _this = this;
        this.apiService.deleteParty(this.partyid).then(function (result) {
            if (result == true)
                _this.router.navigateByUrl('/');
        });
    };
    // Use songService to add song to database
    PlaylistComponent.prototype.onAddSong = function () {
        var _this = this;
        // Create song object
        this.tempSong = new __WEBPACK_IMPORTED_MODULE_1__song__["a" /* Song */]();
        this.tempSong.artist = document.getElementById("artist").value;
        this.tempSong.name = document.getElementById("song").value;
        this.tempSong.partyid = this.partyid;
        // Make sure input isn't empty
        if (this.tempSong.name == "" || this.tempSong.artist == "") {
            this.emptySong = true;
        }
        else {
            this.emptySong = false;
            // Check for duplicate song
            var self = this;
            this.songService.getSongs(this.partyid).then(function (songs) {
                var flag = false;
                for (var i = 0; i < songs.length; i++) {
                    if (songs[i].name == _this.tempSong.name && songs[i].artist == _this.tempSong.artist) {
                        flag = true;
                    }
                }
                if (flag) {
                    _this.uniqueSong = true;
                }
                else {
                    _this.uniqueSong = false;
                    // If not duplicate, add song
                    self.songService.addSong(_this.tempSong).then(function (result) {
                        // Update song list
                        self.getSongs(self.partyid);
                        // Reset model for songs
                        self.tempSong = new __WEBPACK_IMPORTED_MODULE_1__song__["a" /* Song */]();
                    });
                }
            });
        }
    };
    //  Delete song from database
    PlaylistComponent.prototype.onSelectDelete = function (song) {
        var self = this;
        this.songService.deleteSong(song).then(function (result) {
            // Update song list
            self.getSongs(self.partyid);
        });
    };
    // Upvote
    PlaylistComponent.prototype.onSelectUpVote = function (song) {
        var _this = this;
        var self = this;
        if (this.checkUpVoted[this.partyid][song.artist][song.name] == false) {
            this.checkUpVoted[this.partyid][song.artist][song.name] = true;
            this.songService.upvoteSong(song).then(function (result) {
                // If changing from downvote to upvote
                if (_this.checkDownVoted[_this.partyid][song.artist][song.name]) {
                    _this.checkDownVoted[_this.partyid][song.artist][song.name] = false;
                    // Upvote twice
                    _this.songService.upvoteSong(song).then(function (result2) {
                        self.getSongs(self.partyid);
                    });
                }
                else
                    self.getSongs(self.partyid);
            });
        }
        else {
            this.checkUpVoted[this.partyid][song.artist][song.name] = false;
            this.songService.downvoteSong(song).then(function (result) {
                _this.getSongs(_this.partyid);
            });
        }
    };
    // Downvote
    PlaylistComponent.prototype.onSelectDownVote = function (song) {
        var _this = this;
        var self = this;
        if (this.checkDownVoted[this.partyid][song.artist][song.name] == false) {
            this.checkDownVoted[this.partyid][song.artist][song.name] = true;
            this.songService.downvoteSong(song).then(function (result) {
                if (_this.checkUpVoted[_this.partyid][song.artist][song.name]) {
                    _this.checkUpVoted[_this.partyid][song.artist][song.name] = false;
                    _this.songService.downvoteSong(song).then(function (result2) {
                        self.getSongs(self.partyid);
                    });
                }
                else
                    self.getSongs(self.partyid);
            });
        }
        else {
            this.checkDownVoted[this.partyid][song.artist][song.name] = false;
            this.songService.upvoteSong(song).then(function (result) {
                _this.getSongs(_this.partyid);
            });
        }
    };
    PlaylistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-playlist',
            template: __webpack_require__("./src/app/playlist/playlist.component.html"),
            styles: [__webpack_require__("./src/app/playlist/playlist.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__song_service__["a" /* SongService */], __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */]])
    ], PlaylistComponent);
    return PlaylistComponent;
}());



/***/ }),

/***/ "./src/app/song.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SongService = /** @class */ (function () {
    //   songs: Song[] = [];
    function SongService(_http) {
        this._http = _http;
    }
    SongService.prototype.getSongs = function (partyid) {
        return this._http.get('/' + partyid + '/songs').map(function (data) { return data.json(); }).toPromise();
    };
    SongService.prototype.addSong = function (song) {
        return this._http.post('/songs/add', song).map(function (data) { return data.json(); }).toPromise();
    };
    SongService.prototype.deleteSong = function (song) {
        return this._http.get('songs/delete/' + song.partyid + '/' + song.name + '/' + song.artist).map(function (data) { return data.json(); }).toPromise();
    };
    SongService.prototype.upvoteSong = function (song) {
        return this._http.get('songs/upvote/' + song.partyid + '/' + song.name + '/' + song.artist).map(function (data) { return data.json(); }).toPromise();
    };
    SongService.prototype.downvoteSong = function (song) {
        return this._http.get('songs/downvote/' + song.partyid + '/' + song.name + '/' + song.artist).map(function (data) { return data.json(); }).toPromise();
    };
    SongService.prototype.getUpVoteCheck = function () {
        return this._http.get('upvoteCheck').map(function (data) { return data.json(); }).toPromise();
    };
    SongService.prototype.getDownVoteCheck = function () {
        return this._http.get('downvoteCheck').map(function (data) { return data.json(); }).toPromise();
    };
    SongService.prototype.saveUpVoteCheck = function (checkVoted) {
        return this._http.post('upvoteCheck', checkVoted).map(function (data) { return data.json(); }).toPromise();
    };
    SongService.prototype.saveDownVoteCheck = function (checkVoted) {
        return this._http.post('downvoteCheck', checkVoted).map(function (data) { return data.json(); }).toPromise();
    };
    SongService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], SongService);
    return SongService;
}());



/***/ }),

/***/ "./src/app/song.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Song; });
/* unused harmony export SONGS */
var Song = /** @class */ (function () {
    function Song(name, artist, partyid, upcount) {
        if (name === void 0) { name = ""; }
        if (artist === void 0) { artist = ""; }
        if (partyid === void 0) { partyid = null; }
        if (upcount === void 0) { upcount = 0; }
        this.name = name;
        this.artist = artist;
        this.partyid = partyid;
        this.upcount = upcount;
    }
    return Song;
}());

var SONGS = [
    { name: "Hey", artist: "him", partyid: 1, upcount: 0 },
    { name: "LIT", artist: "her", partyid: 1, upcount: 5 },
    { name: "Fire", artist: "they", partyid: 1, upcount: 2 },
    { name: "fef", artist: "him", partyid: 2, upcount: 0 },
    { name: "sdfsef", artist: "her", partyid: 3, upcount: 5 },
    { name: "Firsdfse", artist: "they", partyid: 4, upcount: 2 }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map