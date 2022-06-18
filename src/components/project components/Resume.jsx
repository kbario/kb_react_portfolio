import * as d3 from "d3";
import { useEffect, useState } from "react";

function Resume({ repos }) {
  const [metaRepoData, bootRepoData, backRepoData] = repos;
  const [langs, setLangs] = useState({});

  useEffect(() => {
    if (!metaRepoData && !bootRepoData && !backRepoData) return;
    function myFunc(acc, currentRepo) {
      for (const [key] of Object.entries(currentRepo.lang)) {
        acc[key] = acc[key]
          ? acc[key] + currentRepo.lang[key]
          : currentRepo.lang[key];
      }
      return acc;
    }
    const metaLangs = metaRepoData?.reduce(myFunc, {});
    const bootLangs = bootRepoData?.reduce(myFunc, {});
    const backLangs = backRepoData?.reduce(myFunc, {});
    const langs = [metaLangs, bootLangs, backLangs].reduce((acc, langs) => {
      for (const [key] of Object.entries(langs)) {
        acc[key] = acc[key] ? acc[key] + langs[key] : langs[key];
      }
      return acc;
    }, {});

    setLangs(langs);

    // set the dimensions and margins of the graph
    var width = 460;
    var height = 460;

    // Read data
    function makeBubbles(data) {
      document.getElementById("my_dataviz").innerHTML = "";

      var svg = d3
        .select("#my_dataviz")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

      const data1 = [];

      for (const [key, value] of Object.entries(data)) {
        data1.push({ lang: key, value: value });
      }

      // Color palette for continents?
      var color = d3
        .scaleOrdinal()
        .domain(Object.keys(data))
        .range(d3.schemeSet1);

      // Size scale for countries
      var size = d3
        .scaleLinear()
        .domain([0, d3.max(data1, (d) => d.value)])
        .range([20, 100]); // circle will be between 7 and 55 px wide

      function dragstarted(e, d) {
        if (e.active) simulation.alphaTarget(0.03).restart();
        d.fx = d.x;
        d.fy = d.y;
      }
      function dragged(e, d) {
        d.fx = e.x;
        d.fy = e.y;
      }
      function dragended(e, d) {
        if (e.active) simulation.alphaTarget(0.03);
        d.fx = null;
        d.fy = null;
      }

      // Initialize the circle: all located at the center of the svg area
      const node = svg
        .selectAll("g")
        .data(data1)
        .enter()
        .append("g")
        .append("circle")
        .attr("class", "node")
        .attr("r", function (d) {
          return size(d.value);
        })
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .style("fill", function (d) {
          return color(d.lang);
        })
        .style("fill-opacity", 0.8)
        .attr("stroke", "black")
        .style("stroke-width", 1)
        .call(
          d3
            .drag() // call specific function when circle is dragged
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended)
        );

      svg
        .selectAll("g")
        .data(data1)
        .enter()
        .append("text")
        .text((d) => d.lang);

      var simulation = d3
        .forceSimulation()
        .force(
          "center",
          d3
            .forceCenter()
            .x(width / 2)
            .y(height / 2)
        ) // Attraction to the center of the svg area
        .force("charge", d3.forceManyBody().strength(0.5)) // Nodes are attracted one each other of value is > 0
        .force(
          "collide",
          d3
            .forceCollide()
            .strength(0.5)
            .radius(function (d) {
              return size(d.value) + 3;
            })
            .iterations(1)
        ); // Force that avoids circle overlapping

      // Apply these forces to the nodes and update their positions.
      // Once the force algorithm is happy with positions ('alpha' value is low enough), simulations will stop.
      simulation.nodes(data1).on("tick", function (d) {
        node
          .attr("cx", function (d) {
            return d.x;
          })
          .attr("cy", function (d) {
            return d.y;
          });
      });
    }
    makeBubbles(langs);
  }, [metaRepoData, bootRepoData, backRepoData]);

  return (
    <section className="flex flex-col gap-5 max-w-4xl mx-auto overflow-y-scroll items-center">
      <h1 className="text-3xl w-full">Proficiencies</h1>

      <div id="my_dataviz"></div>

      <button className="blue-btn flex justify-center gap-3">
        Resume
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </button>
    </section>
  );
}

export default Resume;
