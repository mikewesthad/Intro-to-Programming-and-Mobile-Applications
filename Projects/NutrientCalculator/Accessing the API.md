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

```
http://api.nal.usda.gov/usda/ndb/search/?format=json&q=butter&sort=n&max=25&offset=0&api_key=DEMO_KEY
```

If we break this API request down into its parts, we end up with:
1. `http://api.nal.usda.gov/usda/ndb/`
1. `search/`
1. `?`
1. `format=json` followed by `&`
1. `q=butter`followed by `&`
1. `sort=n` followed by `&`
1. `max=25` followed by `&`
1. `offset=0` followed by `&`
1. `api_key=DEMO_KEY`

The first part is the URL of the overall NDB database.  The second connects us to an API endpoint - one that lets the database know that we would like to search it.  The third part, the question mark, is used a separator.  What comes after it is sometimes referred to as a query string, which details the specifics of the information for which we are asking (numbers 4-9 in our list).

The query string has a structure to it: `parameter=value`.  For number 4, we are specifying a `format` parameter should be set to `json`.  Each parameter setting is followed by an `&`.  This allows the server to parse out the different parameters.

**`format=json`** tells the server we would like a JSON format response.  The only alternative provided by the NDB is XML.  These are two very common options that you'll see in other APIs.

**`q=butter`** specifies that our query term is "butter".  If you don't specify this value, it defaults to an empty string.

**`sort=n`** tells the server out to sort the data it returns to us.  `n` sorts by food name and `r` sorts by search relevance.  By default, this will be set to search relevance.

**`max=25`** indicates how many pieces of information we would like to receive.  Here, a piece of information (a row from the database) is an individual search result.  By default, this is set to 50.  Note that this max is usually capped at some value.

**`offset=0`** lets the server know where in the search results we would like to start receiving data.  With our `max` of 25, An offset of zero (the default) means that we will get the first 25 search results (i.e. results 0-24).  An offset of 25 means that we will get the second set of 25 results (i.e. results 25-50).

**`api_key=DEMO_KEY`** gives the server your credentials.  This allows the server to track your usage and limit you if you start to become an excessive burden.


### Food Reports
### Lists
### Nutrient Reports


## Building the App

## Todo
- Inspect the autocomplete feature on the USDA website
- Syntax highlighting on API urls
- Define API endpoint
- Write an overview on REST
- Write JSON and XML lessons
- Explain Food group ID
- Javascript patterns
  - Constructing the URL
  - Submitting the HTTP request
    - Javascript version via XMLHttpRequest
    - Jquery version
  - Iterating through results
