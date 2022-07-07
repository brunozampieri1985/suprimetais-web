/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from 'react'
import styles from './ImageSlider.module.css'

type ImageSliderImageType = {
   src: string
   alt: string
}

type ImageSliderProps = {
   images?: ImageSliderImageType[]
}

const ImageSliderv2: React.FC<ImageSliderProps> = ({ images }) => {
   const [currentSlide, setCurrentSlide] = useState(0)
   const totalImages = 4
   const prevRef = useRef<HTMLButtonElement>(null)
   const nextRef = useRef<HTMLButtonElement>(null)
   const slidesRef = useRef<HTMLUListElement>(null)

   const handleClickPrev = () => {
      const activeSlide = slidesRef.current?.children[currentSlide]
      if (currentSlide > 0 && currentSlide < totalImages - 1) {
         activeSlide?.classList.remove(styles.active)
         let newSlide = slidesRef.current?.children[currentSlide - 1]
         newSlide?.classList.add(styles.active)
         setCurrentSlide((currentSlide) => currentSlide - 1)
         return
      }
      if (currentSlide === 0) {
         activeSlide?.classList.remove(styles.active)
         let newSlide = slidesRef.current?.children[totalImages - 1]
         newSlide?.classList.add(styles.active)
         setCurrentSlide(totalImages - 1)
         return
      }
      if (currentSlide === totalImages - 1) {
         activeSlide?.classList.remove(styles.active)
         let newSlide = slidesRef.current?.children[totalImages - 2]
         newSlide?.classList.add(styles.active)
         setCurrentSlide(totalImages - 2)
         return
      }
   }

   const handleClickNext = () => {
      const activeSlide = slidesRef.current?.children[currentSlide]
      if (currentSlide > 0 && currentSlide < totalImages - 1) {
         activeSlide?.classList.remove(styles.active)
         let newSlide = slidesRef.current?.children[currentSlide + 1]
         newSlide?.classList.add(styles.active)
         setCurrentSlide((currentSlide) => currentSlide + 1)
         return
      }
      if (currentSlide === 0) {
         activeSlide?.classList.remove(styles.active)
         let newSlide = slidesRef.current?.children[1]
         newSlide?.classList.add(styles.active)
         setCurrentSlide(1)
         return
      }
      if (currentSlide === totalImages - 1) {
         activeSlide?.classList.remove(styles.active)
         let newSlide = slidesRef.current?.children[0]
         newSlide?.classList.add(styles.active)
         setCurrentSlide(0)
         return
      }
   }

   return (
      <section aria-label="Fotos">
         <div className={styles.carousel}>
            <button
               className={`${styles.carouselButton} ${styles.prev}`}
               ref={prevRef}
               onClick={handleClickPrev}>
               &lt;
            </button>
            <button
               className={`${styles.carouselButton} ${styles.next}`}
               ref={nextRef}
               onClick={handleClickNext}>
               &gt;
            </button>

            <ul ref={slidesRef}>
               <li className={`${styles.slider} ${styles.active}`}>
                  <img src="bobina.jpg" alt="Image 0" />
                  <div className={styles.slideInfo}>
                     <h3 className={styles.slideInfoTitle}>Bobinas</h3>
                     <ul>
                        <li className={styles.slideInfoText}>
                           Bobinas Finas à Frio
                        </li>
                        <li className={styles.slideInfoText}>
                           Bobinas Finas à Quente
                        </li>
                        <li className={styles.slideInfoText}>
                           Bobinas Galvanizadas
                        </li>
                     </ul>
                  </div>
               </li>
               <li className={styles.slider}>
                  <img src="chapa-fina.jpg" alt="Image 1" />
                  <div className={styles.slideInfo}>
                     <h3 className={styles.slideInfoTitle}>Chapas</h3>
                     <ul>
                        <li className={styles.slideInfoText}>
                           Chapas Finas à Frio
                        </li>
                        <li className={styles.slideInfoText}>
                           Chapas Finas à Quente
                        </li>
                        <li className={styles.slideInfoText}>
                           Chapas Galvanizadas
                        </li>
                        <li className={styles.slideInfoText}>
                           Chapas Grossas Classificadas
                        </li>
                     </ul>
                  </div>
               </li>
               <li className={styles.slider}>
                  <img src="barra-redonda.jpg" alt="Image 2" />
                  <div className={styles.slideInfo}>
                     <h3 className={styles.slideInfoTitle}>Barras</h3>
                     <ul>
                        <li className={styles.slideInfoText}>
                           Redondas e Quadradas
                        </li>
                        <li className={styles.slideInfoText}>
                           Laminadas, Forjadas, Trefiladas e Descascadas{' '}
                        </li>
                     </ul>
                  </div>
               </li>
               <li className={styles.slider}>
                  <img
                     src="oxicorte.jpg"
                     alt="Image 3"
                  />
                  <div className={styles.slideInfo}>
                     <h3 className={styles.slideInfoTitle}>Oxicortados</h3>
                     <ul>
                        <li className={styles.slideInfoText}>
                           Discos
                        </li>
                        <li className={styles.slideInfoText}>
                           Anéis
                        </li>
                        <li className={styles.slideInfoText}>
                           Peças especias conforme desenho
                        </li>
                     </ul>
                  </div>
               </li>
            </ul>
         </div>
      </section>
   )
}
export default ImageSliderv2
