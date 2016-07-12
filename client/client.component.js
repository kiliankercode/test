System.register(['@angular/core', '@angular/router', './client', './client.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, client_1, client_service_1;
    var ClientDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (client_1_1) {
                client_1 = client_1_1;
            },
            function (client_service_1_1) {
                client_service_1 = client_service_1_1;
            }],
        execute: function() {
            ClientDetailComponent = (function () {
                function ClientDetailComponent(clientService, router) {
                    this.titre = 'Saisie client';
                    this.submitted = false;
                    this.active = true;
                    this._clientService = clientService;
                    this._router = router;
                }
                ClientDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //this._listeClients = this._clientService.getClients();
                    this._clientService.getClients()
                        .then(function (clients) {
                        _this._listeClients = clients;
                        _this.setEncours(0);
                    });
                };
                ClientDetailComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                    if (this.enrClient.id < 0)
                        this._clientService.addClient(this.enrClient);
                    else
                        this._clientService.setClient(this.enrClient);
                    this._listeClients[this._indiceEnCours] = this.enrClient;
                };
                ClientDetailComponent.prototype.ajouterClient = function () {
                    var _this = this;
                    this.enrClient = new client_1.Client(-1, '', '', 0, 0);
                    this.active = false;
                    setTimeout(function () { return _this.active = true; }, 0);
                    this._indiceEnCours = this._listeClients.push(this.enrClient) - 1;
                };
                ClientDetailComponent.prototype.supprimerClient = function () {
                    this._clientService.suppClient(this.enrClient);
                    this._listeClients.splice(this._indiceEnCours, 1);
                    if (this._indiceEnCours > 0)
                        this._indiceEnCours--;
                    this.setEncours(this._indiceEnCours);
                };
                ClientDetailComponent.prototype.setEncours = function (ind) {
                    this.enrClient = this._listeClients[ind];
                    this._indiceEnCours = ind;
                };
                ClientDetailComponent.prototype.setSuivant = function () {
                    if (this._indiceEnCours < this._listeClients.length - 1)
                        this.setEncours(++this._indiceEnCours);
                };
                ClientDetailComponent.prototype.setPrecedent = function () {
                    if (this._indiceEnCours > 0)
                        this.setEncours(--this._indiceEnCours);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', client_1.Client)
                ], ClientDetailComponent.prototype, "enrClient", void 0);
                ClientDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'client-form',
                        templateUrl: 'app/client/client.component.html',
                        providers: [client_service_1.ClientService]
                    }), 
                    __metadata('design:paramtypes', [client_service_1.ClientService, router_1.Router])
                ], ClientDetailComponent);
                return ClientDetailComponent;
            }());
            exports_1("ClientDetailComponent", ClientDetailComponent);
        }
    }
});
//# sourceMappingURL=client.component.js.map