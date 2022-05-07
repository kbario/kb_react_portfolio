import { useEffect, useState } from 'react'
import * as d3 from 'd3'

import { data } from '../../data/proficiencies'


function Resume({screenwidthProp}) {

    const {screenwidth} =screenwidthProp
    
    useEffect(() => {

        const svgPos = 5
        const lLevel = 75
        const textWidth = 46
        
        const width = document.getElementById("graph-html").offsetWidth*.95;
        const height = document.getElementById("graph-html").offsetHeight*.95;
        
        const x = d3.scaleLinear([0,100], [1,width-2])

        data.forEach((lang) => {
            document.getElementById(`graph-${lang.selector}`).innerHTML=''

            const svg = d3.select(`#graph-${lang.selector}`)
              .append('svg')
              .attr('x', 0)
              .attr('y', 0)
              .attr('width', width)
              .attr('height', height)
              .attr("title", lang.lang)
              .attr("class", "hover:scale-105 transition-all duration-300")

            svg
              .append('rect')
              .attr('x', x(0))
              .attr('y', 1)
              .attr('width', x(100))
              .attr('height', height-2)
              .attr('stroke', 'black')
              .attr('stroke-width', '2')
              .attr('fill', 'none')

            svg
              .append('rect')
              .attr('x', x(0))
              .attr('y', 1)
              .attr('width', x(lang.level))
              .attr('height', height-2)
              .attr('stroke', 'black')
              .attr('fill', lang.fill)

            svg
              .append('text')
              .attr('x', x(lang.level) >= height ? x(lang.level) : height)
              .attr('y', height/2)
              .attr('dy', '6')
              .attr('dx', x(lang.level)-textWidth >= height ? '-2.5rem' : ".5rem")
              .text(lang.level+"%")
              .attr('fill', d3.lab(lang.fill).l > lLevel || x(lang.level)-textWidth < height ? "black" : "white")

            svg
              .append('svg')
              .attr("role", "img")
              .attr("viewBox", "0 0 24 24")
              .attr('x', svgPos)
              .attr('y', svgPos)
              .attr('width', height-svgPos*2)
              .attr('height', height-svgPos*2)
              .attr("xmlns", "http://www.w3.org/2000/svg")
              .attr('fill', d3.lab(lang.fill).l < lLevel ? "white" : "black")
              .append('path')
              .attr("d", lang.path)  

        })
    },[screenwidth])

    return (
        <section className="flex flex-col gap-5 max-w-4xl mx-auto overflow-y-scroll">
            <h1 className="text-3xl">Resume and Proficiencies</h1>
            <article className="w-full flex flex-col gap-3 items-center justify-center">
            {data.map((lang, idx) => (
                <div key={idx} id={"graph-"+lang.selector} className="flex justify-center w-full h-10"></div>
                ))}
            </article>
        </section>
        
    )
}

export default Resume