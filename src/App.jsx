import React, { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useScroll, Text, Image, Scroll, Preload, ScrollControls } from '@react-three/drei'
import Email from './Email.jsx'

export default function App() {

  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 15 }}>
      <ScrollControls damping={ 0.2 } pages={ 2.75 } distance={ 0.5 }>
          <Scroll>
            <Typography />
            <Images />
          </Scroll>
          <Scroll html>
            <div style={{ transform: 'translate3d(65vw, 180vh, 0)' }}>
              React page
              <br />
              created by Berit
              <br />
              thanks to PMNDRS
              <br />
            </div>

            <div style={{ transform: 'translate3d(15vw, 240vh, 0)', fontSize: '100px', color: '#404d73' }}>
              Contact
            </div>

            <div style={{ transform: 'translate3d(50vw, 226vh, 0)'}}>
              <Email />
            </div>
          </Scroll>
          {/** This is a helper that pre-emptively makes threejs aware of all geometries, textures etc
               By default threejs will only process objects if they are "seen" by the camera leading 
               to jank as you scroll down. With <Preload> that's solved.  */}
          <Preload />
      </ScrollControls>
    </Canvas>
  )
}

function Images() {
  const group = useRef()
  const data = useScroll()
  const { width, height } = useThree((state) => state.viewport)
  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[2].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2
    group.current.children[3].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2
    group.current.children[4].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2
    group.current.children[5].material.grayscale = 1 - data.range(1.6 / 3, 1 / 3)
    group.current.children[6].material.zoom = 1 + (1 - data.range(2 / 3, 1 / 3)) / 3
  })
  return (
    <group ref={group}>
      <Image position={[-2, 0, 0]} scale={[4, height, 1]} url="/img/011.jpg" />
      <Image position={[2, 0, 3]} scale={3} url="/img/003.png" />
      <Image position={[-2.05, -height / 1.1, 6]} scale={[ 1, 4, 1 ]} url="/img/002.png" />
      <Image position={[-0.6, -height, 6]} scale={[ 1, 2, 1 ]} url="/img/009.jpg" />
      <Image position={[0.75, -height, 10.5]} scale={ 1.5 } url="/img/001.jpg" />
      <Image position={[0, -height * 1.5, 7.5]} scale={[1.5, 3, 1]} url="/img/007.jpeg" />
      <Image position={[0, -height * 2 - height / 4, 0]} scale={[width, height / 1.5, 1]} url="/img/WechatIMG1077.jpg" />
    </group>
  )
}

function Typography() {
  const state = useThree()
  const { width, height } = state.viewport.getCurrentViewport(state.camera, [0, 0, 12])
  const shared = { font: '/Black_Ops_One/BlackOpsOne-Regular.ttf', letterSpacing: -0.1, color: 'black' }

  return (
    <>
      <Text anchorX="left" position={[ -width, -height / 11, 2 ]} {...shared}>Portfolio</Text>
      <Text children="Installations" anchorX="right" position={[ width / 1.2, -height * 1.9, 6.5 ]} {...shared} />
      <Text children="Interactive" position={[ -width / 10, -height * 3.8, 8 ]} {...shared} />
    </>
  )
}