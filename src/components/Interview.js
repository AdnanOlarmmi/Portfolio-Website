import React from 'react'

const Interview = () => {
    const currentDate = new Date().getFullYear();
    return (
      <section id='education' className='edu flex-row'>
          <div className='edu__item'>
              <h6 className='edu__year'>
                  1999 - {currentDate}
              </h6>
              <h1 className='edu__heading'>Education Quality
              </h1>
              <div className='edu__container flex-column'>
                  <div className='edu__card flex-column'>
                      <h3 className='edu__subheading'>BEng. in Computer Engineering</h3>
                  <div className='edu__info flex-row'>
                      <span className='edu__school'>
                          University of Ilorin (2014 - 2019)
                      </span>
                      <span className='edu__loc'>
                          Ilorin
                      </span>
                  </div>
                  <p className='edu__desc'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
                  </p>
                  </div>
                  <div className='edu__card flex-column'>
                      <h3 className='edu__subheading'>BEng. in Computer Engineering</h3>
                  <div className='edu__info flex-row'>
                      <span className='edu__school'>
                          University of Ilorin (2014 - 2019)
                      </span>
                      <span className='edu__loc'>
                          Ilorin
                      </span>
                  </div>
                  <p className='edu__desc'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
                  </p>
                  </div>
                  <div className='edu__card flex-column'>
                      <h3 className='edu__subheading'>BEng. in Computer Engineering</h3>
                  <div  className='edu__info flex-row'>
                      <span className='edu__school'>
                          University of Ilorin (2014 - 2019)
                      </span>
                      <span className='edu__loc'>
                          Ilorin
                      </span>
                  </div>
                  <p className='edu__desc'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
                  </p>
                  </div>
              </div>
          </div>
          <div className='edu__item'>
          <h6 className='edu__year'>
                  2017 - {currentDate}
              </h6>
              <h1 className='edu__heading'>Job Experience</h1>
              <div className='edu__container flex-column'>
              <div className='edu__card flex-column'>
                      <h3 className='edu__subheading'>BEng. in Computer Engineering</h3>
                  <div className='edu__info flex-row'>
                      <span className='edu__school'>
                          University of Ilorin (2014 - 2019)
                      </span>
                      <span className='edu__loc'>
                          Ilorin
                      </span>
                  </div>
                  <p className='edu__desc'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
                  </p>
                  </div>
                  <div className='edu__card flex-column'>
                      <h3 className='edu__subheading'>BEng. in Computer Engineering</h3>
                  <div className='edu__info flex-row'>
                      <span className='edu__school'>
                          University of Ilorin (2014 - 2019)
                      </span>
                      <span className='edu__loc'>
                          Ilorin
                      </span>
                  </div>
                  <p className='edu__desc'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
                  </p>
                  </div>
                  <div className='edu__card flex-column'>
                      <h3 className='edu__subheading'>BEng. in Computer Engineering</h3>
                  <div className='edu__info flex-row'>
                      <span className='edu__school'>
                          University of Ilorin (2014 - 2019)
                      </span>
                      <span className='edu__loc'>
                          Ilorin
                      </span>
                  </div>
                  <p className='edu__desc'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
                  </p>
                  </div>
              </div>
  
          </div>
      </section>
    )
}

export default Interview