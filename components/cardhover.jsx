'use client'

import { useEffect } from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const CardSpotlightDemo = () => {
  useEffect(() => {
    const all = document.querySelectorAll('.spotlight-card')

    const handleMouseMove = (ev) => {
      all.forEach((el) => {
        const blob = el.querySelector('.blob')
        const fblob = el.querySelector('.fake-blob')

        if (!blob || !fblob) return

        const rec = fblob.getBoundingClientRect()
        blob.style.opacity = '1'

        blob.animate(
          [
            {
              transform: `translate(${ev.clientX - rec.left - rec.width / 2}px, ${
                ev.clientY - rec.top - rec.height / 2
              }px)`
            }
          ],
          {
            duration: 300,
            fill: 'forwards'
          }
        )
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="h-max w-max">
      <div className="spotlight-card group bg-border relative overflow-hidden rounded-xl p-px transition-all duration-300 ease-in-out shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20">
        <Card className="group-hover:bg-accent max-w-80 border-none transition-all duration-300 ease-in-out group-hover:backdrop-blur-[20px] min-w-[300px] min-h-[250px] flex  justify-center ">
          <CardHeader>
            <CardTitle><img src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2074" alt="" /></CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-sm text-muted-foreground">
              This card has a spotlight effect that follows your cursor. Move
              your mouse around to see the effect in action!
            </p>
          </CardContent>
        </Card>
        <div className="blob absolute top-0 left-0 h-20 w-20 rounded-full bg-[var(--primary)] opacity-0 blur-2xl transition-all duration-300 ease-in-out dark:bg-[var(--primary)]" />
        <div className="fake-blob absolute top-0 left-0 h-20 w-20 rounded-full" />
      </div>
    </div>
  )
}

export default CardSpotlightDemo
