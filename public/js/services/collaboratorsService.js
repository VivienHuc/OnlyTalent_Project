((app) => {
    'use strict'

    app.service('collaboratorsService', function($http) {
        return {
            get() {
                return $http.get('/api/collaborators')
            },
            delete(collaborator) {
                return $http.delete('/api/collaborators/' + collaborator._id, collaborator)
            },
            add(newCollaborator) {
                return $http.post('/api/collaborators', newCollaborator)
            }
        }
    })
})(angular.module('app.services'))
