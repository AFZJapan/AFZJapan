// Get elements
var elements = {
    // Calendar element
    calendar: document.getElementById("events-calendar"),
    // Input element
    events: document.getElementById("events")
}

// Create the calendar
//elements.calendar.className = "clean-theme";
var calendar = jsCalendar.new(elements.calendar);

// Create events elements
elements.title = document.createElement("div");
elements.title.className = "title";
elements.events.appendChild(elements.title);
elements.subtitle = document.createElement("div");
elements.subtitle.className = "subtitle";
elements.events.appendChild(elements.subtitle);
elements.list = document.createElement("div");
elements.list.className = "list";
elements.events.appendChild(elements.list);

var events = {};
var current = null;

var showEvents = function(date) {
    // Set title
    elements.title.textContent = date;
    // Clear old events
    elements.list.innerHTML = "";
    // Add events on list
    console.log("events:", events);
    if (events.length > 0) {
        // Number of events
        elements.subtitle.textContent = events.length + " イベント";

        var div;
        var close;
        // For each event
        for (var i = 0; i < events.length; i++) {
            div = document.createElement("div");
            div.className = "event-item";
            var d = jsCalendar.tools.parseDate(events[i].date);
            div.textContent = (i + 1) + ". " + (d.getMonth() + 1) + "/" + d.getDate() + " " + events[i].data.title;
            elements.list.appendChild(div);
        }
    } else {
        elements.subtitle.textContent = "イベントはありません";
    }
};

// Show current date events
showEvents(new Date());

// Add events
calendar.onDateClick(function(event, date) {
    // Update calendar date
    calendar.set(date);
    // Show events
    showEvents(date);
});

let pending_load = false;
let loadEvents = function(year = -1, month = -1, mdate = -1) {
    if (pending_load) {
        return Promise.resolve(null);
    }
    pending_load = true;
    return new Promise((resolve, reject) => {
        // Fetch JSON file
        fetch("/events.json")
            // Parse response as JSON
            .then(res => res.json())
            // Get JSON response
            .then(json => {
                pending_load = false;
                // Filter results
                resolve(filterEvents(json.events, year, month, mdate));
            }).catch(() => {
                pending_load = false;
                resolve(null);
            });
    });
}
let filterEvents = function(events, year = -1, month = -1, mdate = -1) {
    return events.filter(
        // For each event on the list
        (event) => {
            // Get date
            let date = jsCalendar.tools.parseDate(event.date);
            // Check if year is correct
            if (year > 0 && date.getFullYear() != year) {
                return false;
            }
            // Check if month is correct
            if (month >= 0 && date.getMonth() != month) {
                return false;
            }
            // Check if year is correct
            if (mdate >= 0 && date.getDate() != mdate) {
                return false;
            }
            return true;
        }
    );
}

// Add events
calendar.onDateClick(async(event, date) => {
    let events = await loadEvents(date.getFullYear(), date.getMonth(), date.getDate());
    self.events = events;
    if (events === null) return;

    // Here you can show these events on page
    console.log(events);
    showEvents(jsCalendar.tools.dateToString(date, "MM月D日", "ja") + "のイベント");
});

let onMonthChangeHandler = async(date) => {
    let events = await loadEvents(date.getFullYear(), date.getMonth());
    console.log(events);

    self.events = events;
    showEvents((date.getMonth() + 1) + "月のイベント");
    if (events === null) return;
    calendar.clearSelected();
    calendar.select(events.map(event => event.date));
    calendar.goto(date);
}

calendar.onMonthChange((event, date) => {
    onMonthChangeHandler(date);
});
onMonthChangeHandler(new Date());
