# IMGUR IMAGES GALLERY
`IMGUR IMAGES GALLERY` This application facilitates Browsing Imgur Gallery Images. User can filter images as per section like hot, top, user and user can sort images like viral, top and time, similarly user can select window like day, week, month, year , all. The image resource api is provided by api.imgur.com


Contents
========

 * [Why?](#why)
 * [Technology used](#Technology-used)
 * [Installation](#installation)
 * [Usage](#usage)
 
 * [Git Integration](#git-integration)
 * [Configuration](#configuration)
 
 * [Future Planning](#future-planning)

### Why?

I wanted a simple web application that allows user to:

+ Browse images.
+ Browse images based on section by selecting the section drop down values like hot, top, user.
+ Browse images based on sort by selecting the sort drop down values like viral, top, time.
+ Browse images based on window by selecting the window drop down values like day, week, month, year, all.
+ Load Images Button provided, so that once combination of drop down selection was made then click on this button to load images accordingly.

### Technology used
+ React



### Installation
---

####  Install From GIT Repository

```bash
> git clone https://github.com/sampath3797/imgur-img-gallery.git
> cd imgur-img-gallery
> npm install
```
once all npm packages are installed then give npm start to run app in development mode.

### Usage
---
Access the url `https://sampath3797.github.io/imgur-img-gallery/`  in browser to open the application.
By default section selected as hot, sort selected as top, window selected as day. Hence as per the default selected values the application loads images. After that user can change the selection of section, sort and window as required and click on `Load Images` button to load images.



### Git Integration
---

This web application tool is git-integrated for easy to share among developers and maintain, This repository having a `.gitignore` file. It excludes `node_modules` etc which are not required for tracking and sync with github remote repository.


### Configuration
1. client-id registered with imgur.com is stored in http-common.ts file. Incase of any changes update this accordingly. This client-id is required for accessing API ENDPOINT with header key - value pair as `Authorization` - `Client-ID <REGISTERED_CLIENTID>`
2. API_END POINT are stored in http-common.ts file.


#### .gitignore
node_modules folders are ignored





### Future Planning
---
Performance Improvement: The Imgur API supports ETags, which allows the API to signal to developers whether or not data from previous queries have changed. For next time calling same URL Route include the header If-None-Match with value as ETag, If the data changed then api will respond with fresh data otherwise it will return response code 304(Not Modified) and no data will be returned. Hence if there is no change then load from cache or NgRx store(If state management implemented) with previous data.


