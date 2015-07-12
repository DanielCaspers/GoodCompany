# GoodCompany
## Table of Contents
- Summary
- Project Goals
- Implementation Details

## Summary 
GoodCompany is an in-progress prototype for research on how to assist an elderly (read: senior) community overcome social isolation. The premise of the project is to provide residents of independent and assisted living (IL/AL) facilities an easier and more compelling interaction technique that will hopefully lower the "effort bar" for socialization amongst these populations. GoodCompany seeks to accomplish this by providing an activity centric digital directory of residents that focuses on a user's desire to meet someone or do something instead of simply being a static, boring, out-of-date reference document. 

## Project Goals
When an elderly individual (or couple) is first confronted with the need to move into an IL/AL facility, there is often a lot of emotional and physical fallout. Many of them haven't moved in many years, haven't had to make a new friend in years, and have had a comfortable system in which they were able to go through life. At the point when life's circumstances is drawing them to such facilities, the last thing that they should have to endure is social isolation. This can often happen because newer residents can be reserved or defensive as they struggle to embrace this new chapter in life. 

GoodCompany is able to provide a useful service to those who just move into a community all the way up until the end of someone's stay in the community. This is possible because it allows for seniors to find other seniors who are either new or have a common interest. However, one must keep in mind the technical literacy of this population. The following design decisions followed directly from this consideration:
- Directories are familiar to seniors, so minimal extensions should hopefully maintain their mental model
- The application is incredibly straight forward and minimalist, so little knowledge is required to use it
- No user specific information is ever manually entered; This means that the application is for content consumption only
- There is no notion of a "user" or "profile" , so the application maintains simplicity with no personal upkeep required
- There is no notion of an "outing" or an "event", so while the information that seniors need to find someone to socialize with is all there, they can resort to the more traditional methods they are used to (i.e. phone, in person)
 
Because of this strategy, the app become an important backbone of the social structure at an IL/AL facility. This is possible because the app provides features relevant to all residents. It allows newer residents to easily find out who else is new, which allows them to find people to socialize with who are undergoing similar struggles and may also have fewer established friends. What's more, these newer residents can also jump into more established friends groups based on their common interests with others, which can easily be determined from the app. From the perspective of a more established resident, they can easily stay informed and find out when a new resident has moved into the building, so they can stop by and welcome them, and perhaps suggest that they find something to do which they are both interested in. Even those who don't necessarily seek out newer residents might still find themselves inadvertantly doing so, because in searching for those who share a common interest, they may find newer residents they haven't yet met with that same interest.

## Implementation Details
The project is currently built using basic web development languages (HTML, CSS and JS), and also [AngularJS](https://angularjs.org/) and the  [Ionic Framework](http://ionicframework.com/). AngularJS is primarily repsonsible for many of the interactions and event handling within the app, as well as some incredibly helpful MVC capabilities. Ionic provides both a wonderful CSS framework that allows the web-based development to become more "appy" when deployed to a phone or tablet using [PhoneGap](http://phonegap.com/). 

