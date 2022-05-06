import { useEffect } from 'react'
import * as d3 from 'd3'

import { data } from '../../data/proficiencies'


function Resume() {

    
    useEffect(() => {
        
        const width = document.getElementById("graph-JavaScript").offsetWidth;
        const height = document.getElementById("graph-JavaScript").offsetHeight;
        
        const x = d3.scaleLinear([0,100], [1,width-2])

        data.forEach((lang) => {
            document.getElementById(`graph-${lang.lang}`).innerHTML=''

            const svg = d3.select(`#graph-${lang.lang}`)
              .append('svg')
              .attr('x', 0)
              .attr('y', 0)
              .attr('width', width)
              .attr('height', height)

            svg
              .append('rect')
              .attr('x', x(0))
              .attr('y', 1)
              .attr('width', x(100))
              .attr('height', height-2)
              .attr('stroke', 'black')
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
              .attr('x', x(0))
              .attr('y', 1)
              .attr('dx', '6')
              .attr('text', lang.fill)
        })
    },[])

    return (
        <section className="flex flex-col gap-5 max-w-4xl mx-auto overflow-y-scroll">
            <h1 className="text-3xl">Resume and Proficiencies</h1>
            {data.map((lang, idx) => (
                <article key={idx}>
                    <h3>{lang.lang}</h3>
                    <div id={"graph-"+lang.lang} className="w-full h-8"></div>
                </article>
            ))}
        </section>
        
    )
}

export default Resume