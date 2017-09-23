Alarm Clock
===========
Live at: (https://stvedt.github.io/alarm-clock/)

Continuing work on this will be done on (https://github.com/stvedt/alarm-clock)

## Running

There is nothing fancy set up but you can easily run a local server by running:

`python -m SimpleHTTPServer`

A user can set and clear an alarm. When alarming the background of the page will flash red.

## Next Steps to continue building out

- Continue searching for better alarm setting solution that is easier than a dropdown. (Text inputs considered)
- Build out the capability for setting multiple alarms which was started by storing into an array.
- Add functionality to toggle between 12/24 hour clock.
- Use localStorage to save the alarm(s) so alarms are set even after reload.
- Provide visual cue that an alarm is set.
- I would like to further expose some of my methods for functions like `setAlarm`.
- A continuation of the previous item is the creation of a configuration object to allow passing of DOM elements too. That would allow the application to be more separated from the DOM so others can use this application with DOM elements of their own.
