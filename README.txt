README.txt

Haris Bhatti
CSC 521

Phase 3

Link to my servlet: https://hbhat198.kutztown.edu:8443/LOCbean-1/
Link to my javadoc: https://acad.kutztown.edu/~hbhat198/LOCbeanJavadoc/ 

My project expands upon the lessons learned in Project 1 and Project 2, which pulled data from the official Library of Congress website, allowing
users to use a series of dropdown boxes on a web servlet to pull data from different years, countries and collections to give a list of the films available.

The servlet utilizes an html frontend much like in Project 2, with some significant differences.  To start, the input action goes to an index.jsp file I created.
I additionally have it going to port 8443 rather than the default port 8080 because port 8443 is a secure port and sending data across here will prevent security prompts.
The index.html is largely unchanged.  It allows users to choose the year, country and collection from dropdown boxes with a number of pre supplied prompts.  Some of these may
or may not yield results as some combinations of years, countries and collections had little to no contributions, however I felt it was important to provide these options 
regardless as the lack of information is information in of itself.

My major changes include the usage of a java bean, the jsp page, cookies and sessions to enhance the site.  My bean, titled TheBean.java, was used to set the values given for
year, country and partof.  It even has the string for getting the queryurl.  The major difference in the program during this phase is instead of the Servlet file itself printing
the html output, I am now having the index.jsp generate the output from the servlet in addition to several new sections.  I have a session at the beginning of my index.jsp that 
tells the user the exact time and date that they accessed the form.  Refreshing the page will update the time.  Underneath that, I have included my cookie section which prints
out the cookie information.  The purpose of this section is to tell the user what their most recent query choices were the last time they accessed the forum.  The cookie is set
to last a year so that users will be able to know exactly what their last search was.  Underneath that section, I'm using my javabean, called CoffeeBean, which is ehlping to print out
the results of GiveMeWeb from my original servlet file.  I've also added a link to go back to the form.  My original servlet file, called LibraryofCongressServlet.java, has the same 
functionality as before, taking in information from the official Library of Congress website, parsing the html text with giveMeTextBetween, and sending it to the bean.

Some query examples on the Official Library of Congress website would look like this: https://www.loc.gov/film-and-videos/?fa=access-restricted%3Afalse%7Clocation%3Aunited+states%7Cpartof%3Ajazz+on+the+screen+filmography&all=true&sb=title_s&dates=+1977+&st=list&c=100
Queries from my jsp servlet would look like this: https://hbhat198.kutztown.edu:8443/LOCbean-1/index.jsp?years=1977&country=united%2Bstates&partof=jazz%2Bon%2Bthe%2Bscreen%2Bfilmography

While a majority of the work in Project 2 was being done by LibraryofCognressServlet.java, in this project the work is divided between the index.html, index.jsp and the TheBean.java.
This allows for more flexibility during the project which allowed me to incorporate different elements such as cookies and session objects to enhance the user experience.