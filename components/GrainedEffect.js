import React, { useEffect } from 'react'

const GrainedEffect = (props) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '/scripts/grained.min.js'
    script.async = true
    script.onload = () => {
      if (typeof grained !== 'undefined' && typeof window !== 'undefined') {
        var options = {
          animate: true,
          patternWidth: 100,
          patternHeight: 100,
          grainOpacity: 0.05,
          grainDensity: 1,
          grainWidth: 2.4,
          grainHeight: 1.6,
        }
        const elem = document.getElementById('grained-effect')
        if (elem) {
          grained(elem, options)
        } else {
          console.error('grained-effect Element not found')
        }
      }
    }
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div id="grained-effect" className="overflow-hidden">
      {props.children}
    </div>
  )
}

export default GrainedEffect
