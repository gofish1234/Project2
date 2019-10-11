# Project2
Why do we hate - A study to better understand the effects of income on hate crimes.

Background: 
The recent election cycle and resulting political turmoil has brought hate into the forefront of the American psyche.  
Racially motivated attacks lacking condemnation from a sitting United States president has caused us to revisit a question 
that many believed was put to rest decades ago.  What's more surprising is that this is happening during a time where America 
is experiencing relatively unprecendented economic expansion.   Unemployment is low, corporate profits are robust, however the 
vast majority of hourly workers have not shared in this prosperity.  In an attempt to better understand this connection, we 
made a couple cool graphs.   Enjoy!

1st Question: Is hate on the rise?
  Using US census data to normalize hate crime data (broken down by state) we will show whether certain types of hate crime             
  have increased over the years.  
  
   Graph 1 - May need to break it down into year, region, crime type.   This could be a simple plotly line graph with 6 or 7 
   lines, click-able of course.
  
2nd Question: Is income a factor?
  Using US census bureau data on per capita income, we will show how this impacts the per capita hate crime through several 
  graphics. 

   Graph 2 - interactive geojson with per capita victim counts, candlestick to move from 1991 to 2017, mouseover map to   
   indicate crime rate at that given year.   Start at state level, with option to zoom in to see city level data.  

   Graph 3 (required) - d3 interactive based (https://bost.ocks.org/mike/nations/).  Graph would timelapse through 1991-2017 
   (each state would be a bubble), with X axis would being each states per capita hate crime rate, Y axis would be the 
   individual states per capita income, size of bubble could be the states total population.
  
   Graph 4 - direct comparison of per capita income (normalized somehow) to hate-crime rate.  X axis would be per capita 
   income (normalized to inflation), Y axis would be hate crime (normalized per capita).   
  
  
  
Resources:
 crime data = hatecrime.csv
 population data = https://www.census.gov
 income data = https://factfinder.census.gov/faces/tableservices/jsf/pages/productview.xhtml?src=CF
 
 
 

 
