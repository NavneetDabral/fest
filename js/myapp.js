var myapp=angular.module('fest',['ui.router']);
myapp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise("/events")
    $stateProvider
    
        .state('events', {
          url: '/events',
          templateUrl:"pages/events.html"
         })
    
         .state('events.tech', {
          url: "/tech",
          templateUrl: "pages/techi.html",
      })
    
      .state('events.cultural', {
        url: "/cultural",
        templateUrl: "pages/cult.html",
    })
    
    .state('events.workshops', {
      url: "/workshops",
      templateUrl: "pages/workshop.html",
  })
    .state('events.gaming', {
      url: "/gaming",
      templateUrl: "pages/gaming.html",
  })
    
 <!--technical routes -->
     .state('events.tech.code',{
     url:"/codestrike",
     templateUrl:"pages/technical/code.html"
 })   
    .state('events.tech.debug',{
     url:"/debug",
     templateUrl:"pages/technical/debug.html"
 })
    .state('events.tech.desip',{
     url:"/desip",
     templateUrl:"pages/technical/desiph.html"
 })
 .state('events.tech.flotter',{
     url:"/flotter",
     templateUrl:"pages/technical/flotter.html"
 })
  .state('events.tech.maze',{
     url:"/maze",
     templateUrl:"pages/technical/maze.html"
 })
 .state('events.tech.robocoursa',{
     url:"/robocoursa",
     templateUrl:"pages/technical/robocoursa.html"
 })
 .state('events.tech.robokick',{
     url:"/robokick",
     templateUrl:"pages/technical/robokick.html"
 })
 .state('events.tech.robowar',{
     url:"/robowar",
     templateUrl:"pages/technical/robowar.html"
 })
 .state('events.tech.tower',{
     url:"/tower",
     templateUrl:"pages/technical/tower.html"
 })
 .state('events.tech.hyd',{
     url:"/hyd",
     templateUrl:"pages/technical/hyd.html"
 })
 .state('events.tech.ckt',{
     url:"/ckt",
     templateUrl:"pages/technical/ckt.html"
 })
     <!--tech routes end -->
 
    
    
    <!-- CULTURAL EVENT ROUTES -->
    
      .state('events.cultural.prahaar',{
           url:'/prahaar',
           templateUrl:"pages/cultural/prahar.html"
    })
    
     .state('events.cultural.echo',{
           url:'/echo',
           templateUrl:"pages/cultural/echo.html"
    })
    
     .state('events.cultural.onyx',{
           url:'/onyx',
           templateUrl:"pages/cultural/onyx.html"
    })
    .state('events.cultural.flamy',{
           url:'/flamy',
           templateUrl:"pages/cultural/flamy.html"
    })
    .state('events.cultural.sketch',{
           url:'/sketch',
           templateUrl:"pages/cultural/sketch.html"
    })
    
    .state('events.cultural.rang',{
           url:'/rang-sang',
         templateUrl:"pages/cultural/rangsang.html"
    })
     .state('events.cultural.vogue',{
           url:'/vogue',
         templateUrl:"pages/cultural/fashion.html"
    })
    
    .state('events.cultural.range',{
           url:'/rang-e',
         templateUrl:"pages/cultural/range.html"
    })
    
    .state('events.cultural.goonj',{
           url:'/goonj',
         templateUrl:"pages/cultural/goonj.html"
    })
    
    .state('events.cultural.invictus',{
           url:'/invictus',
         templateUrl:"pages/cultural/invictus.html"
    })
    .state('events.cultural.swar',{
           url:'/swar',
         templateUrl:"pages/cultural/swar.html"
    })
<!-- FINISHED CULTURAL ROUTES -->
    
    <!-- workshops routes-->
    .state('events.workshops.iot',{
           url:'/iot',
           templateUrl:"pages/workshops/iot.html"
    })

.state('events.workshops.cyber',{
           url:'/cyber',
           templateUrl:"pages/workshops/cyber.html"
    })
.state('events.workshops.auto',{
           url:'/auto',
           templateUrl:"pages/workshops/auto.html"
    })    
    

}]); 