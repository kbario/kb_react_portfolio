import * as d3 from "d3"
import { useEffect, useState } from 'react'

function Resume({repos}) {

  const [ metaRepoData, bootRepoData, backRepoData] = repos
  const [langs, setLangs] = useState({})

  useEffect(() => {
    function myFunc(acc, currentRepo) {
      for (const [key] of Object.entries(currentRepo.lang)) {
        acc[key] = acc[key] ? acc[key] + currentRepo.lang[key] : currentRepo.lang[key]
      }
      return acc
    }
    const metaLangs = metaRepoData.reduce(myFunc, {})
    const bootLangs = bootRepoData.reduce(myFunc, {})
    const backLangs = backRepoData.reduce(myFunc, {})
    const langs = [metaLangs,bootLangs,backLangs].reduce((acc, langs) => {
      for (const [key] of Object.entries(langs)) {
        acc[key] = acc[key] ? acc[key] + langs[key] : langs[key]
      }
      return acc
    }, {})

    setLangs(langs)
    console.log(langs)


// set the dimensions and margins of the graph
var width = 460
var height = 460

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width)
    .attr("height", height)

const data = {
    "R": 104785,
    "JavaScript": 124246,
    "HTML": 8725,
    "CSS": 55269,
    "Handlebars": 23582
}


// Read data
function makeBubbles(data) {

  const data1 = [];

  for (const [key, value] of Object.entries(data)) {
    data1.push({lang: key, value: value})
  }

  console.log(data1)

  // Color palette for continents?
  var color = d3.scaleOrdinal()
    .domain(Object.keys(data))
    .range(d3.schemeSet1);

  // Size scale for countries
  var size = d3.scaleLinear()
    .domain([0, 1400000000])
    .range([7,55])  // circle will be between 7 and 55 px wide

  // // create a tooltip
  // var Tooltip = d3.select("#my_dataviz")
  //   .append("div")
  //   .style("opacity", 0)
  //   .attr("class", "tooltip")
  //   .style("background-color", "white")
  //   .style("border", "solid")
  //   .style("border-width", "2px")
  //   .style("border-radius", "5px")
  //   .style("padding", "5px")


  // Initialize the circle: all located at the center of the svg area
  svg.append("g")
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
      .attr("class", "node")
      .attr("r", function(d){ return d})
      .attr("cx", width / 2)
      .attr("cy", height / 2)
      .style("fill", function(d){ return color(d.region)})
      .style("fill-opacity", 0.8)
      .attr("stroke", "black")
      .style("stroke-width", 1)


}
makeBubbles(data)


  },[ metaRepoData, bootRepoData, backRepoData ])



    return (
        <section className="flex flex-col gap-5 max-w-4xl mx-auto overflow-y-scroll items-center">
            <h1 className="text-3xl w-full">Proficiencies</h1>

            <div id="my_dataviz"></div>
            
            <button className='blue-btn flex justify-center gap-3'>
              Resume 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </button>
        </section>
        
    )
}

export default Resume