# hiking_gear

Database for hiking gear. House all of your gear and weights here.  Create lists for various uses like "Day Hike"
or "AT Thru Hike".

You can see what the total weight is including:
* **PW** - Base Pack Weight - everything in your pack except consumables (food, water, and fuel). Does not include what you are wearing. The consumable weight will change over the course of the trip.
* **TPW** - Total Pack Weight - BPW + consumables.
* **TBW** - Total Base Weight - BPW + everything you're wearing. Does not include consumables.
* **SOW** - Skin Out Weight - everything except your naked body weight.
* **TW** - Total Weight - everything, including you. This is all the weight you need to move up the trail. A 170lb person with a 50lb pack would have the same TW as a 200lb person with a 20lb pack (and would need to work really hard!)
~ http://www.hikingdude.com/hiking-styles.php

You will also get an indicater of your weights base on these chriteria:
* SuperUltraLightweight - under 5lb BPW
* UltraLightweight - under 10lb BPW
* Lightweight - under 20lb BPW
* Traditional - under 30lb BPW
* Heavy - over 30lb BPW

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing 
purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
1. Install Deployd (http://deployd.com/).
2. Install MongoDB and make sure it is in your classpath (http://mongodb.com/).
3. Install node.js (http://nodejs.org/)
3. Install npm (http://npmjs.com/)

### Installing

A step by step series of examples that tell you have to get a development env running.

1. Install Prerequisites.
2. Clone project.
3. in the hiking-gear-api folder:
	* ``` npm install ```

## Built With

* [Node.js](https://nodejs.org/) - The web framework used
* [MongoDB](http://mongodb.com/) - Database
* [Deployd](http://deployd.com/) - API Framework

## Authors

* **Ron Gallant** - *Initial work* - [rongallant](https://github.com/rongallant)

See also the list of [contributors](https://github.com/rongallant/hiking_gear/contributors) who participated in this project.
