import React from 'react'

function Right() {
    return (
        <>
            {/* Right Column */}
            <div className="w3-twothird">
                <div className="w3-container w3-card w3-white w3-margin-bottom">
                    <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Work Experience</h2>
                    <div className="w3-container">
                        <h5 className="w3-opacity"><b>Front End Developer / w3schools.com</b></h5>
                        <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />Jan 2015 - <span className="w3-tag w3-teal w3-round">Current</span></h6>
                        <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
                        <hr />
                    </div>
                    <div className="w3-container">
                        <h5 className="w3-opacity"><b>Web Developer / something.com</b></h5>
                        <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />Mar 2012 - Dec 2014</h6>
                        <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
                        <hr />
                    </div>
                    <div className="w3-container">
                        <h5 className="w3-opacity"><b>Graphic Designer / designsomething.com</b></h5>
                        <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />Jun 2010 - Mar 2012</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><br />
                    </div>
                </div>
                <div className="w3-container w3-card w3-white">
                    <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Education</h2>
                    <div className="w3-container">
                        <h5 className="w3-opacity"><b>W3Schools.com</b></h5>
                        <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />Forever</h6>
                        <p>Web Development! All I need to know in one place</p>
                        <hr />
                    </div>
                    <div className="w3-container">
                        <h5 className="w3-opacity"><b>London Business School</b></h5>
                        <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />2013 - 2015</h6>
                        <p>Master Degree</p>
                        <hr />
                    </div>
                    <div className="w3-container">
                        <h5 className="w3-opacity"><b>School of Coding</b></h5>
                        <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />2010 - 2013</h6>
                        <p>Bachelor Degree</p><br />
                    </div>
                </div>
                {/* End Right Column */}
            </div>
        </>
    )
}

export default Right
