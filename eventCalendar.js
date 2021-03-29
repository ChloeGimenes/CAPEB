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
        var contentright = '<svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.4176 12.792H13.5426V12.667V8.96747L18.6063 14.0003L13.5426 19.0332V15.3337V15.2087H13.4176H8.17652V12.792H13.4176ZM13.4176 0.791992C20.7544 0.791992 26.7077 6.71008 26.7077 14.0003C26.7077 21.2906 20.7544 27.2087 13.4176 27.2087C6.08074 27.2087 0.127441 21.2906 0.127441 14.0003C0.127441 6.71008 6.08074 0.791992 13.4176 0.791992ZM13.4176 24.792C19.4154 24.792 24.2747 19.9634 24.2747 14.0003C24.2747 8.03724 19.4154 3.20866 13.4176 3.20866C7.41977 3.20866 2.56047 8.03724 2.56047 14.0003C2.56047 19.9634 7.41977 24.792 13.4176 24.792Z" fill="#222220" stroke="#F7F7F7" stroke-width="0.25"/></svg>';
      right.addEventListener("click", function() {
        self.nextMonth();
      });

      var left = createElement("div", "left");
        var contentleft = '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.098 15.208H13.973V15.333V19.0325L8.90932 13.9997L13.973 8.96682V12.6663V12.7913H14.098H19.3391V15.208H14.098ZM14.098 27.208C6.76121 27.208 0.807915 21.2899 0.807915 13.9997C0.807915 6.70943 6.76121 0.79134 14.098 0.79134C21.4349 0.79134 27.3882 6.70943 27.3882 13.9997C27.3882 21.2899 21.4349 27.208 14.098 27.208ZM14.098 3.20801C8.10025 3.20801 3.24094 8.03658 3.24094 13.9997C3.24094 19.9628 8.10025 24.7913 14.098 24.7913C20.0959 24.7913 24.9552 19.9628 24.9552 13.9997C24.9552 8.03658 20.0959 3.20801 14.098 3.20801Z" fill="#222220" stroke="#F7F7F7" stroke-width="0.25"/></svg>'
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
    var name = createElement("div", "day-name", day.format("dd"));

    //Day Number
    var number = createElement("div", "day-number", day.format("D"));

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
        
        // element.className('.day-number').style.color = "white";

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
      var details = createElement("div", "details in");

      

       //Arrows inside results
          var headerresults = createElement("div", "header-results");
          var resultsright = createElement("div", "results-right");
            var contentright = '<svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.4176 12.792H13.5426V12.667V8.96747L18.6063 14.0003L13.5426 19.0332V15.3337V15.2087H13.4176H8.17652V12.792H13.4176ZM13.4176 0.791992C20.7544 0.791992 26.7077 6.71008 26.7077 14.0003C26.7077 21.2906 20.7544 27.2087 13.4176 27.2087C6.08074 27.2087 0.127441 21.2906 0.127441 14.0003C0.127441 6.71008 6.08074 0.791992 13.4176 0.791992ZM13.4176 24.792C19.4154 24.792 24.2747 19.9634 24.2747 14.0003C24.2747 8.03724 19.4154 3.20866 13.4176 3.20866C7.41977 3.20866 2.56047 8.03724 2.56047 14.0003C2.56047 19.9634 7.41977 24.792 13.4176 24.792Z" fill="#222220" stroke="#F7F7F7" stroke-width="0.25"/></svg>';
          // resultsright.addEventListener("click", function() {
          //   self.nextMonth();
          // });
          var resultsleft = createElement("div", "results-left");
            var contentleft = '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.098 15.208H13.973V15.333V19.0325L8.90932 13.9997L13.973 8.96682V12.6663V12.7913H14.098H19.3391V15.208H14.098ZM14.098 27.208C6.76121 27.208 0.807915 21.2899 0.807915 13.9997C0.807915 6.70943 6.76121 0.79134 14.098 0.79134C21.4349 0.79134 27.3882 6.70943 27.3882 13.9997C27.3882 21.2899 21.4349 27.208 14.098 27.208ZM14.098 3.20801C8.10025 3.20801 3.24094 8.03658 3.24094 13.9997C3.24094 19.9628 8.10025 24.7913 14.098 24.7913C20.0959 24.7913 24.9552 19.9628 24.9552 13.9997C24.9552 8.03658 20.0959 3.20801 14.098 3.20801Z" fill="#222220" stroke="#F7F7F7" stroke-width="0.25"/></svg>'
          // resultsleft.addEventListener("click", function() {
          //   self.prevMonth();
          // });
    
       //Append the Elements
          details.appendChild(headerresults);
          headerresults.appendChild(resultsright);
          headerresults.appendChild(resultsleft);
          // this.el.appendChild(this.header);
            // $('.results-right').append(contentright);
            // $('.results-left').append(contentleft);
            resultsright.appendChild(contentright);
            resultsright.appendChild(contentleft);



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
    // var linkSquare =createElement("a", "linksquare");
    //     linkSquare.href = ev.eventLink;  
     var image = createElement("div");
          var linkArrow =createElement("img", "linkarrow");  
        linkArrow.src =  ev.arrowLink;
    image.style= ev.imageEvent;
   
    var contenutxt =  createElement("div", "contentext");
    var contenutxtlinks =  createElement("div", "contentextlinks");
    var span = createElement("h3", "", ev.eventName);
    // var datefront = createElement("span", "dateformat");

    var dateAndCategory = createElement("div", "date-and-category");
    var fulldatefront = createElement("h4", "fulldatefront", ev.eventTime);
    var symbole = createElement("p","symb", "-");
	  var categoryevent = createElement("h4", "", ev.eventCate);
    var contenu = createElement("p", "exer", ev.theContent);
    var btn = createElement("span", "read-more");
    var btn2 = createElement("span", "read-more2");
    var linkSquare =createElement("a", "linksquare");
        linkSquare.href = ev.eventLink;  
    var linkSquare2 =createElement("a", "linksquare2");
        linkSquare2.href = ev.eventLink2;  
    var contenubtn = createElement("p", "name_link", "En savoir plus");
    var contenubtn2 = createElement("p", "name_link2", "S'inscrire");
        var both = createElement("div", "clearboth");
    var arrowlink = '<svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.72769 8L0 1.7775L1.63615 0L9 8L1.63615 16L0 14.2225L5.72769 8Z" fill="#E6362D"/></svg>';
     
      div.appendChild(square);
        div.appendChild(contenutxt);
        // div.appendChild(linkSquare);
      // linkSquare.appendChild(image);
        
      contenutxt.appendChild(span);
      // contenutxt.appendChild(datefront);
      contenutxt.appendChild(dateAndCategory);
      dateAndCategory.appendChild(fulldatefront);
      dateAndCategory.appendChild(symbole);
      dateAndCategory.appendChild(categoryevent);
      contenutxt.appendChild(contenu)
      contenutxt.appendChild(contenutxtlinks);
          contenutxtlinks.appendChild(linkSquare);
            linkSquare.appendChild(btn);
                // btn.appendChild(arrowlink);
                btn.appendChild(contenubtn);
          contenutxtlinks.appendChild(linkSquare2);
            linkSquare2.appendChild(btn2);
              btn2.appendChild(contenubtn2);
      // btn.appendChild(arrowlink);
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

