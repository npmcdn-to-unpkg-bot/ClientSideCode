function slider5(){

var margin = {top: 200, right: 50, bottom: 200, left: 50},
    width = $("#leftmidbox").width(),
    height = 50 ;

var x = d3.scale.linear()
    .domain([1, 10])
    .range([0, width])
    .clamp(true);

var brush = d3.svg.brush()
    .x(x)
    .extent([10,10])
    .on("brush", brushed);

var svg = d3.select("#leftmidbox").append("svg")
    .attr("width", width+15)
    .attr("height", 50)
  .append("g")
    .attr("transform", "translate(9,-20)");

    svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height / 2 + ")")
    .call(d3.svg.axis()
    .ticks(10)
      .scale(x)
      .orient("bottom")
      .tickFormat(function(d) { return d})
      .tickSize(1)
      .tickPadding(10))
      .select(".domain")
      .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
      .attr("class", "halo");

var slider = svg.append("g")
    .attr("class", "slider")
    .call(brush);

slider.selectAll(".extent,.resize")
    .remove();

slider.select(".background")
    .attr("height", height);

var handle = slider.append("circle")
    .attr("class", "handle")
    .attr("transform", "translate(0," + height / 2 + ")")
    .attr("r", 6);

slider
    .call(brush.event)
    .transition()
    .duration(750)
    .call(brush.extent([0,0]))
    .call(brush.event);

function brushed() {
   sliderValue5 = brush.extent()[0];

  if (d3.event.sourceEvent) { // not a programmatic event
    sliderValue5 = x.invert(d3.mouse(this)[0]);
    brush.extent([sliderValue5, sliderValue5]);
    rating1=1;
   if(rating1===1){
       document.getElementById("save").disabled = false;  
    }
   
  }

  handle.attr("cx", x(sliderValue5))
 

}

}
slider5();