!(function() {
  var today = moment();

  function Calendar(selector, events) {
    this.el = document.querySelector(selector);
    this.events = events;
    this.current = moment().date(1);
    this.draw();
    var current = document.querySelector(".today");
    if (current) {
      var self = this;
      window.setTimeout(function() {
        self.openDay(current);
      }, 0);
    }
   
  }

  Calendar.prototype.draw = function() {
    //Create Header
    this.drawHeader();

    //Draw Month
    this.drawMonth();

   
  };

  Calendar.prototype.drawHeader = function() {
    var self = this;
    if (!this.header) {
      //Create the header elements
      this.header = createElement("div", "header-calendar");
      this.header.className = "header-calendar";

      this.title = createElement("h1");

      var right = createElement("div", "right");
        var contentright = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 9.23 9.23"><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><path d="M9.2,4.81a.5.5,0,0,0,0-.38.71.71,0,0,0-.11-.17L5,.15a.5.5,0,0,0-.71,0,.5.5,0,0,0,0,.7L7.53,4.12H.5a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h7L4.26,8.38a.51.51,0,0,0,0,.71.5.5,0,0,0,.36.14A.47.47,0,0,0,5,9.09L9.09,5A.64.64,0,0,0,9.2,4.81Z" fill="#e9483f"/></g></g></svg>';
      right.addEventListener("click", function() {
        self.nextMonth();
      });

      var left = createElement("div", "left");
        var contentleft = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 9.2 9.2"><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><path d="M8.7,4.1h-7L5,.85a.48.48,0,0,0,0-.7.48.48,0,0,0-.7,0L.15,4.25A.36.36,0,0,0,0,4.41a.5.5,0,0,0,0,.38A.36.36,0,0,0,.15,5l4.1,4.1a.47.47,0,0,0,.35.15A.5.5,0,0,0,5,8.35L1.71,5.1h7a.5.5,0,0,0,0-1Z" fill="#e9483f"/></g></g></svg>'
      left.addEventListener("click", function() {
        self.prevMonth();
      });

      //Append the Elements
      this.header.appendChild(this.title);
      this.header.appendChild(right);
      this.header.appendChild(left);
      this.el.appendChild(this.header);
        $('.right').append(contentright);
        $('.left').append(contentleft);
    }

    this.title.innerHTML = this.current.format("MMMM YYYY");
  };

  Calendar.prototype.drawMonth = function() {
    var self = this;

    this.events.forEach(function(ev) {
      ev.date = moment(ev.eventTime, "DD-MM-YYYY");
    });

    if (this.month) {
      this.oldMonth = this.month;
      this.oldMonth.className = "month out " + (self.next ? "next" : "prev");
      this.oldMonth.addEventListener("webkitAnimationEnd", function() {
        self.oldMonth.parentNode.removeChild(self.oldMonth);
        self.month = createElement("div", "month");
        self.backFill();
        self.currentMonth();
        self.fowardFill();
        self.el.appendChild(self.month);
        window.setTimeout(function() {
          self.month.className = "month in " + (self.next ? "next" : "prev");
        }, 0);
      });
    } else {
      this.month = createElement("div", "month");
      this.el.appendChild(this.month);
      this.backFill();
      this.currentMonth();
      this.fowardFill();
      this.month.className = "month new";
    }
  };

  Calendar.prototype.backFill = function() {
    var clone = this.current.clone();
    var dayOfWeek = clone.day();

    if (!dayOfWeek) {
      return;
    }

    clone.subtract("days", dayOfWeek + 1);

    for (var i = dayOfWeek; i > 0; i--) {
      this.drawDay(clone.add("days", 1));
    }
  };

  Calendar.prototype.fowardFill = function() {
    var clone = this.current
      .clone()
      .add("months", 1)
      .subtract("days", 1);
    var dayOfWeek = clone.day();

    if (dayOfWeek === 6) {
      return;
    }

    for (var i = dayOfWeek; i < 6; i++) {
      this.drawDay(clone.add("days", 1));
    }
  };

  Calendar.prototype.currentMonth = function() {
    var clone = this.current.clone();

    while (clone.month() === this.current.month()) {
      this.drawDay(clone);
      clone.add("days", 1);
    }
  };

  Calendar.prototype.getWeek = function(day) {
    if (!this.week || day.day() === 0) {
      this.week = createElement("div", "week");
      this.month.appendChild(this.week);
    }
  };

  Calendar.prototype.drawDay = function(day) {
    var self = this;
    this.getWeek(day);

    //Outer Day
    var outer = createElement("div", this.getDayClass(day));
    outer.addEventListener("click", function() {
$('.details').remove();
      self.openDay(this);
        if (document.querySelector('.numactive') !== null) {
     document.querySelector('.numactive').classList.remove("numactive");
            outer.classList.add("numactive");
} else {
      outer.classList.add("numactive");
}
    });

    //Day Name
    var name = createElement("div", "day-name", day.format("ddd"));

    //Day Number
    var number = createElement("div", "day-number", day.format("DD"));

    //Events
    var events = createElement("div", "day-events");
    this.drawEvents(day, events);

    outer.appendChild(name);
    outer.appendChild(number);
    outer.appendChild(events);
    this.week.appendChild(outer);
  };

  Calendar.prototype.drawEvents = function(day, element) {
    if (day.month() === this.current.month()) {
      var todaysEvents = this.events.reduce(function(memo, ev) {
        if (ev.date.isSame(day, "day")) {
          memo.push(ev);
        }
        return memo;
      }, []);

      todaysEvents.forEach(function(ev) {
        var evSpan = createElement("span", ev.color);
        element.appendChild(evSpan);
      });
    }
  };

  Calendar.prototype.getDayClass = function(day) {
    classes = ["day"];
    if (day.month() !== this.current.month()) {
      classes.push("other");
    } else if (today.isSame(day, "day")) {
      classes.push("today");
    }
    return classes.join(" ");
  };

  Calendar.prototype.openDay = function(el) {
    var details, arrow;
    var dayNumber =
      +el.querySelectorAll(".day-number")[0].innerText ||
      +el.querySelectorAll(".day-number")[0].textContent;
    var day = this.current.clone().date(dayNumber);

    var currentOpened = document.querySelector(".details");

    //Check to see if there is an open detais box on the current row
    if (currentOpened && currentOpened.parentNode === el.parentNode) {
      details = currentOpened;
      arrow = document.querySelector(".arrow");
    } else {
      //Close the open events on differnt week row
      //currentOpened && currentOpened.parentNode.removeChild(currentOpened);
      if (currentOpened) {
        currentOpened.addEventListener("webkitAnimationEnd", function() {
          currentOpened.parentNode.removeChild(currentOpened);
        });
        currentOpened.addEventListener("oanimationend", function() {
          currentOpened.parentNode.removeChild(currentOpened);
        });
        currentOpened.addEventListener("msAnimationEnd", function() {
          currentOpened.parentNode.removeChild(currentOpened);
        });
        currentOpened.addEventListener("animationend", function() {
          currentOpened.parentNode.removeChild(currentOpened);
        });
        currentOpened.className = "details out";
      }

      //Create the Details Container
      details = createElement("div", "details in");



      //Create the event wrapper
 var resultEvent = $("#result");

      el.parentNode.appendChild(details);
        
     resultEvent.append(details);
    }

    var todaysEvents = this.events.reduce(function(memo, ev) {
      if (ev.date.isSame(day, "day")) {
        memo.push(ev);
      }
      return memo;
    }, []);

    this.renderEvents(todaysEvents, details);

  
  };

  Calendar.prototype.renderEvents = function(events, ele) {
    //Remove any events in the current details element
    var currentWrapper = ele.querySelector(".events");
    var wrapper = createElement(
      "div",
      "events in" + (currentWrapper ? " new" : "")
    );

    events.forEach(function(ev) {
      var div = createElement("div", "event");
      var square = createElement("div", "event-category " + ev.color);
    var linkSquare =createElement("a", "linksquare");
        linkSquare.href = ev.eventLink;  
     var image = createElement("div");
          var linkArrow =createElement("img", "linkarrow");  
        linkArrow.src =  ev.arrowLink;
    image.style= ev.imageEvent;
    image.className = 'image-calendar';
    var datefront = createElement("span", "dateformat");
    var dayfront = createElement("span", "dayfront", ev.eventTimeConvertDay);
    var monthfront = createElement("span", "monthfront", ev.eventTimeConvertMonth);
    var contenutxt =  createElement("div", "contentext");
    var span = createElement("h4", "", ev.eventName);
	var categoryevent = createElement("h6", "", ev.eventCate);
    var contenu = createElement("p", "exer", ev.theContent);
    var btn = createElement("span", "read-more");
        var both = createElement("div", "clearboth");
      div.appendChild(square);
      div.appendChild(linkSquare);
      linkSquare.appendChild(image);
        linkSquare.appendChild(datefront);
            datefront.appendChild(dayfront);
            datefront.appendChild(monthfront);
        linkSquare.appendChild(contenutxt);
        contenutxt.appendChild(span);
		contenutxt.appendChild(categoryevent);
      contenutxt.appendChild(contenu);
      linkSquare.appendChild(btn);
      btn.appendChild(linkArrow);
      div.appendChild(both);
      wrapper.appendChild(div);
    });

    if (!events.length) {
      var div = createElement("div", "event empty");
      var span = createElement("span", "", "Aucun événement pour ce jour");

      div.appendChild(span);
      wrapper.appendChild(div);
    }

    if (currentWrapper) {
      currentWrapper.className = "events out";
      currentWrapper.addEventListener("webkitAnimationEnd", function() {
        currentWrapper.parentNode.removeChild(currentWrapper);
        ele.appendChild(wrapper);
      });
      currentWrapper.addEventListener("oanimationend", function() {
        currentWrapper.parentNode.removeChild(currentWrapper);
        ele.appendChild(wrapper);
      });
      currentWrapper.addEventListener("msAnimationEnd", function() {
        currentWrapper.parentNode.removeChild(currentWrapper);
        ele.appendChild(wrapper);
      });
      currentWrapper.addEventListener("animationend", function() {
        currentWrapper.parentNode.removeChild(currentWrapper);
        ele.appendChild(wrapper);
      });
    } else {
      ele.appendChild(wrapper);
    }
  };

    
    



  Calendar.prototype.nextMonth = function() {
    this.current.add("months", 1);
    this.next = false;
    this.draw();
  };

  Calendar.prototype.prevMonth = function() {
    this.current.subtract("months", 1);
    this.next = false;
    this.draw();
  };

  window.Calendar = Calendar;

  function createElement(tagName, className, innerText) {
    var ele = document.createElement(tagName);
    if (className) {
      ele.className = className;
    }
    if (innerText) {
      ele.innderText = ele.textContent = innerText;
    }
    return ele;
  }
})();

