# Accessing the National Nutrient Database (SR27)

## Setup
- Look around the web app to see the kinds of data in the database, e.g.:
  - [Basic Report](http://ndb.nal.usda.gov/ndb/foods/show/9?fgcd=&manu=&lfacet=&format=&count=&max=35&offset=&sort=&qlookup=01009): Cheese, cheddar
- Sign up for an API key using the link on this  [page](http://ndb.nal.usda.gov/ndb/doc/index#)
  - Note the rate limit

## Accessing Data

### Search
NDB Search API [documentation](http://ndb.nal.usda.gov/ndb/doc/apilist/API-SEARCH.md)

Search requests let you locate the NDB number that then allows you to pull out information from the database.

```.http
http://api.nal.usda.gov/usda/ndb/search/?format=json&q=butter&sort=n&max=25&offset=0&api_key=DEMO_KEY
```
```.apib
http://api.nal.usda.gov/usda/ndb/search/?format=json&q=butter&sort=n&max=25&offset=0&api_key=DEMO_KEY
```

### Food Reports
### Lists
### Nutrient Reports


## Building the App

## Todo
- Inspect the autocomplete feature on the USDA website
