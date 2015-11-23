angular.module('App', [])

  .controller('AppComponentController', [function() {
    this.month = 'January';
    this.data = [
      { name: 'one', age: 20 },
      { name: 'two', age: 20 },
      { name: 'three', age: 20 },
      { name: 'four', age: 20 }
    ];

    this.onMeetingCreated = function(meeting) {
      alert('meeting created: ' + meeting);
    };
  }])

  .component('app', {
    templateUrl: '/app.html',
    controller: 'AppComponentController as appCtrl'
  })

  .controller('CalendarComponentController', ['$scope', '$attrs', function($scope, $attrs) {
    this.createMeeting = function(meetingName) {
      this.onCreateMeeting({ meeting: meetingName });
    };
  }])

  .component('calendar', {
    templateUrl: '/calendar/component.html',
    controller: 'CalendarComponentController as calCtrl',
    bindings: {
      month: '=',
      data: '=',
      onCreateMeeting: '&'
    }
  })

  .controller('MeetingsComponentController', [function() {
  }])

  .component('meetings', {
    templateUrl: '/meetings/component.html',
    controller: 'MeetingsComponentController as meetingsCtrl',
    bindings: {
      data: '='
    }
  })
