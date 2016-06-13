
import { Project } from './project';

 /* all the projects worked on */
export var MOCKPROJECTS = [
 		new Project( "Featured Work Application",
          	["Angular 2","Javascript","Bootstrap 4","Sass","HTML5","CSS3"],
          	 0,
          	 "fwe.jpg",
          	 "App Designed to showcase my portfolio and allow the user to interact with my projects and create and rank project suggestions.",
          	 ["Allows users to filter all projects by technology", "Allows users to make new project suggestions and rank them", "Uses routing to handle single page navigation"],
                "June 2016",
                "http://renniesb.github.io/my_angular2_portfolio"
          ),
          new Project( "Web Design Business Website",

          	["Wordpress", "Bootstrap","PHP","HTML5","CSS3"],

          	 0,
          	 "mouse_logo.jpg",
          	 "A website to market my web-design services to potential clients. It has multiple pages which give an overview of the business, blog posts that relate to client concerns and a request a quote option in order to recieve price quotes personalized for each project a client proposes",

          	 ["Site is dynamic with five pages whose content is customizable from the Wordpress CMS","Allows the user to send me an email through the request a quote form on every page.","Uses custom post types to handle new posts of the same type."],
                "April 2016",
                "http://renniewebcreations.com/"
          ),
          new Project( "Language Academy Website",
               ["Bootstrap","HTML5","CSS3"],
                0,
                "ala.png"
                ,"This Website is an example homepage for a Language Learning institution. It shows an overview of the company and information about different features of their program. It nicely highlights the strengths of the company and the benefits to their clients.",
                ["Makes use of a header image to draw the client in", "Customized bootstraps navigation to conform to the layout desired for the page"],
                "March 2016",
                "http://renniesb.github.io/langsite1/"
          ),
          new Project( "Language Blog",
               ["Bootstrap","HTML5","CSS3"],
                0,
                "language-blog-2.png",
                "This is a blog for sharing insight on language learning. The purpose is to identify with the target audience. The blog also helps to establish the author as a expert in their topic.",
                ["Uses engaging header image and navigation","Displays post related information","Uses engaging content about language learning"],
                "March 2016",
                "http://renniesb.github.io/language_blog/#"
          ),

          new Project( "Vocab Immersion Trainer App",
          	["AngularJS","Javascript","Bootstrap","HTML5","CSS3"],
          	 0,
          	 "trainer-medium.jpg",
          	 "An application to find Spanish words and their definitions along with example sentences. These items can later be added to your vocab list to have a list of words with definitions and example sentences. Used Angular 1 to aide with data binding and routing procedures. Also used custom directives and controllers",

          	 ["Developed an interface that gives users full control over the words, definitions and examples they track.","Constructed 3 routes to keep the application on a single page, improve load times and decrease user scrolling."],
                "January 2016",
                "http://renniesb.github.io/vocab_list/index.html#/"
          ),
          new Project( "Spendology Client Website",
          	["Bootstrap","HTML5","CSS3"],
          	 0,
                "mbaseball-logo.png",
          	 "A website designed to highlight the features of a personal training regimen",
          	 ["Structurally changed several components on the clients homepage to better represent the client's’ message.","Used the Bootstrap framework and semantic HTML to provide a fully responsive webpage."],
                "September 2015",
                "https://www.spendology.net/bad/mbaseball/"

          ),
          new Project( "Food Guide App",
          	["Backbone","Javascript","Bootstrap","HTML5","CSS3"],
          	 0,
                "food-guide-medium.jpg",
          	 "This app is designed to keep track of your meals. It keeps track of the calories per meal and the total calories. It also allows you to organize your meals by breakfast, lunch, dinner or snack.",["Improved usability through 4 different ways to interact with data (Searching, Tracking, Organizing and Saving)","User experience is improved  through persistent storage in order to keep data after browser is closed."],
                "August 2015",
                "http://renniesb.github.io/food_guide/index.html"
          ),
          new Project( "Restaurant Explorer App",
          	["KnockoutJS","Javascript","Bootstrap","HTML5","CSS3"],
          	 0,
                "restaurantexplorer-medium.jpg",
          	 "This is an app designed to search and filter restaurants in the Broomfield-Colorado area and provide detailed information about the restaurants. It utilizes api&apos;s to pull in the map and restaurant info and the javascript framework of knockout.js to accomplish tasks such as filtering the restaurants and creating the markers.",
          	 ["3 API's give the users access to map locations, restaurant icons, restaurant photos and contact information","Allows the user to filter restaurants by name to easily visualize restaurant location and store information." ],
                "May 2015",
                "http://renniesb.github.io/neighborhood-explorer/index.html"
          ),
          new Project( "Frogger Game Recreation",
          	["Javascript","HTML5","CSS3"],
          	 0,
                "frogger-medium.jpg",
                "This is a recreation of the classic frogger Arcade game. It utilizes object oriented javascript programming.",
                ["Used Object Oriented programming to create new enemy bugs on the screen","Used control flow logic to keep the player on the screen and for responding correctly to interactions with enemy bugs."],
               "January 2015",
               "http://renniesb.github.io/frontend-nanodegree-arcade-game/"

          )


        ];
