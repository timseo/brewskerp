angular.module('beansApp')
.controller('BeansController', BeansController)

BeansController.$inject = ['$http']
function BeansController($http){
  var self = this
  self.all = []
  self.newBean = {}

  self.addBean = addBean
  self.getBeans = getBeans
  self.deleteBean = deleteBean

  // Prepopulate self.all with beans from API
  getBeans()

  function getBeans(){
    $http
      .get('/api/beans')
      .then(function(response){
        self.all = response.data
    })
  }

  function addBean(){
    $http
      .post('/api/beans', self.newBean)
      .then(function(response){
        getBeans()
    })
    self.newBean = {}
  }

  function deleteBean(bean){
    $http
      .delete("/api/beans/" + bean._id)
      .then(function(response){
        var index = self.all.indexOf(bean)
        self.all.splice(index, 1)
      })
  }

}
