import React from "react"

const LeftImageSection = ({
  heading,
  subheading,
  text,
  image,
  float,
  leftPartSize,
  rightPartSize,
}) => {
  return (
    <div className="container my-5 h-100 py-5">
      <div className="row my-5 mt-5">
        <div className="col">
          <h2>{heading}</h2>
          <div className="section-divider" />
          <p className="basicSection--sub">{subheading}</p>
        </div>
      </div>
      {float && (
        <>
          <div className="d-none d-md-block row mt-5">
            <div className="col">
              <img
                src={image}
                alt=""
                className="w-50 img-fluid float-left pr-3 pb-2 pt-2 mr-3"
              />
              <p className="basicSection--text">{text}</p>
            </div>
          </div>
          {/* Stops the floating - resolved positioning issues*/}
          <div
            style={{
              clear: "both",
            }}
          />
        </>
      )}
      <div className={float ? "row mt-5 d-md-none" : "row mt-5"}>
        <div className={`col-md-${leftPartSize || 5} text-center mb-3`}>
          <img src={image} alt="" className="w-100" />
        </div>
        <div className={`col-md-${rightPartSize || 7}`}>
          <p className="basicSection--text">{text}</p>
        </div>
      </div>
    </div>
  )
}

export default LeftImageSection
