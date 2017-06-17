var header = document.getElementById('header');
var h1 = document.getElementById('title');
var nav = document.getElementById('nav');

var waypoint1 = new Waypoint({
  element: document.getElementById('sec1'),
  handler: function(direction) {
    if (direction === 'down'){
        header.style.padding = '10px 0';
        h1.style.fontSize = '2em';
        nav.style.fontSize = '0.75em';
    }else if (direction === 'up'){
        header.style.padding = '2em 0';
        h1.style.fontSize = '3em';
        nav.style.fontSize = '1em';
    }
  }
})
var waypoint2 = new Waypoint({
  element: document.getElementById('sec2'),
  handler: function(direction) {
    if (direction === 'down'){
        header.style.opacity = '0';
    }else if (direction === 'up'){
        header.style.opacity = '1';
    }
  }
})
var waypoint3 = new Waypoint({
  element: document.getElementById('sec3'),
  handler: function(direction) {
    if (direction === 'down'){
        header.style.opacity = '1';
    }else if (direction === 'up'){
        header.style.opacity = '0';
    }
  }
})

var waypoint4 = new Waypoint({
  element: document.getElementById('sec4'),
  handler: function(direction) {
    if (direction === 'down'){
        header.style.top = "5%";
        header.style.width = "80%";
    }else if (direction === 'up'){
        header.style.top = "0";
        header.style.width = "100%";
    }
  }
})

var waypoint5 = new Waypoint({
  element: document.getElementById('sec5'),
  handler: function(direction) {
    if (direction === 'down'){
        header.style.top = "0";
        header.style.width = "100%";
        header.style.height = "100%";
        header.style.padding = '2em 0';
        h1.style.fontSize = '3em';
        h1.style.alignSelf = "flex-start";
        nav.style.fontSize = '1em';
    }else if (direction === 'up'){
        header.style.top = "5%";
        header.style.width = "80%";
        header.style.height = "auto";
        header.style.padding = '10px 0';
        h1.style.fontSize = '2em';
        nav.style.fontSize = '0.75em';

    }
  }
})
