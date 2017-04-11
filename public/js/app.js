angular
  .module('beansApp', ['ui.router'])
  .config(BeanRouter)

function BeanRouter($stateProvider, $urlRouterProvider){

  // Front end routes using angular ui.router:
  $stateProvider
  .state('index', {
    url: '/',
    templateUrl: 'beans_templates/index.html'
  })
  .state('new', {
    url: '/new',
    templateUrl: 'beans_templates/new.html'
  })
  .state('show', {
    url: '/beans/:id',
    templateUrl: 'beans_templates/show.html'
  });

  // Default (fallback) route:
  $urlRouterProvider.otherwise('/')

}
