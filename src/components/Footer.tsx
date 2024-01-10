// import { useEffect } from "react";
// import { IoIosArrowUp } from "react-icons/io";
// import { useAppDispatch, useAppSelector } from "../app/hooks";
// import { setPosition } from "../features/footerSlice";

const Footer: React.FC = () => {

  // const scrollPosition = useAppSelector((state) => state.footer.position)
  // const dispatch = useAppDispatch()

  // const updatePosition = () => {
  //   dispatch(setPosition(window.scrollY))
  // }

  // useEffect(() => {
  //   updatePosition()
  // }, [])

  // window.addEventListener("scroll", updatePosition)

  return (
    <footer>
      {/* {scrollPosition > 1000 ? (
        <IoIosArrowUp id="scroll-up-btn" onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }} />
      ) : (
        null
      )} */}
    </footer>
  )
}

export default Footer
