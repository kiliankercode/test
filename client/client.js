System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Client;
    return {
        setters:[],
        execute: function() {
            /**
             * Client
             */
            Client = (function () {
                function Client(id, nom, prenom, age, caution) {
                    this.id = id;
                    this.nom = nom;
                    this.prenom = prenom;
                    this.age = age;
                    this.caution = caution;
                }
                return Client;
            }());
            exports_1("Client", Client);
        }
    }
});
//# sourceMappingURL=client.js.map